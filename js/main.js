document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("ageModal");
  const yesBtn = document.querySelector(".yes");
  const noBtn = document.querySelector(".no");

  // Проверка: уже подтвержден возраст?
  if (!localStorage.getItem("ageVerified")) {
    modal.style.display = "flex";
  }

  // Если подтвердили возраст
  yesBtn.addEventListener("click", () => {
    localStorage.setItem("ageVerified", "true");
    modal.style.display = "none";
  });

  // Если нет — перенаправление
  noBtn.addEventListener("click", () => {
    window.location.href = "https://www.google.com/"; // можно заменить на свою ссылку
  });
});
