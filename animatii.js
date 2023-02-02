let caracter = document.getElementById("caracter");
let apa = document.getElementById("apa");
let piva = document.getElementById("piva");
let restart=document.getElementById("restart");
document.getElementById("restart").style.visibility = "hidden";
document.getElementById("restartButton").style.visibility="hidden";
 function jump(){
     if(caracter.classList != "animate"){
      caracter.classList.add("animate")
     }
     setTimeout(function()
     {caracter.classList.remove("animate");
    },500);
 }
 let i = 0;
 let checkDead = setInterval(function(){
    let caracterTop = parseInt(window.getComputedStyle(caracter).getPropertyValue("top"));

    let blockLeft = parseInt(window.getComputedStyle(apa).getPropertyValue("left"));
    
    if(caracterTop>=330 && blockLeft<15 && blockLeft>0){
 apa.style.animation = "none";
 apa.style.display="none";
 piva.style.display="none";
 caracter.classList.add("cadere");
 document.getElementById("restart").style.visibility = "visible";
 document.getElementById("restartButton").style.visibility="visible";
 caracter.style.animation='none';
 
     }
},10);
   


let checkPiva = setInterval(function(){
let caracterT = parseInt(window.getComputedStyle(caracter).getPropertyValue("top"));

let blockL = parseInt(window.getComputedStyle(piva).getPropertyValue("left"));


if(caracterT>=340 && blockL<30 && blockL>0 ){
i+= 1;
document.getElementById("name").innerHTML = i;
}
},60);

      