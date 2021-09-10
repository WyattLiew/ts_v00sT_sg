document.getElementById('item1').addEventListener('click',handlePage1,false);
document.getElementById('item2').addEventListener('click',handlePage2,false);
document.getElementById('item3').addEventListener('click',handlePage3,false);
document.getElementById('item4').addEventListener('click',handlePage4,false);
document.getElementById('item5').addEventListener('click',handlePage5,false);
document.getElementById('item6').addEventListener('click',handlePage6,false);
document.getElementById('item7').addEventListener('click',handlePage7,false);
document.getElementById('item8').addEventListener('click',handlePage8,false);
document.getElementById('item9').addEventListener('click',handlePage9,false);


var list__img1 = document.getElementById('list__img1');
var list__img2 = document.getElementById('list__img2');
var list__img3 = document.getElementById('list__img3');
var list__img4 = document.getElementById('list__img4');
var list__img5 = document.getElementById('list__img5');
var list__img6 = document.getElementById('list__img6');
var list__img7 = document.getElementById('list__img7');
var list__img8 = document.getElementById('list__img8');
var list__img9 = document.getElementById('list__img9');

list__img1.addEventListener('click',handlePageByList1,false);
list__img2.addEventListener('click',handlePageByList2,false);
list__img3.addEventListener('click',handlePageByList3,false);
list__img4.addEventListener('click',handlePageByList4,false);
list__img5.addEventListener('click',handlePageByList5,false);
list__img6.addEventListener('click',handlePageByList6,false);
list__img7.addEventListener('click',handlePageByList7,false);
list__img8.addEventListener('click',handlePageByList8,false);
list__img9.addEventListener('click',handlePageByList9,false);

// Home btn
function backToHomePage(e,mode){
    if(all_btnClickable == true){
    if(mode ==1){
    gsap.to(allProducts_page,{opacity:0,duration:0.5,onComplete:function(){
        clearAll();
            if(lighting==true){
            ipcRenderer.send("lights:trigger", "POFF");
            lighting=false;
            }
            swiper1.destroy();
        allProducts_page.style.display= "none";
        gsap.to("#homePage",{display:'block',onComplete:function(){
            homePageLogo.style.display= "block";
            homePageLogo.style.opacity= "1";
            gsap.to(homePage_selection,{duration:0.8,x:'0%',onComplete:function(){
                all_btnClickable = true;
              }});
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
                gsap.to(homePage_selection,{duration:0.8,x:'0%',onComplete:function(){
                    all_btnClickable = true;
                  }});
               }});
           }});
    }
}
all_btnClickable = false;
e.stopImmediatePropagation();
return false;
}

function clearAll() {
    sel_mode =0;
    page_num =0;
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

    gsap.to("#result_group_1",{display:"none",opacity:0});
    gsap.to("#result_group_2",{display:"none",opacity:0});
    gsap.to("#result_group_3",{display:"none",opacity:0});
    gsap.to("#result_group_4",{display:"none",opacity:0});
    gsap.to("#result_group_5",{display:"none",opacity:0});
    gsap.to("#result_group_6",{display:"none",opacity:0});
    gsap.to("#result_group_7",{display:"none",opacity:0});
    gsap.to("#result_group_8",{display:"none",opacity:0});
    gsap.to("#result_group_9",{display:"none",opacity:0});
    gsap.to("#result_group_10",{display:"none",opacity:0});
    gsap.to("#result_group_11",{display:"none",opacity:0});
    gsap.to("#result_group_12",{display:"none",opacity:0});
    gsap.to("#result_group_13",{display:"none",opacity:0});

    gsap.to("#locateMe_btn1_text",{display:'none',onComplete:function(){
        gsap.to("#locateMe_btn1",{display:'block'});
    }});

    gsap.to("#locateMe_btn2_text",{display:'none',onComplete:function(){
        gsap.to("#locateMe_btn2",{display:'block'});
    }});

    gsap.to("#locateMe_btn3_text",{display:'none',onComplete:function(){
        gsap.to("#locateMe_btn3",{display:'block'});
    }});

    gsap.to("#locateMe_btn4_text",{display:'none',onComplete:function(){
        gsap.to("#locateMe_btn4",{display:'block'});
    }});

    gsap.to("#locateMe_btn5_text",{display:'none',onComplete:function(){
        gsap.to("#locateMe_btn5",{display:'block'});
    }});

    gsap.to("#locateMe_btn6_text",{display:'none',onComplete:function(){
        gsap.to("#locateMe_btn6",{display:'block'});
    }});

    gsap.to("#locateMe_btn7_text",{display:'none',onComplete:function(){
        gsap.to("#locateMe_btn7",{display:'block'});
    }});

    gsap.to("#locateMe_btn8_text",{display:'none',onComplete:function(){
        gsap.to("#locateMe_btn8",{display:'block'});
    }});

    gsap.to("#locateMe_btn9_text",{display:'none',onComplete:function(){
        gsap.to("#locateMe_btn9",{display:'block'});
    }});

    gsap.to(`.faq__product1`,{display:'none'});
    gsap.to(`.faq__product2`,{display:'none'});
    gsap.to(`.faq__product3`,{display:'none'});
    gsap.to(`.faq__product4`,{display:'none'});
}

function handlePage1(e){
    if(all_btnClickable == true){
        page_num = 1;
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
    gsap.fromTo("#list__img1 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2,onComplete:function(){
        all_btnClickable = true;
      }});
    }
    all_btnClickable = false;
    e.stopImmediatePropagation();
return false;
}

function handlePage2(){
    if(all_btnClickable == true){
        page_num = 2;
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
    gsap.fromTo("#list__img2 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2,onComplete:function(){
        all_btnClickable = true;
      }});
    }
    all_btnClickable = false;
}

function handlePage3(){
    if(all_btnClickable == true){
        page_num = 3;
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
    gsap.fromTo("#list__img3 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2,onComplete:function(){
        all_btnClickable = true;
      }});
    }
    all_btnClickable = false;
}

function handlePage4(){
    if(all_btnClickable == true){
        page_num = 4;
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
    gsap.fromTo("#list__img4 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2,onComplete:function(){
        all_btnClickable = true;
      }});
    }
    all_btnClickable = false;
}

function handlePage5(){
    if(all_btnClickable == true){
        page_num = 5;
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
    gsap.fromTo("#list__img5 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2,onComplete:function(){
        all_btnClickable = true;
      }});
    }
    all_btnClickable = false;
}

function handlePage6(){
    if(all_btnClickable == true){
        page_num = 6;
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
    gsap.fromTo("#list__img6 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2,onComplete:function(){
        all_btnClickable = true;
      }});
    }
    all_btnClickable = false;
}

function handlePage7(){
    if(all_btnClickable == true){
        page_num = 7;
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
    gsap.fromTo("#list__img7 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2,onComplete:function(){
        all_btnClickable = true;
      }});
    }
    all_btnClickable = false;
}

function handlePage8(){
    if(all_btnClickable == true){
        page_num = 8;
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
    gsap.fromTo("#list__img8 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2,onComplete:function(){
        all_btnClickable = true;
      }});
    }
    all_btnClickable = false;
}

function handlePage9(){
    if(all_btnClickable == true){
        page_num = 9;
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
    gsap.fromTo("#list__img9 img",{top:'5px'},{top:'20px',duration:0.5,delay:1.2,onComplete:function(){
        all_btnClickable = true;
      }});
    }
    all_btnClickable = false;
}





// list item handler

function handlePageByList1() {
    if(page_num !==1){
        page_num = 1;
    if(all_btnClickable == true){
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page4",{zIndex:0});
        gsap.to("#page5",{zIndex:0});
        gsap.to("#page6",{zIndex:0});
        gsap.to("#page7",{zIndex:0});
        gsap.to("#page8",{zIndex:0});
        gsap.to("#page9",{zIndex:0});
        gsap.to("#page1",{zIndex:11,opacity: 1});

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

        gsap.fromTo("#list__img1",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img1 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

        gsap.to("#locateMe_btn1_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn2_text",{display:'none'});
            gsap.to("#locateMe_btn3_text",{display:'none'});
            gsap.to("#locateMe_btn4_text",{display:'none'});
            gsap.to("#locateMe_btn5_text",{display:'none'});
            gsap.to("#locateMe_btn6_text",{display:'none'});
            gsap.to("#locateMe_btn7_text",{display:'none'});
            gsap.to("#locateMe_btn8_text",{display:'none'});
            gsap.to("#locateMe_btn9_text",{display:'none'});
            
            gsap.to("#locateMe_btn1",{display:'block'});
            gsap.to("#locateMe_btn2",{display:'block'});
            gsap.to("#locateMe_btn3",{display:'block'});
            gsap.to("#locateMe_btn4",{display:'block'});
            gsap.to("#locateMe_btn5",{display:'block'});
            gsap.to("#locateMe_btn6",{display:'block'});
            gsap.to("#locateMe_btn7",{display:'block'});
            gsap.to("#locateMe_btn8",{display:'block'});
            gsap.to("#locateMe_btn9",{display:'block'});

            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
            all_btnClickable = true;
        }});

    }
    all_btnClickable = false;
}
}

function handlePageByList2() {
    if(page_num !==2){
        page_num = 2;
    if(all_btnClickable == true){
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page4",{zIndex:0});
        gsap.to("#page5",{zIndex:0});
        gsap.to("#page6",{zIndex:0});
        gsap.to("#page7",{zIndex:0});
        gsap.to("#page8",{zIndex:0});
        gsap.to("#page9",{zIndex:0});
        gsap.to("#page2",{zIndex:11,opacity: 1});

        gsap.to("#list__img1",{height:'90px'});
        gsap.to("#list__img1 img",{top:'5px'});
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

        gsap.fromTo("#list__img2",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img2 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

        gsap.to("#locateMe_btn1_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn2_text",{display:'none'});
            gsap.to("#locateMe_btn3_text",{display:'none'});
            gsap.to("#locateMe_btn4_text",{display:'none'});
            gsap.to("#locateMe_btn5_text",{display:'none'});
            gsap.to("#locateMe_btn6_text",{display:'none'});
            gsap.to("#locateMe_btn7_text",{display:'none'});
            gsap.to("#locateMe_btn8_text",{display:'none'});
            gsap.to("#locateMe_btn9_text",{display:'none'});
            
            gsap.to("#locateMe_btn1",{display:'block'});
            gsap.to("#locateMe_btn2",{display:'block'});
            gsap.to("#locateMe_btn3",{display:'block'});
            gsap.to("#locateMe_btn4",{display:'block'});
            gsap.to("#locateMe_btn5",{display:'block'});
            gsap.to("#locateMe_btn6",{display:'block'});
            gsap.to("#locateMe_btn7",{display:'block'});
            gsap.to("#locateMe_btn8",{display:'block'});
            gsap.to("#locateMe_btn9",{display:'block'});

            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
            all_btnClickable = true;
        }});

    }
    all_btnClickable = false;
}
}

function handlePageByList3() {
    if(page_num !==3){
        page_num = 3;
    if(all_btnClickable == true){
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page4",{zIndex:0});
        gsap.to("#page5",{zIndex:0});
        gsap.to("#page6",{zIndex:0});
        gsap.to("#page7",{zIndex:0});
        gsap.to("#page8",{zIndex:0});
        gsap.to("#page9",{zIndex:0});
        gsap.to("#page3",{zIndex:11,opacity: 1});

        gsap.to("#list__img2",{height:'90px'});
        gsap.to("#list__img2 img",{top:'5px'});
        gsap.to("#list__img1",{height:'90px'});
        gsap.to("#list__img1 img",{top:'5px'});
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

        gsap.fromTo("#list__img3",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img3 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

        gsap.to("#locateMe_btn1_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn2_text",{display:'none'});
            gsap.to("#locateMe_btn3_text",{display:'none'});
            gsap.to("#locateMe_btn4_text",{display:'none'});
            gsap.to("#locateMe_btn5_text",{display:'none'});
            gsap.to("#locateMe_btn6_text",{display:'none'});
            gsap.to("#locateMe_btn7_text",{display:'none'});
            gsap.to("#locateMe_btn8_text",{display:'none'});
            gsap.to("#locateMe_btn9_text",{display:'none'});
            
            gsap.to("#locateMe_btn1",{display:'block'});
            gsap.to("#locateMe_btn2",{display:'block'});
            gsap.to("#locateMe_btn3",{display:'block'});
            gsap.to("#locateMe_btn4",{display:'block'});
            gsap.to("#locateMe_btn5",{display:'block'});
            gsap.to("#locateMe_btn6",{display:'block'});
            gsap.to("#locateMe_btn7",{display:'block'});
            gsap.to("#locateMe_btn8",{display:'block'});
            gsap.to("#locateMe_btn9",{display:'block'});

            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
            all_btnClickable = true;
        }});

    }
    all_btnClickable = false;
}
}

function handlePageByList4() {
    if(page_num !==4){
        page_num = 4;
    if(all_btnClickable == true){
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page5",{zIndex:0});
        gsap.to("#page6",{zIndex:0});
        gsap.to("#page7",{zIndex:0});
        gsap.to("#page8",{zIndex:0});
        gsap.to("#page9",{zIndex:0});
        gsap.to("#page4",{zIndex:11,opacity: 1});

        gsap.to("#list__img2",{height:'90px'});
        gsap.to("#list__img2 img",{top:'5px'});
        gsap.to("#list__img3",{height:'90px'});
        gsap.to("#list__img3 img",{top:'5px'});
        gsap.to("#list__img1",{height:'90px'});
        gsap.to("#list__img1 img",{top:'5px'});
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

        gsap.fromTo("#list__img4",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img4 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

        gsap.to("#locateMe_btn1_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn2_text",{display:'none'});
            gsap.to("#locateMe_btn3_text",{display:'none'});
            gsap.to("#locateMe_btn4_text",{display:'none'});
            gsap.to("#locateMe_btn5_text",{display:'none'});
            gsap.to("#locateMe_btn6_text",{display:'none'});
            gsap.to("#locateMe_btn7_text",{display:'none'});
            gsap.to("#locateMe_btn8_text",{display:'none'});
            gsap.to("#locateMe_btn9_text",{display:'none'});
            
            gsap.to("#locateMe_btn1",{display:'block'});
            gsap.to("#locateMe_btn2",{display:'block'});
            gsap.to("#locateMe_btn3",{display:'block'});
            gsap.to("#locateMe_btn4",{display:'block'});
            gsap.to("#locateMe_btn5",{display:'block'});
            gsap.to("#locateMe_btn6",{display:'block'});
            gsap.to("#locateMe_btn7",{display:'block'});
            gsap.to("#locateMe_btn8",{display:'block'});
            gsap.to("#locateMe_btn9",{display:'block'});

            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
            all_btnClickable = true;
        }});

    }
    all_btnClickable = false;
}
}

function handlePageByList5() {
    if(page_num !==5){
        page_num = 5;
    if(all_btnClickable == true){
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page4",{zIndex:0});
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page6",{zIndex:0});
        gsap.to("#page7",{zIndex:0});
        gsap.to("#page8",{zIndex:0});
        gsap.to("#page9",{zIndex:0});
        gsap.to("#page5",{zIndex:11,opacity: 1});

        gsap.to("#list__img2",{height:'90px'});
        gsap.to("#list__img2 img",{top:'5px'});
        gsap.to("#list__img3",{height:'90px'});
        gsap.to("#list__img3 img",{top:'5px'});
        gsap.to("#list__img4",{height:'90px'});
        gsap.to("#list__img4 img",{top:'5px'});
        gsap.to("#list__img1",{height:'90px'});
        gsap.to("#list__img1 img",{top:'5px'});
        gsap.to("#list__img6",{height:'90px'});
        gsap.to("#list__img6 img",{top:'5px'});
        gsap.to("#list__img7",{height:'90px'});
        gsap.to("#list__img7 img",{top:'5px'});
        gsap.to("#list__img8",{height:'90px'});
        gsap.to("#list__img8 img",{top:'5px'});
        gsap.to("#list__img9",{height:'90px'});
        gsap.to("#list__img9 img",{top:'5px'});

        gsap.fromTo("#list__img5",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img5 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

        gsap.to("#locateMe_btn1_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn2_text",{display:'none'});
            gsap.to("#locateMe_btn3_text",{display:'none'});
            gsap.to("#locateMe_btn4_text",{display:'none'});
            gsap.to("#locateMe_btn5_text",{display:'none'});
            gsap.to("#locateMe_btn6_text",{display:'none'});
            gsap.to("#locateMe_btn7_text",{display:'none'});
            gsap.to("#locateMe_btn8_text",{display:'none'});
            gsap.to("#locateMe_btn9_text",{display:'none'});
            
            gsap.to("#locateMe_btn1",{display:'block'});
            gsap.to("#locateMe_btn2",{display:'block'});
            gsap.to("#locateMe_btn3",{display:'block'});
            gsap.to("#locateMe_btn4",{display:'block'});
            gsap.to("#locateMe_btn5",{display:'block'});
            gsap.to("#locateMe_btn6",{display:'block'});
            gsap.to("#locateMe_btn7",{display:'block'});
            gsap.to("#locateMe_btn8",{display:'block'});
            gsap.to("#locateMe_btn9",{display:'block'});

            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
            all_btnClickable = true;
        }});

    }
    all_btnClickable = false;
}
}

function handlePageByList6() {
    if(page_num !==6){
        page_num = 6;
    if(all_btnClickable == true){
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page4",{zIndex:0});
        gsap.to("#page5",{zIndex:0});
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page7",{zIndex:0});
        gsap.to("#page8",{zIndex:0});
        gsap.to("#page9",{zIndex:0});
        gsap.to("#page6",{zIndex:11,opacity: 1});

        gsap.to("#list__img2",{height:'90px'});
        gsap.to("#list__img2 img",{top:'5px'});
        gsap.to("#list__img3",{height:'90px'});
        gsap.to("#list__img3 img",{top:'5px'});
        gsap.to("#list__img4",{height:'90px'});
        gsap.to("#list__img4 img",{top:'5px'});
        gsap.to("#list__img5",{height:'90px'});
        gsap.to("#list__img5 img",{top:'5px'});
        gsap.to("#list__img1",{height:'90px'});
        gsap.to("#list__img1 img",{top:'5px'});
        gsap.to("#list__img7",{height:'90px'});
        gsap.to("#list__img7 img",{top:'5px'});
        gsap.to("#list__img8",{height:'90px'});
        gsap.to("#list__img8 img",{top:'5px'});
        gsap.to("#list__img9",{height:'90px'});
        gsap.to("#list__img9 img",{top:'5px'});

        gsap.fromTo("#list__img6",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img6 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

        gsap.to("#locateMe_btn1_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn2_text",{display:'none'});
            gsap.to("#locateMe_btn3_text",{display:'none'});
            gsap.to("#locateMe_btn4_text",{display:'none'});
            gsap.to("#locateMe_btn5_text",{display:'none'});
            gsap.to("#locateMe_btn6_text",{display:'none'});
            gsap.to("#locateMe_btn7_text",{display:'none'});
            gsap.to("#locateMe_btn8_text",{display:'none'});
            gsap.to("#locateMe_btn9_text",{display:'none'});
            
            gsap.to("#locateMe_btn1",{display:'block'});
            gsap.to("#locateMe_btn2",{display:'block'});
            gsap.to("#locateMe_btn3",{display:'block'});
            gsap.to("#locateMe_btn4",{display:'block'});
            gsap.to("#locateMe_btn5",{display:'block'});
            gsap.to("#locateMe_btn6",{display:'block'});
            gsap.to("#locateMe_btn7",{display:'block'});
            gsap.to("#locateMe_btn8",{display:'block'});
            gsap.to("#locateMe_btn9",{display:'block'});

            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
            all_btnClickable = true;
        }});

    }
    all_btnClickable = false;
}
}

function handlePageByList7() {
    if(page_num !==7){
        page_num = 7;
    if(all_btnClickable == true){
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page4",{zIndex:0});
        gsap.to("#page5",{zIndex:0});
        gsap.to("#page6",{zIndex:0});
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page8",{zIndex:0});
        gsap.to("#page9",{zIndex:0});
        gsap.to("#page7",{zIndex:11,opacity: 1});

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
        gsap.to("#list__img1",{height:'90px'});
        gsap.to("#list__img1 img",{top:'5px'});
        gsap.to("#list__img8",{height:'90px'});
        gsap.to("#list__img8 img",{top:'5px'});
        gsap.to("#list__img9",{height:'90px'});
        gsap.to("#list__img9 img",{top:'5px'});

        gsap.fromTo("#list__img7",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img7 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

        gsap.to("#locateMe_btn1_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn2_text",{display:'none'});
            gsap.to("#locateMe_btn3_text",{display:'none'});
            gsap.to("#locateMe_btn4_text",{display:'none'});
            gsap.to("#locateMe_btn5_text",{display:'none'});
            gsap.to("#locateMe_btn6_text",{display:'none'});
            gsap.to("#locateMe_btn7_text",{display:'none'});
            gsap.to("#locateMe_btn8_text",{display:'none'});
            gsap.to("#locateMe_btn9_text",{display:'none'});
            
            gsap.to("#locateMe_btn1",{display:'block'});
            gsap.to("#locateMe_btn2",{display:'block'});
            gsap.to("#locateMe_btn3",{display:'block'});
            gsap.to("#locateMe_btn4",{display:'block'});
            gsap.to("#locateMe_btn5",{display:'block'});
            gsap.to("#locateMe_btn6",{display:'block'});
            gsap.to("#locateMe_btn7",{display:'block'});
            gsap.to("#locateMe_btn8",{display:'block'});
            gsap.to("#locateMe_btn9",{display:'block'});

            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
            all_btnClickable = true;
        }});

    }
    all_btnClickable = false;
}
}

function handlePageByList8() {
    if(page_num !==8){
        page_num = 8;
    if(all_btnClickable == true){
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page4",{zIndex:0});
        gsap.to("#page5",{zIndex:0});
        gsap.to("#page6",{zIndex:0});
        gsap.to("#page7",{zIndex:0});
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page9",{zIndex:0});
        gsap.to("#page8",{zIndex:11,opacity: 1});

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
        gsap.to("#list__img1",{height:'90px'});
        gsap.to("#list__img1 img",{top:'5px'});
        gsap.to("#list__img9",{height:'90px'});
        gsap.to("#list__img9 img",{top:'5px'});

        gsap.fromTo("#list__img8",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img8 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});

        gsap.to("#locateMe_btn1_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn2_text",{display:'none'});
            gsap.to("#locateMe_btn3_text",{display:'none'});
            gsap.to("#locateMe_btn4_text",{display:'none'});
            gsap.to("#locateMe_btn5_text",{display:'none'});
            gsap.to("#locateMe_btn6_text",{display:'none'});
            gsap.to("#locateMe_btn7_text",{display:'none'});
            gsap.to("#locateMe_btn8_text",{display:'none'});
            gsap.to("#locateMe_btn9_text",{display:'none'});
            
            gsap.to("#locateMe_btn1",{display:'block'});
            gsap.to("#locateMe_btn2",{display:'block'});
            gsap.to("#locateMe_btn3",{display:'block'});
            gsap.to("#locateMe_btn4",{display:'block'});
            gsap.to("#locateMe_btn5",{display:'block'});
            gsap.to("#locateMe_btn6",{display:'block'});
            gsap.to("#locateMe_btn7",{display:'block'});
            gsap.to("#locateMe_btn8",{display:'block'});
            gsap.to("#locateMe_btn9",{display:'block'});

            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
            all_btnClickable = true;
        }});

    }
    all_btnClickable = false;
}
}

function handlePageByList9() {
    if(page_num !==9){
        page_num = 9;
    if(all_btnClickable == true){
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page4",{zIndex:0});
        gsap.to("#page5",{zIndex:0});
        gsap.to("#page6",{zIndex:0});
        gsap.to("#page7",{zIndex:0});
        gsap.to("#page8",{zIndex:0});
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page9",{zIndex:11,opacity: 1});

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
        gsap.to("#list__img1",{height:'90px'});
        gsap.to("#list__img1 img",{top:'5px'});

        
        gsap.fromTo("#list__img9",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img9 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
        

        gsap.to("#locateMe_btn1_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn2_text",{display:'none'});
            gsap.to("#locateMe_btn3_text",{display:'none'});
            gsap.to("#locateMe_btn4_text",{display:'none'});
            gsap.to("#locateMe_btn5_text",{display:'none'});
            gsap.to("#locateMe_btn6_text",{display:'none'});
            gsap.to("#locateMe_btn7_text",{display:'none'});
            gsap.to("#locateMe_btn8_text",{display:'none'});
            gsap.to("#locateMe_btn9_text",{display:'none'});
            
            gsap.to("#locateMe_btn1",{display:'block'});
            gsap.to("#locateMe_btn2",{display:'block'});
            gsap.to("#locateMe_btn3",{display:'block'});
            gsap.to("#locateMe_btn4",{display:'block'});
            gsap.to("#locateMe_btn5",{display:'block'});
            gsap.to("#locateMe_btn6",{display:'block'});
            gsap.to("#locateMe_btn7",{display:'block'});
            gsap.to("#locateMe_btn8",{display:'block'});
            gsap.to("#locateMe_btn9",{display:'block'});

            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
            all_btnClickable = true;
        }});

    }
    all_btnClickable = false;
}
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
        gsap.to("#locateMe_btn1_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn1",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});
    } else if(swipedir =='right'){
            gsap.to("#page1",{zIndex:0});
            gsap.to("#page2",{zIndex:0});
            gsap.to("#page9",{zIndex:11,opacity: 1});
            gsap.to("#list__img1",{height:'90px'});
            gsap.to("#list__img1 img",{top:'5px'});
            gsap.fromTo("#list__img9",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
            gsap.fromTo("#list__img9 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
            gsap.to("#locateMe_btn1_text",{display:'none',onComplete:function(){
                gsap.to("#locateMe_btn1",{display:'block'});
                if(lighting==true){
                    ipcRenderer.send("lights:trigger", "POFF");
                    setTimeout(function(){
                        lighting=false;
                    },1300);
                    }
            }});
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
        gsap.to("#locateMe_btn2_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn2",{display:'block'});
            if(lighting==true){
            ipcRenderer.send("lights:trigger", "POFF");
            setTimeout(function(){
                lighting=false;
            },1300);
            }
        }});
    } else if(swipedir =='right'){
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page1",{zIndex:11,opacity: 1});
        gsap.to("#list__img2",{height:'90px'});
        gsap.to("#list__img2 img",{top:'5px'});
        gsap.fromTo("#list__img1",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img1 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
        gsap.to("#locateMe_btn2_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn2",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});
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
        gsap.to("#locateMe_btn3_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn3",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});
    } else if(swipedir =='right'){
            gsap.to("#page3",{zIndex:0});
            gsap.to("#page4",{zIndex:0});
            gsap.to("#page2",{zIndex:11,opacity: 1});
            gsap.to("#list__img3",{height:'90px'});
        gsap.to("#list__img3 img",{top:'5px'});
        gsap.fromTo("#list__img2",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img2 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
        gsap.to("#locateMe_btn3_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn3",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});
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
        gsap.to("#locateMe_btn4_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn4",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});
    } else if(swipedir =='right'){
            gsap.to("#page5",{zIndex:0});
            gsap.to("#page4",{zIndex:0});
            gsap.to("#page3",{zIndex:11,opacity: 1});
            gsap.to("#list__img4",{height:'90px'});
        gsap.to("#list__img4 img",{top:'5px'});
        gsap.fromTo("#list__img3",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img3 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
        gsap.to("#locateMe_btn4_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn4",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});
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
        gsap.to("#locateMe_btn5_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn5",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});

    } else if(swipedir =='right'){
            gsap.to("#page5",{zIndex:0});
            gsap.to("#page6",{zIndex:0});
            gsap.to("#page4",{zIndex:11,opacity: 1});
            gsap.to("#list__img5",{height:'90px'});
        gsap.to("#list__img5 img",{top:'5px'});
        gsap.fromTo("#list__img4",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img4 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
        gsap.to("#locateMe_btn5_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn5",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});
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
        gsap.to("#locateMe_btn6_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn6",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});

    } else if(swipedir =='right'){
            gsap.to("#page7",{zIndex:0});
            gsap.to("#page6",{zIndex:0});
            gsap.to("#page5",{zIndex:11,opacity: 1});
            gsap.to("#list__img6",{height:'90px'});
        gsap.to("#list__img6 img",{top:'5px'});
        gsap.fromTo("#list__img5",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img5 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
        gsap.to("#locateMe_btn6_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn6",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});
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
        gsap.to("#locateMe_btn7_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn7",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});

    } else if(swipedir =='right'){
            gsap.to("#page7",{zIndex:0});
            gsap.to("#page8",{zIndex:0});
            gsap.to("#page6",{zIndex:11,opacity: 1});
            gsap.to("#list__img7",{height:'90px'});
        gsap.to("#list__img7 img",{top:'5px'});
        gsap.fromTo("#list__img6",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img6 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
        gsap.to("#locateMe_btn7_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn7",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});
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
        gsap.to("#locateMe_btn8_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn8",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});


    } else if(swipedir =='right'){
            gsap.to("#page8",{zIndex:0});
            gsap.to("#page9",{zIndex:0});
            gsap.to("#page7",{zIndex:11,opacity:1});
            gsap.to("#list__img8",{height:'90px'});
        gsap.to("#list__img8 img",{top:'5px'});
        gsap.fromTo("#list__img7",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img7 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
        gsap.to("#locateMe_btn8_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn8",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});
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
        gsap.to("#locateMe_btn9_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn9",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});
    } else if(swipedir =='right'){
        gsap.to("#page9",{zIndex:0});
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page8",{zIndex:11,opacity:1});
        gsap.to("#list__img9",{height:'90px'});
        gsap.to("#list__img9 img",{top:'5px'});
        gsap.fromTo("#list__img8",{height:'90px'},{height:'110px',duration:0.5,delay:0.3});
        gsap.fromTo("#list__img8 img",{top:'5px'},{top:'20px',duration:0.5,delay:0.3});
        gsap.to("#locateMe_btn9_text",{display:'none',onComplete:function(){
            gsap.to("#locateMe_btn9",{display:'block'});
            if(lighting==true){
                ipcRenderer.send("lights:trigger", "POFF");
                setTimeout(function(){
                    lighting=false;
                },1300);
                }
        }});
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
