var submit = document.querySelector("form");
var inps = document.querySelectorAll('input[type = "text"]');
var h4 = document.querySelector("#h4");
submit.addEventListener("submit",function(event){
    event.preventDefault();
    for(var i = 0; i<inps.length; i++){
        if(inps[i].value === ""){
            h4.textContent = "Error, some fields are invalid";
            h4.style.color = "red";
            break;
        }
    }
})