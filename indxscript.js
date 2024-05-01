import sects from './sections/sect.js'

var logoinsert = document.getElementById("topleft");

for (const [key, value] of Object.entries(sects)) {
    var div = document.createElement("div");
    div.className = "section";
    div.value = value;
    logoinsert.appendChild(div);
}