document.querySelector("form").addEventListener("submit",myfcn)
    let signin=JSON.parse(localStorage.getItem("id_pswd"))||[]

    function myfcn(){
        event.preventDefault()
        let obj={
            name:document.querySelector("#name").value,
            email:document.querySelector("#email").value,
            pswd:document.querySelector("#password").value
        }
        signin.push(obj)
        localStorage.setItem("id_pswd",JSON.stringify(signin))
        alert("signup successfull")
        location.replace("login.html")
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