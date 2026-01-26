var Home = document.querySelector("#Home");
var About = document.querySelector("#About");
var Contact = document.querySelector("#Contact");

var Hometext = document.querySelector("#Hometext");
var Abouttext = document.querySelector("#Abouttext");
var Contacttext = document.querySelector("#Contacttext");

Hometext.style.display = "block";
Hometext.style.width = "50%";

Home.addEventListener("click",function(){
    removeAlltext();
    Hometext.style.display = " block";
    Hometext.style.width = "50%";
})

About.addEventListener("click",function(){
    removeAlltext();
    Abouttext.style.display = " block";
    Abouttext.style.width = "50%";
})

Contact.addEventListener("click",function(){
    removeAlltext();
    Contacttext.style.display = " block";
    Contacttext.style.width = "50%";
})

function removeAlltext(){
    document.querySelectorAll("h3").forEach(function(h3){
        h3.style.display = "none";
    })
}