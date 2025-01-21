// document.addEventListener("DOMContentLoaded", () => {
//   const router = {
//     "/mypage": loadMyPage,
//     // Add more routes
//   };

//   const path = window.location.pathname;
//   // Find the closest match in the router
//   const match = Object.keys(router).find((route) => path.startsWith(route));

//   // Call the matched route function or the default
//   router[match]?.() || router["/"]();
// });

// const loadComponents = async (id, path) => {
//   try {
//     const response = await fetch(path);
//     if (!response.ok)
//       throw new Error(`Failed to fetch ${path}:${response.statusText}`);
//     const data = await response.text();
//     document.getElementById(id).innerHTML = data;
//   } catch (err) {
//     console.error(err);
//   }
// };

// export async function loadSharedComponents() {
//   // Load everything in parallel
//   await Promise.all([
//     loadComponents("header", `./working-u/root/components/header.html`),
//     loadComponents("side-bar", `./working-u/root/components/sidebar.html`),
//   ]);
// }
// loadSharedComponents();

// async function loadMyPage() {
//   await loadSharedComponents();
//   await loadComponents("main-content", "/pages/myPage/index.html");
//   const script = document.createElement('script');
//   script.src = "/pages/myPage/myPage.js";
//   script.defer = true;
//   document.body.appendChild(script);
// }

