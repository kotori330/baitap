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
const calValue = [];
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
    const newItem = document.createElement("span");
    // newItem.classList.add(`_${item.value}`);
    newItem.innerText = `${item.value}`;
    display.appendChild(newItem);

    calValue.push(item.value);

    // console.log(calValue);

    // const value = document.querySelectorAll(`.${item.classList}`);

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
  display.removeChild(display.lastChild);
  calValue.pop();
});

equalBtn.addEventListener("click", () => {
  const result = parseFloat(calValue);
  console.log(result);
  return result;
});
