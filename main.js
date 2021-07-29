let angleOne = document.getElementById("angleOne");

let angleTwo = document.getElementById("angleTwo");

let angleThree = document.getElementById("angleThree");

let check = document.getElementById("check");

let angleForm = document.getElementById("angleForm");

let pass = document.getElementById("pass");

let fail = document.getElementById("fail");

angleForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let sum = Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value);


    if(sum == 180){
        fail.style.display = "none";
        pass.style.display = "block";
    }else{
        fail.style.display = "block";
        pass.style.display = "none";
    }
})



