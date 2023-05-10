const url = "http://localhost/api/topic";

export default class TopicService {
    constructor() {
        this.page = 1;
        this.perPage = 6;
    }


    setPage(page) {
        this.page = page;
        return this;
    }

    setPerPage(perPage) {
        this.perPage = perPage;
        return this;
    }

    async getTopics() {
        let fullUrl = url;
        // fullUrl += "?perPage=" + this.perPage;
        // fullUrl += "&page=" + this.page;


        console.log(fullUrl);
        const response = await fetch(fullUrl);
        const data = await response.json();

        return data;
    }

}
