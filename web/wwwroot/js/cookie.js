var cookie = (function () {

    var
        data = null,
        fn = {
            readRawCooke: function () {
                if (navigator.cookieEnabled === false) {
                    return null;
                }

                var rawCookie = document.cookie;

                if (rawCookie === null || rawCookie === undefined || rawCookie === "") {
                    return null;
                }

                var name = "data=";
                var cookieArray = rawCookie.split(';');
                for (var i = 0; i < cookieArray.length; i++) {
                    var cookieElement = cookieArray[i];
                    while (cookieElement.charAt(0) == ' ') {
                        cookieElement = cookieElement.substring(1);
                    }
                    if (cookieElement.indexOf(name) == 0) {
                        return cookieElement.substring(name.length, cookieElement.length);
                    }
                }
                return null;
            },
            init: function () {
                var rawCookie = fn.readRawCooke();

                if (rawCookie === null) {
                    data = {};
                } else {
                    data = JSON.parse(rawCookie);
                }
            },
            get: function (key) {
                return data[key];
            },
            set: function (key, value) {
                data[key] = value;

                var date = new Date();
                var days = 365;
                date.setTime(+ date + (days * 86400000)); //24 * 60 * 60 * 1000

                var rawCookie = JSON.stringify(data);

                document.cookie = "data=" + rawCookie + "; expires=" + date.toGMTString() + "; path =/";;

                return undefined;
            }
        }

    fn.init();

    return {
        get: function (key) { return fn.get(key); },
        set: function (key, value) { return fn.set(key, value); }
    };
})();

