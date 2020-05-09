const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const twit = document.getElementById("twit-share");
const finalmin = localStorage.getItem("mins");
const finalsec = localStorage.getItem("second");
const resultfinal=document.getElementById("resultfin");
const nm=parseInt(mostRecentScore)
let res
finalScore.innerText = mostRecentScore +"/10 in "+finalmin+" m "+finalsec+" s!";

twit.href="https://twitter.com/intent/tweet?text=My%20Score%20on%20quiz%20app%20was%20"+ mostRecentScore +"%20/10%20in%20"+finalmin+"minute"+finalsec+"seconds!&hashtags=quizapp,funquiz"

if(nm<4){
    res="Try again"
}
else{
    res="Pass"
}
resultfinal.innerText = res;