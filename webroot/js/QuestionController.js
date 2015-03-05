var firstQuestion = new QuestionModel(0, "Comment sa marche ?");
var questionsObjectList = [firstQuestion];

$(function() {
    bindAddingQuestionActionToButton();
    humane.log("Bienvenue");
    itteration(); // Infinite loop
});

function bindAddingQuestionActionToButton() {
    $("#submitNewQuestion").click(function () {
        questionsObjectList[questionsObjectList.length] = new QuestionModel(questionsObjectList.length, $("#answerText").val());
        humane.log("Questions ajoutée !");
    });
}

function itteration(){
    HTTPManager = new HTTPResolver(questionsObjectList);
    HTTPManager.requestEveryHost();

    HTMLManager = new QuestionView(questionsObjectList);
    HTMLManager.displayQuestion();

    setTimeout(function() {
        itteration();
    }, 2000);
}