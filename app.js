
const toPayspan =document.querySelector("#to-pay");
const paidSpan= document.querySelector("#paid");

const cash = toPayspan.innerHTML=getRandomIntInclusive(1,100);
paidSpan.innerHTML=getRndInteger(Number(cash), 100);



function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)}
   
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }   


Number(cash);
console.log(Number(cash));


