(function() {
    let $headermenu = $(
        '<link href="URL_TO_CSS_1.css" rel="stylesheet" type="text/css">' +
        '<link href="URL_TO_CSS_2.css" rel="stylesheet" type="text/css">' +
        '<header id="etn-header">CONTENT HEADER</header>'
    );

    let $footermenu = $(
        '<footer id="footer-dynamic">CONTENT FOOTER</footer>'
    );

    $("#header-dynamic").append( $headermenu );

    if($("#footer-dynamic")) $("#footer-dynamic").append( $footermenu );
    
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "A_SCRIPT_JS_JS_IF_NEEDED.js";
    document.body.appendChild(script);
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.text = "function testScript{};";
    document.body.appendChild(script);
})();