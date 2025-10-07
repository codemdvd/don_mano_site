// js/main.js
document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const siteNav = document.querySelector(".site-nav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", () => {
      const isOpen = siteNav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close nav after clicking a link (useful on mobile)
    siteNav.addEventListener("click", (e) => {
      const target = e.target;
      if (target && target.tagName === "A" && siteNav.classList.contains("open")) {
        siteNav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  const modal = document.getElementById("ageModal");
  const yesBtn = modal.querySelector(".yes");
  const noBtn = modal.querySelector(".no");

  if (!localStorage.getItem("ageVerified")) {
    modal.classList.add("active");
  }

  yesBtn.addEventListener("click", () => {
    localStorage.setItem("ageVerified", "true");
    modal.classList.remove("active");
  });

  noBtn.addEventListener("click", () => {
    window.location.href = "https://www.google.com/";
  });
});
