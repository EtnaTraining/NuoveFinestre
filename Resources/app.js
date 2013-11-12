// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('white');

// nota bene, per nascondere la statusBar:
// su iOS, modificare la property <statusbar-hidden>true</statusbar-hidden> nel file tiapp.xml
// su Android, modificare la property <statusbar-hidden>true</statusbar-hidden> e <navbar-hidden>true</navbar-hidden> nel file tiapp.xml

// una variante per determinare l'altezza delle finestre in maniera più precisa, anzicchè usare una percentuale approssimata, è quello di sfruttare l'oggetto displayCaps,
// che mi restituisce l'altezza in pixel del device corrente:
// var deviceHeight = Ti.Platform.displayCaps.platformHeight;


var win1 = Titanium.UI.createWindow({  
   borderRadius: 5,
   backgroundColor: "red",
   left: 10,
   right: 10,
   top: 10,
   height: "47%",
   //height: (deviceHeight-30)/2,
   borderWidth: 1,
   borderColor: "black"
});

win1.open();


var win2 = Titanium.UI.createWindow({  
    borderRadius: 5,
    backgroundColor: "white",
    backgroundImage: "logo.png",
    bottom: 10,
    left: 10,
    right: 10,
    height: "47%",
    //height: (deviceHeight-30)/2,
    borderWidth: 1,
    borderColor: "black"
    
});

win2.open();





