console.log('From Renderer One');
const BrowserWindow = require('electron').remote.BrowserWindow;
const path = require('path');
const url = require('url');

const newWindowBtn = document.getElementById('newWindowBtn');
newWindowBtn.addEventListener('click',function(event){
    let winThree = new BrowserWindow({
        webPreferences: { nodeIntegration: true, contextIsolation: false,  enableRemoteModule: true }
    });
    winThree.loadURL(url.format(
        {
            pathname: path.join(__dirname, 'three.html'),
            protocol: 'file',//serving file from the file system not from HTTP,
            slashes: true
        }
    ));

   winThree.webContents.openDevTools();
})