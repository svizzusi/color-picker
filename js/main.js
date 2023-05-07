const basicColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let randomButton = document.querySelector('.rd-btn')
let button = document.querySelector(".btn")
let colorText = document.querySelector(".color-text")
let bgText = document.querySelector(".bg-text")
let toastAlert = document.querySelector("#toast-notification")

button.addEventListener("click", function() {
    let randomNumber = getRandomNumber();
    let body = document.body.style.backgroundColor = basicColors[randomNumber];
    colorText.innerText = " " + basicColors[randomNumber]
    toastAlert.innerText = basicColors[randomNumber] + " Copied to clipboard"
});

randomButton.addEventListener('click', function() {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        hexColor += hexColors[getRandomHexColor()];
    }
    let body = document.body.style.backgroundColor = hexColor;
    colorText.innerText = " " + hexColor
    toastAlert.innerText = hexColor + " Copied to clipboard"
})

function getRandomNumber() {
    return Math.floor(Math.random() * basicColors.length)
}

function getRandomHexColor() {
    return Math.floor(Math.random() * hexColors.length)
}

function toastNotification() {
  toastAlert.style.visibility = "visible";
  setTimeout(function(){
    toastAlert.style.visibility = "hidden";
  }, 2000);
}

bgText.addEventListener("click", function() {
  let colorValue = colorText.innerText;

  // check if the Clipboard API is supported
  if (navigator.clipboard) {
    navigator.clipboard.writeText(colorValue)
      .then(() => {
        toastNotification()
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
      toastNotification()
    } catch (error) {
      console.error("Fallback method failed: ", error);
    }
  }
});
