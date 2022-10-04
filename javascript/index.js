
let loginData=JSON.parse(localStorage.getItem("loginAs"))
checklogin(loginData)


//welcome
if(loginData==null){
  let mens=document.getElementById("mns")
  let womens=document.getElementById("wmns")
  let wlcm=document.getElementById("welcome")
  let crt=document.getElementById("crt")
  let lout=document.getElementById("lout")
  wlcm.style.visibility="hidden";
  mens.style.visibility="hidden";
  womens.style.visibility="hidden";
  crt.style.visibility="hidden";
  lout.style.visibility="hidden";
}
else{
  let wlcm=document.querySelector(".wlcm")
  wlcm.innerText=loginData
}


  //check for login
  function checklogin(loginData){
    if(loginData==null){
      alert("please login")
      location.replace("login.html")
    }
    else if(loginData.length>=1){
      return;
    }
  }
