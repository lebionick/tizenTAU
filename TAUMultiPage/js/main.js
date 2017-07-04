( function () {
    window.addEventListener( 'tizenhwkey', function( ev ) {
        if( ev.keyName === "back" ) {
            var activePopup = document.querySelector( '.ui-popup-active' ),
                page = document.getElementsByClassName( 'ui-page-active' )[0],
                pageid = page ? page.id : "";
            if( pageid === "one" && !activePopup ) {
                try {
                    tizen.application.getCurrentApplication().exit();
                } catch (ignore) {
                }
            } else {
                window.history.back();
            }
        }
    } );
	$("#textid").css("color","red");
	
	var c = document.getElementById("canvas");
	
	var tizen = c.getContext("2d");
	var js = c.getContext("2d");
	var html = c.getContext("2d");
	var canvas = c.getContext("2d");
	
	tizen.font = "30px Arial";
	tizen.fillText("Tizen",30,20);
	
	js.font = "30px Arial";
	js.fillStyle = "blue";
	js.fillText("Javascript",30,40);
	
	html.font ="40px Times";
	html.fillStyle = "red";
	html.fillText("HTML", 30, 70);
	
	canvas.font = "30px Arial";
	js.fillStyle = "blue";
	js.fillText("canvas",70,140);
	
	var flag = true;
	for(var i = 0; i<8; i++){
		for(var j = 0; j<8; j++){
			if(flag){
				console.log("j=",j,"i=",i);
				fillChess(j*40, i*40);
			}
			flag = !flag;
		}
		flag = !flag;
	}
	
	setInterval(shakeCircle, 100);

} () );

function fillChess(curx, cury){
	var r = document.getElementById("canvass");
	var re = r.getContext("2d");
	re.fillStyle="black";
	re.fillRect(curx,cury,40,40);
}

var thereispic = false;
var thereisres = false;

var pos = 0;
function shakeCircle(){
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");
	ctx.clearRect(10+pos,10+pos,100+pos,50+pos);
	pos = (pos + 5) % 50;
	ctx.fillRect(10+pos,10+pos,100+pos,50+pos);
}

function showPicture(){
	
//    $(document).ready(function(){
//        $("#textid").hide();
//    });
	if(!thereispic){
		var image = document.createElement("IMG");
		var name = "images/2kitties.jpg";
		image.setAttribute("src", name);
		image.setAttribute("width", "304");
		image.setAttribute("height", "228");
		image.setAttribute("alt", "Two kitties");
		image.setAttribute("id", "catid");
	    document.getElementById("one").appendChild(image);
	    thereispic = true;
	} else {
		$("#catid").hide();
		thereispic = false;
	}
}

function showRes(){
	if(!thereisres){
	    var x = document.createElement("INPUT");
	    x.setAttribute("type", "text");
	    var res = window.innerWidth + " " +window.innerHeight;
	    x.setAttribute("value", res);
		x.setAttribute("id", "inputid");
	    document.getElementById("one").appendChild(x);
	    thereisres = true;
	} else {
		$("#inputid").hide();
		thereisres = false;
	}
}