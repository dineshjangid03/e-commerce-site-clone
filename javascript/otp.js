    
   
    document.querySelector("#btn").addEventListener("click",myfcn)
    function myfcn(){
        let pswd=document.querySelector("#pswd").value
        if(pswd=="1234"){
            alert("Payment successful")
            localStorage.removeItem("cart");
            location.replace("mens.html")
        }
        else{
            alert("Wrong OTP")
        }
    }