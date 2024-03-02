// const wrapper = document.querySelector(".wrapper");
// const sidebarContainer = document.querySelector(".sidebar-container");
// const sidebar = document.querySelector(".sidebar");
// const iconBars = document.querySelector(".icon-bars");
// const spansIcon = document.querySelectorAll(".icon-bars span");
// const collapsing = document.querySelector(".collapsing");
// const logo = document.querySelector(".sidebar .logo");
// const links = document.querySelectorAll("nav .links li a");
// const scrollToTop = document.querySelector(".scroll-to-top");
// const filtertion = document.querySelector(".filteration #selectEl");
const skils = document.querySelector(".skils");
const progressBar = document.querySelectorAll(".skils .progress .progress-bar");

//================================================================
// function toggler() {
//   collapsing.classList.toggle("outside");
//   if (collapsing.classList.contains("outside")) {
//     collapsing.innerHTML = `<i class="fa-solid fa-angle-right"></i>`;
//   } else {
//     collapsing.innerHTML = `<i class="fa-solid fa-angle-left"></i>`;
//   }
//   logo.classList.toggle("activeLogo");
//   spansIcon.forEach((e) => {
//     e.classList.toggle("active");
//   });
//   sidebar.classList.toggle("menu");
//   wrapper.classList.toggle("active");
// }

// ================================================================
window.onscroll = () => {
  // add Width To Progress
  if (window.scrollY >= skils.offsetTop - 100) {
    console.log("skils");
    progressBar.forEach((ele) => {
      ele.style.width = ele.dataset.progress;
    });
  }
  // // scroll To Top
  // this.scrollY >= 800
  //   ? scrollToTop.classList.add("active")
  //   : scrollToTop.classList.remove("active");
  // // Add Background To Navbar
  // this.scrollY >= 200
  //   ? sidebarContainer.classList.add("active")
  //   : sidebarContainer.classList.remove("active");
};
// =================================================================
// // Filter Projects
// const boxsPortfolio = document.querySelectorAll(".portfolio .boxsPortfolio");
// filtertion.addEventListener("change", (e) => {
//   const value = e.target.value;
//   console.log(value);

//   boxsPortfolio.forEach((box) => {
//     if (box.dataset.target === value) {
//       box.style.display = "block";
//     } else {
//       box.style.display = "none";
//     }
//     if (value === "all") {
//       box.style.display = "block";
//     }
//   });
// });
