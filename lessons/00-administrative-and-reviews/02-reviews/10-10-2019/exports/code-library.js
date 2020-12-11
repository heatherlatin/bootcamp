// functions to assist with main code// fs is a Node standard library package for reading and writing files
const fs = require("fs");

function readFile(filename) {
    const path = `files/${filename}.json`;
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(path)) {
            return resolve(null);
        }
        fs.readFile(path, "utf8", (error, data) => {
            if (error) {
                return reject(error);
            }
    
            resolve(JSON.parse(data));
        });
    })
}

function saveFile(filename, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`files/${filename}.json`, JSON.stringify(data, null, 2), (error) => {
            if (error) {
                return reject(error);
            }
    
            resolve();
        });
    })
}

async function read(filename) {
    if (arguments.length !== 1) {
        return console.log("You must provide only one filename for read.")
    }
    // return the contents of 'data.csv' as a string in the variable "data"
    // "utf8" encodes the raw buffer data in human-readable format
    const fileContents = await readFile(filename);
    if (fileContents === null) {
        return console.log("Read Successful!!, but no file exists.");
    }
    fileContents.views += 1;
    await saveFile(filename, fileContents);
    return console.log("Read & Save Successful!!", fileContents);
}

async function save(filename, data) {
    if (arguments.length !== 2) {
        return console.log("You must provide only one filename and it's data for save.")
    }
    const saveData = {
        data: [data],
        views: 1
    }
    const fileContents = await readFile(filename);
    if (fileContents) {
        saveData.data = [data, ...fileContents.data];
        saveData.views = fileContents.views + 1;
    }
    await saveFile(filename, saveData);
    console.log("Save Successful!!");
}

module.exports = {
    read,
    save
}