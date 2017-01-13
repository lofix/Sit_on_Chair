$(document).ready(function() {

    var hideMobNav = function() {
        var mobileNav = $("#mobile_nav_expanded");
        var hamburgerMenu = $("#hamburger_menu");
        $(window).on("resize", function() {

            var windowWidth = $(this).width();
            if (windowWidth >= 542) {
                mobileNav.css("display", "none");
                hamburgerMenu.css("display", "none");
            } else {
                hamburgerMenu.css("display", "block");

            }
        })
    }

    var mobileNav = function() {
        var hamburgerMenu = $("#hamburger_menu");
        var mobileNav = $("#mobile_nav_expanded");
        var closeBtn = $(".close_button");
        hamburgerMenu.on("click", function() {
            $(this).removeClass("visible");
            mobileNav.toggle("slide");
            $(this).addClass("invisible");
        })
        closeBtn.on("click", function() {
            mobileNav.toggle("slide");
            hamburgerMenu.removeClass("invisible");
            hamburgerMenu.addClass("visible");
        })

    }
    var desktopNavigation = function() {
        var desktopNav = $(".desktop_nav");
        var sections = desktopNav.find("a");
        sections.on("click", function() {
            var destination = $(this).data("name");
            $("html,body").animate({
                scrollTop: $(destination).offset().top
            }, 1000);
        })

    }
    var mobileNavigation = function() {
        var mobileNav = $("#mobile_nav_expanded");
        var sections = mobileNav.find("a");
        var hamburgerMenu = $("#hamburger_menu");
        sections.on("click", function() {
            var destination = $(this).data("name");
            $("html,body").animate({
                scrollTop: $(destination).offset().top
            }, 1000);
            mobileNav.toggle("slide");
            hamburgerMenu.removeClass("invisible");
            hamburgerMenu.addClass("visible");
        })
    }
    var productChoice = function() {
        var dropDown = $(".drop_down_list");
        dropDown.on("click", function() {
            var choices = $(this).find(".list_panel");
            var label = $(this).find(".list_label");
            choices.toggle("slide");
            var choice = choices.find("li");
            choice.on("click", function() {
                var text = $(this).text();
                label.text(text);
            })
        })
    }
    var calculatePrice = function() {
        var chairNames = $("#name li");
        var chosenChair = $(".panel_left .title");
        var chairPrice = $(".panel_right .title");
        var chairColors = $("#color li");
        var chosenColor = $(".panel_left .color");
        var colorPrice = $(".panel_right .color");
        var chairPatterns = $("#pattern li");
        var chosenPattern = $(".panel_left .pattern");
        var patternPrice = $(".panel_right .pattern");
        var checkbox = $("#transport");
        var sum = $(".sum strong");
        var suma = 0;
        var transportValue = $(".panel_right .transport");
        var values = $(".value");
        chairNames.on("click", function() {
            var chairName = $(this).text();
            chosenChair.text(chairName);
            if (chosenChair.text() == "Clair") {
                chairPrice.text(100);
            } else if (chosenChair.text() == "Margarita") {
                chairPrice.text(200);
            } else if (chosenChair.text() == "Selena") {
                chairPrice.text(300);
            }

            suma += parseInt(chairPrice.text());
            sum.text(suma);

        })
        chairColors.on("click", function() {
            var chairColor = $(this).text();
            chosenColor.text(chairColor);
            if (chosenColor.text() == "Czerwony") {
                colorPrice.text(50);
            } else if (chosenColor.text() == "Czarny") {
                colorPrice.text(0);
            } else if (chosenColor.text() == "Pomarańczowy") {
                colorPrice.text(100);
            }

            suma += parseInt(colorPrice.text());
            sum.text(suma);

        })
        chairPatterns.on("click", function() {
            var chairPattern = $(this).text();
            chosenPattern.text(chairPattern);
            if (chosenPattern.text() == "Tkanina") {
                patternPrice.text(100);
            } else if (chosenPattern.text() == "Skóra") {
                patternPrice.text(150);
            }

            suma += parseInt(patternPrice.text());
            sum.text(suma);

        })
        checkbox.on("click", function() {
            var transportName = $(".panel_left .transport");
            if ($(this).is(':checked')) {
                transportName.toggle();
                transportValue.text(150);
            } else {
                transportName.toggle();
                transportValue.text("");
            }

            suma += parseInt(transportValue.text());
            sum.text(suma);

        })


    }
    productChoice();
    calculatePrice();
    mobileNavigation();
    desktopNavigation();
    hideMobNav();
    mobileNav();

})
