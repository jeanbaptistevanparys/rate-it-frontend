import { _api } from '../../../config.js';
import { useRoute } from 'vue-router';

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

	async getRatables(topic, lang) {
		let fullUrl = _api + '/topic/';
		fullUrl += topic + '/ratable';

		// fullUrl += "?perPage=" + this.perPage;
		// fullUrl += "&page=" + this.page;

		fullUrl += '?language=' + lang;

		const response = await fetch(fullUrl, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		const data = await response.json();
		return data;
	}

	async rate(topic, ratableId, score) {
		let fullUrl = _api + '/topic/';
		fullUrl += topic + '/ratable/' + ratableId + '/rating';

		const response = await fetch(fullUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify({ score }),
		});

		return response;
	}

	async unrate(topic, ratableId, rating) {
		let fullUrl = _api + '/topic/';
		fullUrl += topic + '/ratable/' + ratableId + '/rating/' + rating;

		const response = await fetch(fullUrl, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		return response;
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
		const data = await response.json();
		return data;
	}

	async updateRatable(topicId, ratableId, data) {
		let fullUrl = _api + '/topic/';
		fullUrl += topicId + '/ratable/' + ratableId;

		const response = await fetch(fullUrl, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify(data),
		});
		return response;
	}

	async createRatable(topicId, data) {
		let fullUrl = _api + '/topic/';
		fullUrl += topicId + '/ratable';

		const response = await fetch(fullUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify(data),
		});
		return response;
	}

	async deleteRatable(topicId, ratableId) {
		let fullUrl = _api + '/topic/';
		fullUrl += topicId + '/ratable/' + ratableId;

		const response = await fetch(fullUrl, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		return response;
	}
}
