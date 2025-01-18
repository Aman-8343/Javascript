

let div=document.querySelector("div");
div.onmouseover=(e)=>
{
console.log("inside");
console.log(e);
console.log(e.type);
console.log(e.target);
console.log(e.clientX,e.clientY);
}


let modeBtn=document.querySelectorAll("#mode");
let currMode="light";
modeBtn.addEventListener("click",()=>{
   if(currMode==="light"){
    currMode="dark";
    document.querySelector("body").style.backgroundColor="black";
   }
   else{
    currMode="light";
    document.querySelector("body").style.backgroundColor="white";
   }
   console.log(currMode);
});



let moddebtn=document.querySelector("#modde")
let currmode="red";
moddebtn.addEventListener("click",()=>{
   if(currmode==="red"){
      currmode="blue";
      document.querySelector("body").style.backgroundColor="red";
   }
   else{

currmode="red";
document.querySelector("body").style.backgroundColor="blue";
   
}
