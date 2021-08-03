const one = document.querySelector("#one");
window.addEventListener("scroll", function(e) {
    var bound =one.querySelector("h3").getBoundingClientRect();
    console.log(`top is :  ${bound.top} == bottom is :  ${bound.bottom}`);
    if(bound.bottom <= 0){
        if(one.classList.contains("scrolled") == true){}else
            {
                one.querySelector("span").classList.add("scrolled");
                one.querySelector("span img").style.transform = "rotate(180deg)";
                one.querySelector("span img").style.borderRadius = "30%";
                one.querySelector("span img").setAttribute("onclick", "getBack()");
            }
    }else if(bound.bottom >0 && one.querySelector("span").classList.contains("scrolled") == true){
        one.querySelector("span").classList.remove("scrolled");
        one.querySelector("span img").style.transform = "rotate(0deg)";
        one.querySelector("span img").setAttribute("onclick", "goAhead()");
    }
});
function getBack(){
    document.querySelector("#one").scrollIntoView();
}
function goAhead(){
    document.querySelector("#two").scrollIntoView();
}


function goIntoOne(){
    var sC =document.querySelectorAll('.scrollcontrollers');
    document.querySelector("#one").scrollIntoView();
    for(let i=0;i < sC.length; i++){
        sC[i].style.border="none";
        sC[i].style.borderRadius = "0";
    }
    sC[0].style.border="solid 3px black";
    sC[0].style.borderRadius = "50%";
}
function goIntoTwo(){
    document.querySelector("#two").scrollIntoView();
    var sC =document.querySelectorAll('.scrollcontrollers');
    for(let i=0;i < sC.length; i++){
        sC[i].style.border="none";
        sC[i].style.borderRadius = "0";
    }
    sC[1].style.border="solid 3px black";
    sC[1].style.borderRadius = "50%";
}
function goIntoThree(){
    document.querySelector("#three").scrollIntoView();
    var sC =document.querySelectorAll('.scrollcontrollers');
    for(let i=0;i < sC.length; i++){
        sC[i].style.border="none";
        sC[i].style.borderRadius = "0";
    }
    sC[2].style.border="solid 3px black";
    sC[2].style.borderRadius = "50%";
}
function goIntoFour(){
    document.querySelector("#four").scrollIntoView();
    var sC =document.querySelectorAll('.scrollcontrollers');
    for(let i=0;i < sC.length; i++){
        sC[i].style.border="none";
        sC[i].style.borderRadius = "0";
    }
    sC[3].style.border="solid 3px black";
    sC[3].style.borderRadius = "50%";
}
function goIntoFive(){
    document.querySelector("#five").scrollIntoView();
    var sC =document.querySelectorAll('.scrollcontrollers');
    for(let i=0;i < sC.length; i++){
        sC[i].style.border="none";
        sC[i].style.borderRadius = "0";
    }
    sC[4].style.border="solid 3px black";
    sC[4].style.border="solid 3px black";
    sC[4].style.borderRadius = "50%";
}
//scrollcontrollers