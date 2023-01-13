/* const {app, BrowserWindow} = require('electron')
    const url = require("url");
    const path = require("path");

    const debug=process.env.DEBUG;
    app.on('ready',ready)
    app.on('window-all-closed',closewindow)
    app.on('activate',activate)

    function ready (){
      appWindow=new BrowserWindow({
        width:1024,
        height:768,
        webPreferences:{
          nodeIntegration:true
        }
      });
      appWindow.load(
        url.format({
          pathname:path.join(__dirname,'/dist/index.html'),
          protocol:"file",
          slashestrue
        })
      );

    } */
/* "dev:electron":"ng build --base-href ./ && DEBUG=true electron app.js",
    "start:electron":"ng build --base-href ./ &&  electron app.js ", */
