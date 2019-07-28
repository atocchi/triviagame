
//global vars that keep track of correct and incorrect anwsers
let right = 0
let wrong = 0

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
    }
}
//variables that keep track of how many pages have cycled through
let page = 0;
let pageArray =[question.quest1,question.quest2];


// Final Score Page, Does not continue to cycle
function finalPage(){
    if (page == 6){

    }
}

//DOM function that creates the questions and anwsers 
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
    
}



questions()
//On click listeners that call to the earlier functions
document.getElementById('q1').addEventListener('click', function () {
    if(pageArray[page].a1 == pageArray[page].correct){
        right++;
        targetDiv.remove();
        anPage();
    }
    
});
document.getElementById('q2').addEventListener('click', function () {
    if(pageArray[page].a2 == pageArray[page].correct){
        right++;
        targetDiv.remove();
        anPage();
    }
    else{
        wrong++
        targetDiv.remove();
        anPage();
    }
});
document.getElementById('q3').addEventListener('click', function () {
    if(pageArray[page].a3 == pageArray[page].correct){
        right++;
        targetDiv.remove();
        anPage();
    }
    else{
        wrong++
        targetDiv.remove();
        anPage();
    }
});
document.getElementById('q4').addEventListener('click', function () {
    if(pageArray[page].a4 == pageArray[page].correct){
        right++;
        targetDiv.remove();
        anPage();
    }
    else{
        wrong++
        targetDiv.remove();
        anPage();
    }
});
