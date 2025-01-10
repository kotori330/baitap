const loadComponents = async (id, file) => {
  try {
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${file}: ${response.statusText}`);
    }
    const data = await response.text();
    document.getElementById(id).innerHTML = data;
  } catch (err) {
    alert(err);
  }
};

const path = "http://127.0.0.1:3000/baitap/working-u";

loadComponents("side-bar", `${path}/components/sidebar.html`);
loadComponents("header", `${path}/components/header.html`);
loadComponents("intro", `${path}/components/intro.html`);
loadComponents("mini-navbar", `${path}/myPage/miniNavbar.html`);

document.addEventListener("DOMContentLoaded", () => {
  const dynamicContentSection = document.getElementById("dynamic-content");
  const basicInfo = document.getElementById("basic-info");
  const wageInfo = document.getElementById("wage-info");
  const familyInfo = document.getElementById("family-info");
  const parentalLeaveInfo = document.getElementById("parental-leave-info");
  const accountSettings = document.getElementById("account-settings");

  const birthReportModal = document.getElementById("birth-report-modal");
  const birthReportModalContent = document.getElementById("modal-1");
  const birthReportBtn = document.getElementById("give-birth-btn");
  const closeModalBtn = document.getElementsByClassName("close-modal")[0];

  const cancelBtn = document.getElementsByClassName("cancel-btn")[0];

  const sidebar = document.getElementById("side-bar");
  const dashboard = document.getElementById("dashboard");
  const myPage = document.getElementById("my-page");
  const myTask = document.getElementById("my-task");
  const generatePlan = document.getElementById("generate-plan");

  const miniNavbarAnimation = document.getElementById("mini-navbar-animation");

  const navItems = [
    basicInfo,
    wageInfo,
    familyInfo,
    parentalLeaveInfo,
    accountSettings,
  ];

  // Open Mini-tabs
  loadComponents("dynamic-content", `${path}/myPage/basicInfo.html`);

  if (basicInfo) {
    basicInfo.addEventListener("click", () => {
      dynamicContentSection.textContent = "";
      loadComponents("dynamic-content", `${path}/myPage/basicInfo.html`);
    });

    miniNavbarAnimation.style.width = "10rem";
    miniNavbarAnimation.style.left = "0";
    miniNavbarAnimation.style.transition = "0.2s";
  }

  if (wageInfo) {
    wageInfo.addEventListener("click", () => {
      dynamicContentSection.textContent = "";
      loadComponents("dynamic-content", `${path}/myPage/wageInfo.html`);

      miniNavbarAnimation.style.width = "8rem";
      miniNavbarAnimation.style.left = "12rem";
      miniNavbarAnimation.style.transition = "0.2s";
    });
  }

  if (familyInfo) {
    familyInfo.addEventListener("click", () => {
      dynamicContentSection.textContent = "";
      loadComponents("dynamic-content", `${path}/myPage/familyInfo.html`);

      miniNavbarAnimation.style.width = "17rem";
      miniNavbarAnimation.style.left = "22.5rem";
      miniNavbarAnimation.style.transition = "0.2s";
    });
  }

  if (parentalLeaveInfo) {
    parentalLeaveInfo.addEventListener("click", () => {
      dynamicContentSection.textContent = "";
      loadComponents(
        "dynamic-content",
        `${path}/myPage/parentalLeaveInfo.html`
      );

      miniNavbarAnimation.style.width = "13.5rem";
      miniNavbarAnimation.style.left = "42rem";
      miniNavbarAnimation.style.transition = "0.2s";
    });
  }

  if (accountSettings) {
    accountSettings.addEventListener("click", () => {
      dynamicContentSection.textContent = "";
      loadComponents("dynamic-content", `${path}/myPage/accountSettings.html`);

      miniNavbarAnimation.style.width = "11.5rem";
      miniNavbarAnimation.style.left = "59rem";
      miniNavbarAnimation.style.transition = "0.2s";
    });
  }

  // Navigate to My Task
  if (myTask) {
    myTask.addEventListener("click", (e) => {
      window.location.href = `${path}/myTask/index.html`;
    });
  }

  // Modal
  const displayModal = () => {
    birthReportModal.classList.add("show");
    birthReportModalContent.style.animation = "zoomIn 0.5s forwards";
    birthReportModal.style.display = "block";
  };

  const closeModal = () => {
    birthReportModalContent.style.animation = "zoomOut 0.5s forwards";
    setTimeout(() => {
      birthReportModal.style.display = "none";
    }, 500); // Match the duration of the animation
  };

  // Open Modal
  if (birthReportBtn) {
    birthReportBtn.addEventListener("click", () => {
      loadComponents("birth-report-modal", `${path}/components/modal1.html`);
      displayModal();
    });
  }

  // Close Modal

  if (closeModalBtn && cancelBtn) {
    [closeModalBtn, cancelBtn].forEach((btn) =>
      btn.addEventListener("click", closeModal)
    );
    window.addEventListener("click", (e) => {
      if (e.target === birthReportModal) {
        closeModal();
      }
    });
  }

  // Navigate mini-tabs
  navItems.forEach((item) => {
    if (item) {
      item.addEventListener("click", () => {
        navItems.forEach((nav) => nav.classList.remove("active"));
        item.classList.add("active");
      });
    }
  });

  // 1st tab

  // const createBasicInfoContent = () => {
  //   const basicInfoItems = [
  //     "Employee Number",
  //     "Employee Name",
  //     "Department",
  //     "Role",
  //     "Type of Employment",
  //     "Gender",
  //     "Date of Birth",
  //   ];

  //   const basicInfoContent = document.createElement("div");
  //   basicInfoContent.setAttribute("id", "basic-info-content");
  //   basicInfoContent.innerHTML = [...Array(7).keys()].reduce(
  //     (prev, current, idx) => {
  //       return (
  //         prev + `<label>${basicInfoItems[idx]}</label><br><fieldset></fieldset>`
  //       );
  //     },
  //     ""
  //   );
  //   dynamicContentSection.appendChild(basicInfoContent);

  // // 2nd tab
  // wageInfo.addEventListener("click", () => {
  //   dynamicContentSection.textContent = "";
  //   const wageInfoItems = ["Wage (Monthly)"];
  //   const wageInfoContent = document.createElement("div");
  //   wageInfoContent.setAttribute("id", "wage-info-content");
  //   wageInfoContent.innerHTML = `<label>${wageInfoItems}</label><br><fieldset></fieldset>`;
  //   dynamicContentSection.appendChild(wageInfoContent);

  //   miniNavbarAnimation.style.width = "8rem";
  //   miniNavbarAnimation.style.left = "12rem";
  //   miniNavbarAnimation.style.transition = "0.2s";
  // });

  // // 3rd tab
  // familyInfo.addEventListener("click", () => {
  //   dynamicContentSection.textContent = "";
  //   const familyInfoItems = [
  //     "Number of Dependents",
  //     "Numnber of Children",
  //     "Family Address",
  //     "Name of Spouse",
  //     "Date of Birth of Spouse",
  //     "Employment Status of Spouse",
  //     "Salary of Spouse",
  //   ];
  //   const familyInfoContent = document.createElement("div");
  //   familyInfoContent.setAttribute("id", "family-info-content");
  //   familyInfoContent.innerHTML = [...Array(7).keys()].reduce(
  //     (prev, current, idx) => {
  //       return (
  //         prev + `<label>${familyInfoItems[idx]}</label><br><fieldset></fieldset>`
  //       );
  //     },
  //     ""
  //   );
  //   dynamicContentSection.appendChild(familyInfoContent);

  //   miniNavbarAnimation.style.width = "17rem";
  //   miniNavbarAnimation.style.left = "22.5rem";
  //   miniNavbarAnimation.style.transition = "0.2s";
  // });

  // // 4th tab
  // parentalLeaveInfo.addEventListener("click", () => {
  //   dynamicContentSection.textContent = "";
  //   const parentalLeaveItems = [
  //     "Receiving Leave Desire",
  //     "Address for Leaving Period",
  //     "Date of Expiry of Address for Leaving Period",
  //     "Contact of Address for Leaving Period",
  //   ];
  //   const parentalLeaveContent = document.createElement("div");
  //   parentalLeaveContent.setAttribute("id", "parental-leave-content");
  //   parentalLeaveContent.innerHTML = [...Array(4).keys()].reduce(
  //     (prev, current, idx) => {
  //       return (
  //         prev +
  //         `<label>${parentalLeaveItems[idx]}</label><br><fieldset></fieldset>`
  //       );
  //     },
  //     ""
  //   );
  //   dynamicContentSection.appendChild(parentalLeaveContent);

  //   miniNavbarAnimation.style.width = "13.5rem";
  //   miniNavbarAnimation.style.left = "42rem";
  //   miniNavbarAnimation.style.transition = "0.2s";
  // });

  // // 5th tab
  // accountSettings.addEventListener("click", () => {
  //   dynamicContentSection.textContent = "";
  //   const accountSettingsItems = ["Mail Address", "Password"];
  //   const accountSettingsContent = document.createElement("div");
  //   accountSettingsContent.setAttribute("id", "account-settings-content");
  //   accountSettingsContent.innerHTML = `<label>${accountSettingsItems[0]}</label>
  //   <br>
  //   <span>This account is being registered by this Email Address:</span>
  //   <label>${accountSettingsItems[1]}</label><br>
  //   <span>Change your Password</span>`;

  //   dynamicContentSection.appendChild(accountSettingsContent);

  //   miniNavbarAnimation.style.width = "11.5rem";
  //   miniNavbarAnimation.style.left = "59rem";
  //   miniNavbarAnimation.style.transition = "0.2s";
  // });
});
