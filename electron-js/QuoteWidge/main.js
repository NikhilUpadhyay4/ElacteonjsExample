console.log("Hello world");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");


let win;

const createWindow=()=>{
    win = new BrowserWindow({ height:550, width:800, frame:false,webPreferences: { nodeIntegration: true, contextIsolation: false, enableRemoteModule: true }});
    win.loadURL(url.format(
        {
            pathname: path.join(__dirname,'index.html'),
            protocol: 'file',
            slashes: true
        }
    ));
win.webContents.openDevTools();

    win.on('close',()=>{
        win=null;
    })
}




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