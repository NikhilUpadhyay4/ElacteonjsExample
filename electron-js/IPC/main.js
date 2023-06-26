console.log("IPC");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");
const ipu = electron.ipcMain;

const dialog = electron.dialog;

let win;

const createWindow=()=>{
    win = new BrowserWindow({webPreferences: { nodeIntegration: true, contextIsolation: false, enableRemoteModule: true }});
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
      //NAme of the event
ipu.on('async-message',function(event){
                       //title , body
    // dialog.showErrorBox('An error message','Demo of an error message')
    //we reply this perticular event from main.
                    //
    event.sender.send('async-reply','Main process opened the error' )
})

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