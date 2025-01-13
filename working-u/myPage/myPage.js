// Because this is async, the code won't wait for the data to be fully loaded to proceed further
// Even though wrapping up all the AddEventListeners code with DOMContentLoaded, the browser will still consider that all the data has been loaded
const loadComponents = async (id, file) => {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
    }
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
    attachEventListeners(); // Attach event listeners after loading components
  } catch (err) {
    console.log(err);
  }
};

const path = "http://127.0.0.1:3000/baitap/working-u";
// document.addEventListener("DOMContentLoaded",

(async () => {
  try {
    await loadComponents("side-bar", `${path}/components/sidebar.html`);
    await loadComponents("header", `${path}/components/header.html`);
    await loadComponents("intro", `${path}/components/intro.html`);
    await loadComponents(
      "birth-report-modal",
      `${path}/components/modal1.html`
    );
    await loadComponents("mini-navbar", `${path}/myPage/miniNavbar.html`);
    await loadComponents("dynamic-content", `${path}/myPage/basicInfo.html`);
  } catch (err) {
    console.error(err);
  }
})();

const attachEventListeners = async () => {
  // Initial load of components

  const dynamicContentSection = document.getElementById("dynamic-content");
  const basicInfo = document.getElementById("basic-info");
  const wageInfo = document.getElementById("wage-info");
  const familyInfo = document.getElementById("family-info");
  const parentalLeaveInfo = document.getElementById("parental-leave-info");
  const accountSettings = document.getElementById("account-settings");

  const miniNavbar = document.getElementById("mini-navbar");
  const miniNavbarAnimation = document.getElementById("mini-navbar-animation");

  // For Side bar
  const sideBar = document.getElementById("side-bar");
  const myPage = document.getElementById("my-page");
  const tabs = sideBar.querySelectorAll("p");

  if (myPage) {
    myPage.classList.add("active", "active-background");
  }
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      switch (tab.id) {
        // case "my-page":
        //   window.location.href = `${path}/myPage/index.html`;
        //   break;
        case "my-task":
          window.location.href = `${path}/myTask/index.html`;
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
  if (modal1btn) {
    modal1btn.addEventListener("click", openModal);
  }
  if (cancelBtn && closeModalBtn) {
    cancelBtn.addEventListener("click", closeModal);
    closeModalBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => {
      if (e.target == modal1) {
        closeModal();
      }
    });
  }

  // For mini Navbar
  if (basicInfo) {
    basicInfo.addEventListener("click", () => {
      dynamicContentSection.textContent = "";
      (async () => {
        await loadComponents("dynamic-content", `${path}/myPage/basicInfo.html`);

      })()

      miniNavbarAnimation.style.width = "10rem";
      miniNavbarAnimation.style.left = "0";
      miniNavbarAnimation.style.transition = "0.2s";
    });
  }

  if (wageInfo) {
    wageInfo.addEventListener("click", () => {
      dynamicContentSection.textContent = "";
      (async () => {
        await loadComponents("dynamic-content", `${path}/myPage/wageInfo.html`);

      })()

      miniNavbarAnimation.style.width = "8rem";
      miniNavbarAnimation.style.left = "12rem";
      miniNavbarAnimation.style.transition = "0.2s";
    });
  }

  if (familyInfo) {
    familyInfo.addEventListener("click", () => {
      dynamicContentSection.textContent = "";
      (async () => {
       await  loadComponents("dynamic-content", `${path}/myPage/familyInfo.html`);

      })()

      miniNavbarAnimation.style.width = "17rem";
      miniNavbarAnimation.style.left = "22.5rem";
      miniNavbarAnimation.style.transition = "0.2s";
    });
  }

  if (parentalLeaveInfo) {
    parentalLeaveInfo.addEventListener("click", () => {
      dynamicContentSection.textContent = "";
      (async () => {
        await loadComponents(
          "dynamic-content",
          `${path}/myPage/parentalLeaveInfo.html`
        );

      })()

      miniNavbarAnimation.style.width = "13.5rem";
      miniNavbarAnimation.style.left = "42rem";
      miniNavbarAnimation.style.transition = "0.2s";
    });
  }

  if (accountSettings) {
    accountSettings.addEventListener("click", () => {
      dynamicContentSection.textContent = "";
      (async () => {

        await loadComponents("dynamic-content", `${path}/myPage/accountSettings.html`);
      })()

      miniNavbarAnimation.style.width = "11.5rem";
      miniNavbarAnimation.style.left = "59rem";
      miniNavbarAnimation.style.transition = "0.2s";
    });
  }

  miniNavbar.childNodes.forEach((item) => {
    if (item.nodeType === 1) {
      // Ensure the node is an element
      item.addEventListener("click", () => {
        miniNavbar.childNodes.forEach((node) => {
          if (node.nodeType === 1) {
            // Ensure the node is an element
            node.classList.remove("active");
          }
        });
        item.classList.add("active");
      });
    }
  });
};
