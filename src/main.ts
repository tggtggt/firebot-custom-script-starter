import { Firebot } from "@crowbartools/firebot-custom-scripts-types";
const { mouse, Point, Button } = require('@nut-tree/nut-js');
let logger = runRequest.modules.logger;
interface Params {
  message: string;
}

const script: Firebot.CustomScript<Params> = {
  getScriptManifest: () => {
    return {
      name: "movemousee",
      description: "A starter custom script for build",
      author: "buster",
      version: "1.0",
      firebotVersion: "5",
    };
  },
  getDefaultParameters: () => {
    return {
      message: {
        type: "string",
        default: "Hello World!",
        description: "Message",
        secondaryDescription: "Enter a message here",
      },
    };
  },
  run: (runRequest) => {
    const { logger } = runRequest.modules;
    logger.info(runRequest.parameters.message);
  },
};

  async function main() {
    //who actually writes notes anyway, self explanatory code this time around
    async function moveCursorTo(x, y) {
        const position = new Point(x, y);
        await mouse.setPosition(position);
    }

    async function leftClick(x, y) {
        const position = new Point(x, y);
        await mouse.setPosition(position);
        await mouse.click(Button.LEFT);
    }

    async function rightClick(x, y) {
        const position = new Point(x, y);
        await mouse.setPosition(position);
        await mouse.click(Button.RIGHT);
    }

    async function waitTime(ms) {
        await new Promise(resolve => setTimeout(resolve, ms));
    }
  
    await rightClick(2300, 640);
    await waitTime(100);
    await leftClick(2350, 585);
    await waitTime(100);
    await leftClick(2800, 600);
    await waitTime(100);
    await leftClick(3180, 230);
  }

exports.getScriptManifest = () => ({
    firebotVersion: "5"
});

function run(runRequest) {
    // Return a Promise object
    return new Promise((resolve, reject) => {
    //your code here 
    main();
    });
  }


exports.main = main;

exports.run = run;
run();

logger.debug("Outputs a DEBUG tagged message for the dev tools console!");
logger.info("Outputs an INFO tagged message for the dev tools console!");
logger.error("Outputs an ERROR tagged message for the dev tools console!");
export default script;
