    
    
document.querySelector("form").addEventListener("submit",myfcn)

function myfcn(){
    event.preventDefault()
    let data=JSON.parse(localStorage.getItem("id_pswd"))
    var uemail = document.querySelector("#email").value 
    var upass = document.querySelector("#password").value 
    let is=false;
    let a
    for(var i =0;i<data.length;i++){
    if(uemail==data[i].email && upass==data[i].pswd){
        is=true;
        a=i
    }
    }
    if(is){
    alert("login successfull")
        location.replace("mens.html")
        localStorage.setItem("loginAs",JSON.stringify(data[a].name))
    }
    else{
    alert('wrong details')
    } 
    
}






//welcome
let loginData=JSON.parse(localStorage.getItem("loginAs"))
if(loginData==null){
  let mens=document.getElementById("mns")
  let womens=document.getElementById("wmns")
  let cart=document.getElementById("crt")
  mens.style.visibility="hidden";
  womens.style.visibility="hidden";
  cart.style.visibility="hidden";
}
