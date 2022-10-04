
var womensData = [
    {image_url:"https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",name: "WOMEN'S REEBOK PRINT LEGGINGS ",price: 1549,strikedoffprice: 1799,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",name: "WOMEN'S REEBOK POLYTIGHT",price: 1249,strikedoffprice: 1749,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",name: "WOMEN'S REEBOK SLEEVE TEE",price: 699,strikedoffprice: 1245,cat:"t-shirt"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp",name: "WOMEN'S REEBOK PP TIGHTS",price: 749,strikedoffprice: 1299,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp",name: "WOMEN'S REEBOK PP TIGHTS",price: 749,strikedoffprice: 1299,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",name: "WOMEN'S REEBOK CLASSIC LEGGINGS",price: 1399,strikedoffprice: 2799,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",name: "WOMEN'S REEBOK CLASSIC TIGHTS",price: 1099,strikedoffprice: 1249,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp",name: "UNISEX REEBOK SHOW SHOES",price: 1249,strikedoffprice: 1489,cat:"socks"},
    {image_url:"https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",name: "WOMEN'S CLASSIC REEBOK PANTS",price: 1459,strikedoffprice: 1235,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp",name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",price: 849,strikedoffprice: 2599,cat:"t-shirt"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",price: 1550,strikedoffprice: 2599,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp",name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",price: 1399,strikedoffprice: 6599,cat:"bra"},
    {image_url:"https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp",name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",price: 949,strikedoffprice: 1899,cat:"bag"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",name: "WOMEN'S REEBOK PRINT LEGGINGS ",price: 1549,strikedoffprice: 1799,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",name: "WOMEN'S REEBOK POLYTIGHT",price: 1249,strikedoffprice: 1749,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",name: "WOMEN'S REEBOK SLEEVE TEE",price: 699,strikedoffprice: 1245,cat:"t-shirt"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp",name: "WOMEN'S REEBOK PP TIGHTS",price: 749,strikedoffprice: 1299,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp",name: "WOMEN'S REEBOK PP TIGHTS",price: 749,strikedoffprice: 1299,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",name: "WOMEN'S REEBOK CLASSIC LEGGINGS",price: 1399,strikedoffprice: 2799,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",name: "WOMEN'S REEBOK CLASSIC TIGHTS",price: 1099,strikedoffprice: 1249,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp",name: "UNISEX REEBOK SHOW SHOES",price: 1249,strikedoffprice: 1489,cat:"socks"},
    {image_url:"https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",name: "WOMEN'S CLASSIC REEBOK PANTS",price: 1459,strikedoffprice: 1235,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp",name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",price: 849,strikedoffprice: 2599,cat:"t-shirt"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",price: 1550,strikedoffprice: 2599,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp",name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",price: 1399,strikedoffprice: 6599,cat:"bra"},
    {image_url:"https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp",name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",price: 949,strikedoffprice: 1899,cat:"bag"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",name: "WOMEN'S REEBOK PRINT LEGGINGS ",price: 1549,strikedoffprice: 1799,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",name: "WOMEN'S REEBOK POLYTIGHT",price: 1249,strikedoffprice: 1749,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",name: "WOMEN'S REEBOK SLEEVE TEE",price: 699,strikedoffprice: 1245,cat:"t-shirt"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp",name: "WOMEN'S REEBOK PP TIGHTS",price: 749,strikedoffprice: 1299,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp",name: "WOMEN'S REEBOK PP TIGHTS",price: 749,strikedoffprice: 1299,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",name: "WOMEN'S REEBOK CLASSIC LEGGINGS",price: 1399,strikedoffprice: 2799,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",name: "WOMEN'S REEBOK CLASSIC TIGHTS",price: 1099,strikedoffprice: 1249,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp",name: "UNISEX REEBOK SHOW SHOES",price: 1249,strikedoffprice: 1489,cat:"socks"},
    {image_url:"https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",name: "WOMEN'S CLASSIC REEBOK PANTS",price: 1459,strikedoffprice: 1235,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp",name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",price: 849,strikedoffprice: 2599,cat:"t-shirt"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",price: 1550,strikedoffprice: 2599,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp",name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",price: 1399,strikedoffprice: 6599,cat:"bra"},
    {image_url:"https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp",name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",price: 949,strikedoffprice: 1899,cat:"bag"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",name: "WOMEN'S REEBOK PRINT LEGGINGS ",price: 1549,strikedoffprice: 1799,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",name: "WOMEN'S REEBOK POLYTIGHT",price: 1249,strikedoffprice: 1749,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",name: "WOMEN'S REEBOK SLEEVE TEE",price: 699,strikedoffprice: 1245,cat:"t-shirt"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp",name: "WOMEN'S REEBOK PP TIGHTS",price: 749,strikedoffprice: 1299,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp",name: "WOMEN'S REEBOK PP TIGHTS",price: 749,strikedoffprice: 1299,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",name: "WOMEN'S REEBOK CLASSIC LEGGINGS",price: 1399,strikedoffprice: 2799,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",name: "WOMEN'S REEBOK CLASSIC TIGHTS",price: 1099,strikedoffprice: 1249,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp",name: "UNISEX REEBOK SHOW SHOES",price: 1249,strikedoffprice: 1489,cat:"socks"},
    {image_url:"https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",name: "WOMEN'S CLASSIC REEBOK PANTS",price: 1459,strikedoffprice: 1235,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp",name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",price: 849,strikedoffprice: 2599,cat:"t-shirt"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",price: 1550,strikedoffprice: 2599,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp",name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",price: 1399,strikedoffprice: 6599,cat:"bra"},
    {image_url:"https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp",name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",price: 949,strikedoffprice: 1899,cat:"bag"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2296/reebok_GL2296_1.jpg.plp",name: "WOMEN'S REEBOK PRINT LEGGINGS ",price: 1549,strikedoffprice: 1799,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GV5726/reebok_GV5726_1.jpg.plp",name: "WOMEN'S REEBOK POLYTIGHT",price: 1249,strikedoffprice: 1749,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GT2338/reebok_GT2338_1.jpg.plp",name: "WOMEN'S REEBOK SLEEVE TEE",price: 699,strikedoffprice: 1245,cat:"t-shirt"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2841/adidas_GL2841_1.jpg.plp",name: "WOMEN'S REEBOK PP TIGHTS",price: 749,strikedoffprice: 1299,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL2842/adidas_GL2842_1.jpg.plp",name: "WOMEN'S REEBOK PP TIGHTS",price: 749,strikedoffprice: 1299,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",name: "WOMEN'S REEBOK CLASSIC LEGGINGS",price: 1399,strikedoffprice: 2799,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",name: "WOMEN'S REEBOK CLASSIC TIGHTS",price: 1099,strikedoffprice: 1249,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GL5609/reebok_GL5609_1.jpg.plp",name: "UNISEX REEBOK SHOW SHOES",price: 1249,strikedoffprice: 1489,cat:"socks"},
    {image_url:"https://content.shop4reebok.com/static/Product-GK6777/reebok_GK6777_1.jpg.plp",name: "WOMEN'S CLASSIC REEBOK PANTS",price: 1459,strikedoffprice: 1235,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GT2355/reebok_GT2355_1.jpg.plp",name: "WOMEN'S REEBOK RUNNING RUN ESSENTIALS SHORT SLEEVE GRAPHIC",price: 849,strikedoffprice: 2599,cat:"t-shirt"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM3404/adidas_GM3404_1.jpg.plp",name: "WOMEN'S REEBOK TRAINING WOR MESH TIGHTS",price: 1550,strikedoffprice: 2599,cat:"leggings"},
    {image_url:"https://content.shop4reebok.com/static/Product-GM5610/reebok_GM5610_1.jpg.plp",name: "WOMEN'S REEBOK RUNNING OSR HIGH-IMPACT BRA",price: 1399,strikedoffprice: 6599,cat:"bra"},
    {image_url:"https://content.shop4reebok.com/static/Product-FQ5266/UNISEX_TRAINING_BAGS_FQ5266_1.jpg.plp",name: "UNISEX REEBOK TRAINING ACTIVE CORE BACKPACK - MEDIUM",price: 949,strikedoffprice: 1899,cat:"bag"},
        ];
    
        let arr=JSON.parse(localStorage.getItem("cart"))||[]
        let loginData=JSON.parse(localStorage.getItem("loginAs"))
    
        displaywomens(womensData)
        checklogin(loginData)
    
    
        //functions
        //function for display all womens data
        function displaywomens(womensData){
        document.querySelector("#parent").innerHTML="";
        womensData.forEach(function(el){
            let div=document.createElement("div")
            let imag=document.createElement("img")
            imag.setAttribute("src",el.image_url)
            imag.setAttribute("class","image")
    
            let name=document.createElement("p")
            name.innerText=el.name;
            name.setAttribute("class","name")
    
            let price=document.createElement("p")
            price.innerText="₹"+el.price
            price.setAttribute("class","price")
    
            let btn=document.createElement("button")
            btn.innerText="Add to Cart"
            btn.setAttribute("class","add_to_cart")
            btn.addEventListener("click",function(){
                    addToCart(el)
                })
    
            div.append(imag,name,price,btn)
            document.querySelector("#parent").append(div)
        })
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
    
        //function for add data to cart
        function addToCart(elem){
            arr.push(elem)
            localStorage.setItem("cart",JSON.stringify(arr))
            window.location.reload()
        }
    
        //update spn
        let spn=document.querySelector(".spn")
        spn.innerText=arr.length
    
        //welcome
        let wlcm=document.querySelector(".wlcm")
        wlcm.innerText=loginData
    
        //logout
        document.querySelector(".logout").addEventListener("click",function(){
        localStorage.removeItem("loginAs");
        alert("logout successfull")
        location.replace("login.html")
        })
    
        //function for sort by name
        function nameSort(){
            let selected=document.querySelector("#sortByName").value
            if(selected=="a to z"){
            womensData.sort(function(a,b){
                
                if(a.name>b.name) return 1;
                if(a.name<b.name) return -1;
                return 0
            });
            displaywomens(womensData)
            }
            if(selected=="z to a"){
            womensData.sort(function(a,b){
                if(a.name>b.name) return -1;
                if(a.name<b.name) return 1;
                return 0
            });  
            displaywomens(womensData); 
            }
        }
    
            //function for sort by price
        function priceSort(){
            let selected=document.querySelector("#sortByPrice").value
            if(selected=="low to high"){
            womensData.sort(function(a,b){
                if(a.price>b.price) return 1;
                if(a.price<b.price) return -1;
                return 0
            });
            displaywomens(womensData);
            }
            if(selected=="high to low"){
            womensData.sort(function(a,b){
                if(a.price>b.price) return -1;
                if(a.price<b.price) return 1;
                return 0
            });  
            displaywomens(womensData); 
            }
        }
    
        //function for filter
        function filterCat(){
            let selected=document.querySelector("#filterByCat").value
            let filterlist=womensData.filter(function(elem){
            return elem.cat==selected
            })
            displaywomens(filterlist)
    
        }