import Movie from "./api/movie.js";
import Quote from "./api/quote.js";
import Connection from "./api/connection.js";

export default class lotrMovieQuoteApi {
  constructor(accessToken) {
    if (!accessToken) {
      console.warn(
        "WARNING: You have not specified an ACCESS_TOKEN from https://the-one-api.dev/account."
      );
      console.warn(
        "It is required in order to use this SDK. For more information, please visit https://www.npmjs.com/package/lotr-movie-quote-sdk"
      );
      return undefined;
    }
    this.connection = new Connection(accessToken);
    this.movies = new Movie(this.connection);
    this.quotes = new Quote(this.connection);
  }
}