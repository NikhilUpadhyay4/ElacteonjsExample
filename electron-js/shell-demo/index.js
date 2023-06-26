const openBtn  =  document.getElementById('openBtn');

const shell = require('electron').shell;


openBtn.addEventListener('click', function(event){
    //Method 1- open the folder in your file system and specify the full path of the system to show the selected
    shell.showItemInFolder("/home/kloudspot/Desktop/Electron js")
    //Method 2- open the perticular file in the electron js 
    shell.openPath("/home/kloudspot/Desktop/Electron js/file.txt");
    //Method 3-open external link in the electron aplication.
    shell.openExternal("https://www.electronjs.org/");
})