"use strict"

{
    const question = document.getElementById("question");
    const choices = document.getElementById("choices");
    const explanation = document.getElementById("explanation")
    const q_number = document.getElementById("q_number")
    const next_btn = document.getElementById("next_btn");
    const result = document.getElementById("result");
    const scoreLabel = document.querySelector("#score");
    const rank = document.getElementById("rank")
    const saikun = document.getElementById("saikun")
    const commentary = document.getElementById("commentary")
    


    const quizSet = shuffle ([
        {q: "what is a?", c: ["a0", "a1", "a2"], e: "aaaaa"},
        {q: "what is b?", c: ["b0", "b1", "b2"], e: "bbbbb"},
        {q: "what is c?", c: ["c0", "c1", "c2"], e: "ccccc"},
        {q: "what is d?", c: ["d0", "d1", "d2"], e: "ddddd"},
        {q: "what is e?", c: ["e0", "e1", "e2"], e: "eeeee"},
        {q: "what is f?", c: ["f0", "f1", "f2"], e: "fffff"},
        {q: "what is g?", c: ["g0", "g1", "g2"], e: "ggggg"},
        {q: "what is h?", c: ["h0", "h1", "h2"], e: "hhhhh"},
        {q: "what is i?", c: ["i0", "i1", "i2"], e: "iiiii"},
        {q: "what is j?", c: ["j0", "j1", "j2"], e: "jjjjj"},
        {q: "what is k?", c: ["k0", "k1", "k2"], e: "kkkkk"},
        {q: "what is l?", c: ["l0", "l1", "l2"], e: "lllll"},
        {q: "what is m?", c: ["m0", "m1", "m2"], e: "mmmmm"},
        {q: "what is n?", c: ["n0", "n1", "n2"], e: "nnnnn"},

    ]).splice(0, 8);
    let currentNum = 0;
    let isAnswered;
    let score = 0 ;


    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
      }

    function checkAnswer(li){
        if(isAnswered === true) {
            return;
        }
        isAnswered = true;

        if (li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add("correct");
            score++;
        } else {
            li.classList.add("wrong");
        }

        explanation.classList.remove("none")
        next_btn.classList.remove("disabled");
    }

    function setQuiz(){
        isAnswered = false;

        question.textContent = quizSet[currentNum].q;

        explanation.textContent = quizSet[currentNum].e;

        q_number.textContent = [currentNum + 1];

        while(choices.firstChild){
            choices.removeChild(choices.firstChild);

        }

        


        const shuffledChoices = shuffle([...quizSet[currentNum].c]);
        shuffledChoices.forEach(choice =>{
          const li = document.createElement("li");
          li.textContent = choice;
          li.addEventListener("click", () => {
              checkAnswer(li);
          });
          choices.appendChild(li);

    });

    if (currentNum === quizSet.length - 1) {
        next_btn.textContent =" 結果を見る";
    }


    }


    setQuiz();

    next_btn.addEventListener("click", () =>{
        if (next_btn.classList.contains("disabled")){
            return;
        }
        next_btn.classList.add("disabled")

        if (explanation.classList.contains("none")){
            return;
        }
        explanation.classList.add("none")
        
        if (currentNum === quizSet.length - 1) {
            scoreLabel.textContent = `${score}`;
            result.classList.remove("hidden");
            if( score > 7){
                rank.textContent = "天サイ！"
                saikun.src = "design/image/saikun_rank1.png"
                commentary.textContent = "サイ強！早大マスターは譲るツノ！"

            } else if ( score > 5) {
                rank.textContent = "サイ高！"
                saikun.src = "design/image/saikun_rank2.png"
                commentary.textContent = "あとちょっと、Never give upだツノ！"

            }　else if( score > 2){
                rank.textContent = "サイ能アリ！"
                saikun.src = "design/image/saikun_rank3.png"
                commentary.textContent = "まだまだ頑張るツノ！サイ挑戦してね！"

            } else {
                rank.textContent = "サイ履修！"
                saikun.src = "design/image/saikun_rank4.png"
                commentary.textContent ="伸びしろしかないツノ！出直してきてツノ…"

            }
        } else {
            currentNum++;
            setQuiz();
        }
    })
}
