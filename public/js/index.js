

        function scrollFunction() {
            if (document.body.scrollTop > 500) {
                document.getElementById("navbar").style.top = "0";
            } else {
                document.getElementById("navbar").style.top = "-100px";
            }
        };


        $(document).on('scroll', function () {
            scrollFunction();
        });

        $(window).scroll(function () {
            if ($(document).scrollTop() < 500) {
                $('.navbar').addClass('unscrolled-bar');
            } else {
                $('.navbar').removeClass('unscrolled-bar');
            }
        });
        $(function () {
            $("#suggested-gift").hide();
            $.get("/api/topten", function (data) {
                console.log(data);
                var topTen;
                if (data.length < 10) {
                    topTen = data.length
                } else { topTen = 10 };
                for (var i = 0; i < topTen; i++) {
                    var ttdiv = $("<div class=card>");
                    var p = $("<div class=card-title>").html("#" + (i + 1));
                    var textDiv = $("<div class=card-body>").html(data[i].text);
                    var authorDiv = $("<div class=card-footer bg-light text-right class=bottom>").html(data[i].user);
                    ttdiv.append(p).append(textDiv).append(authorDiv);
                    $("#top-ten-list").append(ttdiv);
                }
            });
        })

        $('.resultsShow').hide();
        $('#rank').hide();
        $('#item-image').hide();
        $('#gift-description').hide();
        $('#giftTitle').hide();

        $('#submit').on('click', function () {
            event.preventDefault();
            console.log('clicked')
            var newTweet = {
                author: $("#authorName").val().trim(),
                text: $("#inputText").val().trim(),
            }

            $("authorName").val('');
            $("inputText").val("");

            $.post("/api/new", newTweet).then(function (result) {
                var id = result.id;


                $('.resultsShow').show();
                $('#rank').show();
                $('#item-image').show();
                $('#gift-description').show();
                $('#giftTitle').show();

                $('#inputCallToAction').hide();

                $('#perc').text(result.score);
                if (result.score < 40) {
                    $("#suggested-gift").show();
                    $("#itemTitle").html("Bouquet Of Flowers");
                    $("#desc").html("You dodged the bullet this time!! Next time you may not be so lucky. Flowers are a great way to get more brownie points in the bank for your next inevitable indiscretion!");
                    $("#item-image").html("<img src='./images/Flowers.jpg' class='gift' id='giftImg'>");
                    $("#button").attr("href", "https://www.1800flowers.com/");
                } else if (result.score >= 40 && result.score < 55) {
                    $("#suggested-gift").show();
                    $("#itemTitle").html("Chocolate");
                    $("#desc").html("Chocolate says I'm sorry so much better than words.");
                    $("#item-image").html("<img src='./images/chocolate.jpg' class='gift' id='giftImg'>");
                    $("#button").attr("href", "https://www.godiva.com/");
                } else if (result.score >= 55 && result.score < 65) {
                    $("#suggested-gift").show();
                    $("#itemTitle").html("Roses");
                    $("#desc").html("Its now time to break out the big guns. whatever you have done, you probably will want to stop doing it.");
                    $("#item-image").html("<img src='./images/roses.jpg' class='gift' id='giftImg'>");
                    $("#button").attr("href", "https://www.1800flowers.com/roses");
                } else if (result.score >= 65 && result.score < 75) {
                    $("#suggested-gift").show();
                    $("#itemTitle").html("Puppy");
                    $("#desc").html("This gift is almost unfair. Who can say no to a cute puppy, its guaranteed to melt her heart.");
                    $("#item-image").html("<img src='./images/puppy.jpg' class='gift' id='giftImg'>");
                    $("#button").attr("href", "www.aspca.org/adopt‎");
                } else if (result.score >= 75 && result.score < 85) {
                    $("#suggested-gift").show();
                    $("#itemTitle").html("Jewelry");
                    $("#desc").html("She seems like she is starting to get tired of your nonsense. Small jewelry is always a nice choice to bring you back into her good graces.");
                    $("#item-image").html("<img src='./images/jewelry.jpg' class='gift'id='giftImg'>");
                    $("#button").attr("href", "https://www.bluenile.com/jewelry?track=NavDrawJewelry");
                } else if (result.score >= 85 && result.score < 95) {
                    $("#suggested-gift").show();
                    $("#itemTitle").html("Diamonds");
                    $("#desc").html('Dude, she seems super angry. Diamonds are a "girls best friend". Always a classy choice but they can be expensive. but she deserves it for putting up with your dumb ass.');
                    $("#item-image").html("<img src='./images/diamonds.jpg' class='gift' id='giftImg'>");
                    $("#button").attr("href", "https://www.bluenile.com/diamond-jewelry");
                } else if (result.score >= 95) {
                    $("#suggested-gift").show();
                    $("#itemTitle").html("A New Car");
                    $("#desc").html('Brah, you probably do not want to go home. She is beyond pissed off. The only thing that might save you is buying her a new car.');
                    $("#item-image").html("<img src='./images/new-car.jpg' class='gift' id='giftImg'>");
                    $("#button").attr("href", "https://www.cars.com/");
                }
                $.get("/api/topten", function (data) {
                    console.log(data);
                    var rank = data.findIndex(x => x.id == id);
                    rank += 1;
                    console.log(rank);
                    $('#rank').text("It ranked #" + rank + "!");
                });
                $.get("/api/topten", function (data) {
                    console.log(data);
                    $("#top-ten-list").empty();
                    var topTen;
                    if (data.length < 10) {
                        topTen = data.length
                    } else { topTen = 10 };
                    for (var i = 0; i < topTen; i++) {
                        var TextCard='<div class="card" ><div class="card-body"><div class=card-title>#'+(i + 1)+'</div><p class="card-text">'+data[i].text+'</p> </div><div class="card-footer bg-light text-right">   '+data[i].user+'</div></div>'
                        
                        $("#top-ten-list").append(TextCard);
                    }
                });

            });

        });

        $('#submitAuthor').on('click', function () {
            //event.preventDefault();
            console.log('author query clicked')
            var authorQuery = "/api/author/" + $("#authorSearch").val().trim();
            console.log(authorQuery);

            $.get(authorQuery, function (data) {
                console.log("get request returned");
                console.log(data);
                console.log(data.length);
                $("#authorTexts").text("");
                for (var i = 0; i < data.length; i++) {
                    console.log(" it should be displaying this" + data[i].text);
                    // $("#authorTexts").append(data[i].text);
                    var authorCard='<div class="card" ><div class="card-body"><p class="card-text">'+data[i].text+'</p> </div><div class="card-footer bg-light text-right">   '+Math.floor(data[i].score)+'%</div></div>'
                    
                    
                    $("#authorTexts").append(authorCard);
                }
                $.get("/api/rank", function (data) {
                    console.log(data);

                });
            });
        });
