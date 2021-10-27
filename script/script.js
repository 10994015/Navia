window.addEventListener("scroll",()=>{
    const nav = document.getElementById('nav');
    const navTitle = document.getElementsByClassName('navTitle');
    nav.classList.toggle("sticky",window.scrollY > 390);
    for(var n=0;n<navTitle.length;n++){
        navTitle[n].classList.toggle("sticky",window.scrollY > 390);
    }
})

var menu = document.getElementsByClassName('menu')[0];
var navlist = document.getElementsByClassName('navlist')[0];

menu.addEventListener("click",()=>{
    
        navlist.classList.toggle('flex');
        menu.classList.toggle('fa-times');
        setTimeout(()=>{
            navlist.classList.toggle('height');
        },10)
    
})