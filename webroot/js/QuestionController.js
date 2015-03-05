var firstQuestion = new QuestionModel(0, "Comment sa marche ?");
var questionsObjectList = [firstQuestion];

$(function() {
    bindAddingQuestionActionToButton();
    humane.log("Bienvenue");
    itteration(); // Infinite loop
});

function requestHost(question){
    $.ajax
    ({
        type: "GET",
        url: "http://localhost/webService/questions/"+ question.id +".php",
        async: true,
        contentType: "application/json",

        success: function(data){
            data = JSON.parse(data);
            if(!data.processing){
                question.libelle = data.question;
                question.answer = data.answer;
            }

        },
        error : function(res, statut, error){
            console.log(error);
        }
    });
}

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