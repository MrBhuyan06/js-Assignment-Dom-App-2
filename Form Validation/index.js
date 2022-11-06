// Set The Functionn error Message
function setError(id,msg)
{
    id.style.color="red"
    id.innerText=msg;
}



//Grap All the fields
const form=document.getElementById("form")
const username=document.getElementById("name")
const email=document.getElementById("email")
const phone=document.getElementById("phone")
const password=document.getElementById("pass")
const cpassword=document.getElementById("cpass")

// ADD the event
form.addEventListener('submit' ,(e) =>

{
    console.log(e);
   e.preventDefault();
   validation();
})

// SetError Function
function setError(input,errorMsg)
{
   const formcontrol = input.parentElement;
   console.log(formcontrol);
   const span=formcontrol.querySelector("span")
   formcontrol.className="form-group error";
   span.innerText=errorMsg;
}
//SetSucess Function
const setSuccess=(input,msg) =>
{
    const formcontrol = input.parentElement;
    console.log(formcontrol);
    const span=formcontrol.querySelector("span")
    formcontrol.classList=" form-group success";
    span.innerText=msg;
}

// Function For validating for the isEmail
function isEmail(emails)
{
   let atSymbol=emails.indexOf("@");
   if(atSymbol<=1) return false;
   var dot=emails.lastIndexOf('.') ;
   if(dot <= atSymbol +3) return false;  //abhi@gmail.com i want atleast 2 charater after@ logic
   if(emails.charAt((emails.length-4))!=".") return false;
   
   return true;

}
//SweetAlert





// for final dataValidation
const successMsg=(usernameval) =>
{
    let formcontrol=document.getElementsByClassName('form-group');
    console.log("Abhiu");
    for(let i=0;i<formcontrol.length;i++)
    {

        var count=formcontrol.length-1;
        if(formcontrol[i].className == "form-group success")
        {
            console.log("hye");
             var sRate=0+i;
            sentData(usernameval,sRate,count)
        }
        else{
            return false
        }
    }
}

function sentData(usernameval,sRate,count)
{
    console.log("hello");
   if(sRate===count)
   {
     alert("Registration successful");
     swal(`welcome ${usernameval} Registraction Successful `);
     location.href=`demo.html?username-${usernameval}`
   }
}





// Function for the ValdatioFrom 
function validation()
{
    
   const usernameval=username.value.trim();         
   const emailval=email.value.trim();
   const phoneval=phone.value.trim();
   const passworval=password.value.trim();
   const cpasswordval=cpassword.value.trim();
   console.log("hello");

    
   // Validation username
    
    if(usernameval.length<5)
    {
        setError(username,"*name is too short");
        
    }
    else if(!isNaN(usernameval))
   {
     setError(username,"**Name Field cant containes Numberic Values");
   } 
   else
   {
    setSuccess(username,"**You Have provided Valid Value");
   }
     
   // Validation  Email
   if(!isEmail(emailval))
   {
     setError(email,"** oops Check the email You might miss the format")
   }
   else{
    setSuccess(email,"**You Have provided Valid Value");
   }

   // Validation for the phnumber
   if(isNaN(phoneval))
   {
    setError(phone,"** oops phone Number Cannot Contain String")
   }
   else if( phoneval.length != 10)
   {
    setError(phone,"** oops phone Number Must Be 10 digit")
   }
   else
   {
    setSuccess(phone,"**You Have provided Valid Value");
   }
    // Validate the passWord
    if(passworval.length < 8)
    {
        setError(pass,"**password Must Be 8 digit")
    }
    else if(!(passworval.match(/[0-9@#%$]/)))

    {
        setError(pass,"** oops password must conatine Upper,lower,special,numberic value")
       
    }
    else if(!(passworval.match(/[a-z]/)))

    {
        setError(pass,"** oops password must conatine Upper,lower,special,numberic value")
       
    }
    else if(!(passworval.match(/[A-Z]/)))

    {
        setError(pass,"** oops password must conatine Upper,lower,special,numberic value")
       
    }
    else if(!(passworval.match(/[@#$%]/)))

    {
        setError(pass,"** oops password must conatine Upper,lower,special,numberic value")
       
    }
    else{
        setSuccess(pass,"**You Have provided Valid Value");
    }
//    validation cpass

    if(passworval != cpasswordval)
       {
        setError(cpass,"**confirm password  didnot match ")
       }
    
    else{
        setSuccess(cpass,"**You Have provided Valid Value");
    }


    successMsg(usernameval);



}