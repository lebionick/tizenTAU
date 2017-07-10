window.onload = function() {

	$.mobile.changeGlobalTheme = function(theme)
	{
	    // These themes will be cleared, add more
	    // swatch letters as needed.
	    var themes = " a b c d e";

	    // Updates the theme for all elements that match the
	    // CSS selector with the specified theme class.
	    function setTheme(cssSelector, themeClass, theme)
	    {
	        $(cssSelector)
	            .removeClass(themes.split(" ").join(" " + themeClass + "-"))
	            .addClass(themeClass + "-" + theme)
	            .attr("data-theme", theme);
	    }

	    // Add more selectors/theme classes as needed.
	    setTheme(".ui-mobile-viewport", "ui-overlay", theme);
	    setTheme("[data-role='page']", "ui-body", theme);
	    setTheme("[data-role='header']", "ui-bar", theme);
	    setTheme("[data-role='listview'] > li", "ui-bar", theme);
	    setTheme(".ui-btn", "ui-btn-up", theme);
	    setTheme(".ui-btn", "ui-btn-hover", theme);
	};
	
	if(titles.length === 0)
		loadDB();
}
var titles = [];
function findInDB(text){
	
	var result = document.getElementById("searchResult");
	result.innerHTML = "";
	
	if(!text)
		return;
	
	if(titles.length === 0)
		loadDB();
	console.log(titles.length);
	for(var title in titles){
		
		var string = String(titles[title].toLowerCase());
		var substring = String(text).toLowerCase();
		
		if(string.indexOf(substring) !== -1){
			console.log(string);
			var item = "<li>"+titles[title]+"</li>";
			$("ol").append(item);
		}
	}
	
	//getData(3652, function(res){console.log(res); result.innerHTML = res.title;});
}
function loadDB(){
	getStorage(function(res){
    	for(var field in res) {
    		titles.push(res[field]['title']);
    		console.log(res[field]['title']);
    	}
    	console.log(titles);
  });
}
