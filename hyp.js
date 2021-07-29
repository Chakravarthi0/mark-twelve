let inpOne = document.getElementById("inpOne");

let inpTwo = document.getElementById("inpTwo");

let form = document.getElementById("hypForm");

let hypRes = document.getElementById("hypRes");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let a = Number(inpOne.value);
    let b = Number(inpTwo.value);

    let res = Math.sqrt((a*a) + (b*b));

    hypRes.innerHTML = `<h4>Hypotenuse: ${res}<\h4>`
})