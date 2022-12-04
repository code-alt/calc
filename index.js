const express = require('express');
const fs = require('fs');
const config = require('./config.js');
const app = express();
const port = config.port;

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + "/views"));

// use config to make the main.css styles

fs.readFile(__dirname + "/public/main.css", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        let newCss = data.replace(/\s+--main-font:*.*/, "\n\t--main-font: " + config.style["main-font"].replace(";", "") + ";");
        newCss = newCss.replace(/\s+--main-font-size:*.*/, "\n\t--main-font-size: " + config.style["main-font-size"].replace(";", "") + ";");
        newCss = newCss.replace(/\s+--main-font-weight:*.*/, "\n\t--main-font-weight: " + config.style["main-font-weight"].replace(";", "") + ";");
        // delete the secondary font
        newCss = newCss.replace(/\s+--secondary-font:*.*/, "");
        newCss = newCss.replace(/\s+--secondary-font-size:*.*/, "");
        newCss = newCss.replace(/\s+--secondary-font-weight:*.*/, "");
        if (config.style['secondary-font'].useSecondaryFont) {
            console.log(newCss)
            if (/\s+--secondary-font:*.*/.test(newCss) == false) {
                newCss = newCss.replace(/\s+--main-font-weight:*.*/, "\n\t--main-font-weight: " + config.style["main-font-weight"].replace(";", "") + ";\n\t--secondary-font: " + config.style["secondary-font"]["secondary-font"].replace(";", "") + ";" + 
                "\n\t--secondary-font-size: " + config.style["secondary-font"]["secondary-font-size"].replace(";", "") + ";" +
                "\n\t--secondary-font-weight: " + config.style["secondary-font"]["secondary-font-weight"].replace(";", "") + ";");
            }
            newCss = newCss.replace(/\s+--secondary-font:*.*/, "\n\t--secondary-font: " + config.style["secondary-font"]["secondary-font"].replace(";", "") + ";");
            newCss = newCss.replace(/\s+--secondary-font-size:*.*/, "\n\t--secondary-font-size: " + config.style["secondary-font"]["secondary-font-size"].replace(";", "") + ";");
            newCss = newCss.replace(/\s+--secondary-font-weight:*.*/, "\n\t--secondary-font-weight: " + config.style["secondary-font"]["secondary-font-weight"].replace(";", "") + ";");
        }
        fs.writeFile(__dirname + "/public/main.css", newCss, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
});

app.listen(port, () => { console.log("okie running now at port " + port) });