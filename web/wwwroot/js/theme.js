
/*
 * Theme toggle control.
 **/
var toggleTheme = (function (element) {
    var
        themes = {
            light: {
                display: function() {
                    $(".text-light").removeClass("text-light").addClass("text-dark");
                    $(".bg-dark").removeClass("bg-dark").addClass("bg-light");
                    $(".navbar-dark").removeClass("navbar-dark").addClass("navbar-light");
                    $(".box-shadow-light").removeClass("box-shadow-light").addClass("box-shadow-dark");

                    $(".dropdown-menu").addClass("dropdown-menu-light").removeClass("dropdown-menu-dark");
                },
                opposite: function() {
                    return themes.dark;
                },
                name: "light"
            },
            dark: {
                display: function() {
                    $(".text-dark").removeClass("text-dark").addClass("text-light");
                    $(".bg-light").removeClass("bg-light").addClass("bg-dark");
                    $(".navbar-light").removeClass("navbar-light").addClass("navbar-dark");
                    $(".box-shadow-dark").removeClass("box-shadow-dark").addClass("box-shadow-light");
                    $(".dropdown-menu").removeClass("dropdown-menu-light").addClass("dropdown-menu-dark");
                },
                opposite: function() {
                    return themes.light;
                },
                name: "dark"
            }
        },
        globals = {
            currentTheme: themes.light
        },
        fn = {
            init: function () {
                var savedTheme = cookie.get("theme");

                if (savedTheme === undefined) {
                    cookie.set("theme", "light") // default
                } else if(savedTheme === "dark") {
                    globals.currentTheme = themes["dark"];
                    globals.currentTheme.display();
                }

                element.click(fn.handleThemToggleEvent);
            },
            toggle: function () {
                var nextTheme = globals.currentTheme.opposite();
                nextTheme.display();
                globals.currentTheme = nextTheme;

                cookie.set("theme", nextTheme.name);
            },
            handleThemToggleEvent: function () {
                fn.toggle();
            }
        };

    site.registerOnLoadEvent(fn.init);

    return undefined;

})($("#theme"));