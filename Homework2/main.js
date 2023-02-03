$(document).ready(function() {

    var originalSize = null;

    $("#animationPlayer").on("click", function() {
        var fontSize = parseInt($("h1").css("font-size"));

        if (!isNaN(fontSize)) {
            if (!originalSize) {
                originalSize = fontSize;
            }
            fontSize += 10;

            $("h1").css("color", "red");
            $("img").toggleClass("border");

            $("h1").animate({fontSize: fontSize + "px"}, "slow", function() {
                 fontSize -= 10;
                $("h1").animate({fontSize: originalSize + "px"}, "slow");
    
                setTimeout(function() {
                    console.log("Animation Complete");
                    $("h1").css("color", "black");
                     $("img").toggleClass("border");
                }, 650);

            originalSize = null;
            });
        }

    });
});