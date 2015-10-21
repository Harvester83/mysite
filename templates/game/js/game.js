window.onload = init;
// console.log(document.childNodes[1]);
console.log(document.body.childNodes[1].childNodes[0].nodeValue);
var map;
var ctxMap;
var drawBtn;
var clearBtn;

function init()
{
    map = document.getElementById('map');
    ctxMap = map.getContext('2d');

    drawBtn = document.getElementById('drawBtn');
    clearBtn  = document.getElementById('clearBtn');

    drawBtn.addEventListener('click', drawRect);
    clearBtn.addEventListener('click', clearRect);
}

function drawRect()
{
    ctxMap.fillStyle = '#f00';
    ctxMap.fillRect(10, 10, 50, 50);
}

function clearRect()
{
    ctxMap.clearRect(0, 0, 800, 500);
}