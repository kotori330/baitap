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
    await loadComponents("birth-report-modal", `${path}/root/components/modal1.html`);
    await loadComponents("table-header", `${path}/pages/myTask/table/tableHeader.html`);
    await loadComponents("table-footer", `${path}/pages/myTask/table/tableFooter.html`);
    attachEventListeners();
    renderTable(data);
  } catch (err) {
    console.log(err)
  }
})()



const attachEventListeners = () => {
  // For Side bar
  const sideBar = document.getElementById("side-bar");
  const myTask = document.getElementById("my-task");
  const tabs = sideBar.querySelectorAll("p");

  myTask.classList.add("active", "active-background");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      switch (tab.id) {
        case "my-page":
          window.location.href = `${path}/pages/myPage/index.html`;
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

  const taskTitleHeader = document.getElementById('task-title');
  if (taskTitleHeader) {
    taskTitleHeader.addEventListener('click', () => {
      renderTable(sortedByTaskTitle(data));
    })
  }
};

const tableContent = document.getElementById('table-content');
let isAscending = true; // This is a flag
const sortedByTaskTitle = (tasks) => {
  const sortedTasks = [...tasks].sort((a, b) => { // Shallow copying
    const comparison = a.taskTitle.localeCompare(b.taskTitle);  // Compare a with b
    return isAscending ? comparison : -comparison 
    // localeCompare returns -1 0 or 1 
    // if comparison is 1 -> True | !1 -> False (This is coding convention)
    // if True -> swap | if False -> no swap
    // -comparison means reverse the sorting sequence
  })

  isAscending = !isAscending;
  return sortedTasks;
}

const renderTable = (data) => {
  const tableContent = document.getElementById('table-content');
  tableContent.innerHTML = data.map((item) => { // map() won't alter the original array
    return `<tr>
            <td>${item.taskTitle}</td>
            <td>${item.deadline}</td>
            <td>${item.taskStatus}</td>
            <td>${item.Assigner}</td>
            <td>${item.lastChangeDate}</td>
            </tr>`;
  }).join('');
}


const data = [
    {
      "id": 0,
      "taskTitle": "Task 1",
      "deadline": "2024/12/25",
      "taskStatus": "Done",
      "Assigner": "NGUYEN VAN BON",
      "lastChangeDate": "2025/01/03"
    },
    {
      "id": 1,
      "taskTitle": "Task 2",
      "deadline": "2024/11/14",
      "taskStatus": "Done",
      "Assigner": "NGUYEN VAN BA",
      "lastChangeDate": "2025/01/04"
    },
    {
      "id": 2,
      "taskTitle": "Task 3",
      "deadline": "2024/12/12",
      "taskStatus": "Not Done",
      "Assigner": "NGUYEN VAN NAM",
      "lastChangeDate": "2025/01/06"
    },
    {
      "id": 3,
      "taskTitle": "Task 4",
      "deadline": "2024/12/16",
      "taskStatus": "Done",
      "Assigner": "NGUYEN VAN HAI",
      "lastChangeDate": "2025/01/15"
    },
    {
      "id": 4,
      "taskTitle": "Task 5",
      "deadline": "2024/12/01",
      "taskStatus": "Not Done",
      "Assigner": "NGUYEN VAN SAU",
      "lastChangeDate": "2025/01/01"
    }
  ]










// Initial load of components


