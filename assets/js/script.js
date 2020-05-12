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
        $(".forbidden_unknown_title").delay(200).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 3000, "easeInOutCubic")
        $(".media_news_title").delay(300).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 3000, "easeInOutCubic")
        $(".podcasts_music").delay(500).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 3000, "easeInOutCubic")
        $(".main_blurb").delay(500).animate({
            color: "black",
            opacity: "0",
        }, 3000, "easeInOutCubic")
        $(".socials").delay(700).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 3000, "easeInOutCubic")
        $(".github").delay(900).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 3000, "easeInOutCubic")
        $(".art_vault_contents").css("visibility", "visible");
        $(".art_carousel").delay(3000).animate({
            opacity: "1",
        })

    }


    // QUOTES CAROUSEL
    $('.quote_carousel, .art_carousel').slick({
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
    });





});