/*
Vamos a construir un juego de test en la consola!
1. Crear un constructor Question que describa la pregunta. Debe incluir:
- question
- array de answers (u objeto)
- respuesta correcta
2 Crear un par de preguntas utilizando el constructor
3. Guardar las preguntas en un array
4. Seleccionar una pregunta aleatoria del array, y crear un método (mediante prototype) displayQuestion para pintarla por consola y a continuación las posibles respuestas (pista: para crear un número de pregunta aleatorio de un array: var n = Math.floor(Math.random() * questions.length);)
5. Usar prompt para que el usuario pueda elegir una opción. (pista: se debe cambiar el tipo del valor devuelto por prompt: parseInt)
6. Crear un método mediante prototype que corriga la respuesta e indique si hemos acertado o no.
*/

//! 1.

var Question = function (question, arrAnswers, correctAnswer) {
    this.question = question;
    this.arrAnswers = arrAnswers;
    this.correctAnswer = correctAnswer;
}

//! 2.

var question1 = new Question('¿Cuántas copas del Rey tiene el RCD Espanyol de Barcelona?', [9, 4, 1], 4);
var question2 = new Question('¿De qué fruta se obtiene la copra?', ['Coco', 'Piña', 'Cereza'], 'Coco');
var question3 = new Question('¿De qué Estado norteamericano es capital Indianápolis?', ['Montana', 'Ohio', 'Indiana'], 'Indiana');
var question4 = new Question('¿Cuál es el planeta más alejado del Sol?', ['Saturno', 'Venus', 'Plutón'], 'Plutón');


//! 3.

var questions = [question1, question2, question3, question4];



//! 4.

Question.prototype.displayQuestion = function() {
    console.log(this.question);
    console.log(this.arrAnswers);
};

var n = Math.floor(Math.random() * questions.length);
questions[n].displayQuestion();


//! 5.

var userAnswer = prompt("Escribe la respuesta correcta:");


//!6.

Question.prototype.checkAnswer = function () {
    if (userAnswer == this.correctAnswer) {
        alert("¡Felicidades! La respuesta es correcta.");
    } else {
        alert("¡La respuesta es incorrecta!");
    }
};
questions[n].checkAnswer();
