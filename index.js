var d1;
var d2;

document.getElementById("bb1").addEventListener('click', function () {
    d1 = dice_1();
    document.querySelector("#bb1").classList.add("invisible");
    checker();
});
document.getElementById("bb2").addEventListener('click', function () {
    d2 = dice_2();
    document.querySelector("#bb2").classList.add("invisible");
    checker();
});

document.querySelector("#f_btn").addEventListener('click',function(){
    // window.onload();
    location.reload();
})


function checker(){
    if (d1!==undefined && d2!==undefined) {
        result(d1,d2);
    }
}

function result(d1,d2) {
    if (d1 > d2) {
        document.querySelector("h1").innerHTML = "player 1 has won";
    } else if (d1 < d2) {
        document.querySelector("h1").innerHTML = "player 2 has won";
    } else {
        document.querySelector("h1").innerHTML = "its a draw";
    }
    setTimeout(function(){myFunction();},500);
    
}

function myFunction(){
    document.querySelector("#f_btn").classList.remove("invisible");
}

function dice_1() {
    var d = roll_dice();
    var imgg = "dice" + d + ".png";
    document.querySelector(".img1").src = imgg;
    return d;
}
function dice_2() {
    var d = roll_dice();
    var imgg = "dice" + d + ".png";
    document.querySelector(".img2").src = imgg;
    return d;

}

function roll_dice() {
    var ans = Math.floor(Math.random() * 6) + 1;
    return ans;

}
