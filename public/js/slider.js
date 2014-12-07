jQuery(document).ready(function ($) {
    var options = {
        $FillMode: 5,
        $AutoPlay: true,
        $Loop: 1,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$,
            $ChanceToShow: 2
        }
    };
    var jssor_slider1 = new $JssorSlider$('slider1_container', options);

    //Para hacerlo responsivo
    function ScaleSlider() {
        var bodyWidth = document.body.clientWidth;
        if (bodyWidth)
            jssor_slider1.$ScaleWidth(Math.min(bodyWidth, 1920));
        else
            window.setTimeout(ScaleSlider, 30);
    }

    ScaleSlider();

    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
        $(window).bind('resize', ScaleSlider);
    }


    if (navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
        $(window).bind("orientationchange", ScaleSlider);
    }
    //responsive code end

});