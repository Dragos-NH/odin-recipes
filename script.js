let switchImg = document.querySelectorAll(".caroussel-img");
let activeProfile = document.querySelectorAll(".profile");
let rightArr = document.querySelector(".rightArr");
let leftArr = document.querySelector(".leftArr");
let currentImg = 0;
let currentIndex = 0;

const caroussel = () => {
    switchImg[currentImg].classList.remove("visible");
    currentImg = (currentImg + 1) % switchImg.length;
    switchImg[currentImg].classList.add("visible");

}

setInterval(caroussel, 2500);


rightArr.addEventListener("click", function(){
    activeProfile[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % activeProfile.length;
    activeProfile[currentIndex].classList.add("active");
});

leftArr.addEventListener("click", function(){
    activeProfile[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + activeProfile.length ) % activeProfile.length;
    activeProfile[currentIndex].classList.add("active");
})

const profileChange = () => {
    activeProfile[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % activeProfile.length;
    activeProfile[currentIndex].classList.add("active");
}

setInterval(profileChange, 3000);