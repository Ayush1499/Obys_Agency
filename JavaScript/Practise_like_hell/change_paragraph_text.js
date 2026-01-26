var btn = document.querySelector("button");
var p = document.querySelector('p');
btn.addEventListener("click",function(){
    p.textContent = 'This is the updated paragraph text, which you wanted to do by the click of the button!';
    p.style.color = "blue";
})