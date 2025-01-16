const attachEventListeners = () => {
  const dynamicContentSection = document.getElementById("dynamic-content");

  // For Side bar
  const sideBar = document.getElementById("side-bar");
  const myTask = document.getElementById("my-task");
  const tabs = sideBar.querySelectorAll("p");

  myTask.classList.add("active", "active-background");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      switch (tab.id) {
        case "my-page":
          window.location.href = `${path}/myPage/index.html`;
          break;
        // case "my-task":
        //   window.location.href = `${path}/myTask/index.html`;
        //   break;
        default:
          break;
      }
    });
  });

  // For modals
  const modal1btn = document.getElementById("give-birth-btn");
  const modal1 = document.getElementById("birth-report-modal");
  const cancelBtn = document.getElementsByClassName("cancel-btn")[0];
  const closeModalBtn = document.getElementsByClassName("close-modal")[0];

  const openModal = () => {
    modal1.style.display = "block";
    modal1.classList.add("show");
  };
  const closeModal = () => (modal1.style.display = "none");
  modal1btn.addEventListener("click", openModal);
  if (cancelBtn && closeModalBtn) {
    cancelBtn.addEventListener("click", closeModal);
    closeModalBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => {
      if (e.target == modal1) {
        closeModal();
      }
    });
  }
};
