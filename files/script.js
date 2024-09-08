
var typed = new Typed(".text", {
    strings: ["MLOps Engineer", "Data Engineer", "Data Scientist", "DevOps Engineer", "Cloud Engineer"],
    typeSpeed:200,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 300){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})