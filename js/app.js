$("#paper").on("click", function() {
    var random=Math.floor(Math.random()*3);
    if (random == 0) {
        $("#computer").text("rock")
        $("#result").text("You win!")
    } else if (random == 1) {
        $("#computer").text("scissor")
        $("#result").text("You lose!")
    } else {
        $("#computer").text("paper")
        $("#result").text("Draw!")
    }
})

$("#scissor").on("click", function() {
    var random=Math.floor(Math.random()*3);
    if (random == 0) {
        $("#computer").text("rock")
        $("#result").text("You lose!")
    } else if (random == 1) {
        $("#computer").text("scissor")
        $("#result").text("Draw!")
    } else {
        $("#computer").text("paper")
        $("#result").text("You win!")
    }
})

$("#rock").on("click", function() {
    var random=Math.floor(Math.random()*3);
    if (random == 0) {
        $("#computer").text("rock")
        $("#result").text("Draw!")
    } else if (random == 1) {
        $("#computer").text("scissor")
        $("#result").text("You win!")
    } else {
        $("#computer").text("paper")
        $("#result").text("You lose!")
    }
})