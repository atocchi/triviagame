
//global vars that keep track of correct and incorrect anwsers
let right = 0;
let wrong = 0;
let intervalId;
let scoreId;

//Large Object that Contains all Questions and Anwsers
let question ={
    quest1:{
        quest:"What is Master Shake's catch phrase?",
        a1: "Dancing is forbidden!",
        a2: "I should not walk so a child may live!",
        a3: "Jinkies!",
        a4: "Egypt is so boring. It doesn't exist... You don't hear DMX rap about it.",
        correct: "Dancing is forbidden!"
    },
    quest2:{
        quest: "Who is Dr. Weird in relation to the Aqua Teens?",
        a1: "He is the scientist that created the Aqua Teens to crash them into a brick wall.",
        a2: "He is the father of Carl Brutananadilewski.",
        a3: "He is the son of Frylock, created for reasons unknown.",
        a4: "He is Frylocks brother, and a fellow scientist ",
        correct: "He is the son of Frylock, created for reasons unknown."
    },
    quest3:{
        quest: "What is the name of monster that lives in the Aqua Teen's Attic?",
        a1: "Blood Feast Island Man",
        a2: "Romolox",
        a3: "Willie Nelson",
        a4: "Ignignokt",
        correct: "Willie Nelson"
    },
    quest4:{
        quest: "What is the name of the Mooninites laser?",
        a1: "The Quad-Laser",
        a2: "The Hyper-Beam",
        a3: "The Wisdom Cube",
        a4: "The Retro-Ray",
        correct: "The Quad-Laser"
    },
    quest5:{
        quest: 'What was the name of Meat-Wad`s "rabbit" ?',
        a1: "Terrence",
        a2: "Bitey",
        a3: "Monday-Tuesday-Wednesday-Thursday-Friday-Saturday-Sunday",
        a4: "Nathan Scott-Phillips",
        correct: "Nathan Scott-Phillips"
    },
    quest6:{
        quest: "Were is the grave of Dracula?",
        a1: "In the bus, you see, the wheels are the markings.",
        a2: "In Mephis.",
        a3: "New Jersey, Carl's House.",
        a4: "The Trenton Tar Pits.",
        correct: "In Mephis."
    },
    quest7:{
        quest: "What do the Aqua Teens actually do?",
        a1: "They are all on unemployement.",
        a2: "They live off the bushes in Carl's yard and drain water",
        a3: "Intergalatic Police Officers",
        a4: "Failed Detectives",
        correct: "Failed Detectives"
    },

}
//variables that keep track of how many pages have cycled through
let page = 0;
let pageArray =[question.quest1,question.quest2,question.quest3,question.quest4,question.quest5,question.quest6,question.quest7];
let number = 10;
let num = 5;

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    
}
function decrement() {
    number--;
    timer.textContent = "Time :" + number;
    
    
    
     if (number === 0) {
            clearInterval(intervalId);
            wrong++
            targetDiv.remove(); 
            anPage();

    }



}
function scoreRun() {
    // num = 5;
    clearInterval(scoreId);
    scoreId = setInterval(decrease, 1000);
  }
function decrease() {
     num--;
     if (num === 0) {
            // number = 10;
            clearInterval(scoreId);
            targetDiv.remove(); 
            finalPage(); 
            questions();
    }

}
//resets the interval so that it doesn't skip any pages
function intReset(){
    clearInterval(scoreId)
    clearInterval(intervalId);
    num = 5;
    number = 10;
}

// Final Score Page, Does not continue to cycle
function finalPage(){
    if (page == 7){
        daddyDiv = document.getElementById("container");
        targetDiv = document.createElement('div');
        targetDiv.setAttribute("id","temp")
        daddyDiv.appendChild(targetDiv);
    
        elFinal = document.createElement('h1');
        elFinal.textContent = "Final Score";
        elFinal.setAttribute("id", "Final");
        targetDiv.appendChild(elFinal);
    
        elScore = document.createElement('h1');
        elScore.textContent = "Right :" + right;
        elScore.setAttribute("id", "right");
        targetDiv.appendChild(elScore);
    
        elWrong = document.createElement('h1');
        elWrong.textContent = "Wrong :" + wrong;
        elWrong.setAttribute("id", "wrong");
        targetDiv.appendChild(elWrong);

    }
}

//On click listeners that call to the earlier functions
function click(){
document.getElementById('q1').addEventListener('click', function () {
    if(pageArray[page].a1 == pageArray[page].correct){
        right++;
        targetDiv.remove();
        intReset();
        anPage();
    }
    else{
        wrong++
        targetDiv.remove();
        intReset();
        anPage();
    }
    
});
document.getElementById('q2').addEventListener('click', function () {
    if(pageArray[page].a2 == pageArray[page].correct){
        right++;
        targetDiv.remove();
        intReset();
        anPage();
    }
    else{
        wrong++
        targetDiv.remove();
        intReset();
        anPage();
    }
});
document.getElementById('q3').addEventListener('click', function () {
    if(pageArray[page].a3 == pageArray[page].correct){
        right++;
        targetDiv.remove();
        intReset();
        anPage();
    }
    else{
        wrong++
        targetDiv.remove();
        intReset();
        anPage();
    }
});
document.getElementById('q4').addEventListener('click', function () {
    if(pageArray[page].a4 == pageArray[page].correct){
        right++;
        targetDiv.remove();
        intReset();
        anPage();
    }
    else{
        wrong++
        targetDiv.remove();
        intReset();
        anPage();
    }
});
        
        
}
//Main Function, creates DOM elements and refrences clicks function
function questions (){
    
    //targets container div and creates div to container questions, that can also be deleted 
    daddyDiv = document.getElementById("container");
    targetDiv = document.createElement('div');
    targetDiv.setAttribute("id","temp")
    daddyDiv.appendChild(targetDiv);

    elQuest = document.createElement('h1');
    elQuest.textContent = pageArray[page].quest;
    elQuest.setAttribute("id", "question");
    targetDiv.appendChild(elQuest);

    ela1 = document.createElement('p');
    ela1.textContent = pageArray[page].a1;
    ela1.setAttribute("id","q1");
    targetDiv.appendChild(ela1);

    ela2 = document.createElement('p');
    ela2.textContent = pageArray[page].a2;
    ela2.setAttribute("id","q2");
    targetDiv.appendChild(ela2);

    ela3 = document.createElement('p');
    ela3.textContent = pageArray[page].a3;
    ela3.setAttribute("id","q3");
    targetDiv.appendChild(ela3);

    ela4 = document.createElement('p');
    ela4.textContent = pageArray[page].a4;
    ela4.setAttribute("id","q4");
    targetDiv.appendChild(ela4);

    timer = document.createElement('h1');
    timer.textContent = "Time :" + number;
    timer.setAttribute("id", "timer");
    targetDiv.appendChild(timer);
    run();
    click();
}
//anwser page function, this page exist to show the right anwser
function anPage (){

    daddyDiv = document.getElementById("container");
    targetDiv = document.createElement('div');
    targetDiv.setAttribute("id","temp")
    daddyDiv.appendChild(targetDiv);

    elAns = document.createElement('h1');
    elAns.textContent = pageArray[page].correct;
    elAns.setAttribute("id", "anwser");
    targetDiv.appendChild(elAns);

    elScore = document.createElement('h1');
    elScore.textContent = "Right :" + right;
    elScore.setAttribute("id", "right");
    targetDiv.appendChild(elScore);

    elWrong = document.createElement('h1');
    elWrong.textContent = "Wrong :" + wrong;
    elWrong.setAttribute("id", "wrong");
    targetDiv.appendChild(elWrong);

    page++;
    scoreRun();
    
}



questions()