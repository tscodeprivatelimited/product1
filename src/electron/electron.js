// src/electron/electron.js

const {app, BrowserWindow} = require('electron')

const electron = require('electron');

var exec = require('child_process').exec;

var path = require('path');


module.paths.push(path.resolve('node_modules'));
module.paths.push(path.resolve('../node_modules'));

var log = require('electron-log');

log.transports.file.level = 'info';
log.transports.file.file =  path.join(__dirname ,'log.txt');

var PropertiesReader = require('properties-reader');
log.info(path.join(__dirname ,'properties.file'));

var properties = PropertiesReader(path.join(__dirname ,'properties.file'));


log.info('This is the property Value ==='+properties.get('sales.manager'));

var splash_license = properties.get('sales.manager');

var request = require('ajax-request');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
let winApp;
var ServerUp = false;
var intervalObj;

console.log(__dirname);
exec(__dirname+'\\run.bat',
  function (error, stdout, stderr){
    log.info('Output -> ' + stdout);
    if(error !== null){
      log.info("Error -> "+error);
    }
    if(error == null){
      
    }
});

var jar_path = __dirname+"\\kpiteditor.jar";

exec('java -jar -Dserver.port=8080 '+jar_path,
  function (error, stdout, stderr){
    log.info('Output -> ' + stdout);
    if(error !== null){
      log.info("Error -> "+error);
    }
});

function pingServer(){
	request({
  url: "http://localhost:8080/",
  method: 'GET'
}, function(err, res, body) {
  log.info("Ping Server Response"+res);
    log.info("Err"+err);
  if(typeof body != 'undefined' && ServerUp == false){
      clearInterval(intervalObj);
	  ServerUp = true;
      createWindow();winApp.close();
  }		
});
}

function isServerUp(){
  intervalObj = setInterval(() => {
  pingServer();
}, 1000);
}


function applicationStart(){
  winApp = new BrowserWindow({
    width: 570, 
    height: 240, 
    frame: false
});

var splashFile = __dirname;
var fileExt = ".html";

switch(splash_license){
  case 'KPIT':
    splashFile = __dirname + '/kpit_splash' + fileExt;
    break;
  case 'ACTIA':
    splashFile = __dirname + '/actia_splash'+ fileExt;
    break;
  default:
    splashFile = __dirname + '/kpit_splash' + fileExt;

}

log.info("SplashFile---"+splashFile);
// and load the index.html of the app.
  winApp.loadURL(`file://${splashFile}`)

  winApp.once('ready-to-show', () => {
    winApp.show()
  })

  winApp.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    winApp = null
  })

 isServerUp();

}

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({show: false})
  win.maximize();

    var screenElectron = electron.screen;
var mainScreen = screenElectron.getPrimaryDisplay();
var dimensions = mainScreen.size;

console.log(dimensions.width + "x" + dimensions.height);

  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`)

  win.once('ready-to-show', () => {
    win.show()
  })

  // Open the DevTools.
  //win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', applicationStart)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    applicationStart();
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.