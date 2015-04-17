function HTTPResolver(){
    hostURI = "https://question-server.herokuapp.com/questions";
    lastPostRequestWasSuccess = false;
}

HTTPResolver.prototype.getAllQuestionsFromServer = function (questionsObjectList){
    $.ajax
    ({
        type: "GET",
        url: hostURI,
        async: true,
        contentType: "application/hal+json",

        success: function(data, textStatus, xhr){
            if(xhr.status == 200 || xhr.status == 304) {
                while(questionsObjectList.length > 0){
                    questionsObjectList.pop();
                }

                for(var i = 0; i < data.questions.length; i++){
                    var newQuestion = new QuestionModel(data.questions[i]._id, data.questions[i].question);
                    newQuestion.answer = data.questions[i].answer;
                    newQuestion.date = data.questions[i].date;
                    newQuestion.processing = data.questions[i].processing;

                    questionsObjectList.push(newQuestion);
                }
            }
        },
        error : function(res, statut, error){
            console.log(res + statut + error);
        }
    });
};

HTTPResolver.prototype.getRequestForSingleQuestion = function (question){
    $.ajax
    ({
        type: "GET",
        url: hostURI + "/" + question.id,
        async: true,
        contentType: "application/hal+json",

        success: function(data, textStatus, xhr){
            if(xhr.status == 200) {
                data = JSON.parse(data);

                if (!data.processing) {
                    question.answer = data.answer;
                    question.state = 1;
                }
            }
        },

        error : function(res, statut, error){
            console.log(res + statut + error);
        }
    });
}

HTTPResolver.prototype.postRequest = function (questionToPost){
    var lastPostRequestWasSuccess = false;
    questionData = {question: questionToPost.question, answer: questionToPost.answer, date: questionToPost.date};

    $.ajax
    ({
        type: "POST",
        url: hostURI,
        async: true,
        data: questionData,

        success: function(data, textStatus, xhr){
            if(xhr.status == 201){
                humane.log("Question ajoutée !");
                lastPostRequestWasSuccess = true;
            }
        },

        error : function(res, statut, error){
            humane.log("Problème d'accés au serveur !");
            console.log("error :" + res + statut + error);
        }
    });

    return lastPostRequestWasSuccess;
}
