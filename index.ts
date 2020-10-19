// mathengine
// By BadBoyHaloCat

// Modules

// Utils
import * as utils from './utils/index';
import * as inquirer from 'inquirer';

// Main
(async function() {
    let df: string[] = await utils.readdir('./mathengine/').catch(async (e: string) => {
        console.log('No ./mathengine/ directory! Creating it...');
        let ff: string[] = await utils.mkdir('./mathengine/').catch((e2: string) => {
            console.error(`Failed to write directory ./mathengine/: ${e2}`);
            process.exit(1);
        });
        
        // We have to return an empty array for type-checking to go through
        // as expected.
        return [];
    });
    console.log(df);
})();