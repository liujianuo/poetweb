var fs = require('fs');
var logoinsert = document.getElementById("topleft");
for((key, val) in sect){
    var div = document.createElement("div");
    div.className = "section";
    div.value = val;
    logoinsert.appendChild(div);
}
