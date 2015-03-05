var firstQuestion = new QuestionModel(0, "Comment sa marche ?");
var questionsObjectList = [firstQuestion];

$(function() {
    bindAddingQuestionActionToButton();
    humane.log("Bienvenue");
    itteration(); // Infinite loop
});

function bindAddingQuestionActionToButton() {
    $("#submitNewQuestion").click(function () {
        newQuestion = new QuestionModel(questionsObjectList.length, $("#answerText").val());

        HTTPManager = new HTTPResolver(questionsObjectList);
        HTTPManager.requestEveryHost();

        sendingResult = HTTPManager.postRequest(newQuestion);

        if(sendingResult){
            questionsObjectList[questionsObjectList.length] = newQuestion;
            humane.log("Questions ajoutée !");
        }else{
            humane.log("Probléme d'accés au serveur !");
        }

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