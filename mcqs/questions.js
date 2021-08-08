(function(){
      var myQuestions = [{
        question: "What does HTML stands for?" ,
        answers: ["Hypertext Machine language.", "Hypertext and links markup language.", "Hypertext Markup Language.", "Hightext machine language."],
        correct: "Hypertext Markup Language."
      }, {
        question: "Which of the following HTML Elements is used for making any text bold ?",
        answers: ["p", "li", "ul", "b"],
        correct: "b"
      }, {
        question: "Which of the following HTML element is used for creating an unordered list?",
        answers: ["ul", "li", "div", "em"],
        correct: "ul"
      }, {
        question: "Which of the following attributes is used to add link to any element?",
        answers: ["link", "ref", "href", "newref"],
        correct: "href"
      }, {
        question: "A test has 30 questions. If Tom gets 70% correct, how many questions did Tom get wrong?",
        answers: ["7", "9", "10", "6"],
        correct: "9"
      }];

    var questionAvailable = 0;
    var correctAnswers = 0;
    var start = document.getElementById("game");
    start.addEventListener("click",function(){
        start.style.display = "none";
        document.getElementById("next").style.display = "block";
        startQuiz();
    })

    document.getElementById("next").addEventListener("click",function(){
        document.getElementById("choices").innerHTML = "";
        startQuiz();
    });

    document.getElementById("submit").addEventListener("click",result);
    
    function startQuiz(){

        if(questionAvailable == myQuestions.length - 1){
            document.getElementById("game").style.display = "none";
            document.getElementById("next").style.display = "none";
            document.getElementById("submit").style.display = "block";
        }  
        renderQuestions(questionAvailable);
        questionAvailable += 1; 
    } 
    
    function renderQuestions(questionNo){
        var div = document.getElementById("choices");
        document.getElementById("question").innerHTML = myQuestions[questionNo].question;  
        for(var i = 0; i < 4; i++){
            var radiobox = document.createElement('input');
            var labelValue = document.createElement('label');
            labelValue.innerHTML = myQuestions[questionNo].answers[i];
            radiobox.type = "radio";
            radiobox.checked = false;
            radiobox.value = i;
            radiobox.id = i;
            radiobox.addEventListener("click",function(e){
                checkAnswer(e.target.id,questionNo);

            });
            div.appendChild(radiobox);
            div.appendChild(labelValue);           
        }
    }

    function checkAnswer(radiobox, questionNo){      
        if(myQuestions[questionNo].correct == myQuestions[questionNo].answers[radiobox]){
            correctAnswers += 1;
        }
    }

    function result(){
        result = (correctAnswers/myQuestions.length) * 100;
        document.getElementById("scoreContainer").innerHTML = "Result: "+ result + "%";
        document.getElementById("bar").style.width = result;
        document.getElementById("progress") = "block";
    }
})();
