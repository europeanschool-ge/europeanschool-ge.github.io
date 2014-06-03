var score = new Array;
var answers=["c","b", "c","c","d","a","c","b","d","a","c","b","a","d","c"];

function showScore()
{
  var total=0;
  for (i in score)
  {
    total+=score[i];
  }
  document.getElementById('score').innerHTML=total;

}

function check(q)
{
 var qid="a"+q+answers[q-1];
 var aid="answer"+q;
 if (document.getElementById(qid).checked)
 {
   document.getElementById(aid).innerHTML="correct!";
   score[q-1]=1;
 }
 else
 {
   document.getElementById(aid).innerHTML="wrong!";
   score[q-1]=0;
 }
 showScore();

}