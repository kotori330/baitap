const loadComponents = async (id, file) => {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
    }
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
    attachEventListeners();
  } catch (err) {
    console.log(err);
  }
};

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

// Initial load of components
const path = "http://127.0.0.1:3000/baitap/working-u";
loadComponents("side-bar", `${path}/components/sidebar.html`);
loadComponents("header", `${path}/components/header.html`);
loadComponents("intro", `${path}/components/intro.html`);
loadComponents("birth-report-modal", `${path}/components/modal1.html`);
loadComponents("table-header", `${path}/myTask/tableHeader.html`);
loadComponents("table-content", `${path}/myTask/tableContent.html`);
loadComponents("table-footer", `${path}/myTask/tableFooter.html`);