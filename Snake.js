GetData = function()
{
  Output = [];

  Output["MultiPlayer"] = document.getElementById("multiplayer").checked;
  Output["Canvas"] = document.getElementById("canvas");
  Output["Timer"] = document.getElementById("timer");
  Output["Controls1"] = document.getElementById("controls1");
  Output["Controls2"] = document.getElementById("controls2");
  Output["Name1"] = document.getElementById("name1").value;
  Output["Name2"] = document.getElementById("name2").value;
  Output["Color1"] = document.getElementById("color1").value;
  Output["Color2"] = document.getElementById("color2").value;
  Output["Score"] = document.getElementById("score");
  Output["Score1"] = document.getElementById("score1");
  Output["Score2"] = document.getElementById("score2");

  return Output;
}

DisplayPlayer2 = function(value) {
  var Controls2 = document.getElementById("controls2");
  if (value)
    Controls2.setAttribute("style","visibility: visible");
  else
    Controls2.setAttribute("style","visibility: hidden");
}

StartGame = function () {
  Data = GetData();

  Snake = SnakeLib;
  Snake.HTML.Canvas = Data['Canvas'];
  Snake.HTML.Score1 = Data['Score1'];
  Snake.HTML.Score2 = Data['Score2'];
  Snake.HTML.Timer = Data['Timer'];
  Snake.Settings.UpdateTimer = true;
  Snake.Settings.UpdateScore = true;

  Snake.Init(Data['MultiPlayer']);

  if (Data['MultiPlayer']) {
    Data['Score2'].setAttribute("style","color:"+Data['Color2']);

    Snake.Player2.Name = Data['Name2'];
    Snake.Player2.Color = Data['Color2'];
  }

  Data['Score1'].setAttribute("style","color:"+Data['Color1']);

  document.body.removeChild(document.getElementById("controls"));

  Data['Score'].setAttribute("style","visibility:hidden");

  Snake.Player.Name = Data['Name1'];
  Snake.Player.Color = Data['Color1'];

  Snake.StartGame();
}