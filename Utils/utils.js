import fs from 'fs';

export class Utils {
    constructor() {

    }

    extractMeaningfulWords(str) {
        str = str.trim();
        const words = str.split(/\s*\+\s*/).join("");
        return words;
    }

    removeStopWord(str, word) {
        const newStr = str.replace(word, '').trim();
        return newStr;
    }

    async waitForLocatorState(locator, state = 'visible') {
        await locator.waitFor({
            state: state
        });
    }

    saveJson(data, fileName, pathName) {
        const filePaths = {
            pathName: `Data/${fileName}.json`,
        };
        const filePath = filePaths[pathName];
        const formattedData = JSON.stringify(data);

        fs.writeFileSync(filePath, formattedData, 'utf-8', (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Data Successfully Saved");
        });
    }
}