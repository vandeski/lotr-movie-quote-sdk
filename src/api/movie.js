import { MOVIE_BASE_URL, QUOTE_BASE_URL } from "../constants.js";

export default class Movie {
  constructor(connection) {
    this.connection = connection;
  }

  // List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies
  static getAll() {
    return this.connection.get(MOVIE_BASE_URL);
  }

  // Request one specific movie by id
  async getSingle(id) {
    return this.connection.get(`${MOVIE_BASE_URL}/${id}`);
  }
}
