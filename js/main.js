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
    let colorValue = color.innerText;
  
    // check if the Clipboard API is supported
    if (navigator.clipboard) {
      navigator.clipboard.writeText(colorValue)
        .then(() => {
          alert(colorValue + " " + "Copied to Clipboard");
        })
        .catch((error) => {
          console.error("Failed to copy text: ", error);
        });
    } else {
      // Clipboard API not available, try using a fallback method
      try {
        const inputElement = document.createElement("textarea");
        inputElement.value = colorValue;
        document.body.appendChild(inputElement);
        inputElement.select();
        document.execCommand("copy");
        document.body.removeChild(inputElement);
        alert(colorValue + " " + "Copied to Clipboard");
      } catch (error) {
        console.error("Fallback method failed: ", error);
      }
    }
  });