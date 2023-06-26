console.log("Hello world");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

//reference the window
let win, parentWindow, childWindow;

const createWindow = () => {
    // win = new BrowserWindow({
    //     width: 800, height: 400, maxWidth: 1000, maxHeight: 600
    // });


    parentWindow = new BrowserWindow({
        title:'Parent'
    });

    childWindow = new BrowserWindow({
        show:false,
        parent: parentWindow,
        modal:true,
        title:'child'
    })

    childWindow.loadURL('https://google.com');
    childWindow.once('ready-to-show',()=>{
        childWindow.show()
    })


    // win.loadURL(url.format(
    //     {
    //         pathname: path.join(__dirname, 'index.html'),
    //         protocol: 'file',//serving file from the file system not from HTTP,
    //         slashes: true
    //     }
    // ));
    // win.webContents.openDevTools();

    // win.on('close', () => {
    //     win = null;
    // })
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