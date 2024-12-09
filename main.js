//navbar//
// Select elements
const menuBtn = document.getElementById("menu_btn");
const navLinks = document.getElementById("nav_link");
const menuBtnIcon = menuBtn.querySelector("i");

// Toggle the menu
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close the menu when a link is clicked
navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        navLinks.classList.remove("open");
        menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
});

//banner//
const banner = document.querySelector(".banner__container");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});