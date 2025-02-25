// document.addEventListener("DOMContentLoaded", () => {
//   const startBtn = document.querySelector("#start-btn");
//   const questionText = document.querySelector("#question-text");
//   const choiceList = document.querySelector("#choices-list");
//   const questionContainer = document.querySelector("#question-container");
//   const nextBtn = document.querySelector("#next-btn");
//   const resultContainer = document.querySelector("#result-container");

//   let currentQuestionIndex = 0;
//   let score = 0;

//   const questions = [
//     {
//       question: "Which country has won the most FIFA World Cups?",
//       choices: ["Brazil", "Germany", "Italy", "Argentina"],
//       answer: "Brazil",
//     },
//     {
//       question:
//         "How many minutes are there in a standard football match (excluding extra time)?",
//       choices: ["75", "90", "105", "120"],
//       answer: "90",
//     },
//     {
//       question:
//         "What is the name of the trophy awarded to the winner of the UEFA Champions League?",
//       choices: [
//         "The Scudetto",
//         "The Ballon d'Or",
//         "The European Cup",
//         "The Premier League Trophy",
//       ],
//       answer: "The European Cup",
//     },
//     {
//       question: "Who is the all-time top scorer in the UEFA Champions League?",
//       choices: [
//         "Lionel Messi",
//         "Cristiano Ronaldo",
//         "Robert Lewandowski",
//         "Erling Haaland",
//       ],
//       answer: "Cristiano Ronaldo",
//     },
//     {
//       question: "In football, what does the term 'offside' mean?",
//       choices: [
//         "A player is in a position where they are not allowed to be when the ball is played.",
//         "A player has committed a foul.",
//         "The ball has gone out of bounds.",
//         "A player has scored a goal.",
//       ],
//       answer:
//         "A player is in a position where they are not allowed to be when the ball is played.",
//     },
//     {
//       question: "Which city hosted the 2022 FIFA World Cup Final?",
//       choices: ["Doha", "Lusail", "Al Rayyan", "Al Wakrah"],
//       answer: "Lusail",
//     },
//     {
//       question:
//         "How many players are there in a football team on the field at one time?",
//       choices: ["9", "10", "11", "12"],
//       answer: "11",
//     },
//     {
//       question:
//         "What is the name of the governing body of association football worldwide?",
//       choices: ["UEFA", "CONMEBOL", "FIFA", "AFC"],
//       answer: "FIFA",
//     },
//     {
//       question: "Which famous footballer is known as 'CR7'?",
//       choices: [
//         "Lionel Messi",
//         "Neymar Jr.",
//         "Cristiano Ronaldo",
//         "Kylian Mbappé",
//       ],
//       answer: "Cristiano Ronaldo",
//     },
//     {
//       question: "What is the nickname of the Scotland national football team?",
//       choices: [
//         "The Lions",
//         "The Tartan Army",
//         "The Three Lions",
//         "The Azzurri",
//       ],
//       answer: "The Tartan Army",
//     },
//   ];

//   //actual code goes form here
//   startBtn.addEventListener("click", () => {
//     showQuestion();
//     //currentQuestionIndex++
//   });
//   nextBtn.addEventListener("click", () => {
//     choiceList.innerHTML = ``;
//     console.log(
//       `Current : ${currentQuestionIndex} and length${questions.length}`
//     );
//     //currentQuestionIndex++
//     if (currentQuestionIndex > questions.length - 1) {
//       showResult();
//     } else {
//       showQuestion();
//       currentQuestionIndex++;
//     }
//     //showQuestion()
//   });

//   function showQuestion() {
//     startBtn.classList.add("hidden"); // so that start btn should disappear immediately when the quetion appears in the screen
//     questionContainer.classList.remove("hidden"); // so that question contanier appear in the screen
//     questionText.innerHTML = `${questions[currentQuestionIndex].question}`; //display the quesiton
//     displayOptions();
//     nextBtn.classList.remove("hidden");
//     //currentQuestionIndex++
//   }
//   function displayOptions() {
//     questions[currentQuestionIndex].choices.forEach((option) => {
//       const element = document.createElement("li");
//       element.innerHTML = `${option}`;
//       choiceList.appendChild(element);
//       //write code to check if the optio is corrent or wrong
//     });
//     choiceList.addEventListener("click", (event) => {
//       console.log(event.target.innerHTML);
//       console.log(event);

//       const selectAnswer = event.target.innerHTML;
//       console.log(selectAnswer);
//       console.log("current index is : " + currentQuestionIndex);

//       console.log(questions[currentQuestionIndex].answer);
//       console.log(typeof questions[currentQuestionIndex].answer);
//       console.log(selectAnswer);
//       console.log(typeof selectAnswer);

//       if (event.target.innerHTML === questions[currentQuestionIndex].answer) {
//         console.log("correct answer");
//         score++;
//       }
//     });
//   }

//   function showResult() {
//     nextBtn.classList.add("hidden");
//     questionContainer.classList.add("hidden");
//     resultContainer.classList.remove("hidden");
//     document.getElementById(
//       "score"
//     ).innerHTML = `${score} out of ${questions.length}`;
//   }

//   console.log("current index: " + currentQuestionIndex + " current score " + score);
// });

document.addEventListener("DOMContentLoaded", () => {
    const startBtn = document.querySelector("#start-btn");
    const questionText = document.querySelector("#question-text");
    const choiceList = document.querySelector("#choices-list");
    const questionContainer = document.querySelector("#question-container");
    const nextBtn = document.querySelector("#next-btn");
    const resultContainer = document.querySelector("#result-container");
  
    let currentQuestionIndex = 0;
    let score = 0;
  
    const questions = [
      {
        question: "Which country has won the most FIFA World Cups?",
        choices: ["Brazil", "Germany", "Italy", "Argentina"],
        answer: "Brazil",
      },
      {
        question:
          "How many minutes are there in a standard football match (excluding extra time)?",
        choices: ["75", "90", "105", "120"],
        answer: "90",
      },
    ];
  
    startBtn.addEventListener("click", () => {
      showQuestion();
    });
  
    nextBtn.addEventListener("click", () => {
      choiceList.innerHTML = ""; // ✅ Fixed: Clear old choices before showing the next question
      if (currentQuestionIndex >= questions.length) {
        showResult();
      } else {
        showQuestion();
      }
    });
  
    function showQuestion() {
      startBtn.classList.add("hidden");
      questionContainer.classList.remove("hidden");
      questionText.innerHTML = `${questions[currentQuestionIndex].question}`;
      displayOptions();
      nextBtn.classList.add("hidden"); // ✅ Fixed: Hide "Next" button initially
    }
  
    function displayOptions() {
      questions[currentQuestionIndex].choices.forEach((option) => {
        const element = document.createElement("li");
        element.innerHTML = `${option}`;
        choiceList.appendChild(element);
      });
  
      choiceList.addEventListener("click", (event) => {
        if (event.target.tagName === "LI") {
          if (event.target.innerHTML === questions[currentQuestionIndex].answer) {
            score++;
          }
          currentQuestionIndex++; // ✅ Fixed: Increment index only after selecting an answer
          nextBtn.classList.remove("hidden"); // ✅ Fixed: Show "Next" button only after answering
        }
      }, { once: true }); // ✅ Fixed: Ensures multiple event listeners don't stack
    }
  
    function showResult() {
      nextBtn.classList.add("hidden");
      questionContainer.classList.add("hidden");
      resultContainer.classList.remove("hidden");
      document.getElementById("score").innerHTML = `${score} out of ${questions.length}`;
    }
  
    console.log("current index: " + currentQuestionIndex + " current score " + score);
  });
  
