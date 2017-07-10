const electron = require('electron');
const {app, BrowserWindow} = electron;

console.log('main.js: ' + __dirname);

app.on('ready', function() {
    let mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL(`file://${__dirname}/html/index.html`);
    // mainWindow.webContents.openDevTools();
});

exports.openConfigWindow = () => {
    let win = new BrowserWindow({width: 400, height: 200});
    win.loadURL(`file://${__dirname}/html/config.html`);
};
