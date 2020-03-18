(function () {

    var $sel = {
        carousel: $("#carouselControls")
    },
    fn = {
        init: function () {
            $sel.carousel.photoCarousel({
                blobUrl: "https://arjblobstorage.blob.core.windows.net/photography/",
                urls: ["https://arjblobstorage.blob.core.windows.net/photography/windowtree/windowtree/small.jpg"
                     , "https://arjblobstorage.blob.core.windows.net/photography/paintedhills/paintedhills-small.jpg"
                ]
            });
        }
    };

    site.registerOnLoadEvent(fn.init);

})();