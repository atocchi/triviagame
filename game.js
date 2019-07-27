let question1 = ["what "]
let question2 = []
let question3 = []
let question4 = []
///function to change the questions, takes 2 arguments, the element ID and the new question



function qChange(a,b){
targetQ = document.getElementById(a);
targetQ.innerHTML = b
}
qChange("q1","pu")
//Function to change the text color based on anwser
function textColor(a,b){
targetQ = document.getElementById(a);
targetQ.classList.add(b)
}

//On click listeners that call to the earlier functions
document.getElementById('q1').addEventListener('click', function () {
    textColor("q1","wrong")
});
