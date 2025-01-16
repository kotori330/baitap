// Because this is async, the code won't wait for the data to be fully loaded to proceed further
// Even though wrapping up all the AddEventListeners code with DOMContentLoaded, the browser will still consider that all the data has been loaded
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

  const miniNavbarItems = [
    basicInfo,
    wageInfo,
    familyInfo,
    parentalLeaveInfo,
    accountSettings,
  ];

  miniNavbarItems.forEach((item, index) => {
    if (item) {
      miniNavbarItems[index].addEventListener("click", () => {
        dynamicContentSection.textContent = "";
        (async () => {
          await loadComponents(
            "dynamic-content",
            `${path}/pages/myPage/mininavbar/${miniNavbarItems[index]}.html`
          );
        })();
        activeMininavbar(miniNavbarItems[index]);
      });
    }
  });
  
  const activeMininavbar = (tab) => {
    Array.from(miniNavbar.getElementsByClassName("nav-link")).forEach(
      (item) => {
        item.classList.remove("active");
      }
    );
    tab.firstElementChild.classList.add("active");
  };
};

// // For mini Navbar
// if (basicInfo) {
//   basicInfo.addEventListener("click", () => {
//     dynamicContentSection.textContent = "";
//     (async () => {
//       await loadComponents(
//         "dynamic-content",
//         `${path}/myPage/basicInfo.html`
//       );
//     })();

//     activeMininavbar(basicInfo);
//   });
// }

// if (wageInfo) {
//   wageInfo.addEventListener("click", () => {
//     dynamicContentSection.textContent = "";
//     (async () => {
//       await loadComponents("dynamic-content", `${path}/myPage/wageInfo.html`);
//     })();

//     activeMininavbar(wageInfo);
//   });
// }

// if (familyInfo) {
//   familyInfo.addEventListener("click", () => {
//     dynamicContentSection.textContent = "";
//     (async () => {
//       await loadComponents(
//         "dynamic-content",
//         `${path}/myPage/familyInfo.html`
//       );
//     })();
//   });
// }

// if (parentalLeaveInfo) {
//   parentalLeaveInfo.addEventListener("click", () => {
//     dynamicContentSection.textContent = "";
//     (async () => {
//       await loadComponents(
//         "dynamic-content",
//         `${path}/myPage/parentalLeaveInfo.html`
//       );
//     })();
//   });
// }

// if (accountSettings) {
//   accountSettings.addEventListener("click", () => {
//     dynamicContentSection.textContent = "";
//     (async () => {
//       await loadComponents(
//         "dynamic-content",
//         `${path}/myPage/accountSettings.html`
//       );
//     })();
//   });
// }

// miniNavbar.childNodes.forEach((item) => {
//   if (item.nodeType === 1) {
//     // Ensure the node is an element
//     item.addEventListener("click", () => {
//       miniNavbar.childNodes.forEach((node) => {
//         if (node.nodeType === 1) {
//           // Ensure the node is an element
//           node.classList.remove("active");
//         }
//       });
//       item.classList.add("active");
//     });
//   }
// });
