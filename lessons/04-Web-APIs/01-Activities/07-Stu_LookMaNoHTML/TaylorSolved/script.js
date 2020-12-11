// Create your HTML Page via DOM Methods here!
var body = document.querySelector("body");

var h1 = document.createElement("h1");
h1.textContent = "Hello World";
h1.style.textAlign = "center";

var h2 = document.createElement("h2");
h2.textContent = "Welcome to the DOM";
h2.style.textAlign = "center";

body.appendChild(h1);
body.appendChild(h2);

var centerImgDiv = document.createElement("div");
var centerImg = document.createElement("img");
var centerImgText = document.createElement("div");

centerImgDiv.setAttribute("style", "width: 500px; margin: 0 auto;");

centerImg.setAttribute("src", "https://media2.s-nbcnews.com/j/newscms/2018_20/1339477/puppy-cute-today-180515-main_a936531048fdb698635dd1b418abdee9.fit-760w.jpg");
centerImg.setAttribute("style", "width: 100%;");

centerImgText.textContent = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi eaque consequuntur nam, dolores expedita alias quas accusantium sed aut autem voluptas nobis blanditiis non rerum voluptates dignissimos ratione quibusdam possimus!";
centerImgText.style.textAlign = "center";

centerImgDiv.appendChild(centerImg);
centerImgDiv.appendChild(centerImgText);
body.appendChild(centerImgDiv);

var ul = document.createElement("ul");
var favorites = ["dogs", "cats", "animals", "food"];

for (var i = 0; i < favorites.length; i++) {
    var li = document.createElement("li");
    li.textContent = favorites[i];
    ul.appendChild(li);
}

body.appendChild(ul);