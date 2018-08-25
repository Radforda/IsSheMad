function scrollFunction() {
    if (document.body.scrollTop > 500) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-100px";
    }
};


$(document).on('scroll', function() {
    scrollFunction();
});



// $(window).scroll(function () {
//     if ($(document).scrollTop() < 500) {
//         $('.navbar').addClass('unscrolled-bar');
//     } else {
//         $('.navbar').removeClass('unscrolled-bar');
//     }
// });
$(function () {
    $("#suggested-gift").hide();
    $.get("/api/topten", function (data) {
        console.log(data);
        for (i = 0; i < 10; i++) {
            $("#tt-name").append('<h2>' + data[i].user + "&nbsp;&nbsp;&nbsp;" + "</h2><br>").addClass('tt-style')
            $('#tt-score').append('<h2>' + data[i].score + "&nbsp;&nbsp;&nbsp;" + "</h2><br>").addClass('tt-style')
            $('#tt-text').append('<h2>' + data[i].text + "&nbsp;&nbsp;&nbsp;" + "</h2><br>").addClass('tt-style')
        }
    });
})

$('#submit').on('click', function () {
    //event.preventDefault();
    console.log('clicked')
    var newTweet = {
        author: $("#authorName").val().trim(),
        text: $("#inputText").val().trim(),
    }
    $.post("/api/new", newTweet).then(function (result) {
        $('.inputShow').hide();
        $('.resultsShow').show();
        $('#perc').text(result.score);
        if (result.score < 40) {
            $("#suggested-gift").show();
            $("#itemTitle").html("Bouquet Of Flowers");
            $("#desc").html("What woman doesn't like flowers. Its a timeless gift that will show her that you are truely sorry for whatever transgression you have commited.");
            $("#item-image").html("<img src='./images/Flowers.jpg' class='gift'>");
            $("#button").attr("href", "https://www.1800flowers.com/");
        } else if (result.score >= 40 && result.score < 55) {
            $("#suggested-gift").show();
            $("#itemTitle").html("Chocolate");
            $("#desc").html("Chocolate says I'm sorry so much better than words.");
            $("#item-image").html("<img src='./images/chocolate.jpg' class='gift'>");
            $("#button").attr("href", "https://www.godiva.com/");
        } else if (result.score >= 55 && result.score < 65) {
            $("#suggested-gift").show();
            $("#itemTitle").html("Roses");
            $("#desc").html("Its now time to break out the big guns. whatever you have done, you probably will want to stop doing it.");
            $("#item-image").html("<img src='./images/roses.jpg' class='gift'>");
            $("#button").attr("href", "https://www.1800flowers.com/roses");
        } else if (result.score >= 65 && result.score < 75) {
            $("#suggested-gift").show();
            $("#itemTitle").html("Puppy");
            $("#desc").html("This gift is almost unfair. Who can say no to a cute puppy, its guaranteed to melt her heart.");
            $("#item-image").html("<img src='./images/puppy.jpg' class='gift'>");
            $("#button").attr("href", "www.aspca.org/adopt‎");
        } else if (result.score >= 75 && result.score < 85) {
            $("#suggested-gift").show();
            $("#itemTitle").html("Jewelry");
            $("#desc").html("She seems like she is starting to get tired of your nonsense. Small jewelry is always a nice choice to bring you back into her good graces.");
            $("#item-image").html("<img src='./images/jewelry.jpg' class='gift'>");
            $("#button").attr("href", "https://www.bluenile.com/jewelry?track=NavDrawJewelry");
        } else if (result.score >= 85 && result.score < 95) {
            $("#suggested-gift").show();
            $("#itemTitle").html("Diamonds");
            $("#desc").html('Dude, she seems super angry. Diamonds are a "girls best friend". Always a classy choice but they can be expensive. but she deserves it for putting up with your dumb ass.');
            $("#item-image").html("<img src='./images/diamonds.jpg' class='gift'>");
            $("#button").attr("href", "https://www.bluenile.com/diamond-jewelry");
        } else if (result.score >= 95) {
            $("#suggested-gift").show();
            $("#itemTitle").html("A New Car");
            $("#desc").html('Brah, you probably do not want to go home. She is beyond pissed off. The only thing that might save you is buying her a new car.');
            $("#item-image").html("<img src='./images/new-car.jpg' class='gift'>");
            $("#button").attr("href", "https://www.cars.com/");
        }
        $.get("/api/rank", function (data) {
            console.log(data);

        });
    });


});