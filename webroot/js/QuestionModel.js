function QuestionModel(id, questionToAdd){
    this.id = id;
    this.question = questionToAdd;
    this.answer = null;
    this.date = new Date().toString();
    this.processing = true;
}

