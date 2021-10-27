window.addEventListener("scroll",()=>{
    const nav = document.getElementById('nav');
    const navTitle = document.getElementsByClassName('navTitle');
    nav.classList.toggle("sticky",window.scrollY > 390);
    for(var n=0;n<navTitle.length;n++){
        navTitle[n].classList.toggle("sticky",window.scrollY > 390);
    }
})