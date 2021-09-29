var dict = {};

//Dictionary with values of theme 1, default theme

dict["--main-bg"] = "hsl(222, 26%, 31%)";
dict["--toggle-bg"] = "hsl(223, 31%, 20%)";
dict["--keypad-bg"] = "hsl(223, 31%, 20%)";
dict["--screen-bg"] = "hsl(224, 36%, 15%)";
dict["--key-sec-bg"] = "hsl(225, 21%, 49%)";
dict["--key-sec-shadow"] = "hsl(224, 28%, 35%)";
dict["--key-main-bg"] = "hsl(6, 63%, 50%)";
dict["--toggle"] = "hsl(6, 63%, 50%)";
dict["--key-main-shadow"] = "hsl(6, 70%, 34%)";
dict["--key-bg"] = "hsl(30, 25%, 89%)";
dict["--key-shadow"] = "hsl(28, 16%, 65%)";
dict["--key-text"] = "hsl(221, 14%, 31%)";
dict["--main-text"] = "hsl(0, 0%, 100%)";

var root = document.querySelector(":root");
var styles = getComputedStyle(root);

function setStyles1() {
  dict["--main-bg"] = "hsl(222, 26%, 31%)";
  dict["--toggle-bg"] = "hsl(223, 31%, 20%)";
  dict["--keypad-bg"] = "hsl(223, 31%, 20%)";
  dict["--screen-bg"] = "hsl(224, 36%, 15%)";
  dict["--key-sec-bg"] = "hsl(225, 21%, 49%)";
  dict["--key-sec-shadow"] = "hsl(224, 28%, 35%)";
  dict["--key-main-bg"] = "hsl(6, 63%, 50%)";
  dict["--toggle"] = "hsl(6, 63%, 50%)";
  dict["--key-main-shadow"] = "hsl(6, 70%, 34%)";
  dict["--key-bg"] = "hsl(30, 25%, 89%)";
  dict["--key-shadow"] = "hsl(28, 16%, 65%)";
  dict["--key-text"] = "hsl(221, 14%, 31%)";
  dict["--main-text"] = "hsl(0, 0%, 100%)";
  $("#Eq").css("color", "var(--main-text)");
}

function setStyles2() {
  dict["--main-bg"] = "hsl(0, 0%, 90%)";
  dict["--toggle-bg"] = "hsl(0, 5%, 81%)";
  dict["--keypad-bg"] = "hsl(0, 5%, 81%)";
  dict["--screen-bg"] = "hsl(0, 0%, 93%)";
  dict["--key-sec-bg"] = "hsl(185, 42%, 37%)";
  dict["--key-sec-shadow"] = "hsl(185, 58%, 25%)";
  dict["--key-main-bg"] = "hsl(25, 98%, 40%)";
  dict["--toggle"] = "hsl(25, 98%, 40%)";
  dict["--key-main-shadow"] = "hsl(25, 99%, 27%)";
  dict["--key-bg"] = "hsl(45, 7%, 89%)";
  dict["--key-shadow"] = "hsl(35, 11%, 61%)";
  dict["--key-text"] = "hsl(60, 10%, 19%)";
  dict["--main-text"] = "hsl(0, 0, 100%)";
  $("#Eq").css("color", "var(--main-text)");
}

function setStyles2() {
  dict["--main-bg"] = "hsl(268, 75%, 9%)";
  dict["--toggle-bg"] = "hsl(268, 71%, 12%)";
  dict["--keypad-bg"] = "hsl(268, 71%, 12%)";
  dict["--screen-bg"] = "hsl(268, 71%, 12%)";
  dict["--key-sec-bg"] = "hsl(281, 89%, 26%)";
  dict["--key-sec-shadow"] = "hsl(285, 91%, 52%)";
  dict["--key-main-bg"] = "hsl(176, 100%, 44%)";
  dict["--toggle"] = "hsl(176, 100%, 44%)";
  dict["--key-main-shadow"] = "hsl(177, 92%, 70%)";
  dict["--key-bg"] = " hsl(268, 47%, 21%)";
  dict["--key-shadow"] = "hsl(290, 70%, 36%)";
  dict["--key-text"] = "hsl(52, 100%, 62%)";
  dict["--main-text"] = "hsl(0, 0, 100%)";
  $("#Eq").css("color", "hsl(52, 100%, 62%)");
}

function updateStyles() {
  for (var i in dict) {
    root.style.setProperty(i, dict[i]);
  }
}
