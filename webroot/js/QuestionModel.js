function QuestionModel(id, questionToAdd){
    this.id = id;
    this.question = questionToAdd;
    this.answer = "Réponse en cours de traitement, veuillez revenir plus tard pour consulter la réponse !";
    this.date = new Date().toString();
    this.processing = true;
}

