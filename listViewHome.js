function post(title, image, text, link) {
  this.title = title;
  this.image = image;
  this.text = text;
  this.link = link;
}

var moldy = new post(
  "Moldy for Download",
  "moldy.png",
  "Moldy is now available for download. It's a small, but sweet game.",
  "downloads"
);

var confetti = new post(
  "Confetti Engine",
  "confettiGithub.PNG",
  "The scala game engine, Confetti has started development. Exciting things to come.",
  "confetti"
)

var posts = [moldy, confetti];
document.writeln("<div class = \"content\">");
for(var i = posts.length-1; i >= 0; i--) {
  var current_post = posts[i];
  document.writeln("<h4 class=\"title\">" + current_post.title + "</h4>");
  document.writeln("<p>" + current_post.text + "</p>");
  document.writeln("<a href=" + current_post.link + "><img src=images\\" + current_post.image + " width=\"50%\"></a>");
}
document.writeln("</div>");
