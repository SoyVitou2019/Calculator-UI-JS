var num1 = 0;
var num2 = 0;
var operator = 0;
function inner(){
  var y = document.getElementById("input");
 y.innerHTML=y.textContent + 1;
}
function inner2(){
var y = document.getElementById("input");
 y.innerHTML=y.textContent + 2;
}
function inner3(){
var y = document.getElementById("input");
 y.innerHTML=y.textContent + 3;
}
function inner4(){
var y = document.getElementById("input");
 y.innerHTML=y.textContent + 4;
}
function inner5(){
var y = document.getElementById("input");
 y.innerHTML=y.textContent + 5;
}
function inner6(){
var y = document.getElementById("input");
 y.innerHTML=y.textContent + 6;
}
function inner7(){
var y = document.getElementById("input");
 y.innerHTML=y.textContent + 7;
}
function inner8(){
var y = document.getElementById("input");
 y.innerHTML=y.textContent + 8;
}
function inner9(){
var y = document.getElementById("input");
 y.innerHTML=y.textContent + 9;
}
function inner0(){
var y = document.getElementById("input");
 y.innerHTML=y.textContent + 0;
}
let x = false;
function innerAdd(){
    operator = 1;
    var y = document.getElementById("input");
    num1=Number(y.textContent);
    y.innerHTML="";
}
function innerSubstract(){
    var y = document.getElementById("input");
    num1=Number(y.textContent);
    y.innerHTML="";
    operator = 2;
}
function innerMultiply(){
    var y = document.getElementById("input");
    num1=Number(y.textContent);
    y.innerHTML="";
    operator = 3;
}
function innerDevide(){
    var y = document.getElementById("input");
    num1=Number(y.textContent);
    y.innerHTML="";
    operator = 4;
}
function innerEqual(){
var y = document.getElementById("input");
 num2=Number(y.textContent);
  switch(operator){
    case 1:
      y.innerHTML=num1+num2;
       break;
    case 2:
      y.innerHTML=num1-num2;
       break;
    case 3:
      y.innerHTML=num1*num2;
       break;
    case 4:
      y.innerHTML=num1/num2;
       break;
      default:
      alert("sorry");
  }
}
function innerErase(){
var y = document.getElementById("input");
    y.innerHTML="";
}
function innerBack(){
var y = document.getElementById("input");
  var h = Math.floor(Number(y.textContent)/10);
  y.innerHTML=h;
}