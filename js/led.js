const electron = require("electron");
const { ipcRenderer } = electron;

var lighting = false;
var btn1 = document.getElementById("locateMe_btn1");
var btn2 = document.getElementById("locateMe_btn2");
var btn3 = document.getElementById("locateMe_btn3");
var btn4 = document.getElementById("locateMe_btn4");
var btn5 = document.getElementById("locateMe_btn5");
var btn6 = document.getElementById("locateMe_btn6");
var btn7 = document.getElementById("locateMe_btn7");
var btn8 = document.getElementById("locateMe_btn8");
var btn9 = document.getElementById("locateMe_btn9");

btn1.addEventListener('touchstart', (e)=>{
    if(lighting==false){
    if(all_btnClickable == true){
ipcRenderer.send("lights:trigger", "P1ON");
lighting=true;
gsap.to("#locateMe_btn1",{display:'none',onComplete:function(){
    gsap.to("#locateMe_btn1_text",{display:'block'});
    all_btnClickable = true;
}});
    }
    all_btnClickable = false;
}
});

btn2.addEventListener('touchstart', (e)=>{
    if(lighting==false){
    if(all_btnClickable == true){
ipcRenderer.send("lights:trigger", "P2ON");
lighting=true;
gsap.to("#locateMe_btn2",{display:'none',onComplete:function(){
    gsap.to("#locateMe_btn2_text",{display:'block'});
    all_btnClickable = true;
}});
    }
    all_btnClickable = false;
}
});

btn3.addEventListener('touchstart', (e)=>{
    if(lighting==false){
    if(all_btnClickable == true){
    lighting=true;
    ipcRenderer.send("lights:trigger", "P3ON");
    gsap.to("#locateMe_btn3",{display:'none',onComplete:function(){
    gsap.to("#locateMe_btn3_text",{display:'block'});
    all_btnClickable = true;
}});
    }
    all_btnClickable = false;
}
});

btn4.addEventListener('touchstart', (e)=>{
    if(lighting==false){
    if(all_btnClickable == true){
    lighting=true;
    ipcRenderer.send("lights:trigger", "P4ON");
    gsap.to("#locateMe_btn4",{display:'none',onComplete:function(){
    gsap.to("#locateMe_btn4_text",{display:'block'});
    all_btnClickable = true;
}});
    }
    all_btnClickable = false;
}
});


btn5.addEventListener('touchstart', (e)=>{
    if(lighting==false){
    if(all_btnClickable == true){
    lighting=true;
    ipcRenderer.send("lights:trigger", "P5ON");
    gsap.to("#locateMe_btn5",{display:'none',onComplete:function(){
    gsap.to("#locateMe_btn5_text",{display:'block'});
    all_btnClickable = true;
}});
    }
    all_btnClickable = false;
}
});


btn6.addEventListener('touchstart', (e)=>{
    if(lighting==false){
    if(all_btnClickable == true){
    lighting=true;
    ipcRenderer.send("lights:trigger", "P6ON");
    gsap.to("#locateMe_btn6",{display:'none',onComplete:function(){
    gsap.to("#locateMe_btn6_text",{display:'block'});
    all_btnClickable = true;
}});
    }
    all_btnClickable = false;
}
});


btn7.addEventListener('touchstart', (e)=>{
    if(lighting==false){
    if(all_btnClickable == true){
    lighting=true;
    ipcRenderer.send("lights:trigger", "P7ON");
    gsap.to("#locateMe_btn7",{display:'none',onComplete:function(){
    gsap.to("#locateMe_btn7_text",{display:'block'});
    all_btnClickable = true;
}});
    }
    all_btnClickable = false;
}
});


btn8.addEventListener('touchstart', (e)=>{
    if(lighting==false){
    if(all_btnClickable == true){
    lighting=true;
    ipcRenderer.send("lights:trigger", "P8ON");
    gsap.to("#locateMe_btn8",{display:'none',onComplete:function(){
    gsap.to("#locateMe_btn8_text",{display:'block'});
    all_btnClickable = true;
}});
    }
    all_btnClickable = false;
}
});

btn9.addEventListener('touchstart', (e)=>{
    if(lighting==false){
    if(all_btnClickable == true){
    lighting=true;
    ipcRenderer.send("lights:trigger", "P9ON");
    gsap.to("#locateMe_btn9",{display:'none',onComplete:function(){
    gsap.to("#locateMe_btn9_text",{display:'block'});
    all_btnClickable = true;
}});
    }
    all_btnClickable = false;
}
});

