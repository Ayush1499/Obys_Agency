var parent = document.getElementById('parent');
parent.addEventListener("click",function(details){
    if(details.target.id === "play"){
        console.log("play the song");
    }
    else if(details.target.id === "pause"){
        console.log("pause the song");
    }
})
