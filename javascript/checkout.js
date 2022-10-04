
    let total=localStorage.getItem("total")
    let ttl=document.querySelectorAll(".total")
    for(let i=0; i<ttl.length; i++){
        ttl[i].innerHTML=total
    }
   

   document.querySelector("form").addEventListener("submit",submitform)
    let cardn="1234567891234"
    let mnth="2025-06"
    let cvv="123"
   function submitform(){
    event.preventDefault()
    let crdinp=document.querySelector("#ccn").value
    let mnthinp=document.querySelector("#month").value
    let cvvinp=document.querySelector("#cvv").value
    if(crdinp==cardn&&mnthinp==mnth&&cvvinp==cvv){
        location.replace("otp.html")
    }else{
        alert("Wrong Credentials")
    }
    
    
   }