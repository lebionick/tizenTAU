window.onload = function() {
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if (e.keyName === "back") {
            try {
                tizen.application.getCurrentApplication().exit();
            } catch (ignore) {}
        }
    });

    // Sample code
    var butt2 = document.createElement("BUTTON");
    var butt2text = document.createTextNode("Button2");
    butt2.appendChild(butt2text);
    butt2.onclick = showRes;
    document.body.appendChild(butt2);
    

};
var thereispic = false;
var thereisres = false;
function showPicture(){
	if(!thereispic){
		var image = document.createElement("IMG");
		var name = "images/2kitties.jpg";
		image.setAttribute("src", name);
		image.setAttribute("width", "304");
		image.setAttribute("height", "228");
		image.setAttribute("alt", "Two kitties");
	    document.body.appendChild(image);
	    thereispic = true;
	} else {
		document.body.IMG = null;
		thereispic = false;
	}
}

function showRes(){
	if(!thereisres){
	    var x = document.createElement("INPUT");
	    x.setAttribute("type", "text");
	    var res = window.innerWidth + " " +window.innerHeight;
	    x.setAttribute("value", res);
	    document.body.appendChild(x);
	    thereisres = true;
	} else {
		//document.body.INPUT = null;
		document.body. //removeChild("INPUT");
		thereisres = false;
	}
}