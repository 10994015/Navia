var view = document.getElementById('view');
var pass = document.getElementById('pass');

view.addEventListener("mousedown",()=>{
    pass.type="text";
    view.className = "fas fa-eye";
})
view.addEventListener("mouseup",()=>{
    pass.type="password";
    view.className = "fas fa-eye-slash";
})
