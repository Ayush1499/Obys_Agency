// this is the example of constructor function which uses this and new to operate 
// function functionName (parameter1,parameter2) { this.member1; this.member2; } const var1 = new functionName (arg1,arg2);

// function makehuman(age,name){
//     this.age = age;
//     this.name = name;
//     function printNAme(){
//         console.log(this.name);
//     }
// }
// const human1 = new makehuman(20,"Ritesh");
// const human2 = new makehuman(29,"Ranjana");
// human1;
// human2;

// prototypal inheritance :- 

function makehuman(age,name){
    this.age = age;
    this.name = name;
}
makehuman.prototype.printname=function(){
        console.log(this.name);
    }
const human1 = new makehuman(20,"Ritesh");
const human2 = new makehuman(29,"Ranjana");
human1;
human2;
human1.printname();