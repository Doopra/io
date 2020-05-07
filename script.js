 const options=document.querySelector(".options").children;
const answerTrackerContainer=document.querySelector(".answers-tracker");
const questionNumberSpan=document.querySelector(".question-num-value");
const totalQuestionSpan=document.querySelector(".total-question");
const correctAnswerSpan=document.querySelector(".corect-answers");
const totalQuestionSpan2=document.querySelector(".total-question2");
const percentage=document.querySelector(".percentage ");
const question=document.querySelector(".question"); 
const op1=document.querySelector(".option1");
 const op2=document.querySelector(".option2");
 const op3=document.querySelector(".option3");
 const op4=document.querySelector(".option4");
let questionIndex;
let index=0;
let myArray=[];
let myArr=[];
let score=0;
//questions and options and answers

const questions = [
	
	{
		q:'How do you declare a javascript variable?',
		options:['Variable carName', 'any how','declare as you like','any of the above'],
		answer:0
	},
	{
			
		q:'what is css',
		options:['Cascading Style Sheets', 'Cascading Styling Saves','escalating Style Sheets','anyything'],
		answer:0
	},
	{
		q:'How is the division by zero defined?',
		options:['var=2/0', 'Division by zero is undefined','No Idea','let var x=0/2'],
		answer:1
	},
	{
		q:'Below are the errors which can occur during the execution of a program except?',
		options:['Syntax Errors', 'Runtime Errors','Runaway Error','Logical Errors'],
		answer:2  
	},
	{
		q:'Every algorithm performs the following steps except',
		options:['Get data', 'Perform computation','Perform Corona Victims','Display results'],
		answer:2 
	}
]

//set questions and options and questions number
totalQuestionSpan.innerHTML=questions.length;
function load(){
	 
	questionNumberSpan.innerHTML=index+1;
	question.innerHTML=questions[questionIndex].q;
	op1.innerHTML=questions[questionIndex].options[0];
	op2.innerHTML=questions[questionIndex].options[1];
	op3.innerHTML=questions[questionIndex].options[2];
	op4.innerHTML=questions[questionIndex].options[3];
	
	index++;
}

function check(element){
	 if (element.id==questions[questionIndex].answer){
		 element.classList.add("correct");
		 updateAnswerTracker("correct")
		 score++;
		 console.log("score"+score)
	 }else{
		element.classList.add("wrong");
		  updateAnswerTracker("wrong")
	 }
	disabledOptions()
}
function disabledOptions(){
	for(let i=0; i<options.length; i++){
		options[i].classList.add("disabled");
		if(options[i].id==questions[questionIndex].answer){
			options[i].classList.add("correct");
		}
	}
	
}
// we need to enable the options again for the next button to work

function enableOptions(){
	for(let i=0; i<options.length; i++){
		options[i].classList.remove("disabled","correct","wrong");
	}
}
// let us prompt the user to select an answer
 function validate(){
	  if(!options[0].classList.contains("disabled")){
		 alert("please select an option")
	  }else{
		  enableOptions();
		  randomQuestion();
	  }
 }
function next(){
	validate();
}
function randomQuestion(){
	let randomNumber=Math.floor(Math.random()*questions.length); 
	let hitDuplicate=0;
	if(index==questions.length){
		quizOver();
	}
	else{
		if(myArray.length>0){
			for(let i=0; i<myArray.length; i++){
				if(myArray[i]==randomNumber){
					hitDuplicate=1;
					break;
				}
			}
			if(hitDuplicate==1){
				randomQuestion();
			}else{
				questionIndex=randomNumber;
			load();
			}
			
		}
		if(myArray.length==0){
			questionIndex=randomNumber;
			load();
			myArr.push(questionIndex);
		}
		
		myArray.push(randomNumber);
	
	
}
	}

function answerTracker(){
	for(let i=0; i<questions.length; i++){
		const div=document.createElement("div");
			answerTrackerContainer.appendChild(div);
	}
}
 
function updateAnswerTracker(classNam){
	answerTrackerContainer.children[index-1].classList.add(classNam);
	
}
function quizOver(){
	document.querySelector(".quiz-over").classList.add("show");
	correctAnswerSpan.innerHTML=score;
	totalQuestionSpan2.innerHTML=questions.length;
	percentage.innerHTML=(score/questions.length)*100 + "%";
}
function tryAgain(){
	window.location.reload();
	
}


window.onload=function(){
	randomQuestion();
	answerTracker();
} 