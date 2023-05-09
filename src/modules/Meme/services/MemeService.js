const url = 'https://api.imgflip.com/get_memes';

export default class MemeService {

	async getMemes() {
		const response = await fetch(url);
		const data = await response.json();
		return data.data.memes;
	}

	async getRandomMeme() {
		const memes = await this.getMemes();
		const randomIndex = Math.floor(Math.random() * memes.length);
		return memes[randomIndex].url;
	}
}

