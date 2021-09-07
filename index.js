let count=0;
var start=document.getElementById("start");
var circle1=document.getElementById("circle1");
var circle2=document.getElementById("circle2");
var circle3=document.getElementById("circle3");
var circle4=document.getElementById("circle4");
var end=document.getElementById("end");
start.addEventListener("click",function(){
    circle1.style.animation="change-background 1s steps(6) infinite";
});

end.addEventListener("click",function(){
    circle1.style.animation="";
});