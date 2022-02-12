const modal = document.querySelector("#modal");
const modalDismiss = document.querySelector("#modal-dismiss");
const checkResult = document.querySelector("#check-result");
const quizSection = document.querySelector("#quiz-section");

const showResult = () => {
  modal.style.display = "block";
  quizSection.classList.add("blur-filter");
};

const hideResult = () => {
  modal.style.display = "none";
  quizSection.classList.remove("blur-filter");
};

checkResult.addEventListener("click", showResult);
modalDismiss.addEventListener("click", hideResult);
