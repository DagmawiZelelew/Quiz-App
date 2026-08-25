let question = document.getElementById("question");
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let message = document.getElementById("message");
let next = document.getElementById("next");
num = 1;
let final = document.getElementById("final_score");
let win = 0;
let answered = false;
function start(){
    question.textContent = `1. Which country has the most time zones?`;
    a1.textContent = "A.  France";
    a2.textContent = "B.  Canada";
    a3.textContent = "C.  Russia";
    a4.textContent = "D.  USA";

}
a4.onclick =function(){
    if(!answered){
    if(num === 1){
        message.textContent = "Unfortunately you are wrong👀, The answer was France!";
    }
    else if(num === 2){
           message.textContent = "Well Done!✔ You are Right!";
           win++;
    }
    else if(num===3){
        message.textContent = "Unfortunately you are wrong👀, The answer was Tomato!";
    }
     else if(num===4){
        message.textContent = "Unfortunately you are wrong👀, The answer was Neil Armstrong!";
    }
        else if(num === 5){
            message.textContent = "Well Done!✔ You are Right!";
            win++;
        }

        showFinalScore();
    next.textContent = "Next Question";
    num++;
    answered= true;
}}


a3.onclick =function(){
    if(!answered){
    if(num === 1){
        message.textContent = "Unfortunately you are wrong👀, The answer was France!";
    }
    else if(num ===2){
        message.textContent = "Unfortunately you are wrong👀, The answer was Sudan!";
    }
     else if(num===3){
        message.textContent = "Unfortunately you are wrong👀, The answer was Tomato!";
    }
     else if(num===4){
        message.textContent = "Well Done!✔ You are Right!";
        win++;
    }
        else if(num === 5){
            message.textContent = "Well Done!✔ You are Right!";
            win++;
        }

        showFinalScore();
    next.textContent = "Next Question";
    num++;
    answered= true;
}
}
a2.onclick =function(){
    if(!answered){
    if(num === 1){
        message.textContent = "Unfortunately you are wrong👀, The answer was France!";
    }
    else if(num === 2){
        message.textContent = "Unfortunately you are wrong👀, The answer was Sudan!";
    }
     else if(num===3){
        message.textContent = "Unfortunately you are wrong👀, The answer was Tomato!";
    }
     else if(num===4){
        message.textContent = "Unfortunately you are wrong👀, The answer was Neil Armstrong!";
    }
       else if(num === 5){
            message.textContent = "Well Done!✔ You are Right!";
            win++;
        }

        showFinalScore();
    next.textContent = "Next Question";
    num++;
    answered= true;
    }
}
a1.onclick =function(){
    if(!answered){
    if(num === 1){
        message.textContent = "Well Done!✔ You are Right!";
        win++;

    }
    else if(num === 2){
        message.textContent = "Unfortunately you are wrong👀, The answer was Sudan!";
    }
     else if(num===3){
        message.textContent = "Well Done!✔ You are Right!";
        win++;
    }
     else if(num===4){
        message.textContent = "Unfortunately you are wrong👀, The answer was Neil Armstrong!";
    }
       else if(num === 5){
            message.textContent = "Well Done!✔ You are Right!";
            win++;
        }
        showFinalScore();
    next.textContent = "Next Question";
    num++;
    answered= true;
}
}

next.onclick = function(){
    answered= false;
    if(num ===2){
     question.textContent = `2. Which African country has the most pyramids?`;
    a1.textContent = "A.  Egypt";
    a2.textContent = "B.  South Sudan";
    a3.textContent = "C.  Morocco";
    a4.textContent = "D.  Sudan"; 
    message.textContent= "";

    }
    else if(num===3){
     question.textContent = `3. Which of these is technically a fruit?`;
    a1.textContent = "A.  Tomato";
    a2.textContent = "B.  Onion";
    a3.textContent = "C.  Carrot";
    a4.textContent = "D.  Potato";
        message.textContent= "";
    }
    else if(num===4){
     question.textContent = `4. Who was the first person to walk on the Moon?`;
    a1.textContent = "A.  Buzz Aldrin";
    a2.textContent = "B.  Yuri Gagarin";
    a3.textContent = "C.  Neil Armstrong";
    a4.textContent = "D.  Michael Collins";
        message.textContent= "";
    }
    else if(num===5){
     question.textContent = `5. Which is the largest ocean on Earth?`;
    a1.textContent = "A.  Atlantic Ocean";
    a2.textContent = "B.  Indian Ocean";
    a3.textContent = "C.  Arctic Ocean";
    a4.textContent = "D.  Pacific Ocean";
        message.textContent= "";
    }
}
function showFinalScore(){
    if(num ===5){
    final.textContent = `Your total point is ${win} out of 5!`
}}