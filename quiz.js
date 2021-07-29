let quizForm = document.getElementById("quizForm");

let ans1 = document.getElementById("ans1");

let qsnDivs = document.getElementsByClassName("question");

let finalDiv = document.getElementById("finalDiv");

quizForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let score = 0;

    for(let i = 0; i < 10; i++){
        let currAnsId = `ans${i+1}`;

        let currAns = document.getElementById(currAnsId);

        if(currAns.checked){
            qsnDivs[i].style.backgroundColor = "#90EE90";
            score++;
        }else{
            qsnDivs[i].style.backgroundColor = "pink";
        }
    }

    finalDiv.innerHTML = `<h3>Your score: ${score}</h3>`;

})