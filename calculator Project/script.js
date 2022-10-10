// Grap the btn
const btn=document.querySelectorAll("button");
// Grap The input field
let displayString=""
const inputString=document.querySelector("input")

btn.forEach((button) =>
{
    button.addEventListener('click',(e) =>
    {
        try
        {
            

            if(e .target.innerText == '=')
            {
                
                // inputString=eval()
                 displayString=eval(displayString);
                 inputString.value=displayString;
                

            }
            else if(e .target.innerText == 'c')
            {
                inputString.value='0';
            }
            else if(e .target.innerText == 'DEL')
            {
              displayString=displayString.slice(0,-1);
              inputString.value=displayString;
            }
            else
            {
                console.log(e.target);
                displayString=displayString+e.target.innerText;
                inputString.value=displayString;
            }
        }
        catch(err)
        {
            alert("please enter")
        }
    });
})