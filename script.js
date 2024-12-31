let switchImg = document.querySelectorAll(".caroussel-img");
let img = 0;

const caroussel = () => {
    switchImg[img].classList.remove("visible");
    img = (img + 1) % switchImg.length;
    switchImg[img].classList.add("visible");

}

setInterval(caroussel, 2500);