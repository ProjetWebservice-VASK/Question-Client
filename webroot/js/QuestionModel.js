function QuestionModel(id, questionToAdd){
    this.id = id;
    this.question = questionToAdd;
    this.answer = undefined;
    this.date = new Date().toString();
    this.processing = true;
}

