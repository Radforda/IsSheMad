




$('#submit').on('click', function(){
    event.preventDefault();
    var newTweet = {
        author:$("#authorName").val().trim(),
        text: $("#inputText").val().trim(),
        score:10
    }
    $.post("/api/new", newTweet)
})