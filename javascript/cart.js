
    let data=JSON.parse(localStorage.getItem("cart"))||[]
    let loginData=JSON.parse(localStorage.getItem("loginAs"))

    displayCart(data)
    subtotal()
    gtotal()
    checklogin(loginData)

    document.querySelector("form").addEventListener("submit",promoCode)
    
    
    //functions

    //function for subtotal
      function subtotal(){
        let subtotal=document.getElementsByClassName("subTotal")
          let sum=0
          for(let i=0; i<subtotal.length; i++){
            sum+=+(subtotal[i].innerText)
          }
          document.querySelector(".sbttl").innerText=sum
          gtotal()
      }


      //function for gtotal
      function gtotal(){
        let total=document.querySelector(".sbttl").innerText
        document.querySelector(".gtotal").innerText=total
      }


    //function for delete data from cart
    function deletedata(index){
      data.splice(index,1);
          localStorage.setItem("cart",JSON.stringify(data))
          window.location.reload()
    }

    
    //function for promocode
    function promoCode(){
      event.preventDefault()
      let pcode=document.querySelector(".pcode").value
      if(pcode=="masai30"){
        let total=+document.querySelector(".gtotal").innerText
        let subtotal=+document.querySelector(".sbttl").innerText
        if(total==subtotal){
        let dis=(total*70)/100
        document.querySelector(".gtotal").innerText=dis
        }else{
          alert("Promo code is already applied")
        }
      }else{
        gtotal()
        alert("Promo code is not valid")
      }
    }

            //check for login
    function checklogin(loginData){
        if(loginData==null){
          alert("Please login")
          location.replace("login.html")
        }
        else if(loginData.length>=1){
          return;
        }
      }

      

   //logout
   document.querySelector(".logout").addEventListener("click",function(){
    localStorage.removeItem("loginAs");
    alert("logout successfull")
    location.replace("login.html")
   })

   //function for proceed to checkout
   document.querySelector(".chkout").addEventListener("click",function(){
    let total=document.querySelector(".gtotal").innerText
    if(data.length==0){
      alert("Your cart is empty")
    }else{
     localStorage.setItem("total",(total))
     window.location.href="checkout.html"
    }
    
   })

    
    //function for display cart
    function displayCart(data){
      data.forEach(function(el,index){
        let tr=document.createElement("tr")

        let td1=document.createElement("td")
        let imag=document.createElement("img")
        imag.setAttribute("src",el.image_url)
        imag.setAttribute("class","image")
        td1.append(imag)

        let td2=document.createElement("td")
        td2.innerText=el.name;
       
        let td3=document.createElement("td")
        td3.innerText=el.price
       
        let td4=document.createElement("td")
        let slct=document.createElement("select")
        slct.setAttribute("class","select")
        let opt1=document.createElement("option")
        opt1.setAttribute("value","1")
        opt1.innerText=1
        let opt2=document.createElement("option")
        opt2.setAttribute("value","2")
        opt2.innerText=2    
        let opt3=document.createElement("option")
        opt3.setAttribute("value","3")
        opt3.innerText=3 
        let opt4=document.createElement("option")
        opt4.setAttribute("value","4")
        opt4.innerText=4    
        let opt5=document.createElement("option")
        opt5.setAttribute("value","5")
        opt5.innerText=5  
        let opt6=document.createElement("option")
        opt6.setAttribute("value","6")
        opt6.innerText=6   
        let opt7=document.createElement("option")
        opt7.setAttribute("value","7")
        opt7.innerText=7   
        let opt8=document.createElement("option")
        opt8.setAttribute("value","8")
        opt8.innerText=8  
        let opt9=document.createElement("option")
        opt9.setAttribute("value","9")
        opt9.innerText=9
        slct.addEventListener("change",function(){
           subTotalFun()
           subtotal()
        })
        slct.append(opt1,opt2,opt3,opt4,opt5,opt6,opt7,opt8,opt9)
        td4.append(slct)
        
        let td5=document.createElement("td")
        td5.setAttribute("class","subTotal")
        let tot=el.price
        function subTotalFun(){
          td5.innerText=tot*slct.value
        }
        td5.innerText=tot
        
        let td6=document.createElement("td")
        td6.setAttribute("class","removeButton")
        td6.innerText="remove"
        td6.addEventListener("click",function(){
          deletedata(index)
        })

        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector(".cartProductList").append(tr)
      })
    }

