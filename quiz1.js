"use strict"

{
    const question = document.getElementById("question");
    const choices = document.getElementById("choices");
    const correct_comment = document.getElementById("correct_comment");
    const wrong_comment = document.getElementById("wrong_comment");
    const explanation = document.getElementById("explanation");
    const q_number = document.getElementById("q_number");
    const next_btn = document.getElementById("next_btn");
    const result = document.getElementById("result");
    const scoreLabel = document.querySelector("#score");
    const rank = document.getElementById("rank");
    const saikun = document.getElementById("saikun");
    const commentary = document.getElementById("commentary");
    


    const quizSet = shuffle ([
        
        {q: "早稲田祭2019の来場者数は？", c: ["約20万人", "約9万人", "約5万人"], e: "なんと浦安の2つの夢の国における1日あたりの来場者数と同じだとか！"},
        {q: "早稲祭2019の2日間の来場者数の合計と、浦安の2つの夢の国の1日あたりの来場者数の合計で多いのはどっち？", c: ["早稲田祭", "某テーマパーク", "同じ"], e: ""},
        {q: "早稲田祭2019の予算規模は？", c: ["約3800万円", "約1800万円", "約2800万円"], e: ""},
        {q: "早稲田祭2020のオンライン配信の総再生回数は？", c: ["約35万回", "約25万回", "約15万回"], e: ""},
        {q: "早稲田祭2020の最大同時視聴人数は？", c: ["約7000人", "約8000人", "約6000人"], e: ""},
        {q: "早稲田祭2021運営スタッフの人数は？", c: ["約600人", "約400人", "約500人"], e: ""},
        {q: "早稲田祭2021の代表の名前は？", c: ["小野寺佑月", "高橋美卯", "田中愛治"], e: ""},
        {q: "早稲田祭2021のキャッチコピーは？", c: ["それでも共に", "今、新たに", "今をときめく者たちへ"], e: ""},
        {q: "教育学部の男女比は？", c: ["6:4", "5:5", "8:2"], e: "2021年は男子2599人、女子1469人となっています！"},
        {q: "存在する授業は？", c: ["恋愛学入門", "美容学入門", "オカルト芸術論"], e: "恋愛学入門はGEC（グローバルエデュケーションセンター）で開講されている、早大生なら誰でも受講できる授業です！"},
        {q: "早稲田大学の公認サークルの数は？", c: ["約550", "約450", "約350"], e: "その他に非公認サークルもたくさんあります！"},
        {q: "早大生の間で有名な「學会」は何のお店？", c: ["油そば", "炒飯", "ラーメン"], e: ""},
        {q: "早稲田大学の建物で一番数字が大きいのは何号舘？", c: ["120号館", "110号館", "100号館"], e: ""},
        {q: "早稲田大学の創立年は？", c: ["1882年", "1858年", "1913年"], e: ""},
        {q: "SSSはどの学部の略称？", c: ["社会科学部", "政治経済学部", "教育学部"], e:"社会科学部は英語でSchool of Social Scienceとなっています！"},
        {q: "学生会館にあるコンビニは？", c: ["セブンイレブン", "ファミリーマート", "ローソン"], e: "ちなみに、早稲田キャンパスにはセブンイレブンとファミリーマートがあります！"},
        {q: "所要時間が一番短いのはどれ？", c: ["早稲田キャンパス〜高田馬場駅", "早稲田キャンパス〜西早稲田駅", "早稲田キャンパス〜所沢キャンパス"], e: "また、早稲田駅は高田馬場駅よりもさらに早稲田キャンパスに近いです！"},
        {q: "わせだサイくんが今の姿にリニューアルしたのはいつ？", c: ["2021年", "2020年", "2019年"], e: "立体感がましてさらに可愛くなりました！"},
        {q: "今年の早稲田祭のロゴと関係ないものは？", c: ["完璧さ", "希望", "繋がり"], e: "詳しくは公式サイト内の「早稲田祭2021について」をチェック！"},
        {q: "早稲田大学に実際に存在しない授業は？", c: ["Kabuki", "Budo", "Bon Dance"], e: ""},
        {q: "早大生の好きな単語は？", c: ["楽単", "楽単", "再履"], e: ""},
        {q: "馬場下町交差点の信号機が赤から青になり、また赤になるまでにかかる時間は？", c: ["30秒～1分", "1分～1分30秒", "1分30秒～2分"], e: ""},
        {q: "早稲田キャンパスで開講されている体育の授業は？", c: ["合気道", "バスケ", "サッカー"], e: ""},
        {q: "早稲田通りに面した建物は？", c: ["29号館", "23号館", "27号館"], e: ""},
        {q: "早稲田大学の図書館は", c: ["登録すれば誰でも入れる", "誰でも入れる", "早稲田大学学生しか入れない"], e: ""},
        {q: "早稲田駅を通っている路線は？", c: ["東西線", "山手線", "東西線"], e: ""},
        {q: "早稲田キャンパスにない学部は？", c: ["文学部", "商学部", "社会科学部"], e: ""},

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

        explanation.classList.remove("none");
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
