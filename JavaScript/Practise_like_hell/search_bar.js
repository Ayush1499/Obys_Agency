var input = document.querySelector("input");
var data = [
    {name:"ramesh",src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "},
    {name:"raghvendra",src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "},
    {name:"rishika",src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "},
    {name:"rinkia",src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "}
]
var pers= "";  // to avoid the undefined divs 
data.forEach(function(elem){
    pers += `<div class="person">
                    <div class="img">
                        <img src="${elem.src}" alt="Woman holding a dslr on her left eye with her hands">
                    </div>
                    <h4>${elem.name}</h4>
                </div>` 
})
document.querySelector(".people").innerHTML = pers;
input.addEventListener("input",function(){
    // console.log(input.value);
    var matching =  data.filter(function(e){
        return e.name.toLowerCase().startsWith(input.value.toLowerCase());
    })

    var newusers = "";
    matching.forEach(function(elem){
    newusers += `<div class="person">
                    <div class="img">
                        <img src=${elem.src} alt="Woman holding a dslr on her left eye with her hands">
                    </div>
                    <h4>${elem.name}</h4>
                </div>` 
})
document.querySelector(".people").innerHTML = newusers;
})