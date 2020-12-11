// the line below isn't pulling from "models" it's pulling from "models/index.js"
const { Auctioneer } = require("./models");

// use async function so we can use await inside;
async function main() {
    let isContinue = true;
    const auctioneer = new Auctioneer();
    while (isContinue) {
        const isBid = await auctioneer.isBid();
        if (isBid) {
            await auctioneer.bid();
        } else {
            await auctioneer.post();
        }
        isContinue = await auctioneer.isContinue();
    }
    auctioneer.goodbye();
}

main();

