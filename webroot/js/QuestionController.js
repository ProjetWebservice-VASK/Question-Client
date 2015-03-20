var questionsObjectList = [];
var HTTPManager = new HTTPResolver();
var HTMLManager = new QuestionView();

$(function() {
    HTTPManager.getAllQuestionsFromServer(questionsObjectList);
    bindAddingQuestionActionToButton();
    itteration(); // Infinite loop
});

function bindAddingQuestionActionToButton() {
    $("#submitNewQuestion").click(function () {
        var newQuestion = new QuestionModel(questionsObjectList.length, null);
        var sendingResult = HTTPManager.postRequest(newQuestion);

        if(sendingResult){
            humane.log("Questions ajoutée !");
        }else{
            humane.log("Probléme d'accés au serveur !");
        }
    });
}

function itteration(){
    HTTPManager.getAllQuestionsFromServer(questionsObjectList);
    HTMLManager.displayQuestion(questionsObjectList);

    setTimeout(function() {
        itteration();
    }, 2000);
}