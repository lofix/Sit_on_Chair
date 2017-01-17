$(document).ready(function() {

    var hideMobNav = function() {
        var mobileNav = $("#mobile_nav_expanded");
        var hamburgerMenu = $("#hamburger_menu");
        var breakpoint = 542;
        $(window).on("resize", function() {

            var windowWidth = $(this).width();
            if (windowWidth >= breakpoint) {
                mobileNav.hide();
                // css("display", "none");
                hamburgerMenu.hide()
                    // css("display", "none");
            } else {
                hamburgerMenu.show();
                // css("display", "block");

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
                // chairPrice.text(0);
                chairPrice.text(100);
            } else if (chosenChair.text() == "Margarita") {
                // chairPrice.text(0);
                chairPrice.text(200);
            } else if (chosenChair.text() == "Selena") {
                // chairPrice.text(0);
                chairPrice.text(300);
            }

            suma = parseInt(chairPrice.text()) + parseInt(colorPrice.text()) + parseInt(patternPrice.text()) + parseInt(transportValue.text());
            sum.text(suma);
            // console.log(chairPrice.text());

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

            // suma += parseInt(colorPrice.text());
            suma = parseInt(chairPrice.text()) + parseInt(colorPrice.text()) + parseInt(patternPrice.text()) + parseInt(transportValue.text());
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
            suma = parseInt(chairPrice.text()) + parseInt(colorPrice.text()) + parseInt(patternPrice.text()) + parseInt(transportValue.text());
            sum.text(suma);

        })
        checkbox.on("click", function() {
            var transportName = $(".panel_left .transport");
            if ($(this).is(':checked')) {
                transportName.toggle();
                transportValue.text(150);
            } else {
                transportName.toggle();
                transportValue.text(0);
            }
            // suma += parseInt(transportValue.text());
            suma = parseInt(chairPrice.text()) + parseInt(colorPrice.text()) + parseInt(patternPrice.text()) + parseInt(transportValue.text());
            sum.text(suma);

        })


    }
    var validate = function() {
        var contactForm = $("#contactform");
        var usernameInput = $("#username");
        var emailInput = $("#email");
        var messageInput = $("#message");
        var checkbox = $("#agree");
        var nameError = $("#username_error");
        var emailError = $("#email_error");
        var messageError = $("#message_error");
        var checkboxError = $("#checkbox_error");
        var success = $("#success_box");

        contactForm.on("submit", function() {
            var problems = false;
            event.preventDefault();
            nameError.hide();
            emailError.hide();
            messageError.hide();
            checkboxError.hide();
            success.hide();
            var userName = usernameInput.val();
            var userEmail = emailInput.val();
            var userMessage = messageInput.val();
            //Check username
            if (userName.length <= 5) {
                nameError.show();
                nameError.text("Podane imię jest za krótkie");
                problems = true;
            }
            //Check user email
            if (userEmail.indexOf("@") <= -1 || userEmail.indexOf(".") <= -1) {
                emailError.show();
                emailError.text("Podany email jest niepoprawny");
                problems = true;
            }
            //Check message
            if (userMessage.length <= 10) {
                messageError.show();
                messageError.text("Za krótka wiadomość. Napisz coś więcej");
                problems = true;
            }

            //Check checkbox
            if (!checkbox.is(":checked")) {
                checkboxError.show();
                checkboxError.text("Musisz wyrazić zgodę");
                problems = true;
            }

            if (problems == false) {
                success.show();
                success.text("Formularz został wysłany");
                contactForm.submit();
            }
        })
    }
    productChoice();
    calculatePrice();
    mobileNavigation();
    desktopNavigation();
    hideMobNav();
    mobileNav();
    validate();
})
