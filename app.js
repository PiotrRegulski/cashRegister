
const toPayspan =document.querySelector("#to-pay");
const paidSpan= document.querySelector("#paid");
const btnTest = document.querySelector("button#btnTest")
const cash = toPayspan.innerHTML=getRandomIntInclusive(1,100);
const goodAnswer = document.querySelector("#good-answer");
const wrongAnswer= document.querySelector("#bad-answer");
console.log(wrongAnswer);
const restMoney = document.querySelector("#restofMoney")
let rMoney;
paidSpan.innerHTML=getRndInteger(Number(cash), 200);



// liczenie randomowych liczb
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)}
   
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
      }  
 
      
      // wyswietlanie odpowiedzi
 function dziala(){
  let subtraction = Number(paidSpan.innerHTML - toPayspan.innerHTML);
  console.log(subtraction);
  if(subtraction === Number(rMoney) )
  {
    console.log("dziala");
    goodAnswer.style.display='block';
wrongAnswer.style.display='none';
  }else{
    console.log("nie działa");
    goodAnswer.style.display='none';
    wrongAnswer.style.display='block';
  }
 }     


function chanegAnswer(){
  rMoney=document.getElementById('restofMoney').value;
 dziala();
console.log(rMoney);


}
btnTest.addEventListener('click', chanegAnswer);
// Number(cash);
// console.log(Number(cash));


