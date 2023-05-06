const colors = ["crimson", "dodgerblue", "purple", "yellow", "orange", "lightgreen"]

const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let randomButton = document.querySelector('.rd-btn')
let button = document.querySelector(".btn")
let color = document.querySelector(".color")
let bgRandom = document.querySelector(".bg-random")

button.addEventListener("click", function() {
    let randomNumber = getRandomNumber();
    console.log(randomNumber)
    let body = document.body.style.backgroundColor = colors[randomNumber];
    color.innerText = " " + colors[randomNumber]
});

randomButton.addEventListener('click', function() {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hexColors[getRandomHexColor()];
    }
    let body = document.body.style.backgroundColor = hexColor;
    color.innerText = " " + hexColor
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}

function getRandomHexColor() {
    return Math.floor(Math.random() * hexColors.length)
}

bgRandom.addEventListener("click", function() {
    let colorValue = color.textContent;
        navigator.clipboard.writeText(colorValue);
        alert(colorValue + " " + "Copied to Clipboard");
})

