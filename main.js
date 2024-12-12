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
//get the button
let mybutton = document.getElementById("scrollToTopBtn");
// Show the button when the user scrolls down
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";  // Show the button
  } else {
      mybutton.style.display = "none";  // Hide the button
  }
};

// Scroll to the top smoothly when the button is clicked
mybutton.onclick = function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Smooth scroll
  });
}
const scrollRevealOption = {
    origin: "bottom",   
    distance: "50px",
    duration: 1500,     
  };
  
  ScrollReveal().reveal(".hero-image img", {   
    ...scrollRevealOption,
    origin: "right",    
  });
  ScrollReveal().reveal(".hero-text h1",{
    ...scrollRevealOption,
    delay:500,
  });
  ScrollReveal().reveal(".hero-text p",{
    ...scrollRevealOption,
    delay:1000,
  });
ScrollReveal().reveal("#header-btn", {
  ...scrollRevealOption,
  delay: 1500, // Delay for the button
});

  
//banner//
const banner = document.querySelector(".banner__container");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});
ScrollReveal().reveal(".card", {
    ...scrollRevealOption,
    interval: 500,
  });
  
  ScrollReveal().reveal(".sale-image img", {
    ...scrollRevealOption,
    origin: "left",
  });
  ScrollReveal().reveal(".sale-contain h2", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".sale-contain p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".sale-contain h4", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".sale-btn", {
    ...scrollRevealOption,
    delay: 1500,
  });
  
  ScrollReveal().reveal(".fav-card", {
    ...scrollRevealOption,
    interval: 500,
  }); 
  ScrollReveal().reveal(".download-text h2", {
    ...scrollRevealOption,
    delay: 500,
  });
    ScrollReveal().reveal(".download-img img", {
    ...scrollRevealOption,
        interval: 750,
  });
    ScrollReveal().reveal(".download-text p", {
    ...scrollRevealOption,
    delay: 750,
  }); ScrollReveal().reveal(".contain-image img", {
    ...scrollRevealOption,
    delay: 1000,
  });