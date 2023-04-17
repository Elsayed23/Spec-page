let bars = document.querySelector(".hamburger svg")
let X_color = document.querySelector(".line")
let cenC = document.querySelector(".hamburger svg .C")
let line_top = document.querySelector(".line-top-bottom")
let Svg = document.querySelector(".hamburger input + svg")
let nav = document.querySelector(".nav-b");


bars.addEventListener("click", () => {
    nav.classList.toggle("showNav");
    X_color.classList.toggle("X-color")
    Svg.classList.toggle("rotSVG")
    line_top.classList.toggle("line_T")
    cenC.classList.toggle("cen")
})
let scrollTo_top = document.getElementById("scrollToTopBtn")

window.addEventListener("scroll", () => {
    if (window.scrollY >= 700) {
        scrollTo_top.style.right = "30px";
    } else {
        scrollTo_top.style.right = "-70px";
    }
})

scrollTo_top.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
