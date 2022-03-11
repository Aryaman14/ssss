p1name=localStorage.getItem("p1");
p2name=localStorage.getItem("p2");
p1_score=0;
p2_score=0;
document.getElementById("player1name").innerHTML=p1name + " : ";
document.getElementById("player2name").innerHTML=p2name + " : ";
document.getElementById("player_question").innerHTML="question turn-" + p1name;
document.getElementById("player_answer").innerHTML="answer turn-" + p2name;
document.getElementById("p1_score").innerHTML=p1_score;
document.getElementById("p2_score").innerHTML=p2_score;
function send()
{
    n1=document.getElementById("num1").value;
    n2=document.getElementById("num2").value;
    answer=parseInt(n1)*parseInt(n2);
    qword="<h4 id='question'>"+n1+"*"+n2+"</h4>";
    ibox="<br>answer:<input type='text' id='ans'";
    checkbutton="<br><br><button class='btn btn-success' onclick='check()'>Check</button>"
    row= qword + ibox + checkbutton;
    document.getElementById("output").innerHTML=row;
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
}