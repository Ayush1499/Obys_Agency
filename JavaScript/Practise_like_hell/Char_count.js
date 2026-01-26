var txtarea = document.querySelector("textarea");
var counter = document.querySelector("#Counter");
txtarea.addEventListener("input",function(){
    counter.textContent = txtarea.value.length;
})