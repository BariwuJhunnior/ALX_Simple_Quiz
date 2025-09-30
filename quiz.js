
function checkAnswer() {
  const correctAnswer = "4";
  const userAnswer = document.querySelector("input[name='quiz']:checked")?.value;
  const feedback = document.getElementById("feedback");

  if(correctAnswer === userAnswer ) {
    feedback.textContent = "Correct! Well done.";
  }else { 
    feedback.textContent = "That's incorrect. Try again!"
  }
};

const submitAnswerBtn = document.getElementById("submit-answer");

submitAnswerBtn.addEventListener("click", checkAnswer);
