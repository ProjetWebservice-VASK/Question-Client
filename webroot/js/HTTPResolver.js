function HTTPResolver(questionsObjectList){
    hostURI = "http://localhost/webService/questions/";
    questionsArray = questionsObjectList;
}

HTTPResolver.prototype.requestHost = function (question){
    $.ajax
    ({
        type: "GET",
        url: hostURI + question.id + ".php",
        async: true,
        contentType: "application/json",

        success: function(data){
            data = JSON.parse(data);
            if(!data.processing)
                question.answer = data.answer;
        },

        error : function(res, statut, error){
            console.log(res + statut + error);
        }
    });
}

HTTPResolver.prototype.requestEveryHost = function (){
    for(var i = 0; i < questionsArray.length; i++){
        this.requestHost(questionsArray[i]);
    }
}