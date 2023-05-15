import {_api} from '@/config';

const token = localStorage.getItem('token');

export default class TopicService {
	constructor() {
		this.page = 1;
		this.perPage = 10;
	}

	setPage(page) {
		this.page = page;
		return this;
	}

	async getRatables(topic, lang, filter) {
		let fullUrl = _api + '/topic/';
		fullUrl += topic + '/ratable';

		// fullUrl += "?perPage=" + this.perPage;
		// fullUrl += "&page=" + this.page;

		fullUrl += '?language=' + lang;

		fullUrl += '&filter=' + filter;

		const response = await fetch(fullUrl, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		return await response.json();
	}

	async rate(topic, ratableId, score) {
		let fullUrl = _api + '/topic/';
		fullUrl += topic + '/ratable/' + ratableId + '/rating';

		return await fetch(fullUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify({score}),
		});
	}

	async unrate(topic, ratableId, rating) {
		let fullUrl = _api + '/topic/';
		fullUrl += topic + '/ratable/' + ratableId + '/rating/' + rating;

		return await fetch(fullUrl, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
	}

	async getRatable(topicId, ratableId) {
		let fullUrl = _api + '/topic/';
		fullUrl += topicId + '/ratable/' + ratableId;

		const response = await fetch(fullUrl, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		return await response.json();
	}

	async updateRatable(topicId, ratableId, data) {
		let fullUrl = _api + '/topic/';
		fullUrl += topicId + '/ratable/' + ratableId;

		return await fetch(fullUrl, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify(data),
		});
	}

	async createRatable(topicId, data) {
		let fullUrl = _api + '/topic/';
		fullUrl += topicId + '/ratable';

		return await fetch(fullUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify(data),
		});
	}

	async deleteRatable(topicId, ratableId) {
		let fullUrl = _api + '/topic/';
		fullUrl += topicId + '/ratable/' + ratableId;

		return await fetch(fullUrl, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
	}
}
