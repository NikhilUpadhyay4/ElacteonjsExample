console.log('Main Renderer working');


const electron = require("electron");
const app = electron.app;
const remote = electron.remote
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

//reference the window
let win, wintwo;

const createWindow = () => {
    win = new BrowserWindow({
        webPreferences: { nodeIntegration: true, contextIsolation: false, enableRemoteModule: true }
    });//instance of browser window

    wintwo = new BrowserWindow({
        webPreferences: { nodeIntegration: true, contextIsolation: false }
    });
    win.loadURL(url.format(
        {
            pathname: path.join(__dirname, 'one.html'),
            protocol: 'file',//serving file from the file system not from HTTP,
            slashes: true
        }
    ));
    wintwo.loadURL(url.format(
        {
            pathname: path.join(__dirname, 'two.html'),
            protocol: 'file',//serving file from the file system not from HTTP,
            slashes: true
        }
    ));
    win.webContents.openDevTools();
    wintwo.webContents.openDevTools();
    win.on('close', () => {
        win = null;
    })
    wintwo.on('close', () => {
        wintwo = null;
    })
}

// for mac we need to add some extra bit of code


app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win == null) {
        createWindow();
    }
});