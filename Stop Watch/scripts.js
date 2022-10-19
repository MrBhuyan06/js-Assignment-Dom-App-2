// grap the display
let time_ele=document.querySelector(".watch-container  .watch-display");
console.log(time_ele);
let btn=document.querySelectorAll("button");
console.log(btn);
let seconds=0;
let interval=null;
btn.forEach((ele) =>
{
   ele.addEventListener('click',(b) =>
   {
    let idholder=b.target.classList;
    if(idholder =='start')
    {
        console.log("hello");
         startTime();
    }
    else if(idholder =='stop')
    {
        //  timer()
         stopTime()
    }
    else
    {
        //  timer()
        //  stopTime()
        resetTime()
    }
   })
  

});

// Timer Function

function timer()
{
   seconds++;
   console.log("timmer");

   // Timer Format

   let hrs=Math.floor(seconds / 3600);
   let mins=Math.floor((seconds - (hrs * 3600) )/ 60);
   let sec=seconds % 60;
   
   if(hrs<10) {
    hrs='0'+hrs
   }
   if(mins<10) {
    mins='0'+mins;
   }
   if(sec<10) {
    sec='0'+sec;
   }


   time_ele.innerText=` ${hrs}:${mins}:${sec} `;
//    interval=null;


}
// timer()
function startTime()
{
    if(interval)
    {
        return
    }

   interval= setInterval(timer,1000)
   console.log( interval);
}

function stopTime()
{
    console.log(interval);
   clearInterval(interval)
//    interval= setInterval(timer,120000)
    interval=null

}

function resetTime()
{
    clearInterval(interval);
    time_ele.innerText="00:00:00";
    seconds=0
    interval=null
}