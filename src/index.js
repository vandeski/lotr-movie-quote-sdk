import Movie from "./api/movie.js";
import Quote from "./api/quote.js";
import Connection from "./api/connection.js";

export default class lotrMovieQuoteApi {
  constructor(accessToken) {
    this.connection = new Connection(accessToken);
    this.movie = new Movie(this.connection);
    this.quote = new Quote(this.connection);
  }
}

