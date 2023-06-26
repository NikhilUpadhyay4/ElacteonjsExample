console.log("Hello world");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

//reference the window
let win;

const createWindow=()=>{
    win = new BrowserWindow;//instance of browser window
    win.loadURL(url.format(
        {
            pathname: path.join(__dirname,'index.html'),
            protocol: 'file',//serving file from the file system not from HTTP,
            slashes: true
        }
    ));
win.webContents.openDevTools();

    win.on('close',()=>{
        win=null;
    })
}

// for mac we need to add some extra bit of code


app.on('ready',createWindow);

app.on('window-all-closed',()=>{
    if(process.platform!=='darwin'){
        app.quit();
    }
});

app.on('activate',()=>{
    if(win==null){
        createWindow();
    }
});