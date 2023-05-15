import {_api} from '@/config';

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
		fullUrl += '?filter=' + filter;
		fullUrl += '&limit=' + limit;
		const response = await fetch(fullUrl, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		return await response.json();
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
		return await response.json();
	}

	async createTopic(name) {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify({ name }),
		});
		return await response.json();
	}

	async deleteTopic(id) {
		const fullUrl = `${url}/${id}`;
		const response = await fetch(fullUrl, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		return await response.json();
	}
}
