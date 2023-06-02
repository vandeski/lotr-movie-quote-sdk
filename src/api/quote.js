import { MOVIE_BASE_URL, QUOTE_BASE_URL } from "../constants.js";

export default class Quote {
  constructor(connection) {
    this.connection = connection;
  }

  // List of all movie quotes
  getAll() {
    return this.connection.get(`${QUOTE_BASE_URL}`);
  }

  // Request one specific movie quote by id
  getSingle(id) {
    return this.connection.get(`${QUOTE_BASE_URL}/${id}`);
  }

  // Request all quotes for one specific movie by id (only working for the LotR trilogy)
  // While under the hood this method is hitting the /movie endpoint of "The One API",
  // the user is recieving quotes. So the decision has been made to have this methos fall under
  // sdk.quote.getAllByMovie(id)
  getAllByMovie(id) {
    return this.connection.get(`${MOVIE_BASE_URL}/${id}/${QUOTE_BASE_URL}`);
  }
}
