const { app, BrowserWindow } = require('electron')
const path = require('path');
const electronReload = require('electron-reload');

electronReload(__dirname);

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    minWidth: 400,
    height: 600,
    minHeight: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})