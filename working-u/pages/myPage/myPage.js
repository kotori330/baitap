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
  } catch (err) {
    console.log(err);
  }
};

const path = "http://127.0.0.1:5500/working-u";
(async () => {
  try {
    await loadComponents("side-bar", `${path}/root/components/sidebar.html`);
    await loadComponents("header", `${path}/root/components/header.html`);
    await loadComponents("intro", `${path}/root/components/intro.html`);
    await loadComponents(
      "birth-report-modal",
      `${path}/root/components/modal1.html`
    );
    await loadComponents(
      "mini-navbar",
      `${path}/pages/myPage/mininavbar/miniNavbar.html`
    );
    await loadComponents(
      "dynamic-content",
      `${path}/pages/myPage/mininavbar/basicInfo.html`
    );
    attachEventListeners(); // Attach event listeners after loading components
  } catch (err) {
    console.error(err);
  }
})();

// import { loadSharedComponents } from "../../root/assets/js/main";

// async function initMyPage() {
//   await loadSharedComponents();
//   await loadComponents("intro", `/components/intro.html`);
//   await loadComponents("birth-report-modal", `/components/modal1.html`);
//   await loadComponents("mini-navbar", `/myPage/miniNavbar.html`);
//   await loadComponents("dynamic-content", `/myPage/basicInfo.html`);
//   attachEventListeners();
// }

// document.addEventListener("DOMContentLoaded", initMyPage);

const attachEventListeners = () => {
  // Initial load of components
  const dynamicContentSection = document.getElementById("dynamic-content");
  const basicInfo = document.getElementById("basic-info");
  const wageInfo = document.getElementById("wage-info");
  const familyInfo = document.getElementById("family-info");
  const parentalLeaveInfo = document.getElementById("parental-leave-info");
  const accountSettings = document.getElementById("account-settings");

  const miniNavbar = document.getElementById("mini-navbar");

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
          window.location.href = `${path}/pages/myTask/index.html`;
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

  const miniNavbarItems = new Map([
    ["basicInfo", basicInfo],
    ["wageInfo", wageInfo],
    ["familyInfo", familyInfo],
    ["parentalLeaveInfo", parentalLeaveInfo],
    ["accountSettings", accountSettings],
  ]);

  miniNavbarItems.forEach(function (value, key) {
    value.addEventListener("click", () => {
      dynamicContentSection.textContent = "";
      (async () => {
        await loadComponents(
          "dynamic-content",
          `${path}/pages/myPage/mininavbar/${key}.html`
        );
      })();
      activeMininavbar(value);
    });
  });

  const activeMininavbar = (tab) => {
    Array.from(miniNavbar.getElementsByClassName("nav-link")).forEach(
      (item) => {
        item.classList.remove("active");
      }
    );
    tab.firstElementChild.classList.add("active");
  };

  $(document).ready(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });
};
