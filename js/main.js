// js/main.js
document.addEventListener("DOMContentLoaded", () => {
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
