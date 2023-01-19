let {app , BrowserWindow, ipcMain} = require ('electron');
const { contextIsolated } = require('process');


let win;


function createWindow() {

    win = new BrowserWindow ( {

        width : 400,
        height: 400,
        frame : false,
        transparent: true,
        webPreferences : {
            nodeIntegration : true,
            contextIsolation: false
        }
        
        // autoHideMenuBar : true

    })

    // win.setAlwaysOnTop(true, 'screen');


    win.webContents.openDevTools()
    win.loadFile(__dirname + '/Renderer/index.html')

    win.addListener( 'ready-to-show' , () => {

        win.show()




    })

    win.addListener('onmouseover', () =>  {

       
        

    })  

}



app.whenReady().then(()=> {

    createWindow()




})

app.addListener('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})


// ipc calls

