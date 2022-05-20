function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Ff8aeEsiZx":
        Script1();
        break;
      case "6FDCsz6uV3S":
        Script2();
        break;
      case "69jM9AoO8pM":
        Script3();
        break;
      case "6S4ObQlY6ZM":
        Script4();
        break;
      case "6pSpUwu3qGx":
        Script5();
        break;
      case "5VwAZXm2Lzb":
        Script6();
        break;
      case "6JS2IubK3xK":
        Script7();
        break;
      case "5lVsfJPbkc0":
        Script8();
        break;
      case "62thhkvdXku":
        Script9();
        break;
      case "6nT7mQBwiHG":
        Script10();
        break;
      case "5pS70OP9wDE":
        Script11();
        break;
      case "6KUnCp7Nzon":
        Script12();
        break;
      case "6a0IwwlCHYK":
        Script13();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="Bg Music 0.mp3";
audio.load();
audio.play();
}

function Script2()
{
  var currentTime = new Date()
var hours = currentTime.getHours()
var minutes = currentTime.getMinutes()
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
var day = weekday[currentTime.getDay()];
var date = currentTime.getDate()
var months=new Array(12);
months[0]="January";
months[1]="February";
months[2]="March";
months[3]="April";
months[4]="May";
months[5]="June";
months[6]="July";
months[7]="August";
months[8]="September";
months[9]="October";
months[10]="November";
months[11]="December";
var month = months[currentTime.getMonth()];
var year = currentTime.getFullYear()
if (minutes < 10)
minutes = "0" + minutes
var timeString=" " + hours + ":" + minutes
var dateString=day + ", " + date + " " + month
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
player.SetVar("SystemTime",timeString);
player.SetVar("systemdateDayOfWeek",day);
player.SetVar("systemdateDay",date);
player.SetVar("systemdateMonth",month);
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.src="Bg Music 1.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.src="Bg Music 2.mp3";
audio.load();
audio.play();
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.src="Bg Music 0.mp3";
audio.load();
audio.play();
}

function Script6()
{
  var myWindow = window.open("","Print","width=810,height=660");
var player=GetPlayer();
var name=player.GetVar("Var_Name");
var date=player.GetVar("SystemDate");
var time=player.GetVar("SystemTime");
var score1=player.GetVar("ScoreT");
var score2=player.GetVar("ScoreP");
var score3=player.GetVar("ScoreH");
var score4=player.GetVar("ScoreM");
var score5=player.GetVar("ScoreO");
var score6=player.GetVar("ScoreN");
var contents = "<html><head><title>Your Results</title></head><body style='width:650px;padding:20px;'>"
contents+="<div style='font-size:15px;font-family:calibri;'><img src=https://www.parkwaypantai.com/Templates/1/images/logo.png></div><br><br>";
contents+="<div style='font-size:14px;color:#24B69D;font-family:calibri;'>"+date+""+time+"</div><br>";
contents+="<div style='font-size:16px;font-family:calibri;margin-top:20px;margin-bottom:20px;'>Hello <strong><font color=#24B69D>"+name+"</font></strong>, here are your results:</div>";
contents+="<div style='font-size:16px;color:#24B69D;font-family:calibri;margin-top:10px;'><strong>Task Points= </strong><font color=#000000>"+score1+"</font></div><br>";
contents+="<div style='font-size:16px;color:#24B69D;font-family:calibri;margin-top:10px;'><strong>Peter's Score= </strong><font color=#000000>"+score2+"</font></div><br>";
contents+="<div style='font-size:16px;color:#24B69D;font-family:calibri;margin-top:10px;'><strong>Hilda's Score= </strong><font color=#000000>"+score3+"</font></div><br>";
contents+="<div style='font-size:16px;color:#24B69D;font-family:calibri;margin-top:10px;'><strong>Mui Leng's Score= </strong><font color=#000000>"+score4+"</font></div><br>";
contents+="<div style='font-size:16px;color:#24B69D;font-family:calibri;margin-top:10px;'><strong>Olivia's Score= </strong><font color=#000000>"+score5+"</font></div><br>";
contents+="<div style='font-size:16px;color:#24B69D;font-family:calibri;margin-top:10px;'><strong>Nafisah's Score= </strong><font color=#000000>"+score6+"</font></div><br>";
contents+="<div style='font-size:14px;font-family:calibri;margin-top:10px;'>Please click on 'Print to PDF' button (Change your printer destination to 'Print to PDF'), save a copy of the results and email the results to <a href=mailto:admin@solutionsatwork.com.sg>admin@solutionsatwork.com.sg</a></div><br><br>";
contents += "<div style='height:20px;padding:10px;margin-bottom:20px;text-align:center;'><button onclick='javascript:window.print();'>Print to PDF</button></div>";
contents+= "</body></html>"
myWindow.document.write(contents);
}

function Script7()
{
  var player=GetPlayer();
var number = player.GetVar("ScoreT");
var text = number.toString();
player.SetVar("ScoreT1", text);
}

function Script8()
{
  var player=GetPlayer();
var number = player.GetVar("ScoreP");
var text = number.toString();
player.SetVar("ScoreP1", text);
}

function Script9()
{
  var player=GetPlayer();
var number = player.GetVar("ScoreH");
var text = number.toString();
player.SetVar("ScoreH1", text);
}

function Script10()
{
  var player=GetPlayer();
var number = player.GetVar("ScoreM");
var text = number.toString();
player.SetVar("ScoreM1", text);
}

function Script11()
{
  var player=GetPlayer();
var number = player.GetVar("ScoreO");
var text = number.toString();
player.SetVar("ScoreO1", text);
}

function Script12()
{
  var player=GetPlayer();
var number = player.GetVar("ScoreN");
var text = number.toString();
player.SetVar("ScoreN1", text);
}

function Script13()
{
  var audio = document.getElementById('bgSong');
audio.src="Bg Music 0.mp3";
audio.load();
audio.play();
}

