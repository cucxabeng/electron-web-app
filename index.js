var app = require('app'),
    BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

app.on('mainWindow-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    "min-width"         : 800,
    "min-height"        : 600,
    fullscreen          : true,
    resizable           : true,
    "use-content-size"  : true
  });

  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  //This is required for now due to https://github.com/atom/electron/issues/1117
  mainWindow.openDevTools();
  mainWindow.closeDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
