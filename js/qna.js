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

qna_ans_1.addEventListener("touchstart", handleQnaAns1, false);

// result page
var result_page = document.getElementById("result_page");
var result_group_1 = document.getElementById("result_group_1");

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
    gsap.to(qna__q1,{opacity:0,delay:0.5,onComplete:function(){
        qna__q1.style.display= "none";
        gsap.to(qna__q2,{display:"block",duration:0.7,delay:0.8,onComplete:function(){
            gsap.to(qna__q2,{opacity:1,duration:1});
         }});
     }});
}

function handleQnaGenderF() {
    gender = 2;
    gsap.to(qna__q1,{opacity:0,delay:0.5,onComplete:function(){
        qna__q1.style.display= "none";
        gsap.to(qna__q2,{display:"block",duration:0.7,delay:0.8,onComplete:function(){
            gsap.to(qna__q2,{opacity:1,duration:1});
         }});
     }});
}

function handleQnaAgeG1() {
    ageGroup = 1;
    gsap.to(qna__q2,{opacity:0,delay:0.5,onComplete:function(){
        qna__q2.style.display= "none";
        gsap.to(qna__q3,{display:"block",duration:0.7,delay:0.8,onComplete:function(){
            gsap.to(qna__q3,{opacity:1,duration:1});
         }});
     }});
}

function handleQnaAgeG2() {
    ageGroup = 2;
    gsap.to(qna__q2,{opacity:0,delay:0.5,onComplete:function(){
        qna__q2.style.display= "none";
        gsap.to(qna__q3,{display:"block",duration:0.7,delay:0.8,onComplete:function(){
            gsap.to(qna__q3,{opacity:1,duration:1});
         }});
     }});
}

function handleQnaAgeG3() {
    ageGroup = 3;
    gsap.to(qna__q2,{opacity:0,delay:0.5,onComplete:function(){
        qna__q2.style.display= "none";
        gsap.to(qna__q3,{display:"block",duration:0.7,delay:0.8,onComplete:function(){
            gsap.to(qna__q3,{opacity:1,duration:1});
         }});
     }});
}

function handleQnaAns1() {
    answerList.ans1 = 1;
    gsap.to(qna__q3,{opacity:0,delay:0.5,onComplete:function(){
        qna__q3.style.display= "none";
        gsap.to(".pages__logo",{display:'none'});
        gsap.to(".qna__header",{display:'none'});
        gsap.to(".qna__details",{opacity:0});
        gsap.to(result_page,{display:'block'});
        gsap.fromTo(result_page,{opacity:0},{opacity:1,duration:0.7,delay:0.7,onComplete:function(){
            gsap.to(".result__list",{display:"block",onComplete:function(){
                gsap.fromTo("#ff1",{opacity:0},{opacity:1});
                gsap.fromTo("#ff2",{opacity:0},{opacity:1});
                gsap.fromTo("#ff3",{opacity:0},{opacity:1});
            }});
         }});
     }});
}