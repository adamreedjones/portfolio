(function ($) {

    $.fn.photoCarousel = function (options) {

        var
            fn = {
                init: function ($element) {

                    options = $.extend({
                        urls: []
                    }, options)

                    fn.loadImages($element, options.urls)
                },
                loadImage: function ($container, url) {
                    var dfd = jQuery.Deferred();

                    // Create carousel html
                    var $innerDiv = $("<div class='carousel-inner'></div>");
                    var $itemDiv = $("<div class='carousel-item active'></div>");
                    
                    var image = new Image();
                    image.src = url;
                    image.addEventListener("load", dfd.resolve);

                    $itemDiv.html(image);
                    $innerDiv.html($itemDiv.html());

                    var containerHtml = $innerDiv.html()

                    $container.prepend(containerHtml);

                    return dfd.promise();
                },
                loadImages: function ($element, urls) {
                    var dfd = jQuery.Deferred();
                    
                    if (urls.length === 0) {

                        setTimeout(function () {
                            dfd.resolve();
                        }, 0);

                        return dfd.promise();
                    } 

                    var promises = [];

                    for (var i = urls.length - 1; i >= 0; i--) {
                        var url = urls[i];

                        promises.push(fn.loadImage($element, url))
                    }


                    //wait for all promises to resolve
                    $.when.apply($, promises).then(function () {
                        dfd.resolve();
                    });

                    return dfd.promise();
                }
            };

        fn.init(this);        
    };

}(jQuery));