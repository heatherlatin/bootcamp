var img1 = document.querySelector(".site1 img");
img1.setAttribute("src", "http://placekitten.com/200/200");
img1.setAttribute("alt", "KITTENS!");

var img2 = document.querySelector(".site2 img");
img2.setAttribute("src", "http://placekitten.com/300/200");
img2.setAttribute("alt", "MORE KITTENS!");

var site3 = document.querySelector(".site3");
site3.children[1].children[0].setAttribute("src", "http://placekitten.com/200/300");
site3.children[1].children[0].setAttribute("alt", "EVEN MORE KITTENS!");

var a1 = document.querySelector(".site1 > a");
a1.setAttribute("href", "http://google.com");
var a2 = document.querySelector(".site2 > a");
a2.setAttribute("href", "http://facebook.com");
var a3 = document.querySelector(".site3 > a");
a3.setAttribute("href", "http://gmail.com");

var h41 = document.querySelector(".site1 > h4");
h41.textContent = "<div>google</div>";
var h42 = document.querySelector(".site2 > h4");
h42.innerHTML = "facebook";
var h43 = document.querySelector(".site3 > h4");
h43.textContent = "gmail";