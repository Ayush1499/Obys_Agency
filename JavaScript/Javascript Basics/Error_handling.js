function divide(a,b)
{
    try{
    if(b==0){
        throw new Error("Gadbad hogayi hain");
    }
    console.log("divide: ",a/b);
}
    catch(err){
        console.error(err.message);
    }
}
divide(10,0);