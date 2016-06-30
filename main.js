const electron = require('electron');

// Module to control application life.
const {app} = electron;

// Module to create native browser window.
const {BrowserWindow} = electron;

var fs = require('fs');



// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

function createWindow() {


	/* load config */
	var config = {};
	var config_file = __dirname + '/config.json'
	fs.openSync( config_file, 'r+' ); //throws error if file doesn't exist
	var data = fs.readFileSync( config_file ); //file exists, get the contents
	config = JSON.parse( data ); //turn to js object

	var window_width 	= 1000;
	var window_height 	= 300;
	if ( config.width !== undefined ) {
		window_width = config.width;
	}
	if ( config.height !== undefined ) {
		window_height = config.height;
	}


	// Create the browser window.
	win = new BrowserWindow( {
		width:  window_width, 
		height: window_height,
		icon: __dirname + '/resources/favicon.png'
	} );

	// and load the index.html of the app.
	win.loadURL(`file://${__dirname}/index.html`);

/*
	// Open the DevTools.
	win.webContents.openDevTools();
*/

	// Emitted when the window is closed.
	win.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		win = null;
	});
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (win === null) {
		createWindow();
	}
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.



/*
vim: set ts=4
*/
