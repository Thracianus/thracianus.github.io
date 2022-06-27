var button= document.getElementById("btn");
const div=document.querySelector('div');
const colors=['green','blue','violet','pink','brown','black']
var i;
 
function tikla(){
    i= Math.floor(Math.random()*6);
    div.style.backgroundColor= colors[i];
    btn2.innerHTML=i+' '+ colors[i];
}

function mouseover(){
    var element=document.getElementById("btn1");
    element.innerHTML="Change color";

}
function mouseout(){
    var element=document.getElementById("btn1");
    element.innerHTML="Click here";

}