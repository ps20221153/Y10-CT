var canvasID;
var timer;
var health;
var allQuestions;
var exitButton;

function preload()
{

}

function setup()
{
	createCanvas(800,600);

	// setup timer x,y  length,height
	timer = new Timer(0,400,400,50);
	timer.resetTimer();
	timer.startTimer();

	// setup health bar starting and max values
	health = new HealthBar(300,300);
	// setup health bar location
	health.setHealthBarXY(300,0);


	// setup maximum number of questions
	allQuestions = new QuestionManager();
	// set maximum value they can use to answer the question; e.g. only 1 character max
	allQuestions.setMaxAnswer(2);

	// --------------------------------- Setup Question and Answer ---------------------------------
	// question 1
	var questionImage1 = loadImage('https://ps20221153.github.io/Y10-CT/Game%20resources/Q1.png');
	allQuestions.addQuestion(0,100,200,35,questionImage1,16);

	// question 2
	var questionImage2 = loadImage('https://ps20221153.github.io/Y10-CT/Game%20resources/Q2.png');
	allQuestions.addQuestion(0,100,200,35,questionImage2,40);

	// question 3
	var questionImage3 = loadImage('https://ps20221153.github.io/Y10-CT/Game%20resources/Q3-2.png');
	allQuestions.addQuestion(0,100,200,35,questionImage3,40);

	// question 4
	var questionImage4 = loadImage('https://ps20221153.github.io/Y10-CT/Game%20resources/Q4.png');
	allQuestions.addQuestion(0,100,200,35,questionImage4,85);

	// question 5
	var questionImage5 = loadImage('https://ps20221153.github.io/Y10-CT/Game%20resources/Q5.png');
	allQuestions.addQuestion(0,100,200,35,questionImage5,50);


	// set typingbox length and height
	allQuestions.setTypingBoxLH(100,25);
	// --------------------------------- Setup Question and Answer ---------------------------------

	exitButton = new Button(50,300,100,50);
	exitButton.setText('Exit');


	// ---------------------- set images and coordinates of tick and cross ----------------------
	var tickImg = loadImage('https://bleungwpg.github.io/resourcehosting/tick.png');
	allQuestions.setTickImage(tickImg,25,25);
	var crossImg = loadImage('https://bleungwpg.github.io/resourcehosting/cross.png');
	allQuestions.setCrossImage(crossImg,25,25);
	allQuestions.setMarkXY(110,7);
	// ---------------------- set images and coordinates of tick and cross ----------------------
}

function draw()
{
	background(125,125,125);

	if (allQuestions.getCurrentQuestion() >= 0)
	{
		if (timer.isTimerFinished() == false)
		{
			timer.startTimer();
			timer.drawTimer();
		}
		else
		{
			allQuestions.increaseCurrentQ();
			timer.resetTimer();
		}

		var q = allQuestions.showCurrentQuestion();
		if (q == 1)
		{
			// show next question when correct
			console.log('correct');
			timer.resetTimer();
		}
		else if (q == 0)
		{
			// unanswered
		}
		else if (q == -1)
		{
			// unanswered
			console.log('incorrect');
			timer.resetTimer();
			health.deductHealth(100);

			// if your health is too low end the game and show results
			if (health.getCurrentHealth() <= 0)
			{
				allQuestions.endGame();
			}
		}
		health.showHealthBar();
	}
	else {
		// all questions answered; show results
		allQuestions.showResults();
		exitButton.showButton();

		if (exitButton.getButtonState() == 1)
		{
			window.open("../mainmenu/mainmenu.html","_self");
		}
	}


}
