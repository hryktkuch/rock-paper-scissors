
$("#paper").on("click", function() {
    var random=Math.floor(Math.random()*3);
    if (random == 0) {
        $("#computer").image("rock")
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

/*

//alert(1234567890)
console.log('はじめてのJavascript');
console.log(23 + 5);
console.log(2000 - 1800);
console.log('18 + 5');

var test='文字が入っています';
console.log(test, "箱の中身");

var score = 50;
if (score === 50) {
    console.log('50です');
} else {
    console.log('50でないです');
}

var point = 90;
if (point >= 80) {
    console.log('合格');
} else {
    console.log('不合格');
}

var random=Math.floor(Math.random()*5);
console.log(random, 'ランダムな数字');
if (random === 0) {
    console.log('大吉');
} else if (random === 1) {
    console.log('中吉');
} else if (random === 2) {
    console.log('小吉');
} else if (random === 3) {
    console.log('吉');
} else if (random === 4) {
    console.log('凶');
}

$("#aa").on("click", function() {

    var random=Math.floor(Math.random()*5);
    console.log(random, 'ランダムな数字');
    if (random === 0) {
        console.log('大吉');
        $("#aa").text("大吉")
        $("#aa").css("color", "red")
    } else if (random === 1) {
        console.log('中吉');
        $("#aa").text("中吉")
    } else if (random === 2) {
        console.log('小吉');
        $("#aa").text("小吉")
    } else if (random === 3) {
        console.log('吉');
        $("#aa").text("吉")
    } else if (random === 4) {
        console.log('凶');
        $("#aa").text("凶")
    }

    /*
    $("#aa").text("クリックされました")
    $("#aa").css("color", "red")
    $("#aa").css("font-size", "120px")
    $("#aa").fadeOut(3000)
    $("#aa").fadeIn(3000)
    */



/*
$("#aa").on('click', function(){

    $("#aa").html('押されました！！！！！！')
    $("#aa").css('color', 'red')

    // この下消さない
})
*/
