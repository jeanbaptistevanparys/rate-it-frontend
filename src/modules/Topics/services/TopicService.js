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

	async getTopics(filter = '', limit = 6) {
		let fullUrl = url;
		// fullUrl += "?perPage=" + this.perPage;
		// fullUrl += "&page=" + this.page;
		fullUrl += '?filter=' + filter;
		fullUrl += '&limit=' + limit;
		console.log(fullUrl);
		const response = await fetch(fullUrl, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		const data = await response.json();

		return data;
	}

	async getHotTopics() {
		let fullUrl = url;
		fullUrl += '/hot';
		const response = await fetch(fullUrl, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		const data = await response.json();

		return data;
	}

	async createTopic(name) {
		let fullUrl = url;
		const response = await fetch(fullUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify({ name }),
		});
		const data = await response.json();
		return data;
	}

	async deleteTopic(id) {
		let fullUrl = url + '/' + id;
		const response = await fetch(fullUrl, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		const data = await response.json();

		return data;
	}
}
