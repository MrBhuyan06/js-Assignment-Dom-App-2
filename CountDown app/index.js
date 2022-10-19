
// console.log(val);

let btn=document.getElementById("btn");
let interval=null;
let displayValue=document.getElementById("count");
console.log(displayValue);
let inputvalue=document.getElementById("value");
console.log(inputvalue.value);
btn.addEventListener('click',countdown)


function countdown()
{
    let inputvalue=document.getElementById("value").value;
   let a= setInterval(() =>
    {
        inputvalue--
        displayValue.innerText=inputvalue;
        if(inputvalue==0)
        {
            clearInterval(a);
            // console.log(a);
            
        }
    },1000)
    console.log(typeof a);
    // if(inputvalue==0)
    // {
    //    clearInterval(a);
    //    console.log("hello");
    // }
}
function count(val)
{
    setInterval((val1) => 
    {
        console.log(typeof val);

        val1=val1-1;
        console.log("hello");
        displayValue.innerText=val;
    },1000);
}