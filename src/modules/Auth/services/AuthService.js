const base_url = 'http://localhost/api/';

export default class AuthService {



	async login(email, password) {
		console.log(JSON.stringify({ email, password }));

		let fullUrl = base_url + 'login';
		const response = await fetch(fullUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ email, password }),
		});
		const data = await response.json();

		this.registerToken(data.token);

		return response.status == 200
	}

	async register(name, email, password) {
		let fullUrl = base_url + 'register';
		const response = await fetch(fullUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ name, email, password }),
		});
		// TODO: handle errors

		return response.status == 204
	}

	registerToken(token) {
		//save token to local storage
		localStorage.setItem('token', 'Bearer ' + token);
	}


}
