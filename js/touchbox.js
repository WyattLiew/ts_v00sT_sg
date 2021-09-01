// disable rightclick
document.addEventListener("contextmenu", event => event.preventDefault());

var isContentActive = 0;

// timer declare
var timeoutInMiliseconds = 60000;
var timeoutId;

function startTimer() {
  // window.setTimeout returns an Id that can be used to start and stop a timer
  timeoutId = window.setTimeout(doInactive, timeoutInMiliseconds);
}

function doInactive() {
  // does whatever you need it to actually do - probably signs them out or stops polling the server for info
  if(sel_mode ==1){
    gsap.to(allProducts_page,{opacity:0,duration:0.5,onComplete:function(){
        clearAll();
            if(lighting==true){
            ipcRenderer.send("lights:trigger", "POFF");
            lighting=false;
            }
        allProducts_page.style.display= "none";
        gsap.to("#homePage",{display:'block',onComplete:function(){
            homePageLogo.style.display= "block";
            homePageLogo.style.opacity= "1";
            gsap.to(homePage_selection,{duration:0.8,x:'0%',onComplete:function(){
                all_btnClickable = true;
              }});
           }});
       }});
    } else if(sel_mode ==2){
        gsap.to(qna_page,{opacity:0,duration:0.5,onComplete:function(){
            result_page.style.display= "none";
            clearAll();
            gsap.to(qna__q3,{opacity:0,onComplete:function(){
                qna__q3.style.display= "none";
                result_page.style.display= "none";
                gsap.to(".pages__logo",{display:'block',delay:0.2});
                gsap.to(".qna__header",{display:'none'});
                gsap.to(".qna__details",{opacity:0});
                clearIndicator();
            }});
            gsap.to(qna__q2,{opacity:0,onComplete:function(){
                qna__q2.style.display= "none";
            }});
            gsap.to(qna__q1,{opacity:0,onComplete:function(){
                qna__q1.style.display= "none";
            }});
            gsap.to(allProducts_page,{opacity:0,duration:0.5,onComplete:function(){
                clearAll();
                    if(lighting==true){
                    ipcRenderer.send("lights:trigger", "POFF");
                    lighting=false;
                    }
            allProducts_page.style.display= "none";
                }});
            gsap.to("#homePage",{display:'block',onComplete:function(){
                homePageLogo.style.display= "block";
                homePageLogo.style.opacity= "1";
                gsap.to(homePage_selection,{duration:0.8,x:'0%',onComplete:function(){
                    all_btnClickable = true;
                  }});
               }});
           }});
    }else if(sel_mode ==3){
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

function resetTimer() {
  window.clearTimeout(timeoutId);
  if (isContentActive == 0) {
    startTimer();
  }
}

function setupTimers() {
  document.addEventListener("mousemove", resetTimer, false);
  document.addEventListener("mousedown", resetTimer, false);
  document.addEventListener("keypress", resetTimer, false);
  document.addEventListener("touchmove", resetTimer, false);
  document.addEventListener("touchend", resetTimer, false);
  document.addEventListener("touchstart", resetTimer, false);

  startTimer();
}

// start timer
setupTimers();

