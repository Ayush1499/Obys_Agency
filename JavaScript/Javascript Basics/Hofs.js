function abcd(param){
    console.log("this is the outer original function");
    param();
    return function check(){
        console.log("this is the returned function");
    }
}
const func = abcd(function check_argument(){
    console.log("It is the argumented function!");
});
func();

// const arr = [1,2,3];
// arr.forEach(function(){
//     console.log("this is the example of Higher order function");
// })