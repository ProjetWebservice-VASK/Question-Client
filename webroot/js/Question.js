function Question(id, questionToAdd){
    this.id = id;
    this.libelle = questionToAdd;
    this.answer = "Réponse en cours de traitement, veuillez revenir plus tard pour consulter la réponse !";
    this.questionState = 0;
}

