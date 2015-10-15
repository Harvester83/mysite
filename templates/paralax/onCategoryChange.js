function onCategoryChange(obj) {

    var value = $(obj).val();

    if ($.isArray(value)) {
        ShowOrHideEx("xfield_holder_letters", jQuery.inArray('29', value) != -1 || jQuery.inArray('32', value) != -1 || jQuery.inArray('31', value) != -1 || jQuery.inArray('33', value) != -1 || jQuery.inArray('34', value) != -1 || jQuery.inArray('35', value) != -1 || jQuery.inArray('36', value) != -1 );
    } else {
        ShowOrHideEx("xfield_holder_letters", value == 29||value==32||value==31||value==33||value==34||value==35||value==36);
    }  }



function onCategoryChange(obj) {

    var value = $(obj).val();

    if ($.isArray(value)) {
    } else {
    }  }
