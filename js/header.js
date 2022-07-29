const section = document.querySelectorAll("section");
const textClick = document.querySelectorAll("header ul li");
const topBtn = document.querySelector(".topBtn");
const nums = [];



for(var i = 0; i < section.length; i++){
    nums[i] = section[i].offsetTop;
};
textClick.forEach((el,index) =>{
    el.addEventListener("click",function(){
        window.scrollTo(0,nums[index]);
    });
});
topBtn.addEventListener("click",topClickbtn);
function topClickbtn(){
    window.scrollTo(0,0);
}

