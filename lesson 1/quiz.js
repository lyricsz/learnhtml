const quizBtn = document.getElementById("takeQuiz");
const quixPallete = document.getElementById("quizBox");
const optionTxt1 = document.getElementById("optionTxt1");
const optionTxt2 = document.getElementById("optionTxt2");
const optionTxt3 = document.getElementById("optionTxt3");
const optionTxt4 = document.getElementById("optionTxt4");
const question = document.getElementById("question");

let questionArray = [];
let answerArray = [];
let score = 0;
let array = 0;
let allOptions = [optionTxt1, optionTxt2, optionTxt3, optionTxt4];
let allCheckbox = [option1, option2, option3, option4];
let answerIndex = [
    0,
    1,
    3,
    0,
    1
]


//Start function - Used to reset the quiz to it's initial stage
function startQuiz(){
    score = 0;
    array = 0;

    //Check for which buttons to be displayed
    if(array <= 0) {
        btn3.style.display = "block";
        btn1.style.display = "none";
    } else if (array >= 4){
        btn3.style.display = "none";
        btn1.style.display = "block";
    } else {
        btn3.style.display = "block";
        btn1.style.display = "block";
    }
    allCheckbox.forEach((box) => {
        box.checked = false;
    })
    //Answer array - 1d Array
    questionArray = [
        "HTML stands for?",
        "Program editors are often called .....",
        "HTML comprises of two main keywords, they are 'HyperText' and '........'?",
        "....... is useless without Hyperlink.",
        "URL stands for ........"
    ]

    //Answer array - 2d Array
    answerArray = [  
        ["HyperText Markup Language", "HyperText Markup", "HyperTint Markup Language", "A Web Language"],

        ["Software editor", "Code editor", "Text editor", "Programming language"],

        ["Markupp", "Markdown", "Mark-Text", "Markup"],

        ["Hypertext", "URL", "Link", "Text"],

        ["Unifrom Resource Locator", "Uniform Resource Locator", "Uniform Resourced Locator", "Uniform Resource Located"]
    ]

    question.textContent = questionArray[array];
    for(let i = 0; i < 4; i++){
        allOptions[i].textContent = answerArray[array][i]
    }
}

function continueQuiz(){
    if (array === 1 && allCheckbox[answerIndex[0]].checked === true){
        score++;
        console.log(score)
    } else if (array === 2 && allCheckbox[answerIndex[1]].checked === true){
        score++;
        console.log(score);
    } else if (array === 3 && allCheckbox[answerIndex[2]].checked === true){
        score++;
        console.log(score);
    } else if (array === 4 && allCheckbox[answerIndex[3]].checked === true){
        score++;
        console.log(score);
    }
    allCheckbox.forEach((box) => {
        box.checked = false;
    })
    if(array <= 0) {
        btn3.style.display = "block";
        btn1.style.display = "none";
    } else if (array >= 4){
        btn3.style.display = "none";
        btn1.style.display = "block";
    } else {
        btn3.style.display = "block";
        btn1.style.display = "block";
    }
    question.textContent = questionArray[array];
    for(let i = 0; i < 4; i++){
        allOptions[i].textContent = answerArray[array][i]
    }
}


quizBtn.onclick = () => {
    quixPallete.style.display = "block";
    header.style.opacity = 0.2;
    main.style.opacity = 0.2;
    footer.style.opacity = 0.2;
    quixPallete.style.opacity = 1;
    startQuiz();
}

btn1.onclick =() => {
    array--;
    score-=0.5;
    continueQuiz();
}
btn2.onclick = () => {
    if (array === 4 && allCheckbox[answerIndex[4]].checked === true){
        score++;
    };
    alert("Your score is " + score);
    if(confirm("Did you want to retake this quiz?")){
        startQuiz()
    }else{
        quixPallete.style.display = "none";
        header.style.opacity = 1;
        main.style.opacity = 1;
        footer.style.opacity = 1;
        quixPallete.style.opacity = 0;
    }
}
btn3.onclick = () => {
    array++;
    continueQuiz();
}
