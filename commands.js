const fs = require("fs");

//write out data
 function done(output) {
     process.stdout.write(output);
     process.stdout.write('\nprompt > ');
 }

//where we will store our commands
function evaluateCmd(userInput) {

    const userInputArray = userInput.split(" ");
    const command = userInputArray[0];
 
    switch (command) {
      case "echo":
       //we will add the functionality of echo next within the object commandLibrary    
        commandLibrary.echo(userInputArray.slice(1).join(" "));
        break;

      case "cat": 
        commandLibrary.cat(userInputArray.slice(1));
        break;

      case "head":
        commandLibrary.head(userInputArray);
         break;

      case "tail":
        commandLibrary.tail(userInputArray);
        break;

      default:
        commandLibrary.errorHandler(userInputArray[0]);
        break;
    }
 };

//where we will store the logic of our commands
 const commandLibrary = {
     "echo": function(userInput) {
         done(userInput);
     },

     "cat": function(fullPath) {
         const fileName = fullPath[0];
         fs.readFile(fileName, (err, data) => {
             if (err) throw err;
             done(data);
         });
     },

     "head": function(fullPath) {
        const fileName = fullPath[0];
        fs.readFile(fileName, (err, data) => {
            if (err) throw err;
            done(data);
        });
    },

     "tail": function(fullPath) {
         const fileName = fullPath[fullPath -1];
         fs.readFile(fileName, (err, data) => {
             if (err) throw err;
             done(data);
         });
     },

     default: function(userInput) {
         done("Error! + '${userInput}' + is not a command");
     }
 };

 module.exports.commandLibrary = commandLibrary;
 module.exports.evaluateCmd = evaluateCmd;