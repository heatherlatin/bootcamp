const fs = require("fs");

function asyncWriteFile (filename, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filename, data, function(err) {
            if (err) {
              return reject(err);
            }
          
            resolve();
          
        });
    });
}

function asyncReadFile (filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf8", function(error, data) {
            if (error) {
              return reject(error);
            }
          
            resolve(data);
          
          });
    });
}

asyncWriteFile("radda.txt", "yadda").then(() => {
    asyncReadFile("radda.txt").then(response => {
        console.log(response);
    })
})