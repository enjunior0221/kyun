let icon = [6];
let poc = [6];
for (let i = 1;i < 7;i++){
    icon[i] = document.querySelector("#icon" + i );
}
for (let j = 1;j < 7;j++){
    poc[j] = document.querySelector("#poc" + j );
}

let title = document.querySelector("#title");
let res_img = document.querySelector("#res_img");
let kyun = document.querySelector("#kyun");
let ret = document.querySelector("#ret");


icon[1].addEventListener("change",() =>{
    if(icon[1].checked === true) {
        poc[1].src = "img/nagura.jpg"
        for (let l = 1;l < 7;l++){
            icon[l].setAttribute("disabled", "disabled");
        }
        res_img.src = "img/nagura.jpg";
        title.innerHTML = "<h1>残念、、、</h1>"
        kyun.innerHTML = "潤です。";
        ret.innerHTML = "もう一度遊ぶ";
    }
});

icon[2].addEventListener("change",() =>{
    if(icon[2].checked === true) {
        poc[2].src = "img/itoda.jpg"
        for (let l = 1;l < 7;l++){
            icon[l].setAttribute("disabled", "disabled");
        }
        title.innerHTML = "<h1>残念、、、</h1>"
        res_img.src = "img/itoda.jpg";
        kyun.innerHTML = "潤です。";
        ret.innerHTML = "もう一度遊ぶ";
    }
});

icon[3].addEventListener("change",() =>{
    if(icon[3].checked === true) {
        poc[3].src = "img/pe.jpg"
        for (let l = 1;l < 7;l++){
            icon[l].setAttribute("disabled", "disabled");
        }
        title.innerHTML = "<h1>残念、、、</h1>";
        res_img.src = "img/pe.jpg";
        kyun.innerHTML = "ヨンジュンです。";
        ret.innerHTML = "もう一度遊ぶ";
    }
});

icon[4].addEventListener("change",() =>{
    if(icon[4].checked === true) {
        poc[4].src = "img/heart.png"
        for (let l = 1;l < 7;l++){
            icon[l].setAttribute("disabled", "disabled");
        }
        title.innerHTML = "<h2>おめでとうございます！！！</h2>";
        res_img.src = "img/heart.png";
        kyun.innerHTML = "キュンです///"; 
        ret.innerHTML = "もう一度遊ぶ";
    }
});

icon[5].addEventListener("change",() =>{
    if(icon[5].checked === true) {
        poc[5].src = "img/nagura.jpg"
        for (let l = 1;l < 7;l++){
            icon[l].setAttribute("disabled", "disabled");
        }
        res_img.src = "img/nagura.jpg";
        title.innerHTML = "<h1>残念、、、</h1>"
        kyun.innerHTML = "潤です。";
        ret.innerHTML = "もう一度遊ぶ";
    }
});

icon[6].addEventListener("change",() =>{
    if(icon[6].checked === true) {
        poc[6].src = "img/komori.jpg"
        for (let l = 1;l < 7;l++){
            icon[l].setAttribute("disabled", "disabled");
        }
        title.innerHTML = "<h1>残念、、、</h1>";
        res_img.src = "img/komori.jpg";
        kyun.innerHTML = "純です。"; 
        ret.innerHTML = "もう一度遊ぶ";
    }
});

$(function () {
    var bool = [1, -1];
    $('ul').html(
      $('li').sort(function(a, b) {
        return bool[Math.floor(Math.random() * bool.length)];
      })
    );
});