// aos.js
AOS.init();


// skill logic
const icon = document.querySelectorAll(".icon");
const images = document.querySelectorAll(".images img");
const Active = "active";

const texts = document.querySelectorAll(".col-md-10 p");
const title = document.querySelectorAll(".col-md-10 h4");



icon.forEach((el,index) =>{
    el.addEventListener("click",function(){
        images[index].classList.add(Active);
        texts[index].classList.add(Active);
        title[index].classList.add(Active);
        if(index === 0){
            images[1].classList.remove(Active);
            texts[1].classList.remove(Active);
            title[1].classList.remove(Active);
            images[2].classList.remove(Active);
            texts[2].classList.remove(Active);
            title[2].classList.remove(Active);
        }else if(index === 1){
            images[2].classList.remove(Active);
            texts[2].classList.remove(Active);
            title[2].classList.remove(Active);
            images[0].classList.remove(Active);
            texts[0].classList.remove(Active);
            title[0].classList.remove(Active);
        }else if(index === 2){
            images[1].classList.remove(Active);
            texts[1].classList.remove(Active);
            title[1].classList.remove(Active);
            images[0].classList.remove(Active);
            texts[0].classList.remove(Active);
            title[0].classList.remove(Active);
        }
    });
});









