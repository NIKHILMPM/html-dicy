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
// document.querySelector("h1").innerHTML = d1+" "+d2;

function result(d1,d2) {
    if (d1 > d2) {
        document.querySelector("h1").innerHTML = "player 1 has won";
    } else if (d1 < d2) {
        document.querySelector("h1").innerHTML = "player 2 has won";
    } else {
        document.querySelector("h1").innerHTML = "its a draw";
    }
    setTimeout(myFunction, 2000);
    
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

// function playGame() {
//     var p1 = dicer();
//     var p2 = dicer();

//     var imgg1 = "dice" + p1 + ".png";
//     var imgg2 = "dice" + p2 + ".png";

//     document.querySelector(".img1").src = imgg1;
//     document.querySelector(".img2").src = imgg2;

//     if (p1 > p2) {
//         document.querySelector("h1").innerHTML = "player 1 has won.";
//         document.querySelector(".h3_1").innerHTML = "player 1 won";
//         document.querySelector(".h3_2").innerHTML = "player 2 lost";


//     } else if (p1 < p2) {
//         document.querySelector("h1").innerHTML = "player 2 has won.";
//         document.querySelector(".h3_1").innerHTML = "player 1 lost";
//         document.querySelector(".h3_2").innerHTML = "player 2 won";
//     } else {
//         document.querySelector("h1").innerHTML = "its a draw";
//     }
//     // document.querySelector("h1").innerHTML = random_num;

// };

// function dicer() {
//     var num = Math.floor(Math.random() * 6) + 1;
//     return num;
// }
