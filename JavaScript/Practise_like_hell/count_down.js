var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var h3 = document.querySelector("h3");
var starter;
start.addEventListener("click",function(){
    var count="0";
starter = setInterval(function(){
    h3.textContent = count;
    count++;
},1000)   
})
// 1 second = 1000milisecond
stop.addEventListener("click",function(){
    clearInterval(starter);
})
