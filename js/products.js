document.getElementById('item1').addEventListener('click',handlePage1,false);
document.getElementById('item2').addEventListener('click',handlePage2,false);


var homePageLogo = document.getElementById('homePage_logo');
var allProducts_page = document.getElementById('allProducts_page');
// Home btn
function backToHomePage(){
    gsap.to(allProducts_page,{opacity:0,duration:0.3,onComplete:function(){
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#homePage",{display:'block',onComplete:function(){
            document.getElementById('homePage_logo').style.display= "block";
            gsap.to(homePage_selection,{duration:0.3,x:'0%'});
           }});
       }});
}

function handlePage1(){
    homePageLogo.style.display= "none"
    allProducts_selection.style.display= "none"
    allProducts_page.style.opacity= "1"
    allProducts_page.style.display= "flex"
    gsap.to("#page1",{duration:0,zIndex:11});
}

function handlePage2(){
    homePageLogo.style.display= "none";
    allProducts_selection.style.display= "none";
    allProducts_page.style.opacity= "1"
    allProducts_page.style.display= "flex"
    gsap.to("#page2",{duration:0,x:'-100%',zIndex:11});
}

var ts_hp1 = document.getElementById('touchSurface_page1');
var ts_hp2 = document.getElementById('touchSurface_page2');
var ts_hp3 = document.getElementById('touchSurface_page3');

swipedetect(ts_hp1,function(swipedir){
    if(swipedir =='left'){
        // gsap.fromTo("#page1",{x:'0'},{x:'-100%',duration:1,onComplete:function(){
        //     // gsap.to("#page1",{display:'none'});
        //     // gsap.fromTo("#page2",{display:'block',x:'100%',background: 'black'},{x:'0%',background: 'chartreuse',duration:1});
        // }});
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page2",{x:'-100%',zIndex:11});
    } else if(swipedir =='right'){
        // gsap.fromTo("#page1",{x:'0'},{x:'100%',duration:1,onComplete:function(){
            // gsap.to("#page1",{display:'none'});
            // gsap.to("#page2",{display:'none'});
            // gsap.to("#page3",{display:'block',x:'0%'});
            gsap.to("#page1",{zIndex:0});
            gsap.to("#page2",{zIndex:0});
            gsap.fromTo("#page3",{x:'-300%'},{x:'-200%',zIndex:11});
    }
// })
// }
})
swipedetect(ts_hp2,function(swipedir){
    if(swipedir =='left'){
        // gsap.fromTo("#page2",{x:'0'},{x:'-100%',duration:1,onComplete:function(){
            // gsap.to("#page2",{display:'none'});
            // gsap.to("#page1",{display:'none'});
            // gsap.to("#page3",{display:'block',x:'0%'});
        // }});
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page1",{zIndex:0});
        gsap.to("#page3",{x:'-200%',zIndex:11});

    } else if(swipedir =='right'){
        // gsap.fromTo("#page2",{x:'0'},{x:'100%',duration:1,onComplete:function(){
            // gsap.to("#page2",{display:'none'});
            // gsap.to("#page3",{display:'none'});
            // gsap.to("#page1",{display:'block',x:'0%'});
            gsap.to("#page2",{zIndex:0});
            gsap.to("#page3",{zIndex:0});
            gsap.to("#page1",{x:'0%',zIndex:11});
    }
// })
// }
})
swipedetect(ts_hp3,function(swipedir){
    if(swipedir =='left'){
        // gsap.fromTo("#page3",{x:'0'},{x:'-100%',duration:1,onComplete:function(){
        //     gsap.to("#page3",{display:'none'});
        //     gsap.to("#page2",{display:'none'});
        //     gsap.fromTo("#page1",{display:'block',x:'100%'},{x:'0%'});
        //     console.log(swipedir)
        // }});
        gsap.to("#page3",{zIndex:0});
        gsap.to("#page2",{zIndex:0});
        gsap.to("#page1",{x:'0%',zIndex:11});
    } else if(swipedir =='right'){
//         gsap.fromTo("#page3",{x:'0'},{x:'100%',duration:1,onComplete:function(){
//             gsap.to("#page3",{display:'none'});
//             gsap.to("#page1",{display:'none'});
//             gsap.to("#page2",{display:'block',x:'0%'});
//     }
gsap.to("#page3",{zIndex:0});
gsap.to("#page1",{zIndex:0});
gsap.to("#page2",{x:'-100%',zIndex:11});
// })
}
})

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
