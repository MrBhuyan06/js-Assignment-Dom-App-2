// 
let val=document.querySelector("#input");
let para=document.querySelector(".result")


let btn=document.querySelector("#btn")
let btnReset=document.querySelector("#btnReset")
val.addEventListener('input',() =>
{
    para.textContent=val.value
    console.log(para.textContent);
    console.log(val.innerText);
});
btn.addEventListener('click',()=>
{
    if(val.value.length > 1)
      {
      console.log("hello");
      let revString= palindrom(val.value);
      revString==val.value?para.innerText=` ${para.innerText} Yes it is palindrom`:para.innerText=`No it is not palindrom`;

      }
   else
 {
    para.innerText="You Have not Enter any Think"
 }

})
btnReset.addEventListener('click',() =>
{
    para.innerText="Results";
    val.placeholder="Enter a word"
})

function palindrom(palindrom)

{
 if(palindrom.length > 1)
 {
    let palindromarry=palindrom.split("").reverse();
    return palindromarry.join("")
 }
 
}