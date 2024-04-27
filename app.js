import { Scraper } from "./Scrapper-Class/scrapper.js";

(async () => {
    const scraper = new Scraper();
    await scraper.main();
})();
