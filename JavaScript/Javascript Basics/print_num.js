var num = prompt("Enter the first number !");
num = Number(num);  
console.log(num);
function print_number()
{
    if(num === 1)
    {
        console.log("numbers from 1 to 10 are printing");

        for(var i=1;i<11;i++)
        {
            console.log(i);
        }
    }
    else if(num === 15)
    {
        console.log("numbers from 15 to 20 are printing");

        for(var i=15;i<21;i++)
        {
            console.log(i);
        }
    }
    else if(num === 25)
    {
        console.log("numbers from 25 to 40 are printing");
        for(var i=25;i<41;i++)
        {
            console.log(i);
        }
    }
    else{
        console.log("numbers from 11 to 0 are printing");

        for(var i=11;i>0;i--)
        {
            console.log(i);
        }
    } 
}
print_number();
