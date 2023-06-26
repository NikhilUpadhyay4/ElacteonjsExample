const electron = require('electron');
const ipc = electron.ipcRenderer;

const asyncBtn = document.getElementById('asyncBtn');

asyncBtn.addEventListener('click',function(){
    console.log('async msg 1');
   
    ipc.send('async-message');
    console.log('async meg 2');
})
ipc.on('async-reply', function(event, arg){
    console.log(arg);
})