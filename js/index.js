

const changeIntro = document.querySelector(".bus");
const nav = document.querySelector("nav");
let header = document.querySelector("header");
let btns = document.querySelectorAll(".btn");
let p = document.querySelectorAll("p");
let headerImg = document.querySelector(".intro img");
let h2 = document.querySelectorAll("h2");
let imgs = document.querySelectorAll(".img-content img");
let links = document.querySelectorAll("nav a");

nav.addEventListener("mouseover", () => {
    nav.style.transform = "scale(1.2)";
    nav.style.transition = "transform 1s";
})


nav.addEventListener("mouseleave", () => {
    nav.style.transform = "scale(1)";
})


changeIntro.addEventListener("dblclick", () => {
changeIntro.src = "img/fun.jpg"
})
console.log(changeIntro);

function myFunction() {
    document.getElementById("demo").innerHTML = "Welcome";
}


header.addEventListener("mouseout", e => {
    header.style.background = "white";
});

header.addEventListener("click", e => {
    header.style.background = "white";
});

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        btn.style.background = "#4cb094";
    });
})

btns.forEach(btn => {
    btn.addEventListener("dblclick", e => {
        btn.style.background = "#17A2B8";
    });
})

p.forEach(para => {
    para.addEventListener("copy", e => {
        para.style.background = "#FFEBCD";
    });
})

h2.forEach(h2 => {
    h2.addEventListener("mousedown", e => {
        h2.style.transform = "scale(1.5)";
    });
})

h2.forEach(h2 => {
    h2.addEventListener("mouseup", e => {
        h2.style.transform = "scale(1)";
    });
})


