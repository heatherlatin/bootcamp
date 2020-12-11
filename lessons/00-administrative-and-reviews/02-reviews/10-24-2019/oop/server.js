const UserGroup = require("./models/user-group");
const Cli = require("./models/cli");

async function main() {
    const cli = new Cli();
    let quickExit = await cli.getAction();
    while(quickExit !== -1 && await cli.isContinue()) {
        quickExit = await cli.getAction();
    }
    if (quickExit !== -1) {
        cli.goodbye();
    }
}

main();