/*!
 * jQuery Cycle2 - Version: 20130502
 * http://malsup.com/jquery/cycle2/
 * Copyright (c) 2012 M. Alsup; Dual licensed: MIT/GPL
 * Requires: jQuery v1.7 or later
 */
(function (d) {
    var a = "20130409";
    d.fn.cycle = function (e) {
        var f;
        if (this.length === 0 && !d.isReady) {
            f = {s: this.selector, c: this.context};
            d.fn.cycle.log("requeuing slideshow (dom not ready)");
            d(function () {
                d(f.s, f.c).cycle(e)
            });
            return this
        }
        return this.each(function () {
            var k, j, g, m;
            var h = d(this);
            var i = d.fn.cycle.log;
            if (h.data("cycle.opts")) {
                return
            }
            if (h.data("cycle-log") === false || (e && e.log === false) || (j && j.log === false)) {
                i = d.noop
            }
            i("--c2 init--");
            k = h.data();
            for (var l in k) {
                if (k.hasOwnProperty(l) && /^cycle[A-Z]+/.test(l)) {
                    m = k[l];
                    g = l.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b);
                    i(g + ":", m, "(" + typeof m + ")");
                    k[g] = m
                }
            }
            j = d.extend({}, d.fn.cycle.defaults, k, e || {});
            j.timeoutId = 0;
            j.paused = j.paused || false;
            j.container = h;
            j._maxZ = j.maxZ;
            j.API = d.extend({_container: h}, d.fn.cycle.API);
            j.API.log = i;
            j.API.trigger = function (n, o) {
                j.container.trigger(n, o);
                return j.API
            };
            h.data("cycle.opts", j);
            h.data("cycle.API", j.API);
            j.API.trigger("cycle-bootstrap", [j, j.API]);
            j.API.addInitialSlides();
            j.API.preInitSlideshow();
            if (j.slides.length) {
                j.API.initSlideshow()
            }
        })
    };
    d.fn.cycle.API = {
        opts: function () {
            return this._container.data("cycle.opts")
        }, addInitialSlides: function () {
            var f = this.opts();
            var e = f.slides;
            f.slideCount = 0;
            f.slides = d();
            e = e.jquery ? e : f.container.find(e);
            if (f.random) {
                e.sort(function () {
                    return Math.random() - 0.5
                })
            }
            f.API.add(e)
        }, preInitSlideshow: function () {
            var f = this.opts();
            f.API.trigger("cycle-pre-initialize", [f]);
            var e = d.fn.cycle.transitions[f.fx];
            if (e && d.isFunction(e.preInit)) {
                e.preInit(f)
            }
            f._preInitialized = true
        }, postInitSlideshow: function () {
            var f = this.opts();
            f.API.trigger("cycle-post-initialize", [f]);
            var e = d.fn.cycle.transitions[f.fx];
            if (e && d.isFunction(e.postInit)) {
                e.postInit(f)
            }
        }, initSlideshow: function () {
            var g = this.opts();
            var e = g.container;
            var f;
            g.API.calcFirstSlide();
            if (g.container.css("position") == "static") {
                g.container.css("position", "relative")
            }
            d(g.slides[g.currSlide]).css("opacity", 1).show();
            g.API.stackSlides(g.slides[g.currSlide], g.slides[g.nextSlide], !g.reverse);
            if (g.pauseOnHover) {
                if (g.pauseOnHover !== true) {
                    e = d(g.pauseOnHover)
                }
                e.hover(function () {
                    g.API.pause(true)
                }, function () {
                    g.API.resume(true)
                })
            }
            if (g.timeout) {
                f = g.API.getSlideOpts(g.nextSlide);
                g.API.queueTransition(f, g.timeout + g.delay)
            }
            g._initialized = true;
            g.API.updateView(true);
            g.API.trigger("cycle-initialized", [g]);
            g.API.postInitSlideshow()
        }, pause: function (e) {
            var g = this.opts(), f = g.API.getSlideOpts(), h = g.hoverPaused || g.paused;
            if (e) {
                g.hoverPaused = true
            } else {
                g.paused = true
            }
            if (!h) {
                g.container.addClass("cycle-paused");
                g.API.trigger("cycle-paused", [g]).log("cycle-paused");
                if (f.timeout) {
                    clearTimeout(g.timeoutId);
                    g.timeoutId = 0;
                    g._remainingTimeout -= (d.now() - g._lastQueue);
                    if (g._remainingTimeout < 0 || isNaN(g._remainingTimeout)) {
                        g._remainingTimeout = undefined
                    }
                }
            }
        }, resume: function (g) {
            var h = this.opts(), f = !h.hoverPaused && !h.paused, e;
            if (g) {
                h.hoverPaused = false
            } else {
                h.paused = false
            }
            if (!f) {
                h.container.removeClass("cycle-paused");
                h.API.queueTransition(h.API.getSlideOpts(), h._remainingTimeout);
                h.API.trigger("cycle-resumed", [h, h._remainingTimeout]).log("cycle-resumed")
            }
        }, add: function (h, f) {
            var i = this.opts();
            var g = i.slideCount;
            var j = false;
            var e;
            if (d.type(h) == "string") {
                h = d.trim(h)
            }
            d(h).each(function (l) {
                var m;
                var k = d(this);
                if (f) {
                    i.container.prepend(k)
                } else {
                    i.container.append(k)
                }
                i.slideCount++;
                m = i.API.buildSlideOpts(k);
                if (f) {
                    i.slides = d(k).add(i.slides)
                } else {
                    i.slides = i.slides.add(k)
                }
                i.API.initSlide(m, k, --i._maxZ);
                k.data("cycle.opts", m);
                i.API.trigger("cycle-slide-added", [i, m, k])
            });
            i.API.updateView(true);
            j = i._preInitialized && (g < 2 && i.slideCount >= 1);
            if (j) {
                if (!i._initialized) {
                    i.API.initSlideshow()
                } else {
                    if (i.timeout) {
                        e = i.slides.length;
                        i.nextSlide = i.reverse ? e - 1 : 1;
                        if (!i.timeoutId) {
                            i.API.queueTransition(i)
                        }
                    }
                }
            }
        }, calcFirstSlide: function () {
            var f = this.opts();
            var e;
            e = parseInt(f.startingSlide || 0, 10);
            if (e >= f.slides.length || e < 0) {
                e = 0
            }
            f.currSlide = e;
            if (f.reverse) {
                f.nextSlide = e - 1;
                if (f.nextSlide < 0) {
                    f.nextSlide = f.slides.length - 1
                }
            } else {
                f.nextSlide = e + 1;
                if (f.nextSlide == f.slides.length) {
                    f.nextSlide = 0
                }
            }
        }, calcNextSlide: function () {
            var f = this.opts();
            var e;
            if (f.reverse) {
                e = (f.nextSlide - 1) < 0;
                f.nextSlide = e ? f.slideCount - 1 : f.nextSlide - 1;
                f.currSlide = e ? 0 : f.nextSlide + 1
            } else {
                e = (f.nextSlide + 1) == f.slides.length;
                f.nextSlide = e ? 0 : f.nextSlide + 1;
                f.currSlide = e ? f.slides.length - 1 : f.nextSlide - 1
            }
        }, calcTx: function (h, f) {
            var g = h;
            var e;
            if (f && g.manualFx) {
                e = d.fn.cycle.transitions[g.manualFx]
            }
            if (!e) {
                e = d.fn.cycle.transitions[g.fx]
            }
            if (!e) {
                e = d.fn.cycle.transitions.fade;
                g.API.log('Transition "' + g.fx + '" not found.  Using fade.')
            }
            return e
        }, prepareTx: function (g, f) {
            var j = this.opts();
            var l, k, h, i, e;
            if (j.slideCount < 2) {
                j.timeoutId = 0;
                return
            }
            if (g && (!j.busy || j.manualTrump)) {
                j.API.stopTransition();
                j.busy = false;
                clearTimeout(j.timeoutId);
                j.timeoutId = 0
            }
            if (j.busy) {
                return
            }
            if (j.timeoutId === 0 && !g) {
                return
            }
            k = j.slides[j.currSlide];
            h = j.slides[j.nextSlide];
            i = j.API.getSlideOpts(j.nextSlide);
            e = j.API.calcTx(i, g);
            j._tx = e;
            if (g && i.manualSpeed !== undefined) {
                i.speed = i.manualSpeed
            }
            if (j.nextSlide != j.currSlide && (g || (!j.paused && !j.hoverPaused && j.timeout))) {
                j.API.trigger("cycle-before", [i, k, h, f]);
                if (e.before) {
                    e.before(i, k, h, f)
                }
                l = function () {
                    j.busy = false;
                    if (!j.container.data("cycle.opts")) {
                        return
                    }
                    if (e.after) {
                        e.after(i, k, h, f)
                    }
                    j.API.trigger("cycle-after", [i, k, h, f]);
                    j.API.queueTransition(i);
                    j.API.updateView(true)
                };
                j.busy = true;
                if (e.transition) {
                    e.transition(i, k, h, f, l)
                } else {
                    j.API.doTransition(i, k, h, f, l)
                }
                j.API.calcNextSlide();
                j.API.updateView()
            } else {
                j.API.queueTransition(i)
            }
        }, doTransition: function (i, j, f, g, l) {
            var e = i;
            var m = d(j), h = d(f);
            var k = function () {
                h.animate(e.animIn || {opacity: 1}, e.speed, e.easeIn || e.easing, l)
            };
            h.css(e.cssBefore || {});
            m.animate(e.animOut || {}, e.speed, e.easeOut || e.easing, function () {
                m.css(e.cssAfter || {});
                if (!e.sync) {
                    k()
                }
            });
            if (e.sync) {
                k()
            }
        }, queueTransition: function (g, e) {
            var f = this.opts();
            var h = e !== undefined ? e : g.timeout;
            if (f.nextSlide === 0 && --f.loop === 0) {
                f.API.log("terminating; loop=0");
                f.timeout = 0;
                if (h) {
                    setTimeout(function () {
                        f.API.trigger("cycle-finished", [f])
                    }, h)
                } else {
                    f.API.trigger("cycle-finished", [f])
                }
                f.nextSlide = f.currSlide;
                return
            }
            if (h) {
                f._lastQueue = d.now();
                if (e === undefined) {
                    f._remainingTimeout = g.timeout
                }
                if (!f.paused && !f.hoverPaused) {
                    f.timeoutId = setTimeout(function () {
                        f.API.prepareTx(false, !f.reverse)
                    }, h)
                }
            }
        }, stopTransition: function () {
            var e = this.opts();
            if (e.slides.filter(":animated").length) {
                e.slides.stop(false, true);
                e.API.trigger("cycle-transition-stopped", [e])
            }
            if (e._tx && e._tx.stopTransition) {
                e._tx.stopTransition(e)
            }
        }, advanceSlide: function (f) {
            var e = this.opts();
            clearTimeout(e.timeoutId);
            e.timeoutId = 0;
            e.nextSlide = e.currSlide + f;
            if (e.nextSlide < 0) {
                e.nextSlide = e.slides.length - 1
            } else {
                if (e.nextSlide >= e.slides.length) {
                    e.nextSlide = 0
                }
            }
            e.API.prepareTx(true, f >= 0);
            return false
        }, buildSlideOpts: function (g) {
            var i = this.opts();
            var l, f;
            var h = g.data() || {};
            for (var k in h) {
                if (h.hasOwnProperty(k) && /^cycle[A-Z]+/.test(k)) {
                    l = h[k];
                    f = k.match(/^cycle(.*)/)[1].replace(/^[A-Z]/, b);
                    i.API.log("[" + (i.slideCount - 1) + "]", f + ":", l, "(" + typeof l + ")");
                    h[f] = l
                }
            }
            h = d.extend({}, d.fn.cycle.defaults, i, h);
            h.slideNum = i.slideCount;
            try {
                delete h.API;
                delete h.slideCount;
                delete h.currSlide;
                delete h.nextSlide;
                delete h.slides
            } catch (j) {
            }
            return h
        }, getSlideOpts: function (f) {
            var h = this.opts();
            if (f === undefined) {
                f = h.currSlide
            }
            var e = h.slides[f];
            var g = d(e).data("cycle.opts");
            return d.extend({}, h, g)
        }, initSlide: function (h, e, f) {
            var g = this.opts();
            e.css(h.slideCss || {});
            if (f > 0) {
                e.css("zIndex", f)
            }
            if (isNaN(h.speed)) {
                h.speed = d.fx.speeds[h.speed] || d.fx.speeds._default
            }
            if (!h.sync) {
                h.speed = h.speed / 2
            }
            e.addClass(g.slideClass)
        }, updateView: function (e) {
            var h = this.opts();
            if (!h._initialized) {
                return
            }
            var g = h.API.getSlideOpts();
            var f = h.slides[h.currSlide];
            if (!e) {
                h.API.trigger("cycle-update-view-before", [h, g, f]);
                if (h.updateView < 0) {
                    return
                }
            }
            if (h.slideActiveClass) {
                h.slides.removeClass(h.slideActiveClass).eq(h.currSlide).addClass(h.slideActiveClass)
            }
            if (e && h.hideNonActive) {
                h.slides.filter(":not(." + h.slideActiveClass + ")").hide()
            }
            h.API.trigger("cycle-update-view", [h, g, f, e]);
            h.API.trigger("cycle-update-view-after", [h, g, f])
        }, getComponent: function (f) {
            var g = this.opts();
            var e = g[f];
            if (typeof e === "string") {
                return (/^\s*[\>|\+|~]/).test(e) ? g.container.find(e) : d(e)
            }
            if (e.jquery) {
                return e
            }
            return d(e)
        }, stackSlides: function (k, h, g) {
            var j = this.opts();
            if (!k) {
                k = j.slides[j.currSlide];
                h = j.slides[j.nextSlide];
                g = !j.reverse
            }
            d(k).css("zIndex", j.maxZ);
            var f;
            var l = j.maxZ - 2;
            var e = j.slideCount;
            if (g) {
                for (f = j.currSlide + 1; f < e; f++) {
                    d(j.slides[f]).css("zIndex", l--)
                }
                for (f = 0; f < j.currSlide; f++) {
                    d(j.slides[f]).css("zIndex", l--)
                }
            } else {
                for (f = j.currSlide - 1; f >= 0; f--) {
                    d(j.slides[f]).css("zIndex", l--)
                }
                for (f = e - 1; f > j.currSlide; f--) {
                    d(j.slides[f]).css("zIndex", l--)
                }
            }
            d(h).css("zIndex", j.maxZ - 1)
        }, getSlideIndex: function (e) {
            return this.opts().slides.index(e)
        }
    };
    d.fn.cycle.log = function c() {
        if (window.console && console.log) {
            console.log("[cycle2] " + Array.prototype.join.call(arguments, " "))
        }
    };
    d.fn.cycle.version = function () {
        return "Cycle2: " + a
    };
    function b(e) {
        return (e || "").toLowerCase()
    }

    d.fn.cycle.transitions = {
        custom: {}, none: {
            before: function (g, h, f, e) {
                g.API.stackSlides(f, h, e);
                g.cssBefore = {opacity: 1, display: "block"}
            }
        }, fade: {
            before: function (h, i, g, f) {
                var e = h.API.getSlideOpts(h.nextSlide).slideCss || {};
                h.API.stackSlides(i, g, f);
                h.cssBefore = d.extend(e, {opacity: 0, display: "block"});
                h.animIn = {opacity: 1};
                h.animOut = {opacity: 0}
            }
        }, fadeout: {
            before: function (h, i, g, f) {
                var e = h.API.getSlideOpts(h.nextSlide).slideCss || {};
                h.API.stackSlides(i, g, f);
                h.cssBefore = d.extend(e, {opacity: 1, display: "block"});
                h.animOut = {opacity: 0}
            }
        }, scrollHorz: {
            before: function (h, i, g, f) {
                h.API.stackSlides(i, g, f);
                var e = h.container.css("overflow", "hidden").width();
                h.cssBefore = {left: f ? e : -e, top: 0, opacity: 1, display: "block"};
                h.cssAfter = {zIndex: h._maxZ - 2, left: 0};
                h.animIn = {left: 0};
                h.animOut = {left: f ? -e : e}
            }
        }
    };
    d.fn.cycle.defaults = {
        allowWrap: true,
        autoSelector: ".cycle-slideshow[data-cycle-auto-init!=false]",
        delay: 0,
        easing: null,
        fx: "fade",
        hideNonActive: true,
        loop: 0,
        manualFx: undefined,
        manualSpeed: undefined,
        manualTrump: true,
        maxZ: 100,
        pauseOnHover: false,
        reverse: false,
        slideActiveClass: "cycle-slide-active",
        slideClass: "cycle-slide",
        slideCss: {position: "absolute", top: 0, left: 0},
        slides: "> img",
        speed: 500,
        startingSlide: 0,
        sync: true,
        timeout: 4000,
        updateView: -1
    };
    d(document).ready(function () {
        d(d.fn.cycle.defaults.autoSelector).cycle()
    })
})(jQuery);
/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130304 */
(function (d) {
    d.extend(d.fn.cycle.defaults, {autoHeight: 0});
    d(document).on("cycle-initialized", function (l, k) {
        var g = k.autoHeight;
        var h = d.type(g);
        var f = null;
        var i;
        if (h !== "string" && h !== "number") {
            return
        }
        k.container.on("cycle-slide-added cycle-slide-removed", b);
        k.container.on("cycle-destroyed", c);
        if (g == "container") {
            k.container.on("cycle-before", e)
        } else {
            if (h === "string" && /\d+\:\d+/.test(g)) {
                i = g.match(/(\d+)\:(\d+)/);
                i = i[1] / i[2];
                k._autoHeightRatio = i
            }
        }
        if (h !== "number") {
            k._autoHeightOnResize = function () {
                clearTimeout(f);
                f = setTimeout(j, 50)
            };
            d(window).on("resize orientationchange", k._autoHeightOnResize)
        }
        setTimeout(j, 30);
        function j() {
            b(l, k)
        }
    });
    function b(i, h) {
        var k, f, j;
        var g = h.autoHeight;
        if (g == "container") {
            f = d(h.slides[h.currSlide]).outerHeight();
            h.container.height(f)
        } else {
            if (h._autoHeightRatio) {
                h.container.height(h.container.width() / h._autoHeightRatio)
            } else {
                if (g === "calc" || (d.type(g) == "number" && g >= 0)) {
                    if (g === "calc") {
                        j = a(i, h)
                    } else {
                        if (g >= h.slides.length) {
                            j = 0
                        } else {
                            j = g
                        }
                    }
                    if (j == h._sentinelIndex) {
                        return
                    }
                    h._sentinelIndex = j;
                    if (h._sentinel) {
                        h._sentinel.remove()
                    }
                    k = d(h.slides[j].cloneNode(true));
                    k.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel");
                    k.css({
                        position: "static",
                        visibility: "hidden",
                        display: "block"
                    }).prependTo(h.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active");
                    k.find("*").css("visibility", "hidden");
                    h._sentinel = k
                }
            }
        }
    }

    function a(i, h) {
        var g = 0, f = -1;
        h.slides.each(function (j) {
            var k = d(this).height();
            if (k > f) {
                f = k;
                g = j
            }
        });
        return g
    }

    function e(m, k, i, f, g) {
        var j = d(f).outerHeight();
        var l = k.sync ? k.speed / 2 : k.speed;
        k.container.animate({height: j}, l)
    }

    function c(g, f) {
        if (f._autoHeightOnResize) {
            d(window).off("resize orientationchange", f._autoHeightOnResize);
            f._autoHeightOnResize = null
        }
        f.container.off("cycle-slide-added cycle-slide-removed", b);
        f.container.off("cycle-destroyed", c);
        f.container.off("cycle-before", e);
        if (f._sentinel) {
            f._sentinel.remove();
            f._sentinel = null
        }
    }
})(jQuery);
/*! caption plugin for Cycle2;  version: 20130306 */
(function (a) {
    a.extend(a.fn.cycle.defaults, {
        caption: "> .cycle-caption",
        captionTemplate: "{{slideNum}} / {{slideCount}}",
        overlay: "> .cycle-overlay",
        overlayTemplate: "<div>{{title}}</div><div>{{desc}}</div>",
        captionModule: "caption"
    });
    a(document).on("cycle-update-view", function (g, f, d, c) {
        if (f.captionModule !== "caption") {
            return
        }
        var b;
        a.each(["caption", "overlay"], function () {
            var e = this;
            var i = d[e + "Template"];
            var h = f.API.getComponent(e);
            if (h.length && i) {
                h.html(f.API.tmpl(i, d, f, c));
                h.show()
            } else {
                h.hide()
            }
        })
    });
    a(document).on("cycle-destroyed", function (d, c) {
        var b;
        a.each(["caption", "overlay"], function () {
            var e = this, f = c[e + "Template"];
            if (c[e] && f) {
                b = c.API.getComponent("caption");
                b.empty()
            }
        })
    })
})(jQuery);
/*! command plugin for Cycle2;  version: 20130323 */
(function (b) {
    var a = b.fn.cycle;
    b.fn.cycle = function (d) {
        var g, f, e;
        var c = b.makeArray(arguments);
        if (b.type(d) == "number") {
            return this.cycle("goto", d)
        }
        if (b.type(d) == "string") {
            return this.each(function () {
                var h;
                g = d;
                e = b(this).data("cycle.opts");
                if (e === undefined) {
                    a.log('slideshow must be initialized before sending commands; "' + g + '" ignored');
                    return
                } else {
                    g = g == "goto" ? "jump" : g;
                    f = e.API[g];
                    if (b.isFunction(f)) {
                        h = b.makeArray(c);
                        h.shift();
                        return f.apply(e.API, h)
                    } else {
                        a.log("unknown command: ", g)
                    }
                }
            })
        } else {
            return a.apply(this, arguments)
        }
    };
    b.extend(b.fn.cycle, a);
    b.extend(a.API, {
        next: function () {
            var d = this.opts();
            if (d.busy && !d.manualTrump) {
                return
            }
            var c = d.reverse ? -1 : 1;
            if (d.allowWrap === false && (d.currSlide + c) >= d.slideCount) {
                return
            }
            d.API.advanceSlide(c);
            d.API.trigger("cycle-next", [d]).log("cycle-next")
        }, prev: function () {
            var d = this.opts();
            if (d.busy && !d.manualTrump) {
                return
            }
            var c = d.reverse ? 1 : -1;
            if (d.allowWrap === false && (d.currSlide + c) < 0) {
                return
            }
            d.API.advanceSlide(c);
            d.API.trigger("cycle-prev", [d]).log("cycle-prev")
        }, destroy: function () {
            var c = this.opts();
            clearTimeout(c.timeoutId);
            c.timeoutId = 0;
            c.API.stop();
            c.API.trigger("cycle-destroyed", [c]).log("cycle-destroyed");
            c.container.removeData("cycle.opts");
            if (!c.retainStylesOnDestroy) {
                c.container.removeAttr("style");
                c.slides.removeAttr("style");
                c.slides.removeClass("cycle-slide-active")
            }
        }, jump: function (d) {
            var e;
            var f = this.opts();
            if (f.busy && !f.manualTrump) {
                return
            }
            var c = parseInt(d, 10);
            if (isNaN(c) || c < 0 || c >= f.slides.length) {
                f.API.log("goto: invalid slide index: " + c);
                return
            }
            if (c == f.currSlide) {
                f.API.log("goto: skipping, already on slide", c);
                return
            }
            f.nextSlide = c;
            clearTimeout(f.timeoutId);
            f.timeoutId = 0;
            f.API.log("goto: ", c, " (zero-index)");
            e = f.currSlide < f.nextSlide;
            f.API.prepareTx(true, e)
        }, stop: function () {
            var d = this.opts();
            var c = d.container;
            clearTimeout(d.timeoutId);
            d.timeoutId = 0;
            d.API.stopTransition();
            if (d.pauseOnHover) {
                if (d.pauseOnHover !== true) {
                    c = b(d.pauseOnHover)
                }
                c.off("mouseenter mouseleave")
            }
            d.API.trigger("cycle-stopped", [d]).log("cycle-stopped")
        }, reinit: function () {
            var c = this.opts();
            c.API.destroy();
            c.container.cycle()
        }, remove: function (e) {
            var j = this.opts();
            var c, d, h = [], g = 1;
            for (var f = 0; f < j.slides.length; f++) {
                c = j.slides[f];
                if (f == e) {
                    d = c
                } else {
                    h.push(c);
                    b(c).data("cycle.opts").slideNum = g;
                    g++
                }
            }
            if (d) {
                j.slides = b(h);
                j.slideCount--;
                b(d).remove();
                if (e == j.currSlide) {
                    j.API.advanceSlide(1)
                }
                j.API.trigger("cycle-slide-removed", [j, e, d]).log("cycle-slide-removed");
                j.API.updateView()
            }
        }
    });
    b(document).on("click.cycle", "[data-cycle-cmd]", function (f) {
        f.preventDefault();
        var d = b(this);
        var g = d.data("cycle-cmd");
        var c = d.data("cycle-context") || ".cycle-slideshow";
        b(c).cycle(g, d.data("cycle-arg"))
    })
})(jQuery);
/*! hash plugin for Cycle2;  version: 20121120 */
(function (b) {
    b(document).on("cycle-pre-initialize", function (d, c) {
        a(c, true);
        c._onHashChange = function () {
            a(c, false)
        };
        b(window).on("hashchange", c._onHashChange)
    });
    b(document).on("cycle-update-view", function (f, d, c) {
        if (c.hash) {
            d._hashFence = true;
            window.location.hash = c.hash
        }
    });
    b(document).on("cycle-destroyed", function (d, c) {
        if (c._onHashChange) {
            b(window).off("hashchange", c._onHashChange)
        }
    });
    function a(d, c) {
        var e;
        if (d._hashFence) {
            d._hashFence = false;
            return
        }
        e = window.location.hash.substring(1);
        d.slides.each(function (f) {
            if (b(this).data("cycle-hash") == e) {
                if (c === true) {
                    d.startingSlide = f
                } else {
                    d.nextSlide = f;
                    d.API.prepareTx(true, false)
                }
                return false
            }
        })
    }
})(jQuery);
/*! loader plugin for Cycle2;  version: 20130307 */
(function (a) {
    a.extend(a.fn.cycle.defaults, {loader: false});
    a(document).on("cycle-bootstrap", function (d, b) {
        var f;
        if (!b.loader) {
            return
        }
        f = b.API.add;
        b.API.add = c;
        function c(l, j) {
            var h = [];
            if (a.type(l) == "string") {
                l = a.trim(l)
            } else {
                if (a.type(l) === "array") {
                    for (var k = 0; k < l.length; k++) {
                        l[k] = a(l[k])[0]
                    }
                }
            }
            l = a(l);
            var g = l.length;
            if (!g) {
                return
            }
            l.hide().appendTo("body").each(function (q) {
                var r = 0;
                var o = a(this);
                var n = o.is("img") ? o : o.find("img");
                o.data("index", q);
                n = n.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])');
                if (!n.length) {
                    --g;
                    h.push(o);
                    return
                }
                r = n.length;
                n.each(function () {
                    if (this.complete) {
                        p()
                    } else {
                        a(this).load(function () {
                            p()
                        }).error(function () {
                            if (--r === 0) {
                                b.API.log("slide skipped; img not loaded:", this.src);
                                if (--g === 0 && b.loader == "wait") {
                                    f.apply(b.API, [h, j])
                                }
                            }
                        })
                    }
                });
                function p() {
                    if (--r === 0) {
                        --g;
                        e(o)
                    }
                }
            });
            if (g) {
                b.container.addClass("cycle-loading")
            }
            function e(i) {
                var n;
                if (b.loader == "wait") {
                    h.push(i);
                    if (g === 0) {
                        h.sort(m);
                        f.apply(b.API, [h, j]);
                        b.container.removeClass("cycle-loading")
                    }
                } else {
                    n = a(b.slides[b.currSlide]);
                    f.apply(b.API, [i, j]);
                    n.show();
                    b.container.removeClass("cycle-loading")
                }
            }

            function m(n, i) {
                return n.data("index") - i.data("index")
            }
        }
    })
})(jQuery);
/*! pager plugin for Cycle2;  version: 20130203 */
(function (c) {
    c.extend(c.fn.cycle.defaults, {
        pager: "> .cycle-pager",
        pagerActiveClass: "cycle-pager-active",
        pagerEvent: "click.cycle",
        pagerTemplate: "<span>&bull;</span>"
    });
    c(document).on("cycle-bootstrap", function (g, f, d) {
        d.buildPagerLink = a
    });
    c(document).on("cycle-slide-added", function (g, f, d, h) {
        if (f.pager) {
            f.API.buildPagerLink(f, d, h);
            f.API.page = b
        }
    });
    c(document).on("cycle-slide-removed", function (i, h, f, g) {
        if (h.pager) {
            var d = h.API.getComponent("pager");
            d.each(function () {
                var e = c(this);
                c(e.children()[f]).remove()
            })
        }
    });
    c(document).on("cycle-update-view", function (h, g, f) {
        var d;
        if (g.pager) {
            d = g.API.getComponent("pager");
            d.each(function () {
                c(this).children().removeClass(g.pagerActiveClass).eq(g.currSlide).addClass(g.pagerActiveClass)
            })
        }
    });
    c(document).on("cycle-destroyed", function (g, f) {
        var d;
        if (f.pager && f.pagerTemplate) {
            d = f.API.getComponent("pager");
            d.empty()
        }
    });
    function a(g, f, d) {
        var h;
        var e = g.API.getComponent("pager");
        e.each(function () {
            var i = c(this);
            if (f.pagerTemplate) {
                var j = g.API.tmpl(f.pagerTemplate, f, g, d[0]);
                h = c(j).appendTo(i)
            } else {
                h = i.children().eq(g.slideCount - 1)
            }
            h.on(g.pagerEvent, function (k) {
                k.preventDefault();
                g.API.page(i, k.currentTarget)
            })
        })
    }

    function b(d, i) {
        var g = this.opts();
        if (g.busy && !g.manualTrump) {
            return
        }
        var e = d.children().index(i);
        var h = e;
        var f = g.currSlide < h;
        if (g.currSlide == h) {
            return
        }
        g.nextSlide = h;
        g.API.prepareTx(true, f);
        g.API.trigger("cycle-pager-activated", [g, d, i])
    }
})(jQuery);
/*! prevnext plugin for Cycle2;  version: 20130307 */
(function (a) {
    a.extend(a.fn.cycle.defaults, {
        next: "> .cycle-next",
        nextEvent: "click.cycle",
        disabledClass: "disabled",
        prev: "> .cycle-prev",
        prevEvent: "click.cycle",
        swipe: false
    });
    a(document).on("cycle-initialized", function (f, c) {
        c.API.getComponent("next").on(c.nextEvent, function (g) {
            g.preventDefault();
            c.API.next()
        });
        c.API.getComponent("prev").on(c.prevEvent, function (g) {
            g.preventDefault();
            c.API.prev()
        });
        if (c.swipe) {
            var b = c.swipeVert ? "swipeUp.cycle" : "swipeLeft.cycle swipeleft.cycle";
            var d = c.swipeVert ? "swipeDown.cycle" : "swipeRight.cycle swiperight.cycle";
            c.container.on(b, function (g) {
                c.API.next()
            });
            c.container.on(d, function () {
                c.API.prev()
            })
        }
    });
    a(document).on("cycle-update-view", function (h, b, g, j) {
        if (b.allowWrap) {
            return
        }
        var k = b.disabledClass;
        var d = b.API.getComponent("next");
        var c = b.API.getComponent("prev");
        var i = b._prevBoundry || 0;
        var f = b._nextBoundry || b.slideCount - 1;
        if (b.currSlide == f) {
            d.addClass(k).prop("disabled", true)
        } else {
            d.removeClass(k).prop("disabled", false)
        }
        if (b.currSlide === i) {
            c.addClass(k).prop("disabled", true)
        } else {
            c.removeClass(k).prop("disabled", false)
        }
    });
    a(document).on("cycle-destroyed", function (c, b) {
        b.API.getComponent("prev").off(b.nextEvent);
        b.API.getComponent("next").off(b.prevEvent);
        b.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")
    })
})(jQuery);
/*! progressive loader plugin for Cycle2;  version: 20130315 */
(function (a) {
    a.extend(a.fn.cycle.defaults, {progressive: false});
    a(document).on("cycle-pre-initialize", function (h, b) {
        if (!b.progressive) {
            return
        }
        var f = b.API;
        var k = f.next;
        var i = f.prev;
        var l = f.prepareTx;
        var j = a.type(b.progressive);
        var c, d;
        if (j == "array") {
            c = b.progressive
        } else {
            if (a.isFunction(b.progressive)) {
                c = b.progressive(b)
            } else {
                if (j == "string") {
                    d = a(b.progressive);
                    c = a.trim(d.html());
                    if (!c) {
                        return
                    }
                    if (/^(\[)/.test(c)) {
                        try {
                            c = a.parseJSON(c)
                        } catch (g) {
                            f.log("error parsing progressive slides", g);
                            return
                        }
                    } else {
                        c = c.split(new RegExp(d.data("cycle-split") || "\n"));
                        if (!c[c.length - 1]) {
                            c.pop()
                        }
                    }
                }
            }
        }
        if (l) {
            f.prepareTx = function (o, n) {
                var m, e;
                if (o || c.length === 0) {
                    l.apply(b.API, [o, n]);
                    return
                }
                if (n && b.currSlide == (b.slideCount - 1)) {
                    e = c[0];
                    c = c.slice(1);
                    b.container.one("cycle-slide-added", function (q, p) {
                        setTimeout(function () {
                            p.API.advanceSlide(1)
                        }, 50)
                    });
                    b.API.add(e)
                } else {
                    if (!n && b.currSlide === 0) {
                        m = c.length - 1;
                        e = c[m];
                        c = c.slice(0, m);
                        b.container.one("cycle-slide-added", function (q, p) {
                            setTimeout(function () {
                                p.currSlide = 1;
                                p.API.advanceSlide(-1)
                            }, 50)
                        });
                        b.API.add(e, true)
                    } else {
                        l.apply(b.API, [o, n])
                    }
                }
            }
        }
        if (k) {
            f.next = function () {
                var m = this.opts();
                if (c.length && m.currSlide == (m.slideCount - 1)) {
                    var e = c[0];
                    c = c.slice(1);
                    m.container.one("cycle-slide-added", function (o, n) {
                        k.apply(n.API);
                        n.container.removeClass("cycle-loading")
                    });
                    m.container.addClass("cycle-loading");
                    m.API.add(e)
                } else {
                    k.apply(m.API)
                }
            }
        }
        if (i) {
            f.prev = function () {
                var n = this.opts();
                if (c.length && n.currSlide === 0) {
                    var m = c.length - 1;
                    var e = c[m];
                    c = c.slice(0, m);
                    n.container.one("cycle-slide-added", function (p, o) {
                        o.currSlide = 1;
                        o.API.advanceSlide(-1);
                        o.container.removeClass("cycle-loading")
                    });
                    n.container.addClass("cycle-loading");
                    n.API.add(e, true)
                } else {
                    i.apply(n.API)
                }
            }
        }
    })
})(jQuery);
/*! tmpl plugin for Cycle2;  version: 20121227 */
(function (a) {
    a.extend(a.fn.cycle.defaults, {tmplRegex: "{{((.)?.*?)}}"});
    a.extend(a.fn.cycle.API, {
        tmpl: function (e, d) {
            var c = new RegExp(d.tmplRegex || a.fn.cycle.defaults.tmplRegex, "g");
            var b = a.makeArray(arguments);
            b.shift();
            return e.replace(c, function (g, m) {
                var h, f, l, n, k = m.split(".");
                for (h = 0; h < b.length; h++) {
                    l = b[h];
                    if (!l) {
                        continue
                    }
                    if (k.length > 1) {
                        n = l;
                        for (f = 0; f < k.length; f++) {
                            l = n;
                            n = n[k[f]] || m
                        }
                    } else {
                        n = l[m]
                    }
                    if (a.isFunction(n)) {
                        return n.apply(l, b)
                    }
                    if (n !== undefined && n !== null && n != m) {
                        return n
                    }
                }
                return m
            })
        }
    })
})(jQuery);