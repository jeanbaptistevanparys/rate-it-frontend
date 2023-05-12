
import { _api } from '../../../config.js';
import { useRoute } from 'vue-router';

const token = localStorage.getItem('token');


const route = useRoute();
export default class TopicService {

	

	constructor() {
		this.page = 1;
		this.perPage = 10;

		this.route = useRoute();
	}

	setPage(page) {
		this.page = page;
		return this;
	}

	async getRatables(topic) {
		this.language = this.route.params.lang;

		let fullUrl = _api + '/topic/';
		fullUrl += topic + '/ratable';

		// fullUrl += "?perPage=" + this.perPage;
		// fullUrl += "&page=" + this.page;


		fullUrl += '?language=' + this.language;

		const response = await fetch(fullUrl, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
		});
		const data = await response.json();
		return data.data;
	}

	async rate(topic, ratableId, rating) {
		// /topic/{topicName}/ratable/{ratableId}/rating
		// post rating
		let fullUrl = _api + '/topic/';
		fullUrl += topic + '/ratable/' + ratableId + '/rating';

		const response = await fetch(fullUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: token,
			},
			body: JSON.stringify(rating),
		});

		const data = await response.json();

		return data;

		// TODO: handle errors
	}

	async unrate(topic, ratableId, rating) {
		let fullUrl = _api + '/topic/';
		fullUrl += topic + '/ratable/' + ratableId + '/rating/' + rating.id;

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
