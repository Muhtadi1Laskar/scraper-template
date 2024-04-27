import { Scraper } from "./Scraper-Class/scraper.js";

(async () => {
    const scraper = new Scraper();
    await scraper.main();
})();
