document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email").value;
    const errorDiv = document.getElementById("error");
    const formContainer = document.getElementById("formContainer");
    const infoContainer = document.getElementById("infoContainer");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
      formContainer.classList.add("hide");
      infoContainer.classList.remove("hide");
      errorDiv.classList.add("hide");
    } else {
      errorDiv.textContent = "Vui lòng nhập email hợp lệ.";
      errorDiv.classList.remove("hide");
    }
  });

function handle(e) {
  const viewMore = e.querySelector(".vm");
  viewMore.style.display = "inline-block";
}

function hand(e) {
  const viewMore = e.querySelector(".vm");
  viewMore.style.display = "none";
}

function handlevm(e) {
  const parente = e.closest(".p");
  const viewMore = parente.querySelector(".vm");
  const viewLess = parente.querySelector(".vl");
  const sectionc = parente.querySelector(".no");

  if (sectionc.style.display === "none") {
    sectionc.style.display = "block";
    viewMore.style.display = "none";
    viewLess.style.display = "inline-block";
  } else {
    sectionc.style.display = "none";
    viewMore.style.display = "inline-block";
    viewLess.style.display = "none";
  }
}
