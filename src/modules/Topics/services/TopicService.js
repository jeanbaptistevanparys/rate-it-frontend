import { _api } from '../../../config.js';

const url = _api + '/topic';

const token = localStorage.getItem('token');

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
		const response = await fetch(fullUrl, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		const data = await response.json();

		return data;
	}
}
