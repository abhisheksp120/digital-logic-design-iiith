
  var questions = [{
    question: "Assume that a 4-bit serial in/serial out shift register is initially clear. We wish to store the nibble 1100.What will be the 4-bit pattern after the second clock pulse? (Right-most bit first) ?",
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
    question: "A bidirectional 4-bit shift register is storing the nibble 1101. Its  input is HIGH. The nibble 1011 is waiting to be entered on the serial data-input line. After three clock pulses, the shift register is storing ?",
    choices: [1101,'0111', '0001', 1110],
    correctAnswer: 1
  },
  {
    question: "The group of bits 11001 is serially shifted (right-most bit first) into a 5-bit parallel output shift register with an initial state 01110. After three clock pulses, the register contains ?",
    choices: ['01110','00001', '00101','00110'],
    correctAnswer: 2
  },
  {
    question: "Assume that a 4-bit serial in/serial out shift register is initially clear. We wish to store the nibble 1100. What will be the 4-bit pattern after the second clock pulse? (Right-most bit first.)?",
    choices: [1110,'0011', '0000', 1111],
    correctAnswer: 2
  },
  {
    question: "How is a strobe signal used when serially loading a shift register ?",
    choices: ['to turn the register on and off','to control the number of clocks', 'to determine which output Qs are used', 'to determine the FFs that will be used'],
    correctAnswer: 1
  },
  {
    question: "Multiplying 1000 by 1001(both are base 10) will produce product of ?",
    choices: ['0001000','1001001', 1001000, 1111000],
    correctAnswer: 2
  },
  {
    question: "For a 4-bit parallel adder, if the carry-in is connected to a logical HIGH, the result is  ?",
    choices: ['The same as if the carry-in is tied LOW since the least significant carry-in is ignored','That carry-out will always be HIGH', 'A one will be added to the final result', 'The carry-out is ignored'],
    correctAnswer: 2
  },
  {
    question: "One way to make a four-bit adder to perform subtraction is by ?",
    choices: ['Inverting the output','Inverting the carry-in', 'Inverting the B inputs', 'Grounding the B inputs'],
    correctAnswer: 2
  },
  {
    question: "What distinguishes the look-ahead-carry adder ?",
    choices: ['It is slower than the ripple-carry adder','It is easier to implement logically than a full adder', 'It is faster than a ripple-carry adder', 'It requires advance knowledge of the final answer'],
    correctAnswer: 2
  },
  {
    question: "The carry propagation delay in 4-bit full-adder circuits ?",
    choices: ['Is cumulative for each stage and limits the speed at which arithmetic operations are performed','Is normally not a consideration because the delays are usually in the nanosecond range', 'Decreases in direct ratio to the total number of full-adder stages', 'Increases in direct ratio to the total number of full-adder stages, but is not a factor in limiting the speed of arithmetic operations'],
    correctAnswer: 0
  },
  {
    question: "The summing outputs of a half or full-adder are designated by which Greek symbol ?",
    choices: [' Omega','Theta', 'Lambda', 'Sigma'],
    correctAnswer: 3
  },
  {
    question: "Carry lookahead logic uses the concepts of ?",
    choices: ['Inverting the inputs','Complementing the outputs', 'Generating and propagating carries', 'Ripple factor'],
    correctAnswer: 2
  },
  {
    question: "A register is defined as ?",
    choices: ['The group of latches for storing one bit of information','The group of latches for storing n-bit of information', 'The group of flip-flops suitable for storing one bit of information', 'The group of flip-flops suitable for storing binary information'],
    correctAnswer: 3
  },
  {
    question: "Registers capable of shifting in one direction is ?",
    choices: ['Universal shift register','Unidirectional shift register', 'Unipolar shift register', 'Unique shift register'],
    correctAnswer: 1
  },
  {
    question: "A shift register that will accept a parallel input or a bidirectional serial load and internal shift features is called as ?",
    choices: ['Tristate','End around', 'Universal', 'Conversion'],
    correctAnswer: 2
  },
  {
    question: "With a 200 kHz clock frequency, eight bits can be serially entered into a shift register in  ?",
    choices: ['4 μs','40 μs', '400 μs', '40 ms'],
    correctAnswer: 1
  },
  {
    question: "An 8-bit serial in/serial out shift register is used with a clock frequency of 150 kHz. What is the time delay between the serial input and the Q3 output ?",
    choices: ['1.67 s','26.67 s', '26.7 ms', '267 ms'],
    correctAnswer: 1
  },
  {
    question: "The register is a type of ?",
    choices: ['Sequential circuit','Combinational circuit', 'CPU', 'Latches'],
    correctAnswer: 0
  },
  {
    question: "In D register, 'D' stands for ?",
    choices: ['Delay','Decrement', 'Data', 'Decay'],
    correctAnswer: 2
  },
  {
    question: "An 8-bit serial in/serial out shift register is used with a clock frequency of 2 MHz to achieve a time delay (td) of ?",
    choices: ['16 us','8 us', '4 us', '2 us'],
    correctAnswer: 2
  },
  {
    question: "How much storage capacity does each stage in a shift register represent ?",
    choices: ['One bit','Two bits', 'Four bits', 'Eight bits'],
    correctAnswer: 0
  },
  {
    question: "What is a recirculating register ?",
    choices: ['Serial out connected to serial in','All Q outputs connected together', 'A register that can be used over again', 'Parallel out connected to Parallel in'],
    correctAnswer: 0
  },
  {
    question: "Which circuit can be used to take square root of a signal ?",
    choices: ['Divider circuit','Multiplier circuit', 'Squarer circuit', 'None of the mentioned'],
    correctAnswer: 0
  },
  {
    question: "Shifting a register content to left by one bit position is equivalent to  ?",
    choices: ['Division by two','Addition by two', 'Multiplication by two', 'Subtraction by two'],
    correctAnswer: 2
  },
  {
    question: "Calculate the output voltage of a squarer circuit, if it input voltage is 3.5v. Assume Vref = 9.67v. ?",
    choices: ['2.86v','1.27v', '10v', '4.3v'],
    correctAnswer: 1
  },
  {
    question: "Time to transfer content of shift register is called ?",
    choices: ['Word duration','Clock duration', 'Duration', 'Bit time'],
    correctAnswer: 0
  },{
    question: "Fast-look-ahead carry circuits found in most 4-bit full-adder circuits which ?",
    choices: [" Determine sign and magnitude", "Reduce propagation delay", "Add a 1 to complemented inputs", "Increase ripple delay"],
    correctAnswer: 1
  }];
  
  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object
  var check1=0;
  var w=0;
  var w1=0;
  // Display initial question
  displayNext(check1);

   $('#Sub').on('click', function (e) {
    e.preventDefault();
    questionCounter=questions.length;
    w=1;
    w1=1;
    displayNext();
  });
   function cl(){
    if(w==1)
      return 1;
    else
      return 0;
   }
   function cl1(){
    if(w1==1)
      return 1;
    else
      return 0;
   }
  // Click it to skip the current question
      $('#skip').on('click', function (e) {
    e.preventDefault();
    selections[questionCounter] =" ";
     questionCounter++;
     $("[id="+questionCounter+"]").css("background-color", "yellow");
    if(questionCounter===questions.length)
       questionCounter=0;
    displayNext();
  });
    
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
      $("[id="+questionCounter+"]").css("background-color", "lightGreen");
      if(questionCounter===questions.length)
       questionCounter=0;
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
    if(!(isNaN(selections[questionCounter]))){
      questionCounter+=1;
      $("[id="+questionCounter+"]").css("background-color", "lightGreen");
      questionCounter-=1;
    }
    questionCounter-=1;
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
  
  function tab(val){
  
    questionCounter=val-1;
    displayNext(0);
  }
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
        questionCounter=questions.length;
      }
          if(questionCounter < questions.length){
            if(questionCounter>1)
              $('#prev').show();
            if(isNaN(selections[questionCounter])){
              questionCounter+=1;
            $("[id="+questionCounter+"]").css("background-color", "yellow");
            questionCounter-=1;
            }
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
         document.getElementById("quiz").style.marginTop = "5%";
        document.getElementById("quiz").style.marginLeft = "5%";
        $('#head').show();
        $('#timer').hide();
        $('#next').hide();
        $('#prev').hide();
        $('#skip').hide();
        $('#Sub').hide();
        $('#start').show();
        $('#q1').hide();
        document.getElementById("quiz").style.textAlign = "center";
        document.getElementById("start").style.cssFloat = "none";
        document.getElementById("start").style.marginLeft = "45%";
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


