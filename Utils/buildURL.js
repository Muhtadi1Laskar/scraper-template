export class BuildURL {
    constructor() {
        this.url = '';
    }

    constructURL(param) {
        if (param.length < 0) {
            return this.url;
        }
        const URL = `${this.url}/${param}`;
        this.url = URL;
        return this.url;
    }
}