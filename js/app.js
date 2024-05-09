let total = 0;
let win_number = 0;
let lose_number = 0;
let draw_number = 0;
let lang = 0;
let human = 3;

const judge_criteria = [
    [0, 1, -1],
    [-1, 0, 1],
    [1, -1, 0]
]

function judge(human){
    var random=Math.floor(Math.random()*3);
    result=judge_criteria[human][random];
    return result;
}

function human_hand(x) {
    if (x == 0) {
        $("#rock").css("opacity", "0.2")
        $("#scissor").css("opacity", "0.2")
        $("#paper").css("opacity", "1")
    } else if (x == 1) {
        $("#rock").css("opacity", "0.2")
        $("#scissor").css("opacity", "1")
        $("#paper").css("opacity", "0.2")
    } else {
        $("#rock").css("opacity", "1")
        $("#scissor").css("opacity", "0.2")
        $("#paper").css("opacity", "0.2")
    }
}

function com_hand(x) {
    var random=Math.floor(Math.random()*3);
    if (random == 0) {
        $("#com_rock").css("opacity", "0.2")
        $("#com_scissor").css("opacity", "0.2")
        $("#com_paper").css("opacity", "1")
    } else if (random == 1) {
        $("#com_rock").css("opacity", "0.2")
        $("#com_scissor").css("opacity", "1")
        $("#com_paper").css("opacity", "0.2")
    } else {
        $("#com_rock").css("opacity", "1")
        $("#com_scissor").css("opacity", "0.2")
        $("#com_paper").css("opacity", "0.2")
    }

    total++;

    if (judge_criteria[x][random] == 0) {
        $("#draw").css("opacity", "1")
        $("#win").css("opacity", "0.2")
        $("#lose").css("opacity", "0.2")
        draw_number++;
    } else if (judge_criteria[x][random] == 1) {
        $("#draw").css("opacity", "0.2")
        $("#win").css("opacity", "0.2")
        $("#lose").css("opacity", "1")
        lose_number++;
    } else {
        $("#draw").css("opacity", "0.2")
        $("#win").css("opacity", "1")
        $("#lose").css("opacity", "0.2")
        win_number++;
    }
    console.log(total);
    console.log(win_number);
    $("#win_rate").text(Math.round(win_number/total*100) + "% ("+win_number+","+draw_number+","+lose_number+")");
}

$("#paper").on("click", function() {
    human = 0;
    human_hand(human);
    com_hand(human);
})
$("#paper").on("mouseover", function() {
    $("#paper").css("opacity", "0.6")
})
$("#paper").on("mouseout", function() {
    if (human==0) {
        $("#paper").css("opacity", "1")
    } else {
        $("#paper").css("opacity", "0.2")
    }
})

$("#scissor").on("click", function() {
    human = 1;
    human_hand(human);
    com_hand(human);
})
$("#scissor").on("mouseover", function() {
    $("#scissor").css("opacity", "0.6")
})
$("#scissor").on("mouseout", function() {
    if (human==1) {
        $("#scissor").css("opacity", "1")
    } else {
        $("#scissor").css("opacity", "0.2")
    }
})

$("#rock").on("click", function() {
    human = 2;
    human_hand(human);
    var random=Math.floor(Math.random()*3);
    com_hand(human);
})
$("#rock").on("mouseover", function() {
    $("#rock").css("opacity", "0.6")
})
$("#rock").on("mouseout", function() {
    if (human==2) {
        $("#rock").css("opacity", "1")
    } else {
        $("#rock").css("opacity", "0.2")
    }
})

$("#language").on("click", function() {
    if (lang==0) {
        console.log("英語");
        lang=1;
        $("#paper").attr("src", "img/paper.png")
        $("#com_paper").attr("src", "img/paper.png")
        $("#rock").attr("src", "img/rock.png")
        $("#com_rock").attr("src", "img/rock.png")
        $("#scissor").attr("src", "img/scissors.png")
        $("#com_scissor").attr("src", "img/scissors.png")
    } else {
        console.log("日本語");
        lang=0;
        $("#paper").attr("src", "img/janken_pa.png")
        $("#com_paper").attr("src", "img/janken_pa.png")
        $("#rock").attr("src", "img/janken_gu.png")
        $("#com_rock").attr("src", "img/janken_gu.png")
        $("#scissor").attr("src", "img/janken_choki.png")
        $("#com_scissor").attr("src", "img/janken_choki.png")
    }
})