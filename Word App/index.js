let btn=document.getElementById("btn")
let display=document.getElementById("dispplay")
 btn.addEventListener('click',() =>
 {
    let inpValue=document.getElementById("val").value
    
  if(inpValue.length > 0)
  {
    let wordArry=inpValue.split(" ");
    display.innerText=`NO of word is ${wordArry.length}`
  }
  else{
    display.innerText=`oops its seem u have not enter any sentence`
  }
 })



