//SELECTORS

const AdviceNumber = document.getElementById("Advice");
const AdviceText = document.getElementById("AdviceText");
const DiceIcon = document.getElementById("DiceIcon");



async function getdata(){
    console.log('jbsjbdsjd');
    const data = await axios.get("https://api.adviceslip.com/advice");

     AdviceText.innerText = data.data.slip.advice;
     AdviceNumber.innerText = `#${data.data.slip.id}`;

}

DiceIcon.addEventListener('click',getdata());

window.onload = getdata();


