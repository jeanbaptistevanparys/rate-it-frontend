import { _api } from '@/config';
export default class AuthService {
	async login(email, password) {
		let fullUrl = _api + '/login';
		const response = await fetch(fullUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});
		const data = await response.json();

		localStorage.setItem('token', 'Bearer ' + data.token);
		localStorage.setItem('userId', data.userId);

		return response.status === 200;
	}

	async register(name, email, password) {
		let fullUrl = _api + '/register';
		const response = await fetch(fullUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, password }),
		});
		// TODO: handle errors

		return response.status === 204;
	}
}
