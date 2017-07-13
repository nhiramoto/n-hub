const electron = require('electron');
const {app, BrowserWindow} = electron;

var mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({backgroundColor: '#fff', width: 800, height: 600, show: false});
    // mainWindow.loadURL(`file://${__dirname}/html/welcome.html`);
    // Testando dashboard.html
    mainWindow.loadURL(`file://${__dirname}/html/dashboard.html`);
    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
        mainWindow.focus();
    });
    // mainWindow.webContents.openDevTools();
});

exports.loadDashboard = () => {
    if (mainWindow != null) {
        mainWindow.loadURL(`file://${__dirname}/html/dashboard.html`);
    } else {
        console.log('Error: mainWindow not set.');
    }
};
