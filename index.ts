// mathengine
// By BadBoyHaloCat

// Modules

// Utils
import * as utils from './utils/index';
import * as inquirer from 'inquirer';

// Main
(async function() {
    const dircont: string[] = await utils.readdir('./mathengine/').catch((e: string) => {
        console.error('No ./mathengine/ directory?');
        process.exit(1);
    });
    console.log(dircont);
})();
