document.getElementById('item1').addEventListener('click',handlePage1,false);
document.getElementById('item2').addEventListener('click',handlePage2,false);
document.getElementById('item3').addEventListener('click',handlePage3,false);
document.getElementById('item4').addEventListener('click',handlePage4,false);
document.getElementById('item5').addEventListener('click',handlePage5,false);
document.getElementById('item6').addEventListener('click',handlePage6,false);
document.getElementById('item7').addEventListener('click',handlePage7,false);
document.getElementById('item8').addEventListener('click',handlePage8,false);
document.getElementById('item9').addEventListener('click',handlePage9,false);

// Home btn
function backToHomePage(mode){
    if(mode ==1){
    gsap.to(allProducts_page,{opacity:0,duration:0.5,onComplete:function(){
        clearAll();
        allProducts_page.style.display= "none";
        gsap.to("#homePage",{display:'block',onComplete:function(){
            homePageLogo.style.display= "block";
            homePageLogo.style.opacity= "1";
            gsap.to(homePage_selection,{duration:0.8,x:'0%'});
           }});
       }});
    } else if(mode ==2){
        gsap.to(faq_page,{opacity:0,duration:0.5,onComplete:function(){
            clearAll();
            faq_page.style.display= "none";
            swiper2.destroy();
            gsap.to("#homePage",{display:'block',onComplete:function(){
                homePageLogo.style.display= "block";
                homePageLogo.style.opacity= "1";
                gsap.to(homePage_selection,{duration:0.8,x:'0%'});
               }});
           }});
    }
}

function clearAll() {
    gsap.to("#page1",{zIndex:0});
    gsap.to("#page2",{zIndex:0});
    gsap.to("#page3",{zIndex:0});
    gsap.to("#page4",{zIndex:0});
    gsap.to("#page5",{zIndex:0});
    gsap.to("#page6",{zIndex:0});
    gsap.to("#page7",{zIndex:0});
    gsap.to("#page8",{zIndex:0});
    gsap.to("#page9",{zIndex:0});

    gsap.to("#list__img1",{height:'90px'});
    gsap.to("#list__img1 img",{top:'5px'});
    gsap.to("#list__img2",{height:'90px'});
    gsap.to("#list__img2 img",{top:'5px'});
    gsap.to("#list__img3",{height:'90px'});
    gsap.to("#list__img3 img",{top:'5px'});
    gsap.to("#list__img4",{height:'90px'});
    gsap.to("#list__img4 img",{top:'5px'});
    gsap.to("#list__img5",{height:'90px'});
    gsap.to("#list__img5 img",{top:'5px'});
    gsap.to("#list__img6",{height:'90px'});
    gsap.to("#list__img6 img",{top:'5px'});
    gsap.to("#list__img7",{height:'90px'});
    gsap.to("#list__img7 img",{top:'5px'});
    gsap.to("#list__img8",{height:'90px'});
    gsap.to("#list__img8 img",{top:'5px'});
    gsap.to("#list__img9",{height:'90px'});
    gsap.to("#list__img9 img",{top:'5px'});

}

function handlePage1(){
    homePageLogo.style.display= "none";
    allProducts_selection.style.display= "none";
    allProducts_page.style.opacity= "1";
    allProducts_page.style.display= "flex";
    gsap.to("#page1",{duration:0,zIndex:11,opacity: 1});
    gsap.fromTo("#products_list",{y:'-100%'},{y:'0%',duration:1,delay:0.3});
    gsap.fromTo("#page1_product",{opacity:0},{opacity:1,duration:1,delay:0.5});
    gsap.fromTo("#page1_text",{opacity:0},{opacity:1,duration:0.5,delay:0.7});
    gsap.fromTo("#locateMe_btn1",{opacity:0},{opacity:1,duration:0.5,delay:1});
    gsap.fromTo("#allProducts_homeBtn",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo(".pages__swipeIcon",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo("#list__img1",{height:'90px'},{height:'110px',duration:0.5,delay:1.2});
    gsap.fromTo("#list__img1 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2});
}

function handlePage2(){
    homePageLogo.style.display= "none";
    allProducts_selection.style.display= "none";
    allProducts_page.style.opacity= "1";
    allProducts_page.style.display= "flex";

    gsap.to("#page2",{duration:0,zIndex:11,opacity: 1});
    gsap.fromTo("#products_list",{y:'-100%'},{y:'0%',duration:1,delay:0.3});
    gsap.fromTo("#page2_product",{opacity:0},{opacity:1,duration:1,delay:0.5});
    gsap.fromTo("#page2_text",{opacity:0},{opacity:1,duration:0.5,delay:0.7});
    gsap.fromTo("#locateMe_btn2",{opacity:0},{opacity:1,duration:0.5,delay:1});
    gsap.fromTo("#allProducts_homeBtn",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo(".pages__swipeIcon",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo("#list__img2",{height:'90px'},{height:'110px',duration:0.5,delay:1.2});
    gsap.fromTo("#list__img2 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2});
}

function handlePage3(){
    homePageLogo.style.display= "none";
    allProducts_selection.style.display= "none";
    allProducts_page.style.opacity= "1"
    allProducts_page.style.display= "flex"
    gsap.to("#page3",{duration:0,zIndex:11,opacity: 1});
    gsap.fromTo("#products_list",{y:'-100%'},{y:'0%',duration:1,delay:0.3});
    gsap.fromTo("#page3_product",{opacity:0},{opacity:1,duration:1,delay:0.5});
    gsap.fromTo("#page3_text",{opacity:0},{opacity:1,duration:0.5,delay:0.7});
    gsap.fromTo("#locateMe_btn3",{opacity:0},{opacity:1,duration:0.5,delay:1});
    gsap.fromTo("#allProducts_homeBtn",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo(".pages__swipeIcon",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo("#list__img3",{height:'90px'},{height:'110px',duration:0.5,delay:1.2});
    gsap.fromTo("#list__img3 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2});
}

function handlePage4(){
    homePageLogo.style.display= "none";
    allProducts_selection.style.display= "none";
    allProducts_page.style.opacity= "1"
    allProducts_page.style.display= "flex"
    gsap.to("#page4",{duration:0,zIndex:11,opacity: 1});
    gsap.fromTo("#products_list",{y:'-100%'},{y:'0%',duration:1,delay:0.3});
    gsap.fromTo("#page4_product",{opacity:0},{opacity:1,duration:1,delay:0.5});
    gsap.fromTo("#page4_text",{opacity:0},{opacity:1,duration:0.5,delay:0.7});
    gsap.fromTo("#locateMe_btn4",{opacity:0},{opacity:1,duration:0.5,delay:1});
    gsap.fromTo("#allProducts_homeBtn",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo(".pages__swipeIcon",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo("#list__img4",{height:'90px'},{height:'110px',duration:0.5,delay:1.2});
    gsap.fromTo("#list__img4 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2});
}

function handlePage5(){
    homePageLogo.style.display= "none";
    allProducts_selection.style.display= "none";
    allProducts_page.style.opacity= "1"
    allProducts_page.style.display= "flex"
    gsap.to("#page5",{duration:0,zIndex:11,opacity: 1});
    gsap.fromTo("#products_list",{y:'-100%'},{y:'0%',duration:1,delay:0.3});
    gsap.fromTo("#page5_product",{opacity:0},{opacity:1,duration:1,delay:0.5});
    gsap.fromTo("#page5_text",{opacity:0},{opacity:1,duration:0.5,delay:0.7});
    gsap.fromTo("#locateMe_btn5",{opacity:0},{opacity:1,duration:0.5,delay:1});
    gsap.fromTo("#allProducts_homeBtn",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo(".pages__swipeIcon",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo("#list__img5",{height:'90px'},{height:'110px',duration:0.5,delay:1.2});
    gsap.fromTo("#list__img5 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2});
}

function handlePage6(){
    homePageLogo.style.display= "none";
    allProducts_selection.style.display= "none";
    allProducts_page.style.opacity= "1"
    allProducts_page.style.display= "flex"
    gsap.to("#page6",{duration:0,zIndex:11,opacity: 1});
    gsap.fromTo("#products_list",{y:'-100%'},{y:'0%',duration:1,delay:0.3});
    gsap.fromTo("#page6_product",{opacity:0},{opacity:1,duration:1,delay:0.5});
    gsap.fromTo("#page6_text",{opacity:0},{opacity:1,duration:0.5,delay:0.7});
    gsap.fromTo("#locateMe_btn6",{opacity:0},{opacity:1,duration:0.5,delay:1});
    gsap.fromTo("#allProducts_homeBtn",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo(".pages__swipeIcon",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo("#list__img6",{height:'90px'},{height:'110px',duration:0.5,delay:1.2});
    gsap.fromTo("#list__img6 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2});
}

function handlePage7(){
    homePageLogo.style.display= "none";
    allProducts_selection.style.display= "none";
    allProducts_page.style.opacity= "1"
    allProducts_page.style.display= "flex"
    gsap.to("#page7",{duration:0,zIndex:11,opacity: 1});
    gsap.fromTo("#products_list",{y:'-100%'},{y:'0%',duration:1,delay:0.3});
    gsap.fromTo("#page7_product",{opacity:0},{opacity:1,duration:1,delay:0.5});
    gsap.fromTo("#page7_text",{opacity:0},{opacity:1,duration:0.5,delay:0.7});
    gsap.fromTo("#locateMe_btn7",{opacity:0},{opacity:1,duration:0.5,delay:1});
    gsap.fromTo("#allProducts_homeBtn",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo(".pages__swipeIcon",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo("#list__img7",{height:'90px'},{height:'110px',duration:0.5,delay:1.2});
    gsap.fromTo("#list__img7 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2});
}

function handlePage8(){
    homePageLogo.style.display= "none";
    allProducts_selection.style.display= "none";
    allProducts_page.style.opacity= "1"
    allProducts_page.style.display= "flex"
    gsap.to("#page8",{duration:0,zIndex:11,opacity: 1});
    gsap.fromTo("#products_list",{y:'-100%'},{y:'0%',duration:1,delay:0.3});
    gsap.fromTo("#page8_product",{opacity:0},{opacity:1,duration:1,delay:0.5});
    gsap.fromTo("#page8_text",{opacity:0},{opacity:1,duration:0.5,delay:0.7});
    gsap.fromTo("#locateMe_btn8",{opacity:0},{opacity:1,duration:0.5,delay:1});
    gsap.fromTo("#allProducts_homeBtn",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo(".pages__swipeIcon",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo("#list__img8",{height:'90px'},{height:'110px',duration:0.5,delay:1.2});
    gsap.fromTo("#list__img8 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2});
}

function handlePage9(){
    homePageLogo.style.display= "none";
    allProducts_selection.style.display= "none";
    allProducts_page.style.opacity= "1"
    allProducts_page.style.display= "flex"
    gsap.to("#page9",{duration:0,zIndex:11,opacity: 1});
    gsap.fromTo("#products_list",{y:'-100%'},{y:'0%',duration:1,delay:0.3});
    gsap.fromTo("#page9_product",{opacity:0},{opacity:1,duration:1,delay:0.5});
    gsap.fromTo("#page9_text",{opacity:0},{opacity:1,duration:0.5,delay:0.7});
    gsap.fromTo("#locateMe_btn9",{opacity:0},{opacity:1,duration:0.5,delay:1});
    gsap.fromTo("#allProducts_homeBtn",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo(".pages__swipeIcon",{opacity:0},{opacity:1,duration:0.5,delay:1.2});
    gsap.fromTo("#list__img9",{height:'90px'},{height:'110px',duration:0.5,delay:1.2});
    gsap.fromTo("#list__img9 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2});
}































var ts_hp1 = document.getElementById('touchSurface_page1');
var ts_hp2 = document.getElementById('touchSurface_page2');
var ts_hp3 = document.getElementById('touchSurface_page3');
var ts_hp4 = document.getElementById('touchSurface_page4');
var ts_hp5 = document.getElementById('touchSurface_page5');
var ts_hp6 = document.getElementById('touchSurface_page6');
var ts_hp7 = document.getElementById('touchSurface_page7');
var ts_hp8 = document.getElementById('touchSurface_page8');
var ts_hp9 = document.getElementById('touchSurface_page9');


swipedetect(ts_hp1,function(swipedir){
    if(swipedir =='left'){
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page9",{zIndex:0});
        gsap.to("#page2",{zIndex:11,opacity: 1});
        gsap.to("#list__img1",{height:'90px'});
        gsap.to("#list__img1 img",{top:'5px'});
        gsap.fromTo("#list__img2",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img2 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
    } else if(swipedir =='right'){
            gsap.to("#page1",{zIndex:0});
            gsap.to("#page2",{zIndex:0});
            gsap.to("#page9",{zIndex:11,opacity: 1});
            gsap.to("#list__img1",{height:'90px'});
            gsap.to("#list__img1 img",{top:'5px'});
            gsap.fromTo("#list__img9",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
            gsap.fromTo("#list__img9 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
    }
});

swipedetect(ts_hp2,function(swipedir){
    if(swipedir =='left'){
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page3",{zIndex:11,opacity: 1});
        gsap.to("#list__img2",{height:'90px'});
        gsap.to("#list__img2 img",{top:'5px'});
        gsap.fromTo("#list__img3",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img3 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

    } else if(swipedir =='right'){
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page1",{zIndex:11,opacity: 1});
        gsap.to("#list__img2",{height:'90px'});
        gsap.to("#list__img2 img",{top:'5px'});
        gsap.fromTo("#list__img1",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img1 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
    }
});

swipedetect(ts_hp3,function(swipedir){
    if(swipedir =='left'){
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page4",{zIndex:11,opacity: 1});
        gsap.to("#list__img3",{height:'90px'});
        gsap.to("#list__img3 img",{top:'5px'});
        gsap.fromTo("#list__img4",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img4 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

    } else if(swipedir =='right'){
            gsap.to("#page3",{zIndex:0});
            gsap.to("#page4",{zIndex:0});
            gsap.to("#page2",{zIndex:11,opacity: 1});
            gsap.to("#list__img3",{height:'90px'});
        gsap.to("#list__img3 img",{top:'5px'});
        gsap.fromTo("#list__img2",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img2 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
    }
});

swipedetect(ts_hp4,function(swipedir){
    if(swipedir =='left'){
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page4",{zIndex:0});
        gsap.to("#page5",{zIndex:11,opacity: 1});
        gsap.to("#list__img4",{height:'90px'});
        gsap.to("#list__img4 img",{top:'5px'});
        gsap.fromTo("#list__img5",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img5 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

    } else if(swipedir =='right'){
            gsap.to("#page5",{zIndex:0});
            gsap.to("#page4",{zIndex:0});
            gsap.to("#page3",{zIndex:11,opacity: 1});
            gsap.to("#list__img4",{height:'90px'});
        gsap.to("#list__img4 img",{top:'5px'});
        gsap.fromTo("#list__img3",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img3 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
    }
});

swipedetect(ts_hp5,function(swipedir){
    if(swipedir =='left'){
        gsap.to("#page5",{zIndex:0});
        gsap.to("#page4",{zIndex:0});
        gsap.to("#page6",{zIndex:11,opacity: 1});
        gsap.to("#list__img5",{height:'90px'});
        gsap.to("#list__img5 img",{top:'5px'});
        gsap.fromTo("#list__img6",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img6 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

    } else if(swipedir =='right'){
            gsap.to("#page5",{zIndex:0});
            gsap.to("#page6",{zIndex:0});
            gsap.to("#page4",{zIndex:11,opacity: 1});
            gsap.to("#list__img5",{height:'90px'});
        gsap.to("#list__img5 img",{top:'5px'});
        gsap.fromTo("#list__img4",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img4 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
    }
});

swipedetect(ts_hp6,function(swipedir){
    if(swipedir =='left'){
        gsap.to("#page5",{zIndex:0});
        gsap.to("#page6",{zIndex:0});
        gsap.to("#page7",{zIndex:11,opacity: 1});
        gsap.to("#list__img6",{height:'90px'});
        gsap.to("#list__img6 img",{top:'5px'});
        gsap.fromTo("#list__img7",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img7 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

    } else if(swipedir =='right'){
            gsap.to("#page7",{zIndex:0});
            gsap.to("#page6",{zIndex:0});
            gsap.to("#page5",{zIndex:11,opacity: 1});
            gsap.to("#list__img6",{height:'90px'});
        gsap.to("#list__img6 img",{top:'5px'});
        gsap.fromTo("#list__img5",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img5 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
    }
});

swipedetect(ts_hp7,function(swipedir){
    if(swipedir =='left'){
        gsap.to("#page6",{zIndex:0});
        gsap.to("#page7",{zIndex:0});
        gsap.to("#page8",{zIndex:11,opacity: 1});
        gsap.to("#list__img7",{height:'90px'});
        gsap.to("#list__img7 img",{top:'5px'});
        gsap.fromTo("#list__img8",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img8 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

    } else if(swipedir =='right'){
            gsap.to("#page7",{zIndex:0});
            gsap.to("#page8",{zIndex:0});
            gsap.to("#page6",{zIndex:11,opacity: 1});
            gsap.to("#list__img7",{height:'90px'});
        gsap.to("#list__img7 img",{top:'5px'});
        gsap.fromTo("#list__img6",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img6 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
    }
});

swipedetect(ts_hp8,function(swipedir){
    if(swipedir =='left'){
        gsap.to("#page7",{zIndex:0});
        gsap.to("#page8",{zIndex:0});
        gsap.to("#page9",{zIndex:11,opacity: 1});
        gsap.to("#list__img8",{height:'90px'});
        gsap.to("#list__img8 img",{top:'5px'});
        gsap.fromTo("#list__img9",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img9 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

    } else if(swipedir =='right'){
            gsap.to("#page8",{zIndex:0});
            gsap.to("#page9",{zIndex:0});
            gsap.to("#page7",{zIndex:11,opacity:1});
            gsap.to("#list__img8",{height:'90px'});
        gsap.to("#list__img8 img",{top:'5px'});
        gsap.fromTo("#list__img7",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img7 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
    }
});

swipedetect(ts_hp9,function(swipedir){
    if(swipedir =='left'){
        gsap.to("#page8",{zIndex:0});
        gsap.to("#page9",{zIndex:0});
        gsap.to("#page1",{zIndex:11,opacity:1});
        gsap.to("#list__img9",{height:'90px'});
        gsap.to("#list__img9 img",{top:'5px'});
        gsap.fromTo("#list__img1",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img1 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
    } else if(swipedir =='right'){
        gsap.to("#page9",{zIndex:0});
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page8",{zIndex:11,opacity:1});
        gsap.to("#list__img9",{height:'90px'});
        gsap.to("#list__img9 img",{top:'5px'});
        gsap.fromTo("#list__img8",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img8 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
}
});


function swipedetect(el, callback){
  
    var touchsurface = el,
    swipedir,
    startX,
    startY,
    distX,
    distY,
    threshold = 150, //required min distance traveled to be considered swipe
    restraint = 100, // maximum distance allowed at the same time in perpendicular direction
    allowedTime = 300, // maximum time allowed to travel that distance
    elapsedTime,
    startTime,
    handleswipe = callback || function(swipedir){}
  
    touchsurface.addEventListener('touchstart', function(e){
        var touchobj = e.changedTouches[0]
        swipedir = 'none'
        dist = 0
        startX = touchobj.pageX
        startY = touchobj.pageY
        startTime = new Date().getTime() // record time when finger first makes contact with surface
        e.preventDefault()
    }, false)
  
    touchsurface.addEventListener('touchmove', function(e){
        e.preventDefault() // prevent scrolling when inside DIV
    }, false)
  
    touchsurface.addEventListener('touchend', function(e){
        var touchobj = e.changedTouches[0]
        distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
        distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
        elapsedTime = new Date().getTime() - startTime // get time elapsed
        if (elapsedTime <= allowedTime){ // first condition for awipe met
            if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){ // 2nd condition for horizontal swipe met
                swipedir = (distX < 0)? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
            }
            else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){ // 2nd condition for vertical swipe met
                swipedir = (distY < 0)? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
            }
        }
        handleswipe(swipedir)
        e.preventDefault()
    }, false)
}
