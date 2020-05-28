var score = 300;
var QuestionArray = [
    {'question':' What are variables used for in JavaScript Programs?', 'options':{'A':'A. Storing numbers, dates, or other values','B':'B. Varying randomly', 'C':'C. Causing high-school algebra flashbacks', 'D':'D. None of the above'}, 'correctAnswer': 'A. Storing numbers, dates, or other values' },
    {'question':'JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.', 'options':{'A':'A. Client-side','B':'B. Server-side', 'C':'C. Local', 'D':'D. Native'}, 'correctAnswer': 'A. Client-side' },
    {'question':'Which of the following are capabilities of functions in JavaScript?', 'options':{'A':'A. Return a value','B':'B. Accept parameters and Return a value', 'C':'C. Accept parameters', 'D':'D. None of the above'}, 'correctAnswer': 'C. Accept parameters' },
    {'question':'What is the correct JavaScript syntax to write "Hello World"?', 'options':{'A':'A. System.out.println("Hello World")','B':'B. println ("Hello World")', 'C':'C. document.write("Hello World")', 'D':'D. response.write("Hello World")'}, 'correctAnswer': 'C. document.write("Hello World")' },
    {'question':'Inside which HTML element do we put the JavaScript?', 'options':{'A':'A. <js>','B':'B. <scripting>', 'C':'C. <script>', 'D':'D. <javascript>'}, 'correctAnswer': 'C. <script>' }];
var idx = 0;

//Click start button to trigger the timer
function startTimer(){
    var timing = setInterval(timer, 1000);

    document.querySelector("#display").style.display = 'none';
    document.querySelector("#Quiz").style.display = 'block';

    showQuiz();
    //Timer function
    function timer(){
        score--;
        document.querySelector("#timer").textContent = `Time: ${score}`;
        if(score<=0){    
            clearInterval(timing);
            showResults();
            document.querySelector("#resultComment").textContent = `Time's up! Please enter your initial to save your score.`
        }else if(idx>=QuestionArray.length){
            clearInterval(timing);
            showResults();
            document.querySelector("#resultComment").textContent = `Well done! Please enter your initial to save your score.`
        }      
    }
}

function showResults(){
    document.querySelector("#Results").style.display = 'block';
    document.querySelector("#Quiz").style.display = 'none';
    document.querySelector("#score").textContent = `Score: ${score}`;
}

//Show quiz questions
function showQuiz(){
    if(idx<QuestionArray.length){
        document.querySelector("#question").textContent = QuestionArray[idx].question;
        document.querySelector("#optionA").textContent = QuestionArray[idx].options.A;
        document.querySelector("#optionB").textContent = QuestionArray[idx].options.B;
        document.querySelector("#optionC").textContent = QuestionArray[idx].options.C;
        document.querySelector("#optionD").textContent = QuestionArray[idx].options.D; 
    }
}

//Check if user select the correct answer
function checkAnswer(){
    event.preventDefault();
    var userAnswer = event.target.textContent;
    var comment = document.querySelector("#comments");
    //if the correct answer chose, show the next question
    if(userAnswer == QuestionArray[idx].correctAnswer){
        comment.textContent = `You are right!`;
        idx++;
        showQuiz();
    }else {
        comment.textContent = 'Wrong';
        score -= 10;
    }
}


function saveResult(){
    event.preventDefault();
    let name = document.querySelector("#initial").value;

    document.querySelector("#scoreList").innerHTML += `<li class="list-group-item">${name}:  ${score}</li>`;
    
    showHighscore();
}

function showHighscore(){
    document.querySelector("#showHighscore").style.display = 'block';
    document.querySelector("#Results").style.display = 'none';
    document.querySelector("#timer").style.display = 'none';
    document.querySelector("#display").style.display = 'none';
    document.querySelector("#Quiz").style.display = 'none';
    document.querySelector("#highscore").style.display = 'none';
    };


function goBack(){
    idx = 0;
    document.querySelector("#timer").textContent = `Time: 300`;
    document.querySelector("#showHighscore").style.display = 'none';
    document.querySelector("#Results").style.display = 'none';
    document.querySelector("#timer").style.display = 'block';
    document.querySelector("#display").style.display = 'block';
    document.querySelector("#Quiz").style.display = 'none';
    document.querySelector("#highscore").style.display = 'block';
}

function clearHighscore(){
    document.querySelector("#scoreList").innerHTML = '';
}