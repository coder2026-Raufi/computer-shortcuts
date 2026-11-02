const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
function createWindow() {
  const win = new BrowserWindow({ width: 1100, height: 780, minWidth: 380, title: "KeyCraft", icon: path.join(__dirname, "icon.png"), autoHideMenuBar: true });
  Menu.setApplicationMenu(null);
  win.loadFile("index.html");
}
app.whenReady().then(createWindow);
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
app.on("activate", () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
