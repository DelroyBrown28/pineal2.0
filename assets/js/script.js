$(document).ready(function () {

    $(".art_vault_title").click(hideMainElements);

    function hideMainElements() {
        $(".art_vault_title").animate({
            color: "black",
            bottom: "20%",
        }, 800, "easeInOutCubic");
        $(".forbidden_unknown_title").delay(500).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 3000, "easeInOutCubic")
        $(".media_news_title").delay(600).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 3000, "easeInOutCubic")
        $(".podcasts_music").delay(800).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 3000, "easeInOutCubic")
        $(".main_blurb").delay(800).animate({
            color: "black",
            opacity: "0",
        }, 3000, "easeInOutCubic")
        $(".socials").delay(1000).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 3000, "easeInOutCubic")
        $(".github").delay(1200).animate({
            color: "black",
            opacity: "0",
            bottom: "500%",
        }, 3000, "easeInOutCubic")

}


// QUOTES CAROUSEL
$('.quote_carousel').slick({
    autoplay: true,
    speed: 10000,
    dots: false,
    infinite: true,
});




});