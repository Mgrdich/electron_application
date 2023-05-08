const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

const MAC_OS = 'darwin';

function isMacOS() {
    return process.platform === MAC_OS;
}

// if (require('electron-squirrel-startup')) app.quit();

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    ipcMain.handle('ping', () => {
        console.log('ping is pong-ed')
        return 'pong';
    });
    // win.webContents.openDevTools()

    return win.loadFile('index.html');
}

app.whenReady().then(() => {
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) return createWindow()
    });

    return createWindow();
});

app.on('window-all-closed', () => {
    // Windows and Linux will actually close the application
    if (!isMacOS()) app.quit()
});
