function HTTPResolver(questionsObjectList){
    hostURI = "http://localhost/webService/questions/";
    questionsArray = questionsObjectList;
    lastPostRequestWasSuccess = false;
}

HTTPResolver.prototype.getRequest = function (question){
    $.ajax
    ({
        type: "GET",
        url: hostURI + question.id + ".php",
        async: true,
        contentType: "application/json",

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
    lastPostRequestWasSuccess = false;
    questionData = {question: questionToPost.libelle, answer: questionToPost.answer, date: questionToPost.date, state: questionToPost.state};

    $.ajax
    ({
        type: "POST",
        url: hostURI + "questions.php",
        async: false,
        data: questionData,

        success: function(){
            postRequestWasSucces = true;
        },

        error : function(res, statut, error){
            console.log("error :" + res + statut + error);
        }
    });

    return lastPostRequestWasSuccess;
}

HTTPResolver.prototype.requestEveryHost = function (){
    for(var i = 0; i < questionsArray.length; i++){
        this.getRequest(questionsArray[i]);
    }
}