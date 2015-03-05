function QuestionModel(id, questionToAdd){
    this.id = id;
    this.libelle = questionToAdd;
    this.answer = "Réponse en cours de traitement, veuillez revenir plus tard pour consulter la réponse !";
    this.date = new Date().toString();
    this.questionState = 0;

    /* Questions state
        * 0 : Pending
        * 1 : Finished
        * -1: Error
     */
}

