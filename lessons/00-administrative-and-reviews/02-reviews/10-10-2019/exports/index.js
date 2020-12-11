const { save, read } = require('./code-library');
// Focused on logic of the code
// (main program)

// we expect command to be save or read
const [_node, _file, command, ...inputs] = process.argv;
console.log(inputs);

switch (command) {
    case "save":
        save(...inputs);
        break;
    case "read":
        read(...inputs);
        break;
    default:
        console.log("incorrect input, only 'save' or 'read' is an acceptable first input");
}