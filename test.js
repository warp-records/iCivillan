var this = document.currentScript

alert(1);
this.parentNode.innerHTML = this.innerHTML + "</script>"
