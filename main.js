const electron = require('electron');
const {app, BrowserWindow} = electron;

app.on('ready', function() {
    let mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL(`file://${__dirname}/html/welcome.html`);
    // mainWindow.webContents.openDevTools();
});
