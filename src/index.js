export default class lotrMovieQuoteApi {
    constructor(accessToken) {
        // Consider having this set when the use intializes this package
        // Or is just might be set by default as this token for this package
        this.ACCESS_TOKEN = "zzgm96PieoWg-r49eW-i"
        // Consider making "v2" a constant that can be easily changed later as needed
        this.BASE_URL = "https://the-one-api.dev/v2"
        this.MOVIE_BASE_URL = `${this.BASE_URL}/movie`
        this.QUOTE_BASE_URL = `${this.BASE_URL}/quote`
    }

    // List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies
    getAllMovies() {

    }

    // Request one specific movie by id
    getMovie(id) {

    }

    // Request all movie quotes for one specific movie by id (only working for the LotR trilogy)
    getAllQuotesByMovie(id) {

    }

    // List of all movie quotes
    getAllQuotes() {

    }

    // Request one specific movie quote by id
    getQuote(id) {

    }
  }