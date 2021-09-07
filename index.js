var start=document.getElementById("start");
var ending=document.getElementById("end");
var circle1=document.getElementById("circle1");
var circle2=document.getElementById("circle2");
var circle3=document.getElementById("circle3");
var circle4=document.getElementById("circle4");

start.addEventListener("click",function(){
    circle1.style.animation="animv 1s steps(6) infinite";
    circle2.style.animation="animh 1s steps(6) infinite";
    circle3.style.animation="animv 1s steps(6) infinite";
    circle4.style.animation="animh 1s steps(6) infinite";
});

end.addEventListener("click",function(){
    circle1.style.animation=""
    circle2.style.animation=""
    circle3.style.animation=""
    circle4.style.animation=""
})