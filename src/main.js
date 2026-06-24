const spanRef = document.querySelector(".span")

let count = 0


const number = setInterval(() =>{
    count += 1
    spanRef.textContent = count

    if(count === 5){
        clearInterval(number)
    }
},1000)






const divRef = document.querySelector(".div")



let style = 0



const styles = setInterval(() =>{
    style += 1

   
    // divRef.style.backgroundColor = 'green';

    if(style === 1){
    divRef.style.backgroundColor = 'red';
    }
     if(style === 2){
     divRef.style.backgroundColor = 'blue';
    }
     if(style === 3){
     divRef.style.backgroundColor = 'green';
    }
     if(style === 4){
     clearInterval(styles)
    }
},1000)














const startRef = document.querySelector(".start");
const scoreRef = document.querySelector(".rahynok")
const colorMessage = document.querySelector(".color");
const resumeRef = document.querySelector(".resume")
const colours = ["blue","red","green"];
const btnsRef = document.querySelectorAll(".btn");
const stopRef = document.querySelector(".stop");



let canClick = false;
let timeoutId
let index = 0
let scoreCounter = 0

startRef.addEventListener("click", startGame);

function startGame() {
    canClick = true;

    colorMessage.textContent = colours[index];
    timeoutId = setTimeout(() => {
        if (!canClick) return;
        canClick = false;
        scoreCounter -= 1;
        scoreRef.textContent = scoreCounter;
        alert("Ви програли");
        nextRound();
    }, 1000);
}

btnsRef.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (!canClick) return; 
        canClick = false;
        clearTimeout(timeoutId);
        if (e.target.dataset.color !== colours[index]) {
            scoreCounter -= 1;
            alert("Ви програли -1 бал");
        } else {
            scoreCounter += 1;
            alert("Ви виграли +1 бал");
        }
        scoreRef.textContent = scoreCounter;
        nextRound();
    });
});

let isPaused = false;

stopRef.addEventListener("click", () => {
    isPaused = true;
    canClick = false;
    clearTimeout(timeoutId);
});

resumeRef.addEventListener("click", () => {
    if (!isPaused) return;
    isPaused = false;
    startGame();
});

function nextRound() {
    index++;
    if (index >= colours.length) {
        index = 0;
    }
    setTimeout(() => {
        startGame();
    }, 400);
}



const btnStart = document.querySelector(".startTimout");
const titleRef = document.querySelector(".message");
const inputRef = document.querySelector(".time");


btnStart.addEventListener("click",()=>{
    const time = Number(inputRef.value) * 1000;
    setTimeout(()=>{
        if (isNaN(time)) {
            titleRef.textContent = "Введіть число"
        }
        else{
            titleRef.textContent = `Я з'явилась після ${inputRef.value} секунд(-и)!`
        }
    },time)   
})