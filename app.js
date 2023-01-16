
const toPayspan =document.querySelector("#to-pay");
const paidSpan= document.querySelector("#paid");
const btnTest = document.querySelector("button#btnTest");
const btnRestart = document.querySelector("button#btnReset");
console.log(btnRestart);

const goodAnswer = document.querySelector("#good-answer");
const wrongAnswer= document.querySelector("#bad-answer");

const restMoney = document.querySelector("#restofMoney")
let rMoney;
function easyVersion(){
  
  const cash = toPayspan.innerHTML=getRandomIntInclusive(1,100);

  function isLong(bankote) {
    return bankote > cash;
  }
  const banknotes=[10,20,40,50,100,200];
  const longer = banknotes.filter(isLong);
  const payTo = longer[0];
  console.log(longer);  console.log(payTo); 
  paidSpan.innerHTML=payTo;
  goodAnswer.style.display='none';
  wrongAnswer.style.display='none';
  }


easyVersion();

function setApp (){
  const cash = toPayspan.innerHTML=getRandomIntInclusive(1,100);
  paidSpan.innerHTML=getRndInteger(Number(cash), 200);
  document.getElementById('restofMoney').value="";
  goodAnswer.style.display='none';
  wrongAnswer.style.display='none';


}
// setApp();

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
btnRestart.addEventListener('click',easyVersion);

