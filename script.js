const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generateBtn = document.getElementById("generate-btn");
const resetBtn = document.getElementById('reset-btn');
const generatorPassword = document.querySelectorAll('.generator__password');
const passwordLengthInput = document.getElementById('password-length-input');
const errorText = document.getElementById('error-text');
const copyBtn = document.querySelectorAll('.generator__copy-button');
const passwordBlock = document.getElementById('password-block');

function randomNumber() {
    let randomNum = Math.floor(Math.random() * characters.length);
    return randomNum;
}

function generatePass(num) {
    let password = "";
    for (let i = 0; i < num; i++) {
      password += characters[randomNumber()];
    }
    return password
}

generateBtn.addEventListener('click', function(event) {
    event.preventDefault();
    let passwordLength = +passwordLengthInput.value;
    if (passwordLength < 5) {
        errorText.textContent = 'Please enter the number greater than 4'
    }
    else {
        errorText.textContent = '';
        generatorPassword.forEach(pass => {
            pass.value = generatePass(passwordLength)
        });
    }
});


resetBtn.addEventListener('click', function() {
    errorText.textContent = '';
    generatorPassword.forEach(pass => pass.textContent = '');
});


passwordBlock.addEventListener('click', function (event) {
    event.preventDefault();

    if (
      event.target.classList.contains("generator__copy-button") ||
      event.target.closest(".generator__copy-button")
    ) {
      copyBtn.forEach((btn, index) => {
        if (event.target === btn) {
          generatorPassword[index].focus();
          generatorPassword[index].select();
          document.execCommand("copy");
        }
      });
    }
});



