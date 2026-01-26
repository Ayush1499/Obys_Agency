// var prgs = document.querySelector("#progress_bar");
// var h3 = document.querySelector("h3");
// var count = 0;
// var completion = setInterval(function(){
//     if(count === 100){
//         h3.style.opacity = 1;
//         prgs.textContent = "Done";
//         clearInterval(completion);

//     }
//     count++;
//     prgs.style.width = count+"%";
// },100)
var prgs = document.querySelector("#progress_bar");
var h3 = document.querySelector("h3");
var Download = document.querySelector("#Download");
var count = 0;

Download.addEventListener("click",function(){
   
    var completion = setInterval(function(){
    if(count >= 100){
        h3.style.opacity = 1; // "Download Completed" dikhao
        prgs.textContent = "Done";
        clearInterval(completion);
    } else {
        count++;
        prgs.style.width = count + "%";
        prgs.textContent = count + "%"; // Bar ke andar percentage dikhayega
    }
}, 50); // Speed thodi fast kar di hai (50ms)
})

// var completion = setInterval(function(){
//     if(count >= 100){
//         h3.style.opacity = 1; // "Download Completed" dikhao
//         prgs.textContent = "Done";
//         clearInterval(completion);
//     } else {
//         count++;
//         prgs.style.width = count + "%";
//         prgs.textContent = count + "%"; // Bar ke andar percentage dikhayega
//     }
// }, 50); // Speed thodi fast kar di hai (50ms)