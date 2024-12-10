const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const multiBtn = document.querySelector(".multi-btn");
const divideBtn = document.querySelector(".divide-btn");
const sevenBtn = document.querySelector(".seven-btn");
const eightBtn = document.querySelector(".eight-btn");
const nineBtn = document.querySelector(".nine-btn");
const fourBtn = document.querySelector(".four-btn");
const fiveBtn = document.querySelector(".five-btn");
const sixBtn = document.querySelector(".six-btn");
const oneBtn = document.querySelector(".one-btn");
const twoBtn = document.querySelector(".two-btn");
const threeBtn = document.querySelector(".three-btn");
const zeroBtn = document.querySelector(".zero-btn");
const dotBtn = document.querySelector(".dot-btn");

// special btn
const equalBtn = document.querySelector(".equal-btn");
const delBtn = document.querySelector(".del-btn");

//display
const display = document.querySelector(".display-field");

//declare
let calValue = [];
[
  plusBtn,
  minusBtn,
  multiBtn,
  divideBtn,
  sevenBtn,
  eightBtn,
  nineBtn,
  fourBtn,
  fiveBtn,
  sixBtn,
  oneBtn,
  twoBtn,
  threeBtn,
  zeroBtn,
  dotBtn,
].forEach((item) => {
  item.addEventListener("click", () => {
    calValue.push(item.value);
    const newItem = document.createElement("span");
    newItem.innerText = `${item.value}`;
    display.appendChild(newItem);
    // if (display.innerText !== "") {
    //   document.getElementById("_0").style.visibility = "hidden";
    // }
  });
});

const evaluateExpression = (expression) => {
  let numbers = [];
  let operators = [];
  let currentNumber = "";
  for (let char of expression) {
    if (
      "0123456789".includes(char)
      // char === "0" ||
      // char === "1" ||
      // char === "2" ||
      // char === "3" ||
      // char === "4" ||
      // char === "5" ||
      // char === "6" ||
      // char === "7" ||
      // char === "8" ||
      // char === "9"
    ) {
      currentNumber += char;
    } else {
      if (currentNumber) {
        numbers.push(parseFloat(currentNumber));
        currentNumber = "";
      }
      operators.push(char);
    }
  }
  if (currentNumber) {
    numbers.push(parseFloat(currentNumber));
    currentNumber = "";
  }

  let result = numbers[0];
  // operators.forEach((item, index) => {
  //   if (operators[index] === "+") {
  //     result += numbers[index + 1]
  //   } else if (operators[i] === "-") {
  //   result -= numbers[i + 1];
  // } else if (operators[i] === "×") {
  //   result *= numbers[i + 1];
  // } else if (operators[i] === "÷") {
  //   result /= numbers[i + 1];
  // });
  // return result;

  for (let i = 0; i < operators.length; i++) {
    if (numbers.length === 1) {
      return (result = numbers);
    } else if (operators.length === 1 && numbers.length === 0) {
      return "Error!";
    } else if (operators.length >= numbers.length) {
      result = 0;
      if (operators[i] === "+") {
        result += numbers[i + 1];
      } else if (operators[i] === "-") {
        result -= numbers[i + 1];
      } else if (operators[i] === "×") {
        result *= numbers[i + 1];
      } else if (operators[i] === "÷") {
        if (numbers[i + 1] === 0) {
          return "Error!";
        } else {
          result /= numbers[i + 1];
        }
      }
    } else {
      if (operators[i] === "+") {
        result += numbers[i + 1];
      } else if (operators[i] === "-") {
        result -= numbers[i + 1];
      } else if (operators[i] === "×") {
        result *= numbers[i + 1];
      } else if (operators[i] === "÷") {
        if (numbers[i + 1] === 0) {
          return "Error!";
        } else {
          result /= numbers[i + 1];
        }
      }
    }
  }
  console.log(numbers);
  console.log(operators);
  return result;
};

equalBtn.addEventListener("click", () => {
  const expression = calValue.join(""); // Is it needed?
  display.innerText = evaluateExpression(expression);
  delBtn.addEventListener("click", () => {
    calValue = [];
  });
});

delBtn.addEventListener("click", () => {
  display.removeChild(display.lastChild);
  calValue.pop();
});

// minus value
// decimal
// error when too many operator simutaneously
