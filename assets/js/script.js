$(document).ready(function () {


    // HOVER EFFECT FOR TITLES
    $(".art_vault_title, .forbidden_unknown_title, .media_news_title, .podcasts_music, .socials, .github").hover(function () {
        $(this).css("color", "black");
    }, function () {
        $(this).css("color", "white");
    });


    // THROWS ELEMENTS OFF THE PAGE TO MAKE WAY FOR NEW
    $(".art_vault_title").click(hideMainElements);

    function hideMainElements() {
        $(".art_vault_title").animate({
            color: "black",
            bottom: "20%",
        }, 800, "easeInOutCubic");
        $(".forbidden_unknown_title").animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".media_news_title").delay(100).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".podcasts_music").delay(300).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".main_blurb").delay(300).animate({
            color: "black",
            opacity: "0",
        }, 2000, "easeInOutCubic")
        $(".socials").delay(500).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".github").delay(700).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".art_vault_cross").animate({
            opacity: "1",
        }, 2000, "easeInOutCubic")
        $(".art_vault_contents").css("visibility", "visible");
        $(".art_carousel").delay(2000).animate({
            opacity: "1",
        })
        return false;

    }

    // BRINGS ELEMENTS BACK ON THE PAGE
    $(".art_vault_cross").click(returnMainElements);

    function returnMainElements() {
        $(".art_carousel").delay(2000).animate({
            opacity: "0",
        })
        $(".art_vault_contents").css("visibility", "hidden");
        $(".art_vault_cross").animate({
            opacity: "0",
        }, 2000, "easeInOutCubic")
        $(".github").delay(700).animate({
            color: "white",
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".socials").delay(500).animate({
            color: "white",
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".main_blurb").delay(300).animate({
            color: "#7C7C7C",
            opacity: "1",
        }, 2000, "easeInOutCubic")
        $(".podcasts_music").delay(300).animate({
            color: "white",
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".media_news_title").delay(100).animate({
            color: "white",
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".forbidden_unknown_title").animate({
            color: "white",
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".art_vault_title").animate({
            color: "white",
            bottom: "0%",
        }, 800, "easeInOutCubic");
        return false;


    }

    // SHOWS FANTASTIC BOOKS SEARCH
    $(".forbidden_unknown_title").click(openAuthorFantastic);

    function openAuthorFantastic() {
        $(".forbidden_unknown_title").animate({
            color: "black",
            bottom: "37%",
        }, 800, "easeInOutCubic");
        $(".art_vault_title").animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".media_news_title").delay(100).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".podcasts_music").delay(300).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".main_blurb").delay(300).animate({
            color: "black",
            opacity: "0",
        }, 2000, "easeInOutCubic")
        $(".socials").delay(500).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".github").delay(700).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".fantastic_books_cross").animate({
            opacity: "1",
        }, 2000, "easeInOutCubic")
        $(".book_search_wrap").css("visibility", "visible");
        $(".book_search").delay(2000).animate({
            opacity: "1",
        })
        return false;

    }

    $(".fantastic_books_cross").click(closeAuthorFantastic);

    function closeAuthorFantastic() {
        $(".book_search_wrap").css("visibility", "hidden");
        $(".book_search").delay(2000).animate({
            opacity: "0",
        })
        $(".fantastic_books_cross").animate({
            opacity: "0",
        }, 2000, "easeInOutCubic")
        $(".github").delay(700).animate({
            color: "white",
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".socials").delay(500).animate({
            color: "white",
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".main_blurb").delay(300).animate({
            color: "#7C7C7C",
            opacity: "1",
        }, 2000, "easeInOutCubic")
        $(".podcasts_music").delay(300).animate({
            color: "white",
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".media_news_title").delay(100).animate({
            color: "white",
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".art_vault_title").animate({
            color: "white",
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".forbidden_unknown_title").animate({
            color: "white",
            bottom: "0%",
        }, 800, "easeInOutCubic");
        return false;


    }




    // QUOTES CAROUSEL
    $('.quote_carousel').slick({
        autoplay: true,
        speed: 10000,
        dots: false,
        infinite: true,
    });

    $('.art_carousel').slick({
        autoplay: true,
        speed: 5000,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
    });


});