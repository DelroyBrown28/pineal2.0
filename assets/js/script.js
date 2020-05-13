$(document).ready(function () {


    // THROWS ELEMENTS OFF THE PAGE TO MAKE WAY FOR NEW
    $(".art_vault_title").click(hideMainElements);

    function hideMainElements() {
        $(".art_vault_title").animate({
            bottom: "20%",
        }, 800, "easeInOutCubic");
        $("body").animate({
            backgroundColor: "#141414",
        }, 2000)
        $(".top_contents").css("visibility", "hidden");
        $(".forbidden_unknown_title").animate({
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".media_news_title").delay(100).animate({
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".podcasts_music").delay(300).animate({
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".main_blurb").delay(300).animate({
            opacity: "0",
        }, 2000, "easeInOutCubic")
        $(".socials").delay(500).animate({
            opacity: "0",
            bottom: "500%",
        }, 2000, "easeInOutCubic")
        $(".github").delay(700).animate({
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
        $(".bottom_contents").css("visibility", "hidden")
        $(".bottom_art_carousel_wrap").css("visibility", "visible")
        $(".second_art_carousel").animate({
            opacity: "1",
            bottom: "0",
        }, 5000)
        return false;

    }

    // BRINGS ELEMENTS BACK ON THE PAGE
    $(".art_vault_cross").click(returnMainElements);

    function returnMainElements() {
        $(".art_carousel").delay(2000).animate({
            opacity: "0",
        })
        $(".top_contents").css("visibility", "visible");
        $("body").animate({
            backgroundColor: "#C8CAC1",
        })
        $(".art_vault_contents").css("visibility", "hidden");
        $(".art_vault_cross").animate({
            opacity: "0",
        }, 2000, "easeInOutCubic")
        $(".github").delay(700).animate({
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".socials").delay(500).animate({
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".main_blurb").delay(300).animate({
            opacity: "1",
        }, 2000, "easeInOutCubic")
        $(".podcasts_music").delay(300).animate({
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".media_news_title").delay(100).animate({
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".forbidden_unknown_title").animate({
            opacity: "1",
            bottom: "0%",
        }, 2000, "easeInOutCubic")
        $(".art_vault_title").animate({
            bottom: "0%",
        }, 800, "easeInOutCubic");
        $(".bottom_contents").css("visibility", "visible")
        $(".second_art_carousel").animate({
            opacity: "0",
            bottom: "-100%",

        }, 5000)
        $(".bottom_art_carousel_wrap").css("visibility", "hidden")

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
        slidesToShow: 2,
        slidesToScroll: 2,
        variableWidth: true,
    });

    $(".second_art_carousel").slick({
        autoplay: true,
        speed: 8000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
    });




    $("#searchBox").submit(function () {

        var search = $("#search_field").val();
        if (search == "") {
            alert("Enter a book name or title")
        } else {

            var url = "";
            var img = "";
            var title = "";
            var author = "";

            $.get("https://www.googleapis.com/books/v1/volumes?q=" + search, function (response) {

                for (i = 0; i < response.items.length; i++) {
                    title = $('<h4 class="book_title">' + response.items[i].volumeInfo.title + '</h4>');
                    author = $('<h5 class="book_author">Author: ' + response.items[i].volumeInfo.authors + '</h5>');
                    img = $('<img class="book_image"><br><a href=' + response.items[i].volumeInfo.infoLink + '><button>Read More</button><br></a><hr>');
                    url = response.items[i].volumeInfo.imageLinks.thumbnail;
                    img.attr('src', url);
                    title.appendTo('.all_books');
                    author.appendTo('.book_author');
                    img.appendTo('.book_image');
                }
            });

        }
        return false;
    });

})