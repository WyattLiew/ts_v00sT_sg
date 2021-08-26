var swiper2;

var homePage_selection = document.getElementById("homePage_selection");
var homePage_sel_allProducts = document.getElementById("homePage_sel_allProducts");
var homePage_sel_systemPick = document.getElementById("homePage_sel_systemPick");
var homePage_sel_faq = document.getElementById("homePage_sel_faq");

var allProducts_selection = document.getElementById("allProducts_selection");
var homePageLogo = document.getElementById('homePage_logo');
var homePage = document.getElementById('homePage');

// all product page
var allProducts_page = document.getElementById('allProducts_page');

// faq page
var faq_page = document.getElementById('faq_page');

homePage_sel_allProducts.addEventListener("touchstart", handleAllProductsPage,false);
// homePage_sel_systemPick.addEventListener("touchstart", handleSystemPickPage,false);
homePage_sel_faq.addEventListener("touchstart", handleFaqPage,false);


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

function handleFaqPage() {
   gsap.to(homePage_selection,{duration:1,x:'-100%'});
//    gsap.to(homePage_sel_faq,{duration:0.5,opacity:0});
//    gsap.to(homePage_sel_systemPick,{duration:0.5,opacity:0});
//    gsap.to(homePage_sel_allProducts,{duration:0.5,opacity:0,delay:0.5});
   // homePageLogo.style.display= "none";
   gsap.to("#homePage",{display:'none',delay:0.5,onComplete:function(){
      allProducts_selection.style.display= "none";
      homePageLogo.style.display= "none";
      homePage.style.display="none";
      faq_page.style.display= "block";
      faq_page.style.opacity= 1;
         swiper2 = new Swiper(".mySwiper2", {
           direction: "vertical",
           slidesPerView: "auto",
           freeMode: true,
           scrollbar: {
             el: ".swiper-scrollbar",
             draggable:true
           },
           mousewheel: true
         });
      gsap.fromTo(".faq__products",{opacity:0},{opacity:1,duration:0.7,delay:0.5});
      gsap.fromTo(".faq__details",{opacity:0},{opacity:1,duration:0.6,delay:0.6});
      gsap.fromTo("#faq_homeBtn",{opacity:0},{opacity:1,duration:0.7,delay:0.7});
   }});
}

