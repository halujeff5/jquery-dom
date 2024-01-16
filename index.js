//Question 1
console.log("Lets get ready to party with JQuery!")

//Question 2
$("img").addClass("image-center")

//Question 3
let $pItems = $("p");
$pItems.get(5).remove()

//Question 4
$(title).css("font-size", "50px")

//Question 5
console.log($("ol"))
$("ol").append($("<li>").text("Every Good Boy Does Fine"))

//Question 6
$("ol").remove()
$("aside").append("<p>").text("Apologies for the corny list!")

//Question 7
let $changeColor = $(".form-control")
console.log($changeColor.get(1).value)

$("body").css("background-color", $changeColor.get(0).value, $changeColor.get(1).value, $changeColor.get(2).value)

//Question 8
let $element = $("aside")
console.log($element)
$element.append($("<button>"))
$("button").text("Remove img")
$("button").on("click", function(){
    $("img").remove()
})