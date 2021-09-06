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

//Qna page
var qna_page = document.getElementById('qna_page');
var indicator1 = document.getElementById("indicator1");
var indicator2 = document.getElementById("indicator2");
var indicator3 = document.getElementById("indicator3");

// handle clickEnable
var all_btnClickable = true;

homePage_sel_allProducts.addEventListener("touchstart", handleAllProductsPage,false);
homePage_sel_systemPick.addEventListener("touchstart", handleSystemPickPage,false);
homePage_sel_faq.addEventListener("touchstart", handleFaqPage,false);

// mode 
var sel_mode =0;


function handleAllProductsPage(e) {
   if(all_btnClickable == true){
      sel_mode =1;
   gsap.to(homePage_selection,{duration:1,x:'-100%'});
//    gsap.to(homePage_sel_faq,{duration:0.5,opacity:0});
//    gsap.to(homePage_sel_systemPick,{duration:0.5,opacity:0});
//    gsap.to(homePage_sel_allProducts,{duration:0.5,opacity:0,delay:0.5});
    allProducts_selection.style.display= "block"
   gsap.to("#homePage",{display:'none',delay:0.5,onComplete:function(){
    gsap.fromTo("#allProducts_selection",{x:'100%'},{x:'0%',duration:1,onComplete:function(){
      all_btnClickable = true;
    }});
   }});
}
   all_btnClickable = false;
e.stopImmediatePropagation();
return false;
}

function handleFaqPage(e) {
   if(all_btnClickable == true){
      sel_mode=3;
   gsap.to(homePage_selection,{duration:1,x:'-100%'});
//    gsap.to(homePage_sel_faq,{duration:0.5,opacity:0});
//    gsap.to(homePage_sel_systemPick,{duration:0.5,opacity:0});
//    gsap.to(homePage_sel_allProducts,{duration:0.5,opacity:0,delay:0.5});
   // homePageLogo.style.display= "none";
   gsap.to("#homePage",{display:'none',delay:0.5,onComplete:function(){
      allProducts_selection.style.display= "none";
      gsap.to(homePageLogo,{opacity:0,duration:0.2,onComplete:function(){
         homePageLogo.style.display= "none";
         homePage.style.display="none";
         faq_page.style.display= "block";
         faq_page.style.opacity= 1;
      }});
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
         // random image show
      var num = Math.floor(Math.random() * 4);
      gsap.fromTo(".faq__products",{opacity:0},{opacity:1,duration:0.7,delay:0.5});
      gsap.fromTo(`.faq__product${num+1}`,{display:'none',opacity:0},{display:'block',opacity:1,duration:0.7,delay:0.5});
      gsap.fromTo(".faq__details",{opacity:0},{opacity:1,duration:0.6,delay:0.6});
      gsap.fromTo("#faq_homeBtn",{opacity:0},{opacity:1,duration:0.7,delay:0.7,onComplete:function(){
         all_btnClickable = true;
       }});
   }});
}
all_btnClickable = false;
e.stopImmediatePropagation();
return false;
}

function handleSystemPickPage(e) {
   if(all_btnClickable == true){
      sel_mode=2;
   gsap.to(homePage_selection,{duration:1,x:'-100%'});
//    gsap.to(homePage_sel_faq,{duration:0.5,opacity:0});
//    gsap.to(homePage_sel_systemPick,{duration:0.5,opacity:0});
//    gsap.to(homePage_sel_allProducts,{duration:0.5,opacity:0,delay:0.5});
   gsap.to("#homePage",{display:'none',delay:0.3,onComplete:function(){
   allProducts_selection.style.display= "none";
   gsap.to(homePageLogo,{opacity:0,duration:0.2,onComplete:function(){
      homePageLogo.style.display= "none";
   homePage.style.display="none";
   qna_page.style.display= "block";
   qna_page.style.opacity= 1;
   }});
   gsap.fromTo(".qna__header",{display:'none',opacity:0},{display:'block',opacity:1,duration:0.7,delay:0.3});
   gsap.fromTo(".qna__details",{opacity:0},{opacity:1,duration:0.6,delay:0.3});
   gsap.fromTo(".qna__indicator",{opacity:0},{opacity:1,duration:0.7,delay:1});
   indicator1.style.animation ="pulse 1s alternate infinite";
   gsap.to("#qna__q1",{display:"block",duration:0.7,delay:0.3,onComplete:function(){
      gsap.to("#qna__q1",{opacity:1,duration:1,onComplete:function(){
         all_btnClickable = true;
       }});
   }});
}});
   }
   all_btnClickable = false;
e.stopImmediatePropagation();
return false;
}