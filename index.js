var start=document.getElementById("start");
var ending=document.getElementById("end");
var circle1=document.getElementById("circle1");
var circle2=document.getElementById("circle2");
var circle3=document.getElementById("circle3");
var circle4=document.getElementById("circle4");

start.addEventListener("click",function(){
    circle1.style.animation="animvc1 1.5s steps(10) infinite";
    circle2.style.animation="animhc2 1.5s steps(10) infinite";
    circle3.style.animation="animvc3 1.5s steps(10) infinite";
    circle4.style.animation="animhc4 1.5s steps(10) infinite";
});

end.addEventListener("click",function(){
    circle1.style.animation=""
    circle2.style.animation=""
    circle3.style.animation=""
    circle4.style.animation=""
})