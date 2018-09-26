
<script id="jquery" type='text/javascript' async defer src='//ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js?ver=1.8.3'></script>
<script type='text/javascript'>
    (function checkJQuery(){
        if ('undefined' == typeof window.jQuery) {
            setTimeout(function(){checkJQuery();},250);
        }else{
            var css = "url-of-my-css";
            console.log("my css is loading");
            window.jQuery.get( css, function( data ) {
                $('<style>'+ data +'</style>').appendTo(document.getElementsByTagName('head')[0]);
                console.log("css loaded");
            });

            var js = document.createElement('script'); 
            js.type = 'text/javascript';
            js.async = 'async';
            js.defer = 'defer';
            js.src = 'url-of-my-js';
            var node = document.getElementsByTagName('script')[1];
            node.parentNode.insertBefore(js, node);
        }
    })();
</script>