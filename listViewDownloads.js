function Download(name, platform, file) {
  this.name = name;
  this.platform = platform;
  this.file = file;
}

function mouseOut(img) {
  img.src="images/downloadButton.png";
}
function mouseOver(img) {
  img.src="images/downloadButtonPressed.gif";
}

var jumpy = new Download (
  "Jumpy",
  "Windows",
  "JumpyWindows.zip"
);

var ghostGame = new Download(
  "Fright at the Museum",
  "Windows",
  "GhostGame.zip"
);

var venom = new Download(
  "Venomous",
  "Windows",
  "Venomous.zip"
);

var moldy = new Download(
  "Moldy",
  "Windows",
  "Moldy.zip"
);

var dungeonDog = new Download(
  "Dungeon Dog",
  "Windows",
  "DungeonDog.zip"
);

var threader = new Download(
  "Threader",
  "Windows",
  "Threader.zip"
);

var downloads = [jumpy, ghostGame, venom, moldy, dungeonDog, threader];
for(var i = 0; i < downloads.length; i++) {
    download = downloads[i];
    document.writeln("<div class=\"content\">");
    document.writeln("<div class=\"title\"><h4>" + download.name + "</h4></div>");
    document.writeln("<h6>(" + download.platform + ")</h6>");
    document.writeln("<p><a href=" + download.file + " download> " + " <img src=\"images/downloadButton.png\" class=\"download\" onmouseover=\"mouseOver(this)\" onmouseout=\"mouseOut(this)\"></img>" + "</a></p>");
    document.writeln("</div>");
}
