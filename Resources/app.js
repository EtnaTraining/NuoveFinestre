

// una variante per determinare l'altezza delle finestre in maniera più precisa, anzicchè usare una percentuale approssimata, è quello di sfruttare l'oggetto displayCaps,
// che mi restituisce l'altezza in pixel del device corrente:

var deviceHeight = Ti.Platform.displayCaps.platformHeight;

var win = Ti.UI.createWindow({
	backgroundColor : "white",
	fullscreen: true
});

var view1 = Titanium.UI.createView({
	borderRadius : 15,
	backgroundColor : "red",
	left : 10,
	right : 10,
	top : 10,
	//height : "57%",
	height: (deviceHeight-30)/2,
	borderWidth : 1,
	borderColor : "black"
});

win.add(view1);

var view2 = Titanium.UI.createView({
	borderRadius : 15,
	backgroundColor : "white",
	backgroundImage : "logo.png",
	bottom : 10,
	left : 10,
	right : 10,
	//height : "47%",
	height: (deviceHeight-30)/2,
	borderWidth : 1,
	borderColor : "black"

});

win.add(view2);

win.open();


/*win.addEventListener("open", function() {
	win.activity.actionBar.hide();
	
	
}); */

win.addEventListener("postlayout", function() {
	view1.height = view2.height = win.size.height / 2 - 15;
	//alert(win.size);
});

