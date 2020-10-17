function generate() {
    for (var i = 0; i < 13; i++)
         tips(i); 
}

function tips(i) {
    var possible = "1X2";
    return document.getElementById("tips" + i).innerHTML = possible.charAt(Math.floor(Math.random() * possible.length));
}