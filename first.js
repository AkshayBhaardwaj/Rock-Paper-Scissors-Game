let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");

const Result = document.querySelector("#result");

const userScorePrag = document.querySelector("#user-score");
const computerScorePrag = document.querySelector("#computer-score");

const genComputerChoice = () =>{
    const options=["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame = () => {
    Result.innerText="Game Was Draw, Play Again.";
    Result.style.backgroundColor="#081b31";

}

const showWinner = (userWin,userChoice,computerChoice) =>{
    if (userWin) {
        userScore++;
        userScorePrag.innerText = userScore;
        Result.innerText=`You Win.Your ${userChoice} Beats ${computerChoice}`;
        Result.style.backgroundColor="green";
    } else {
        computerScore++;
        computerScorePrag.innerText = computerScore;
        Result.innerText=`You Lose. ${computerChoice} Beats Your ${userChoice}`;
        Result.style.backgroundColor="red";
        
    }
}

const playGame = (userChoice) =>{
    console.log("User Choice =",userChoice);

    const computerChoice = genComputerChoice();
    console.log("Computer Choice =",computerChoice);

    if (userChoice===computerChoice) {

        drawGame();
        
    } else {
        let userWin=true;
        if (userChoice==="rock") {

            userWin = computerChoice === "paper" ? false : true;
            
        } else if(userChoice==="paper") {

            userWin=computerChoice==="scissors" ? false:true;
            
        }
        else{
            userWin=computerChoice==="rock" ? false:true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach((choice)=>{

    choice.addEventListener("click",()=>
    {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});








































let btn1=document.querySelector("#btn1");
let body=document.querySelector("body");
let currmode="light";

btn1.addEventListener("click",()=>{
    if (currmode==="light") {
        currmode="dark";
        body.classList.add("dark");
        body.classList.remove("light");
        
    } else {
        currmode="light";
        body.classList.add("light");
        body.classList.remove("dark");
        
    }
    console.log(currmode);
})
