var score = new Array;
var answers=["b","c", "a", "a", "d", "a", "c", "d", "b", "b", "b", "d", "b", "c", "b"];

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
   document.getElementById(aid).innerHTML="..........checked..........";
   score[q-1]=1;
 }
 else
 {
   document.getElementById(aid).innerHTML="..........cheched..........";
   score[q-1]=0;
 }
 showScore();

}