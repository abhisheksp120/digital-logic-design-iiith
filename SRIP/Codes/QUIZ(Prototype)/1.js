
  var questions = [{
    question: "Assume that a 4-bit serial in/serial out shift register is initially clear. We wish to store the nibble 1100. What will be the 4-bit pattern after the second clock pulse? (Right-most bit first) ?",
    choices: [1100,'0011', '0000', 1111],
    correctAnswer: 2
  }, {
    question: "A serial in/parallel out, 4-bit shift register initially contains all 1s. The data nibble 0111 is waiting to enter. After four clock pulses, the register contains ?",
    choices: ['0000', 1111,  '0111', 1000],
    correctAnswer: 2
  }, {
    question: "How can parallel data be taken out of a shift register simultaneously ?",
    choices: ["Use the Q output of the first FF."," Use the Q output of the last FF.","Tie all of the Q outputs together."," Use the Q output of each FF."],
    correctAnswer: 3
  }, {
    question: "In a parallel in/parallel out shift register, D0 = 1, D1 = 1, D2 = 1, and D3 = 0. After three clock pulses, the data outputs are ?",
    choices: [1110,'0001', 1100, 1000],
    correctAnswer: 1
  }, {
    question: "To serially shift a nibble (four bits) of data into a shift register, there must be ?",
    choices: ["one clock pulse", "four clock pulses", "eight clock pulses", "one clock pulse for each 1 in the data"],
    correctAnswer: 1
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  var check1=0;
  // Display initial question
  displayNext(check1);
  
  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();
    
    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {        
      return false;
    }
    choose();
    
    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });
  
  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });
  
  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();
    
    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });
  
  // Animates buttons on hover
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });
  
  // Creates and returns the div that contains the questions and 
  // the answer selections
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });
    
    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);
    
    var question = $('<p>').append(questions[index].question);
    qElement.append(question);
    
    var radioButtons = createRadios(index);
    qElement.append(radioButtons);
    
    return qElement;
  }
  
  // Creates a list of the answer choices as radio inputs
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }
  
  // Displays next requested element
  function displayNext(check1) {
    quiz.fadeOut(function() {
      $('#question').remove();
      if(check1===1){
        questionCounter=5;
      }
        if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }
        
        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){
          
          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
      
    });
  }
  
  // Computes score and returns a paragraph element to be displayed
  function displayScore() {
    var score = $('<p>',{id: 'question'});
    
    var numCorrect = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }
    if(numCorrect===questions.length){
      score.append('Congratulations you got them all ' + numCorrect + ' out of ' +
                 questions.length + '');
       return score;
    }
    else{
      if(numCorrect===0){
        score.append('Very sorry to say but you got ' + numCorrect + ' out of ' +
                 questions.length + ' Please go through the theory section of the experiment (Best of luck) ');
         return score;
      }else{
        score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
         return score;
      }
      
    }
    
    
  }


