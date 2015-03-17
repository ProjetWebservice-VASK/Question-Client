function QuestionView(){
    this.questionsNode = "#questions";
}

QuestionView.prototype.displayQuestion = function (questionsList){
    this.cleanHTMLQUestionsList();

    for(var i = 0; i < questionsList.length; i++){
        this.appendToHTMLQuestionList(questionsList[i], i);
    }
}

QuestionView.prototype.cleanHTMLQUestionsList = function (){
    $(this.questionsNode).html("");
}

QuestionView.prototype.appendToHTMLQuestionList = function (questionToAdd, index){
    var htmlOuput =
        "<div class='panel-group' id='accordion' role='tablist' aria-multiselectable='false'>" +
            "<div class='panel panel-default'>" +
                "<div class='panel-heading' role='tab' id='heading"+ index +"'>" +
                    "<h4 class='panel-title'>" +
                        "<a data-toggle='collapse' data-parent='#accordion' href='#collapse"+ index +"' aria-expanded='false' aria-controls='collapse"+ index +"'>"
                            + questionToAdd.question +
                        "</a>" +
                    "</h4>" +
                "</div>" +
                    "<div id='collapse"+ index +"' class='panel-collapse collapse in' role='tabpanel' aria-labelledby='heading"+ index +"'>" +
                    "<div class='panel-body'>"
                        + questionToAdd.answer + "" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>";

    $( this.questionsNode ).append(htmlOuput);
}

