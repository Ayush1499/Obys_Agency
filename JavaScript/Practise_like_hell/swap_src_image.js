var btn = document.querySelector("button");
var pehla = document.querySelector("#first");
var dusra = document.querySelector("#second");
btn.addEventListener("click",function(){
    // var ek = pehla.src;
    // var doo = dusra.src;
    // pehla.src = doo;
    // dusra.src = ek;
    // [a, b] = [b, a];
    [pehla.src, dusra.src] = [dusra.src, pehla.src];
})
