var homePage_selection = document.getElementById("homePage_selection");
var homePage_sel_allProducts = document.getElementById("homePage_sel_allProducts");
var homePage_sel_systemPick = document.getElementById("homePage_sel_systemPick");
var homePage_sel_faq = document.getElementById("homePage_sel_faq");

var allProducts_selection = document.getElementById("allProducts_selection");

homePage_sel_allProducts.addEventListener("touchstart", handleAllProductsPage,false);
// homePage_sel_systemPick.addEventListener("touchstart", handleSystemPickPage,false);
// homePage_sel_faq.addEventListener("touchstart", handleFaqPage,false);

function handleAllProductsPage() {
   gsap.to(homePage_selection,{duration:1,x:'-100%'});
//    gsap.to(homePage_sel_faq,{duration:0.5,opacity:0});
//    gsap.to(homePage_sel_systemPick,{duration:0.5,opacity:0});
//    gsap.to(homePage_sel_allProducts,{duration:0.5,opacity:0,delay:0.5});
    allProducts_selection.style.display= "block"
   gsap.to("#homePage",{display:'none',delay:0.5,onComplete:function(){
    gsap.fromTo("#allProducts_selection",{x:'100%'},{x:'0%',duration:1});
   }});
}

