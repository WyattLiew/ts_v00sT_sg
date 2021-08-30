var qna__q1 = document.getElementById("qna__q1");
var qna__q2 = document.getElementById("qna__q2");
var qna__q3 = document.getElementById("qna__q3");

// Step 1 btn gender
var qna_gender_m = document.getElementById("qna_gender_m");
var qna_gender_f = document.getElementById("qna_gender_f");

// Step 2 btn age
var qna_age_1 = document.getElementById("qna_age_1");
var qna_age_2 = document.getElementById("qna_age_2");
var qna_age_3 = document.getElementById("qna_age_3");
var qna_age_4 = document.getElementById("qna_age_4");

//  Step 3 ans
var qna_ans_1 = document.getElementById("qna_ans_1");
var qna_ans_2 = document.getElementById("qna_ans_2");
var qna_ans_3 = document.getElementById("qna_ans_3");
var qna_ans_4 = document.getElementById("qna_ans_4");
var qna_ans_5 = document.getElementById("qna_ans_5");
var qna_ans_6 = document.getElementById("qna_ans_6");
var qna_ans_7 = document.getElementById("qna_ans_7");
var qna_ans_8 = document.getElementById("qna_ans_8");
var qna_ans_9 = document.getElementById("qna_ans_9");
var qna_ans_10 = document.getElementById("qna_ans_10");
var qna_ans_11 = document.getElementById("qna_ans_11");
var qna_ans_12 = document.getElementById("qna_ans_12");
var qna_ans_13 = document.getElementById("qna_ans_13");

qna_gender_m.addEventListener("touchstart", handleQnaGenderM, false);
qna_gender_f.addEventListener("touchstart", handleQnaGenderF, false);

qna_age_1.addEventListener("touchstart", handleQnaAgeG1, false);
qna_age_2.addEventListener("touchstart", handleQnaAgeG2, false);
qna_age_3.addEventListener("touchstart", handleQnaAgeG3, false);
qna_age_4.addEventListener("touchstart", handleQnaAgeG4, false);

qna_ans_1.addEventListener("touchstart", handleQnaAns1, false);
qna_ans_2.addEventListener("touchstart", handleQnaAns2, false);
qna_ans_3.addEventListener("touchstart", handleQnaAns3, false);
qna_ans_4.addEventListener("touchstart", handleQnaAns4, false);
qna_ans_5.addEventListener("touchstart", handleQnaAns5, false);
qna_ans_6.addEventListener("touchstart", handleQnaAns6, false);
qna_ans_7.addEventListener("touchstart", handleQnaAns7, false);
qna_ans_8.addEventListener("touchstart", handleQnaAns8, false);
qna_ans_9.addEventListener("touchstart", handleQnaAns9, false);
qna_ans_10.addEventListener("touchstart", handleQnaAns10, false);
qna_ans_11.addEventListener("touchstart", handleQnaAns11, false);
qna_ans_12.addEventListener("touchstart", handleQnaAns12, false);
qna_ans_13.addEventListener("touchstart", handleQnaAns13, false);

// result page
var result_page = document.getElementById("result_page");
var result_group_1 = document.getElementById("result_group_1");

// result product page 
var result_product_1 = document.getElementById('result_product_1');
var result_product_2 = document.getElementById('result_product_2');
var result_product_3 = document.getElementById('result_product_3');
var result_product_4 = document.getElementById('result_product_4');
var result_product_5 = document.getElementById('result_product_5');
var result_product_6 = document.getElementById('result_product_6');
var result_product_7 = document.getElementById('result_product_7');
var result_product_8 = document.getElementById('result_product_8');
var result_product_9 = document.getElementById('result_product_9');
var result_product_10 = document.getElementById('result_product_10');
var result_product_11 = document.getElementById('result_product_11');
var result_product_12 = document.getElementById('result_product_12');
var result_product_13 = document.getElementById('result_product_13');

// result_product_1.addEventListener('click', handleResultToPage1, false);


// Data M = 1 F = 2, Age 18-25 =1 26-49=2 above 50 =3
var gender = 0;
var ageGroup = 0;
var answerList = {
    ans1:0,
    ans2:0,
    ans3:0,
    ans4:0,
    ans5:0,
    ans6:0,
    ans7:0,
    ans8:0,
    ans9:0,
    ans10:0,
    ans11:0,
    ans12:0,
    ans13:0
}


function handleQnaGenderM() {
    gender = 1;
    gsap.to(qna__q1,{opacity:0,onComplete:function(){
        qna__q1.style.display= "none";
        gsap.to(qna__q2,{display:"block",duration:0.5,delay:0.3,onComplete:function(){
            gsap.to(qna__q2,{opacity:1,duration:0.5});
            indicator1.style.animation ="none";
            indicator2.style.animation ="pulse 1s alternate infinite";
         }});
     }});
}

function handleQnaGenderF() {
    gender = 2;
    gsap.to(qna__q1,{opacity:0,onComplete:function(){
        qna__q1.style.display= "none";
        gsap.to(qna__q2,{display:"block",duration:0.5,delay:0.3,onComplete:function(){
            gsap.to(qna__q2,{opacity:1,duration:0.5});
            indicator1.style.animation ="none";
            indicator2.style.animation ="pulse 1s alternate infinite";
         }});
     }});
}

function handleQnaAgeG1() {
    ageGroup = 1;
    gsap.to(qna__q2,{opacity:0,onComplete:function(){
        qna__q2.style.display= "none";
        gsap.to(qna__q3,{display:"block",duration:0.5,delay:0.3,onComplete:function(){
            gsap.to(qna__q3,{opacity:1,duration:0.5});
            indicator2.style.background= "rgba(255, 255, 255, 0.9)";
            indicator2.style.boxShadow =`inset 0px 0px 10px 2px rgba(117, 182, 255, 0.5),
              0px 0px 20px rgba(117, 182, 255, 0.5)`;
            indicator1.style.animation ="none";
            indicator2.style.animation ="none";
            indicator3.style.animation ="pulse 1s alternate infinite";
         }});
     }});
}

function handleQnaAgeG2() {
    ageGroup = 2;
    gsap.to(qna__q2,{opacity:0,onComplete:function(){
        qna__q2.style.display= "none";
        gsap.to(qna__q3,{display:"block",duration:0.5,delay:0.3,onComplete:function(){
            gsap.to(qna__q3,{opacity:1,duration:0.5});
            indicator2.style.background= "rgba(255, 255, 255, 0.9)";
            indicator2.style.boxShadow =`inset 0px 0px 10px 2px rgba(117, 182, 255, 0.5),
              0px 0px 20px rgba(117, 182, 255, 0.5)`;
            indicator1.style.animation ="none";
            indicator2.style.animation ="none";
            indicator3.style.animation ="pulse 1s alternate infinite";
         }});
     }});
}

function handleQnaAgeG3() {
    ageGroup = 3;
    gsap.to(qna__q2,{opacity:0,onComplete:function(){
        qna__q2.style.display= "none";
        gsap.to(qna__q3,{display:"block",duration:0.5,delay:0.3,onComplete:function(){
            gsap.to(qna__q3,{opacity:1,duration:0.5});
            indicator2.style.background= "rgba(255, 255, 255, 0.9)";
            indicator2.style.boxShadow =`inset 0px 0px 10px 2px rgba(117, 182, 255, 0.5),
              0px 0px 20px rgba(117, 182, 255, 0.5)`;
            indicator1.style.animation ="none";
            indicator2.style.animation ="none";
            indicator3.style.animation ="pulse 1s alternate infinite";
         }});
     }});
}

function handleQnaAgeG4() {
    ageGroup = 4;
    gsap.to(qna__q2,{opacity:0,onComplete:function(){
        qna__q2.style.display= "none";
        gsap.to(qna__q3,{display:"block",duration:0.5,delay:0.3,onComplete:function(){
            gsap.to(qna__q3,{opacity:1,duration:0.5});
            indicator2.style.background= "rgba(255, 255, 255, 0.9)";
            indicator2.style.boxShadow =`inset 0px 0px 10px 2px rgba(117, 182, 255, 0.5),
              0px 0px 20px rgba(117, 182, 255, 0.5)`;
            indicator1.style.animation ="none";
            indicator2.style.animation ="none";
            indicator3.style.animation ="pulse 1s alternate infinite";
         }});
     }});
}

function handleQnaAns1() {
    if(all_btnClickable == true){
    answerList.ans1 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_1",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_1",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
                   
                  }});
         }});
     }});
    }
    all_btnClickable = false;
}

function handleQnaAns2() {
    if(all_btnClickable == true){
    answerList.ans2 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_2",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_2",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
                }});
         }});
     }});
    }
    all_btnClickable = false;
}

function handleQnaAns3() {
    if(all_btnClickable == true){
    answerList.ans3 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_3",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_3",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
                  }});
         }});
     }});
    }
    all_btnClickable = false;
}

function handleQnaAns4() {
    if(all_btnClickable == true){
    answerList.ans4 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_4",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_4",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
                  }});
         }});
     }});
    }
    all_btnClickable = false;
}

function handleQnaAns5() {
    if(all_btnClickable == true){
    answerList.ans5 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_5",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_5",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
            }});
         }});
     }});
    }
    all_btnClickable = false;
}

function handleQnaAns6() {
    if(all_btnClickable == true){
    answerList.ans6 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_6",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_6",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
                  }});
         }});
     }});
    }
    all_btnClickable = false;
}

function handleQnaAns7() {
    if(all_btnClickable == true){
    answerList.ans7 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_7",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_7",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
                  }});
         }});
     }});
    }
    all_btnClickable = false;
}

function handleQnaAns8() {
    if(all_btnClickable == true){
    answerList.ans8 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_8",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_8",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
            }});
         }});
     }});
    }
    all_btnClickable = false;
}

function handleQnaAns9() {
    if(all_btnClickable == true){
    answerList.ans9 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_9",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_9",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
                  }});
         }});
     }});
    }
    all_btnClickable = false;
}

function handleQnaAns10() {
    if(all_btnClickable == true){
    answerList.ans10 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_10",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_10",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
                  }});
         }});
     }});
    }
    all_btnClickable = false;
}

function handleQnaAns11() {
    if(all_btnClickable == true){
    answerList.ans11 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_11",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_11",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
                  }});
         }});
     }});
    }
    all_btnClickable = false;
}

function handleQnaAns12() {
    if(all_btnClickable == true){
    answerList.ans12 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_12",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_12",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
                  }});
         }});
     }});
    }
    all_btnClickable = false;
}

function handleQnaAns13() {
    if(all_btnClickable == true){
    answerList.ans13 = 1;
    gsap.to(qna__q3,{opacity:0,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        clearIndicator();
        gsap.to(result_page,{display:'block'});
        gsap.to("#result_group_13",{display:"block"});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.5,delay:0.7,onComplete:function(){
                gsap.to("#result_group_13",{opacity:1,duration:1,onComplete:function(){
                    all_btnClickable = true;
                  }});
         }});
     }});
    }
    all_btnClickable = false;
}



function handleResultToPage1() {
    if(all_btnClickable == true){
        qna_page.style.display= "none";
        result_page.style.display= "none";
        allProducts_page.style.opacity= "1"
        allProducts_page.style.display= "flex"
        gsap.to("#page2",{duration:0,zIndex:11,opacity: 1});
        gsap.to(".pages__logo",{display:'block',delay:0.2});
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

function handleResultToPage1() {
    if(all_btnClickable == true){
        qna_page.style.display= "none";
        result_page.style.display= "none";
        allProducts_page.style.opacity= "1"
        allProducts_page.style.display= "flex"
        gsap.to("#page1",{duration:0,zIndex:11,opacity: 1});
        gsap.to(".pages__logo",{display:'block',delay:0.2});
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
}

function handleResultToPage2() {
    if(all_btnClickable == true){
        qna_page.style.display= "none";
        result_page.style.display= "none";
        allProducts_page.style.opacity= "1"
        allProducts_page.style.display= "flex"
        gsap.to("#page2",{duration:0,zIndex:11,opacity: 1});
        gsap.to(".pages__logo",{display:'block',delay:0.2});
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

function handleResultToPage3() {
    if(all_btnClickable == true){
        qna_page.style.display= "none";
        result_page.style.display= "none";
        allProducts_page.style.opacity= "1"
        allProducts_page.style.display= "flex"
        gsap.to("#page3",{duration:0,zIndex:11,opacity: 1});
        gsap.to(".pages__logo",{display:'block',delay:0.2});
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

function handleResultToPage4() {
    if(all_btnClickable == true){
        qna_page.style.display= "none";
        result_page.style.display= "none";
        allProducts_page.style.opacity= "1"
        allProducts_page.style.display= "flex"
        gsap.to("#page4",{duration:0,zIndex:11,opacity: 1});
        gsap.to(".pages__logo",{display:'block',delay:0.2});
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

function handleResultToPage5() {
    if(all_btnClickable == true){
        qna_page.style.display= "none";
        result_page.style.display= "none";
        allProducts_page.style.opacity= "1"
        allProducts_page.style.display= "flex"
        gsap.to("#page5",{duration:0,zIndex:11,opacity: 1});
        gsap.to(".pages__logo",{display:'block',delay:0.2});
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

function handleResultToPage6() {
    if(all_btnClickable == true){
        qna_page.style.display= "none";
        result_page.style.display= "none";
        allProducts_page.style.opacity= "1"
        allProducts_page.style.display= "flex"
        gsap.to("#page6",{duration:0,zIndex:11,opacity: 1});
        gsap.to(".pages__logo",{display:'block',delay:0.2});
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

function handleResultToPage7() {
    if(all_btnClickable == true){
        qna_page.style.display= "none";
        result_page.style.display= "none";
        allProducts_page.style.opacity= "1"
        allProducts_page.style.display= "flex"
        gsap.to("#page7",{duration:0,zIndex:11,opacity: 1});
        gsap.to(".pages__logo",{display:'block',delay:0.2});
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

function handleResultToPage8() {
    if(all_btnClickable == true){
        qna_page.style.display= "none";
        result_page.style.display= "none";
        allProducts_page.style.opacity= "1"
        allProducts_page.style.display= "flex"
        gsap.to("#page8",{duration:0,zIndex:11,opacity: 1});
        gsap.to(".pages__logo",{display:'block',delay:0.2});
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

function handleResultToPage9() {
    if(all_btnClickable == true){
        qna_page.style.display= "none";
        result_page.style.display= "none";
        allProducts_page.style.opacity= "1"
        allProducts_page.style.display= "flex"
        gsap.to("#page9",{duration:0,zIndex:11,opacity: 1});
        gsap.to(".pages__logo",{display:'block',delay:0.2});
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

function clearIndicator() {
    gsap.fromTo(".qna__indicator",{opacity:1},{opacity:0,duration:0.7,onComplete:function(){
        indicator2.style.background= "none";
        indicator2.style.boxShadow =`inset 0px 0px 10px 1px rgba(117, 182, 255, 0.4),
        0px 0px 20px rgba(117, 182, 255, 0.1)`;
        indicator3.style.background= "none";
        indicator3.style.boxShadow =`inset 0px 0px 10px 1px rgba(117, 182, 255, 0.4),
        0px 0px 20px rgba(117, 182, 255, 0.1)`;
        indicator1.style.animation ="none";
        indicator2.style.animation ="none";
        indicator3.style.animation ="none";
    }});
   
}