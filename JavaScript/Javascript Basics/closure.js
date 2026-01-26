function outerfunc(){
    let a = 20;
    return function innerfunc(){
        // count++;
        console.log(a);
    }
}
const closure1 = outerfunc();
const closure2 = outerfunc();
