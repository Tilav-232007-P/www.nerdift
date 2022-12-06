let video = document.querySelector('.videop')
let vd = document.querySelector('.gg1')
let vd1 = document.querySelector('.gg')
let gg = document.querySelector('.vd')
let g = document.querySelector('.g')
let one = document.querySelector('.big_box .container .head .burger_menu .one')
let twoo = document.querySelector('.big_box .container .head .burger_menu .two')
let threee = document.querySelector('.big_box .container .head .burger_menu .three')
off = 10
two = 200
sto = 100
vd.onclick = () =>{
    off = off + sto
    if (off > two) {
        off = 0
    }
    video.style.top = -off + '%';
}
vd1.onclick = () =>{
    off = off - sto
    if (off < 0) {
        off = two
    }
    video.style.top = -off + '%';
}
let menu = document.querySelector('.big_box .container .head .burger_menu')
let box = document.querySelector('.big_box .container .box')
//
menu.onclick = () =>{
    box.classList.toggle('key')
    one.classList.toggle('op1')
    twoo.classList.toggle('op2')
    threee.classList.toggle('op3')
}