var cookie = (function () {

    var
        data = null,
        fn = {
            readRawCooke: function () {
                var name = "data=";
                var cookieArray = document.cookie.split(';');
                for (var i = 0; i < cookieArray.length; i++) {
                    var cookieElement = cookieArray[i];
                    while (cookieElement.charAt(0) == ' ') {
                        cookieElement = cookieElement.substring(1);
                    }
                    if (cookieElement.indexOf(name) == 0) {
                        return cookieElement.substring(name.length, cookieElement.length);
                    }
                }
                return "";
            },
            init: function () {
                var rawCookie = fn.readRawCooke();

                if (rawCookie === "") {
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

                var rawCookie = JSON.stringify(data);

                document.cookie = "data=" + rawCookie;

                return undefined;
            }
        }

    fn.init();

    return {
        get: function (key) { return fn.get(key); },
        set: function (key, value) { return fn.set(key, value); }
    };
})();

