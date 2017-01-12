$(document).ready(function() {

    var hideMobNav = function() {
        var mobileNav = $("#mobile_nav_expanded");
        var hamburgerMenu = $("#hamburger_menu");
        $(window).on("resize", function() {

            var windowWidth = $(this).width();
            console.log(windowWidth);
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
    mobileNavigation();
    desktopNavigation();
    hideMobNav();
    mobileNav();
})
