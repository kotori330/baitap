// const plusBtn = document.querySelector(".plus-btn");
// const minusBtn = document.querySelector(".minus-btn");
// const multiBtn = document.querySelector(".multi-btn");
// const divideBtn = document.querySelector(".divide-btn");
// const sevenBtn = document.querySelector(".seven-btn");
// const eightBtn = document.querySelector(".eight-btn");
// const nineBtn = document.querySelector(".nine-btn");
// const fourBtn = document.querySelector(".four-btn");
// const fiveBtn = document.querySelector(".five-btn");
// const sixBtn = document.querySelector(".six-btn");
// const oneBtn = document.querySelector(".one-btn");
// const twoBtn = document.querySelector(".two-btn");
// const threeBtn = document.querySelector(".three-btn");
// const zeroBtn = document.querySelector(".zero-btn");
// const dotBtn = document.querySelector(".dot-btn");
// const equalBtn = document.querySelector(".equal-btn");
// const delBtn = document.querySelector(".del-btn");
// const display = document.querySelector(".display-field");

// const keypad = document.querySelector(".keypad")
// const btns = Array.from(keypad.children)

const operatorButton = document.querySelectorAll(".operator-btn");
const numberButton = document.querySelectorAll(".btn");
const equalBtn = document.querySelector(".equal-btn");
const delBtn = document.querySelector(".del-btn");
const display = document.querySelector(".display-field");
const absoluteBtn = document.querySelector(".abs-btn");
// const defaultDisplay = document.getElementById("_0")

let calValue = [];

// Print to the display screen + Add number to calculation array
// Spread operator: Convert array-like object to array
[...operatorButton, ...numberButton].forEach((button) => {
  button.addEventListener("click", () => {
    removeDefaultDisplay();
    if ("0123456789.".includes(button.value)) {
      pushValueToCalValue(button.value);
      pushValueToScreen(button.value);
    }
    if ("+-×÷".includes(button.value)) {
      replaceValueInCalValue(button.value);
      replaceValueOnScreen(button.value);
    }

    cleanUpOperators();
    // console.log(button.value);
    console.log(`Cal Value: ${calValue}`);
  });
});

//remove default display when entering value
const removeDefaultDisplay = () => {
  const defaultDisplay = document.getElementById("_0");
  if (defaultDisplay) {
    defaultDisplay.remove();
  }
};

// For pushing value to calculation array
const pushValueToCalValue = (value) => {
  if (
    value === "-" &&
    (calValue.length === 0 || calValue["+-×÷".includes(calValue.length - 1)])
  ) {
    calValue.push(value);
  } else {
    calValue.push(value);
  }
  console.log(`Pushing value: ${value}`);
};

const replaceValueInCalValue = (value) => {
  if (
    display.lastChild && // Check if display exist before accessing its content
    "+-×÷".includes(calValue[calValue.length - 1])
  ) {
    calValue[calValue.length - 1] = value;
  } else {
    if (
      value === "-" &&
      (calValue.length === 0 || calValue["+-×÷".includes(calValue.length - 1)])
    ) {
      calValue.push(value);
    } else if (calValue[calValue.length - 1] === "-") {
      calValue[calValue.length - 1] += value;
    } else {
      calValue.push(value);
    }
  }
};

// For pushing value to display screen
const pushValueToScreen = (value) => {
  const newItem = document.createElement("span");
  newItem.innerText = `${value}`;
  display.appendChild(newItem);
};

const replaceValueOnScreen = (value) => {
  if (
    display.lastChild && // Check if display exist before accessing its content
    "+-×÷".includes(display.lastChild.textContent)
  ) {
    display.lastChild.textContent = `${value}`;
  } else {
    const newItem = document.createElement("span");
    newItem.innerText = `${value}`;
    display.appendChild(newItem);
  }
};

// For disallowing to input no more than 1 operator
const cleanUpOperators = () => {
  let operatorCount = 0;
  for (let value of calValue) {
    if ("+-×÷".includes(value)) {
      operatorCount++;
    }
  }
  if (operatorCount >= 2) {
    calValue.pop();
    display.removeChild(display.lastChild);
  }
};

const evaluateExpression = (expression) => {
  try {
    // \d+\.?\d* e.g   123    123.45    0.45
    // |: or
    // \.\d+ e.g   .5    .123
    // [+\-×÷] -> operators
    // g flag: Continue to search entire the string
    // Example: const expression = "123+456.78÷9.0×.12-34";
    // => ["123", "+", "456.78", "÷", "9.0", "×", ".12", "-", "34"]
    // const parts = expression.match(/(\d+\.?\d*|\.\d+|[+\-×÷])/g);
    const parts = expression.match(/-?\d+\.?\d*|-?\.\d+|[+\-×÷]/g);

    let result = parseFloat(parts[0]); // turn a whole string to numbers and operator
    if (!parts || parts.length < 3) {
      if (parts.length === 1) {
        result = parseFloat(parts[0]);
      } else if (parts.length === 2 && parseFloat(parts[1]) <= 0) {
        parts.splice(1, 1, "-", Math.abs(parts[1])); // [1, -2] -> [1, -, 2]
      } else {
        throw new Error("Invalid expression");
      }
    }

    console.log(`Parts is: ${parts}`);

    let currentOperator = null;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      if ("+-×÷".includes(part) && !"0123456789.".includes(part)) {
        currentOperator = part;
      } else {
        const nextValue = parseFloat(part);

        // Check for multiple decimal separators
        if (String(part).split(".").length > 2) {
          // 1..1 -> [1, undefined, 1]
          throw new Error("Invalid number format");
        }

        switch (currentOperator) {
          case "+":
            result += nextValue;
            break;
          case "-":
            result -= nextValue;
            break;
          case "×":
            result *= nextValue;
            break;
          case "÷":
            if (nextValue === 0) {
              throw new Error("Division by zero");
            }
            result /= nextValue;
            break;
          default:
            break;
        }
      }
    }
    return result;
  } catch (err) {
    return err.message;
  }
};

equalBtn.addEventListener("click", () => {
  const expression = calValue.join(""); // Turn calValue array to a string. E.g: "1.1+2"
  const result = evaluateExpression(expression);
  display.innerText = result;
  calValue = [result];
  delBtn.addEventListener("click", () => {
    calValue = [];
  });
});

delBtn.addEventListener("click", () => {
  display.removeChild(display.lastChild);
  calValue.pop();

  if (display.innerHTML.trim() == "") {
    displayDefaultZero();
  }
});

// absoluteBtn.addEventListener('click', () => {
//   calValue.forEach((value, index) => {
//     if (calValue[index] < 0) {

//       if (calValue[index] || "+-×÷".includes(calValue[index - 1])) {
//       Math.abs(value)
//       }
//     }
//   })
// })

const displayDefaultZero = () => {
  const fragment = document.createDocumentFragment();
  const defaultDisplay = document.createElement("span");
  defaultDisplay.id = "_0";
  defaultDisplay.textContent = "0";

  fragment.appendChild(defaultDisplay);
  display.appendChild(fragment);
};

absoluteBtn.addEventListener("click", () => {
  // Đổi số âm dương khi có 1 số hạng
  console.log(`CalValue before change operator: ${calValue}`);
  if (
    !calValue.some((val) => "+-×÷".includes(val)) ||
    "+-×÷".includes(calValue[calValue.length - 1])
  ) {
    let temp = "";
    for (let i = 0; i < calValue.length; i++) {
      temp += calValue[i];
    }
    const toggleValue = 0 - parseFloat(temp);
    calValue.splice(0, calValue.length, toggleValue);
  }

  // Đổi số âm dương khi có hai số hạng
  if (
    (calValue.some((val) => "+-×÷".includes(val)) &&
      "0123456789.".includes(calValue[calValue.length - 1])) ||
    calValue[calValue.length - 1] < 0
  ) {
    let operatorIndex = -1;
    let temp = "";
    for (let i = 0; i < calValue.length; i++) {
      if ("+-×÷".includes(calValue[i])) {
        operatorIndex = i;
        break;
      }
    }
    for (let i = operatorIndex + 1; i < calValue.length; i++) {
      temp += calValue[i];
    }
    const toggleValue = 0 - parseFloat(temp);
    calValue.splice(
      operatorIndex + 1,
      calValue.length - operatorIndex - 1,
      toggleValue
    );
  }

  display.textContent = calValue.join("");
  console.log(`CalValue after change operator: ${calValue}`);
});

// let Khiem = new Human('Khiem')
//  let name = Khiem.name
// ==> Khiem là 1 interface. Tương tự với String

// String.toString(0) -> '0'
// toString là 1 property của 1 obj nào đó, không thể đứng độc lập
