var panel = $("#quiz-area");
var countStartNumber = 30;


$(document).on("click", "#start-over", function(e) {
    game.reset();
});

$(document).on("click", ".answer-button", function(e) {
    game.clicked(e);
});

$(document).on("click", "#start", function (e) {
    $("#subwrapper").prepend('<h2> Time Remaining: <span id="counter-number">30</span> </h2>');
    game.loadQuestion();
});


//function QA(){
    //question array
    var questions = [{
        question: "Who lives in Chris' closet?",
        answers: ["Evil Monkey", "Boogey Man", "Drunk Leprechaun", "Kool-aid Man"],
        correctAnswer: "Evil Monkey",
        image:""
        },{
        question:"What is the bartenders name at the Drunken Clam?",
        answers:["George", "Vince", "Horace", "James"],
        correctAnswer: "Horace",
        image:""
        },{
        question:"Where do the Griffin's live?",
        answers:["New York", "Maine", "Maryland", "Rhode Island"],
        correctAnswer: "Rhode Island",
        image:""
        },{
            question:"Meg is older than Chris?",
            answers:["True", "False"],
            correctAnswer: "True",
            image:""
        },{
        question:"What reason did peter first fight the chicken?",
        answers:["He told Peter to **** off", "He gave Peter an expired coupon", "He took Peter's parking spot", "He stole Peter's Churro"],
        correctAnswer: "He gave Peter an expired coupon",
        image:""
    },{
        question:"What is the name of Stewie's first teddy bear? ",
        answers:["Jon Jon", "Sheldon", "Rupert", "Oscar"],
        correctAnswer: "Oscar",
        image:""
    },{
        question:"Who is Cleveland Brown's wife?",
        answers:["Loretta", "Monica", "Gina", "Marge"],
        correctAnswer: "Loretta",
        image:""
    },{
        question:"Who is the Mayor of Quahog?",
        answers:["Dave East", "Mike North", "Sean South", "Adam West"],
        correctAnswer: "Adam West",
        image:""
    },{
        question:"In the Star Wars episodes, who plays C-3PO?",
        answers:["Mort Goldman", "Carter Pewterschmidt", "Glenn Quagmire", "Joe Swanson"],
        correctAnswer: "Glenn Quagmire",
        image:""
    },{
        question:"What is 'Meg' short for?",
        answers:["Megan", "Margaret", "Megatron", "It's just 'Meg'"],
        correctAnswer: "Megatron",
        image:""
    }];
    

    var game = {
        questions:questions,
        currentQuestion:0,
        counter: countStartNumber,
        correct:0,
        incorrect:0,
        countdown: function(){
            game.counter--;
            $("#counter-number").html(game.counter);
            
            if (game.counter ===0){
                console.log("Time up");
                game.timeUp();
            }
        },
        loadQuestion: function(){
            timer = setInterval(game.countdown, 1000);
            panel.html('<h2>' + questions[this.currentQuestion].question + '</h2>' );
            for (var i=0; i<questions[this.currentQuestion].answers.length; i++){
                panel.append('<button class="answer-button" id="button"' + 'data-name="'+ questions[this.currentQuestion].answers[i] + '">' + questions[this.currentQuestion].answers[i]+ '</button>');
            }
        },
        nextQuestion: function(){
            game.counter = countStartNumber;
            $("#counter-number").html(game.counter);
            game.currentQuestion++;
            game.loadQuestion();
    },
    timeUp: function(){
        clearInterval(timer);
        $("#counter-number").html(game.counter);

        panel.html("<h2>Out of Time!</h2>");
        panel.append("<h3>The Correct Answer was: " + questions[this.currentQuestion].correctAnswer);
        panel.append('<img src="' + questions[this.currentQuestion].image + ' " />')

        if (game.currentQuestion === questions.length -1){
            setTimeout(game.results, 3 *1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    results: function() {
        clearInterval(timer);

        panel.html('<h2> All done, heres how you did!</h2>');
        $('#counter-number').html(game.counter);
        panel.append('<h3>Correct Answers: ' + game.correct + '</h3>');
        panel.append('<h3>Incorrect Answers: ' + game.incorrect + '</h3>');
        panel.append('<h3> Unanswered: ' + (questions.length -(game.incorrect + game.correct)) + '</h3>')
        panel.append('<br><button id="start-over">Start Over?</button>');

    },
    clicked: function(e) {
        clearInterval(timer);

        if($(e.target).data("name")=== questions[this.currentQuestion].correctAnswer){
            this.answeredCorrectly();
        } else {
            this.answeredIncorrectly();
        }
    },
    answeredIncorrectly: function(){
        game.incorrect++;
        clearInterval(timer);
        panel.html('<h2>Nope!</h2>');
        panel.append('<h3>The Correct Answer was: ' + questions[game.currentQuestion].correctAnswer + '</h3>')
        panel.append('<img src="' + questions[game.currentQuestion].image + '" />');

        if (game.currentQuestion === questions.length -1){
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    answeredCorrectly: function(){
        clearInterval(timer);
        game.correct++;
        panel.html('<h2>Correct!</h2>');
        panel.append('<img src="' + questions[game.currentQuestion].image + '"/>');

        if(game.currentQuestion === questions.length -1){
            setTimeout(game.results, 3 * 1000);
        } else {
            setTimeout(game.nextQuestion, 3 * 1000);
        }
    },
    reset: function(){
        this.currentQuestion = 0;
        this.counter = countStartNumber;
        this.correct = 0;
        this.incorrect = 0;
        this.loadQuestion();
    }
};























