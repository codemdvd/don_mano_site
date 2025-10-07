// js/main.js
(function () {
  function init() {
    // Mobile nav toggle
    const navToggle = document.querySelector(".nav-toggle");
    const siteNav = document.querySelector(".site-nav");
    if (navToggle && siteNav) {
      navToggle.addEventListener("click", () => {
        const isOpen = siteNav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
        // Fallback inline toggle to defeat unexpected CSS overrides
        if (window.matchMedia("(max-width: 900px)").matches) {
          siteNav.style.display = isOpen ? "block" : "none";
        } else {
          siteNav.style.display = ""; // let desktop layout flow
        }
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

    // Age gate modal (defensive if absent)
    const modal = document.getElementById("ageModal");
    if (modal) {
      const yesBtn = modal.querySelector(".yes");
      const noBtn = modal.querySelector(".no");

      if (!localStorage.getItem("ageVerified")) {
        modal.classList.add("active");
        // Ensure it is visible even if inline style tries to hide it
        modal.style.display = "flex";
      }

      if (yesBtn) {
        yesBtn.addEventListener("click", () => {
          localStorage.setItem("ageVerified", "true");
          modal.classList.remove("active");
          modal.style.display = "none";
        });
      }

      if (noBtn) {
        noBtn.addEventListener("click", () => {
          window.location.href = "https://www.google.com/";
        });
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
