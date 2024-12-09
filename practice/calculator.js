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
    // console.log(calValue);

    const newItem = document.createElement("span");
    // newItem.classList.add(`_${item.value}`);
    newItem.innerText = `${item.value}`;
    display.appendChild(newItem);

    if (display.innerText !== "") {
      document.getElementById("_0").style.visibility = "hidden";
    }
    // // const value = document.querySelectorAll(`.${item.classList}`);

    // const calValue = Array.from(item.value).map(
    //   (node) => parseFloat(node.innerText)
    // );
    // for (const e of newItem) {
    //   e += `${item.value}`;
    //   return Number(e);
    // }
  });
});

delBtn.addEventListener("click", () => {
  if (display.innerText !== "0") {
    display.removeChild(display.lastChild);
    calValue.pop();
    if (display.innerText !== "0") {
      document.getElementById("_0").style.visibility = "visible";
    }
  }
});

const evaluateExpression = (expression) => {
  let numbers = [];
  let operators = [];
  let currentNumber = "";
  for (let char of expression) {
    if (
      char === "0" ||
      char === "1" ||
      char === "2" ||
      char === "3" ||
      char === "4" ||
      char === "5" ||
      char === "6" ||
      char === "7" ||
      char === "8" ||
      char === "9"
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

  //calculate
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
    if (operators[i] === "+") {
      result += numbers[i + 1];
    } else if (operators[i] === "-") {
      result -= numbers[i + 1];
    } else if (operators[i] === "×") {
      result *= numbers[i + 1];
    } else if (operators[i] === "÷") {
      if (numbers[i + 1] === "0") {
        return "Division by zero is undefined!";
      } else {
        result /= numbers[i + 1];
      }
    }
  }
  console.log(numbers);
  console.log(operators);
  return result;
};

equalBtn.addEventListener("click", () => {
  // let result = "";
  // calValue.forEach((item, index) => {
  // if (Number.isInteger(item)) {
  // if (Number.isInteger(calValue[calValue.indexOf(item) - 1])) {
  // if (index > 0 && Number.isInteger(parseFloat(calValue[index - 1]))) {
  // calValue.join("");
  // result += item.toString();
  // }
  // if (item[index - 1] === ".") {
  //   result += calValue.toString();
  // }
  // if (item[index - 1] === "+") {
  //   result += calValue;
  // } else if (item[index - 1] === "-") {
  //   result -= calValue;
  // } else if (item[index - 1] === "×") {
  //   result *= calValue;
  // } else if (item[index - 1] === "÷") {
  //   result /= calValue;
  // }
  // }

  // display.textContent = result;
  // const expression = calValue.toString();
  // const expression = calValue.join("");
  // console.log(calValue);
  // console.log(expression);
  display.innerText = evaluateExpression(calValue);
});
