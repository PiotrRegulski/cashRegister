
const toPayspan = document.querySelector("#to-pay");
const paidSpan = document.querySelector("#paid");
const btnTest = document.querySelector("button#btnTest");
const btnRestart = document.querySelector("button#btnReset");


const goodAnswer = document.querySelector("#good-answer");
const wrongAnswer = document.querySelector("#bad-answer");

const restMoney = document.querySelector("#restofMoney");
let rMoney;
const numbGoodans = document.querySelector("span#numberofgood");
let numberGoodans =0;




function easyVersion() {

  const cash = toPayspan.innerHTML = getRandomIntInclusive(1, 100);

  function isLong(bankote) {
    return bankote > cash;
  }
  const banknotes = [10, 20, 40, 50, 100, 200];
  const longer = banknotes.filter(isLong);
  const payTo = longer[0];

  paidSpan.innerHTML = payTo;
  goodAnswer.style.display = 'none';
  wrongAnswer.style.display = 'none';
  document.getElementById('restofMoney').value = "";
  let myscore = localStorage.getItem("anser")
  numbGoodans.innerHTML = myscore;

}


easyVersion();
// funkcion with harder level calculate
function setApp() {
  const cash = toPayspan.innerHTML = getRandomIntInclusive(1, 100);
  paidSpan.innerHTML = getRndInteger(Number(cash), 200);
  document.getElementById('restofMoney').value = "";
  goodAnswer.style.display = 'none';
  wrongAnswer.style.display = 'none';


}


// liczenie randomowych liczb
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// wyswietlanie odpowiedzi
function dziala() {
  let subtraction = Number(paidSpan.innerHTML - toPayspan.innerHTML);


  if (subtraction === Number(rMoney)) {

    

    goodAnswer.style.display = 'block';
    wrongAnswer.style.display = 'none';
    numberGoodans+=1;


  } else {
    goodAnswer.style.display = 'none';
    wrongAnswer.style.display = 'block';


  }
}
function addTostorage() {
  localStorage.setItem("anser", numberGoodans);
  
}

function chanegAnswer() {
  rMoney = document.getElementById('restofMoney').value;

  dziala();
  addTostorage();
  numbGoodans.innerHTML = numberGoodans;
  console.log(typeof( numberGoodans));

  }

btnTest.addEventListener('click', chanegAnswer);
btnRestart.addEventListener('click', easyVersion);

