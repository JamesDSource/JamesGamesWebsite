var current_page = document.getElementById("page").getAttribute("page");

function link(name, page) {
  this.name = name
  this.page = page
}

var home = new link("Home", "http://www.jamesvideogames.com/")
var games = new link("Games", "games")
var browser_games = new link("Browser Games", "browserGames")
var confetti = new link("Confetti", "confetti")
var downloads = new link("Downloads", "downloads")
var blogs = new link("Blogs", "blogs")
var contact = new link("Contact Me", "contact")

var links = [home, games, downloads];

document.writeln("<nav>");
document.writeln("<a href=\"http://www.jamesvideogames.com/\"><img src=\"images\\logo.png\" alt=\"\" class=\"headerImage\"></a>");
document.writeln("<h1>ames Videogames;</h1>");
document.writeln("<ul>");

for(var i = 0; i < links.length; i++) {
  var current_link = links[i];

  var onPage = "";
  if(current_link.page == current_page) {
    current_link.page = "#"
    onPage = "class=\"onPage\""
  }

  document.writeln("<li><a href=\"" + current_link.page + "\" " + onPage + ">" + current_link.name + "</a></li>");
}

document.writeln("</ul>");
document.writeln("</nav>");
