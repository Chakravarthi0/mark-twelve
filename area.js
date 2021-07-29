let formOne = document.getElementById("formOne");

let base = document.getElementById("base");

let height = document.getElementById("height");

let oupOne = document.getElementById("oupOne");

let a = document.getElementById("sideOne");

let b = document.getElementById("sideTwo");

let c = document.getElementById("sideThree");

let formTwo = document.getElementById("formTwo");

let oupTwo = document.getElementById("oupTwo");

let errTwo = document.getElementById("errTwo");

let formThree = document.getElementById("formThree");

let angleOne = document.getElementById("angleOne");

let angleTwo = document.getElementById("angleTwo");

let angleThree = document.getElementById("angleThree");

let optOne = document.getElementById("optOne");

let optTwo = document.getElementById("optTwo");

let optThree = document.getElementById("optThree");

optOne.addEventListener("change", () => {
    formOne.style.display = "block";
    formTwo.style.display = "none";
    formThree.style.display = "none";
})

optTwo.addEventListener("change", () => {
    formOne.style.display = "none";
    formTwo.style.display = "block";
    formThree.style.display = "none";
})

optThree.addEventListener("change", () => {
    formOne.style.display = "none";
    formTwo.style.display = "none";
    formThree.style.display = "block";
})

formOne.addEventListener("submit", (e) => {

    e.preventDefault();

    let res = (Number(base.value) * Number(height.value)) / 2;

    oupOne.innerHTML = `<h4>Area: ${res} </h4>`;
})


formTwo.addEventListener("submit", (e) => {

    e.preventDefault();

    let a = Number(sideOne.value);

    let b = Number(sideTwo.value);

    let c = Number(sideThree.value);

    console.log(a, b, c)

    if (((a + b) > c) && ((a + c) > b) && ((b + c) > a)) {
        let s = (a + b + c) / 2;

        let res = Math.sqrt(s * (s - a) * (s - b) * (s - c));

        oupTwo.style.display = "block";

        oupTwo.innerHTML = `<h4>Area: ${res} </h4>`;

        errTwo.style.display = "none";
    }
    else {
        errTwo.style.display = "block";
        oupTwo.innerHTML = `<h4>Area= √s(s-a)(s-b)(s-c)</h4>`;
        oupTwo.style.display = "none";
    }
})


formThree.addEventListener("submit", (e) => {

    e.preventDefault();

    let b = Number(angleOne.value);

    let c = Number(angleTwo.value);

    let a = Number(angleThree.value);

    console.log(a, b, c)

    let res = ( b* c * Math.sin(a * Math.PI/180))/2; // Math.PI/180 => deg to rad

    oupThree.innerHTML = `<h4>Area: ${res} </h4>`;

})