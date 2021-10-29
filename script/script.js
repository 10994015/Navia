window.addEventListener("scroll",()=>{
    const nav = document.getElementById('nav');
    const navTitle = document.getElementsByClassName('navTitle');
    nav.classList.toggle("sticky",window.scrollY > 390);
    for(var n=0;n<navTitle.length;n++){
        navTitle[n].classList.toggle("sticky",window.scrollY > 390);
    }
})

const menu = document.getElementsByClassName('menu')[0];
const navlist = document.getElementsByClassName('navlist')[0];
const newItemTitle = document.getElementsByClassName('newItemTitle');
const newItemContent = document.getElementsByClassName('newItemContent');
const newToggle = document.querySelectorAll('.newItemTitle >.fas');


for(var w=0;w<newItemTitle.length;w++){
    newItemTitle[w].addEventListener("click",openNew);
}
function openNew(){
    var t = Number(this.className.substr(25));

    console.log(!newItemContent[t].classList.contains('active'));
    if(!newItemContent[t].classList.contains('active')){
        removeNew();
        newItemContent[t].classList.add('active');
        newToggle[t].classList.add('fa-window-minimize');
    }else{
        removeNew();
    }
}

function removeNew(){
    for(var r=0;r<newItemContent.length;r++){
        newItemContent[r].classList.remove('active');
        newToggle[r].classList.remove('fa-window-minimize');
    }
}
menu.addEventListener("click",()=>{
    
        navlist.style.display = "flex";
        menu.classList.toggle('fa-times');
        setTimeout(()=>{
            navlist.classList.toggle('height');
        },10)
    
})