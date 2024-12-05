const display = document.querySelector(".display-list");
const addList = document.querySelector(".add-btn");
const addTitle = document.querySelector(".add-input");

addList.addEventListener("click", () => {
  if (addTitle.value !== "") {
    const newItem = document.createElement("li");
    newItem.innerHTML = `<span><i class="fa-solid fa-check"></i>${addTitle.value}</span><span class="del-btn"><i class="fa-solid fa-x"></i></span>`;
    display.appendChild(newItem);

    const delList = newItem.querySelector(".del-btn");
    delList.addEventListener("click", () => {
      newItem.remove();
    });

    const checkMark = newItem.querySelector(".fa-check");
    newItem.addEventListener("click", () => {
      newItem.classList.toggle("completed");
      checkMark.classList.toggle("visible");
    });
  } else {
    alert("You must enter a value!");
  }
});
