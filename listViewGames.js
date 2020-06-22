function Entry(name, description, credits, image, canDownload) {
  this.name = name;
  this.description = description;
  this.credits = credits;
  this.image = image;
  this.canDownload = canDownload;
}

var belowZero = new Entry(
  "Below Zero",
  "An unfinished game for SkillsUSA in 2018-2019, Below Zero was to be a game about a survivor of a crashed ship on a planet that was covered in snow. In this game you would explore this planet in order to fix your ship and fly back home. The game is a class based RPG with survival elements as you try and survive in the harsh cold. As it is extreamly unfinished, there is no build that can be downloaded. It lives on in our hearts.",
  "Co-created with Quinten Holmes",
  "snow.png",
  false
);

var jumpy = new Entry(
  "Jumpy",
  "Jumpy was a fun distraction project meant to be simple. It has you control a woman who just cannot stop jumping. The sensitive controls make for a challenging 2D platformer. Jumpy is one of those games that was completed pretty fast, but will never really be finished. Whenever I find myself getting burnt out over a project, I can always go back and add more to Jumpy.",
  "Co-created with Soren Dugger,<br>Nate \"Grazurra\" Windmeyer made sound effects for this game.",
  "jumpy.PNG",
  true
);

var venom = new Entry(
  "Venomous",
  "Venomous is a game inspired by Aztec culture and mythology and was a game for SkillsUSA 2019-2020. It is a fantasy RPG where the player can explore a South American world during the age of exploration.",
  "Co-created with Kayden Hung,<br>Viktoria Kholkina helped a lot with Russian Translations",
  "venomous.PNG",
  true
);

var frightAtTheMuseum = new Entry(
  "Fright at the Museum",
  "Fright at the Museum was a game created for a 10 day Holloween game jam with Eduardo Reyes. It is a game about a ghost security guard that is trying to protect an abandoned museum from being ransacked by children wandering in. As the ghost you can try to scare the children away by slamming doors, throwing around objects and breaking things. You lose the game if the children get away with stealing an artifact called the golden skull.",
  "Co-created with Eduardo Reyes.",
  "ghost.PNG",
  true
);

var moldy = new Entry(
  "Moldy",
  "Moldy was created as part of a 2 day game jam, but I decided to work more on it after. The objective of the game is to survive as many waves as you can of rebel carrot hoards.",
  "",
  "moldy.png",
  true
);

var dungeonDog = new Entry(
  "Dungeon Dog",
  "Dungeon Dog was created as part of a 3 day game jam. I'm very proud of how much we were able to cram into this one. It has random level generation, a palette swapper, and a lot of enemies/platforming challenges.",
  "Co-created with Nate \"Grazurra\" Windmeyer.",
  "dungeonDog.png",
  true
);

var entries = [belowZero, jumpy, venom, frightAtTheMuseum, moldy, dungeonDog];
document.writeln("<div class=\"content\">");
for(var i = 0; i < entries.length; i++) {
  var entrie = entries[i];
  document.writeln("<div class=\"title\"><h4>" + entrie.name + "</h4></div>");
  document.writeln("<h6>" + entrie.credits + "</h6>");
  document.writeln("<p>" + entrie.description + "</p>");
  var img_tag = "<img src=images/" + entrie.image + " width=\"50%\">";
  if(entrie.canDownload) {
    document.writeln("<a href=\"downloads\">" + img_tag + "</a>");
  }
  else {
    document.writeln(img_tag);
  }
}
document.writeln("</div>");
