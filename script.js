/*
var i = 0; //Start point
var images = [];
var time = 3000;
//Image List

images[0] = "https://www.google.com/url?sa=i&url=https%3A%2F%";
images[1] = "https://www.google.com/url?sa=i&url=https%3A%2F%";
images[2] = "https://www.google.com/url?sa=i&url=https%3A%2F%";

//Change images
function changeImg() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}
window.onload = changeImg;
*/
// Started of Letter Animation run around the Logo
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
  (Char, i) =>
    `<span style="transform:rotate(${i * 8.5}deg)">${Char}</span>`
).join("")

// Ended of Letter Animation run around the Logo

// Started of mainBody @ slider
var counter = 1;
setInterval(function() {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 5) {
    counter = 1;
  }
}, 8000);
// Ended of mainBody @ slider
