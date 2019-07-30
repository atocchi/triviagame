
///Question and Anwser Arrays 
let question = []
let question1 = ["what "]
let question2 = []
let question3 = []
let question4 = []

//timer
let timer = 30

//correct anwser array
let correctQ = ["q1"]

//counter for question #, starts at 0 because arrays start at 0
let qCounter = 0

///function to change the questions, takes 2 arguments, the element ID and the new question
function qChange(a,b){
targetQ = document.getElementById(a);
targetQ.innerHTML = b
}

//Function to change the text color based on anwser
function textColor(a,b){
targetQ = document.getElementById(a);
targetQ.classList.add(b)
}

function questions (){
elTimer = document.createElement('p');
nodTimer = document.createTextNode();
elQuest = document.createElement('h1');
nodQuest = document.createTextNode(question[qCounter]);









}













function start() {

    
      intervalId = setInterval(count, 30000);
      
    }








//On click listeners that call to the earlier functions
document.getElementById('q1').addEventListener('click', function () {
    if ("q1" == correctQ[qCounter]){
        textColor('q1','correct')
    }
    else{
        textColor('q1','wrong')
    }
});
document.getElementById('q2').addEventListener('click', function () {
    if ("q2" == correctQ[qCounter]){
        textColor('q2','correct')
    }
    else{
        textColor('q2','wrong')
    }
});
document.getElementById('q3').addEventListener('click', function () {
    if ("q3" == correctQ[qCounter]){
        textColor('q3','correct')
    }
    else{
        textColor('q3','wrong')
    }
});
document.getElementById('q4').addEventListener('click', function () {
    if ("q4" == correctQ[qCounter]){
        textColor('q4','correct')
    }
    else{
        textColor('q4','wrong')
    }
});

