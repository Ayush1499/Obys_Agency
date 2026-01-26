const person = {
    name:"Amir Khan",
    title:"Creator",
    age:32,
    Occupation:"Enterprenuer",
    printtitle : function(){
            console.log(this.title)
        },
    printOccupation : function(){
        console.log(this.Occupation,this.age,this.name);
    },
    job:{
        title:"Developer",
        printtitle : function(){
            console.log(this.title)
    },
        Mr:{
            title:"Consumer",
            printtitle : function(){
                console.log(this.title)
            },
        }
    }
}
// person.printOccupation();
// person.printtitle();
// person.job.printtitle();
// person.job.Mr.printtitle();
job.printtitle();  // this.js:29 Uncaught ReferenceError: job is not defined.since,parent object was not attached