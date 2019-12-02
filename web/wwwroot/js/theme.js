
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
                },
                opposite: function() {
                    return themes.dark;
                }
            },
            dark: {
                display: function() {
                    $(".text-dark").removeClass("text-dark").addClass("text-light");
                    $(".bg-light").removeClass("bg-light").addClass("bg-dark");
                    $(".navbar-light").removeClass("navbar-light").addClass("navbar-dark");
                    $(".box-shadow-dark").removeClass("box-shadow-dark").addClass("box-shadow-light");
                },
                opposite: function() {
                    return themes.light;
                }
            }
        },
        globals = {
            currentTheme: themes.light
        },
        fn = {
            init: function () {
                element.click(fn.handleThemToggleEvent);
            },
            toggle: function() {
                var nextTheme = globals.currentTheme.opposite();
                nextTheme.display();
                globals.currentTheme = nextTheme;
            },
            handleThemToggleEvent: function () {
                fn.toggle();
            }
        };

    site.registerOnLoadEvent(fn.init);

    return undefined;

})($("#theme"));