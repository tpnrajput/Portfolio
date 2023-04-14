let menu = document.querySelector("#menu-bars");
let header = document.querySelector("header");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) => {
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
}

const shareData = {
    url: "https://tpnrajput.github.io/coffee-shop-website/",
};

const shareData1 = {
    url: "https://tpnrajput.github.io/musicPlayer/",
};

const shareData2 = {
    url: "https://tpnrajput.github.io/Drum/",
};

const shareData3 = {
    url: "https://tpnrajput.github.io/Dice/",
};

