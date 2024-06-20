const menuBtn = document.querySelector(".menuBtn");
const navLinks = document.querySelector(".nav-links");
const bars = document.querySelector(".fa-bars");

function showSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "block";
}

const headerImage = document.querySelector(".headerimages");
headerImage.addEventListener(
  "animationend",
  (e) => {
    setTimeout(() => {
      headerImage.classList.add("reveal");
    });
  },
  { once: true }
);

const ScrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header_content h1", {
  ...ScrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".header_content p", {
  ...ScrollRevealOption,
  delay: 1700,
});
ScrollReveal().reveal(".header_content div", {
  ...ScrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal("header .nav-links", {
  ...ScrollRevealOption,
  delay: 3000,
});
