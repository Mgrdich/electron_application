const {app, BrowserWindow} = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    });

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
    if (process.platform !== 'darwin') app.quit()
});
