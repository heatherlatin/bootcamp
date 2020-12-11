var inquirer = require('inquirer');
var fs = require("fs");

inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: "input",
      message: "What is your name?",
      name: "fullname"
    },
    {
      type: "checkbox",
      message: "What languages do you know?",
      choices: ["javaScript", "html", "css", "sql"],
      name: "languages"
    },
    {
      type: "list",
      message: "What is your preferred method of communication?",
      choices: ["email", "phone", "text", "snail mail"],
      name: "communication"
    }
  ])
  .then(answers => {
    console.log(answers);
    fs.writeFile("users/" + answers.fullname.toLowerCase().split(' ').join('-') + ".json", JSON.stringify(answers, null, 2), function(err) {
    
      if (err) {
        return console.log(err);
      }
    
      console.log("Success!");
    
    });
    // Use user feedback for... whatever!!
  });