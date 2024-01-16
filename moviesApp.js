$("button").on("click", function(e) {e.preventDefault();
    buildEntry()})
    
    function buildEntry(){
    //movie
    $(".movie").append($(".input1").val())
    $(".movie-button").html($("<button class='delete1'></button>"))
    $(".delete1").css('width','58px').css('padding','4px').text('remove')
    // rating
    $(".rating").append($(".input2").val())
    $(".rating-button").html($("<button class='delete2'></button>"))
    $(".delete2").css('width','58px').css('padding', '4px').text('remove')
    // ))
    // $("li").append($("<p>")).text($(".input2").val())
    $('.delete1').on("click", function(e) {e.preventDefault();
    $(".movie").remove()})
    $('.delete2').on("click", function(e) {e.preventDefault();
    $(".rating").remove()})
    }

