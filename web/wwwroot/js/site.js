// Write your JavaScript code.
var site = (function () {

    var
        globals = {
            loadEventSubscribers: []
        },
        fn = {
            init: function () {
                // set the on load event handler
                window.onload = fn.handleOnLoadEvent;
            },
            handleOnLoadEvent: function () {
                // TODO: hide loading spinner

                // broadcast load event
                for (var i = 0, l = globals.loadEventSubscribers.length; i < l; i++) {
                    globals.loadEventSubscribers[i]();
                }
            },
            registerOnLoadEvent: function (method) {
                globals.loadEventSubscribers.push(method);
            }
        }

    fn.init();

    return {
        // Pass in method to be called when site is loaded
        registerOnLoadEvent: function (method) { return fn.registerOnLoadEvent(method); }
    };
})();

