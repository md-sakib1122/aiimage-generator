
const form=document.querySelector(".generate");

function getform(e){
    e.preventDefault();
   let prompt=e.srcElement[0].value;
   let imgcount= e.srcElement[1].value;


     
   const imgbox=Array.from({length:imgcount},function(){

   return `<div class="out">
            <img src="image1.jpg" alt="">
            <a href=""></a>
          </div>
         `
   }).join("");


   outputcontainer= document.querySelector(".outputcontainer"); 
   outputcontainer.innerHTML=imgbox;
}


form.addEventListener("submit",getform);