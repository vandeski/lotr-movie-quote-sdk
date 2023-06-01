import axios from "axios";

export default class lotrMovieQuoteApi {
  constructor(accessToken) {
    this.ACCESS_TOKEN = accessToken;
    // Consider making "v2" a constant that can be easily changed later as needed
    this.BASE_URL = "https://the-one-api.dev/v2";
    this.MOVIE_BASE_URL = `/movie`;
    this.QUOTE_BASE_URL = `/quote`;

    this.AxiosInstance = axios.create({
      baseURL: this.BASE_URL,
      timeout: 1000,
      headers: { Authorization: `Bearer ${this.ACCESS_TOKEN}` },
    });
  }

  // List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies
  async getAllMovies() {
    let resp = await this.AxiosInstance.get(this.MOVIE_BASE_URL);
    return resp.data.docs;
  }

  // Request one specific movie by id
  async getMovie(id) {
    let resp = await this.AxiosInstance.get(`${this.MOVIE_BASE_URL}/${id}`);
    return resp.data.docs;
  }

  // Request all movie quotes for one specific movie by id (only working for the LotR trilogy)
  async getAllQuotesByMovie(id) {
    let resp = await this.AxiosInstance.get(
      `${this.MOVIE_BASE_URL}/${id}/${this.QUOTE_BASE_URL}`
    );
    return resp.data.docs;
  }

  // List of all movie quotes
  async getAllQuotes() {
    let resp = await this.AxiosInstance.get(`${this.QUOTE_BASE_URL}`);
    return resp.data.docs;
  }

  // Request one specific movie quote by id
  async getQuote(id) {
    let resp = await this.AxiosInstance.get(`${this.QUOTE_BASE_URL}/${id}`);
    return resp.data.docs;
  }
}
