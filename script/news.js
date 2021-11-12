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
        newItemTitle[t].style.color="#E83428";
        newItemTitle[t].style.transition=".5s";
        newItemContent[t].classList.add('active');
        newToggle[t].classList.add('fa-window-minimize');
    }else{
        removeNew();
    }
}

function removeNew(){
    for(var r=0;r<newItemContent.length;r++){
        newItemTitle[r].style.color="#000";
        newItemTitle[r].style.transition=".5s";
        newItemContent[r].classList.remove('active');
        newToggle[r].classList.remove('fa-window-minimize');
    }
}