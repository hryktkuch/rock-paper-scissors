/*const judge_criteria = [
    [0, 1, -1],
    [-1, 0, 1],
    [1, -1, 0]
]

function judge(human){
    var random=Math.floor(Math.random()*3);
    result=judge_criteria[human][random];
    return result;
}
*/

$("#com_rock").css("opacity","0.2")
$("#com_scissor").css("opacity", "0.2")
$("#com_paper").css("opacity", "0.2")

$("#paper").on("click", function() {
    $("#rock").css("opacity", "0.2")
    $("#scissor").css("opacity", "0.2")
    $("#paper").css("opacity", "1")
    var random=Math.floor(Math.random()*3);
    if (random == 0) {
        $("#com_rock").css("opacity","1")
        $("#com_scissor").css("opacity", "0.2")
        $("#com_paper").css("opacity", "0.2")
        $("#result").text("あなたの勝ち！")
    } else if (random == 1) {
        $("#com_rock").css("opacity", "0.2")
        $("#com_scissor").css("opacity", "1")
        $("#com_paper").css("opacity", "0.2")
        $("#result").text("あなたの負け！")
    } else {
        $("#com_rock").css("opacity", "0.2")
        $("#com_scissor").css("opacity", "0.2")
        $("#com_paper").css("opacity", "1")
        $("#result").text("あいこ！")
    }
})

$("#scissor").on("click", function() {
    $("#rock").css("opacity", "0.2")
    $("#scissor").css("opacity", "1")
    $("#paper").css("opacity", "0.2")
    var random=Math.floor(Math.random()*3);
    if (random == 0) {
        $("#com_rock").css("opacity","1")
        $("#com_scissor").css("opacity", "0.2")
        $("#com_paper").css("opacity", "0.2")
        $("#result").text("あなたの負け！")
    } else if (random == 1) {
        $("#com_rock").css("opacity", "0.2")
        $("#com_scissor").css("opacity", "1")
        $("#com_paper").css("opacity", "0.2")
        $("#result").text("あいこ！")
    } else {
        $("#com_rock").css("opacity", "0.2")
        $("#com_scissor").css("opacity", "0.2")
        $("#com_paper").css("opacity", "1")
        $("#result").text("あなたの勝ち！")
    }
})

$("#rock").on("click", function() {
    $("#rock").css("opacity", "1")
    $("#scissor").css("opacity", "0.2")
    $("#paper").css("opacity", "0.2")
    var random=Math.floor(Math.random()*3);
    if (random == 0) {
        $("#com_rock").css("opacity","1")
        $("#com_scissor").css("opacity", "0.2")
        $("#com_paper").css("opacity", "0.2")
        $("#result").text("あいこ！")
    } else if (random == 1) {
        $("#com_rock").css("opacity", "0.2")
        $("#com_scissor").css("opacity", "1")
        $("#com_paper").css("opacity", "0.2")
        $("#result").text("あなたの勝ち！")
    } else {
        $("#com_rock").css("opacity", "0.2")
        $("#com_scissor").css("opacity", "0.2")
        $("#com_paper").css("opacity", "1")
        $("#result").text("あなたの負け！")
    }
})