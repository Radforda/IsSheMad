

$('#submit').on('click',function(){
    //event.preventDefault();

    console.log('clicked')

    var newTweet = {
        author:$("#authorName").val().trim(),
        text: $("#inputText").val().trim(),
        score:10
    }
    $.post("/api/new", newTweet).then(function(result){
        console.log('posted')
    })

    $('.inputShow').addClass('hide');
    $('.resultsShow').removeClass('hide');
})