# Introduction



## Project Goals

### Create an SDK that is easy/simple for developers to consume information about the Lord of the Rings Trilogy

**SUCCESS!**

Per the prompt, this SDK made use of the [The One API](https://the-one-api.dev/) to give developers access to the following endpoints:

- /movie
- /movie/{id}
- /movie/{id}/quote
- /quote
- /quote/{id}

Each method returns an array of objects for consistantcy. Each method call follows the same naming convention `SDK.RETURN_TYPE.GET_METHOD`. The SDK's methods were split into two types, based on the type of data that was being returned; `movie` or `quote`. 

Note: This means that though `/movie/{id}/quote` hits the `/movie` endpoint it is utilized in the SDK via `LOTR.quotes.getAllByMovie('MOVIE_ID')`. This was done to preserve a consistant user experince. Else it would be called `LOTR.movies.getAllByMovie('MOVIE_ID')` but would return an array of `quote` objects.

### Complete this SDK in less that 24 hours

**SUCCESS!**

### Achieve high quality and readibility

**SUCCESS!**

Class, method, property, and variable names are both simple and verbose for easy understanding. Getter methods all have comments to explain the data the retreiving.

### Consider maintainablity and extensibility

**SUCCESS!**

The file structure is kept simple with room to grow if this SDK was to be expanded to utilize [The One API](https://the-one-api.dev/)'s `/book` or `/character` endpoints. Each would get there own file in `src/api`. `src/connection.js` could also be expanded into full CRUD operations if a database where connected to this SDK.

## Further Consideration

### Testing

Though simple error handling was implimented in this project, a real-world SDK would want to impliment unit testing in the `src/movie.js` and `src/quote.js`. The [Axios](https://axios-http.com/docs/intro) instance in `src/connection.js` could also being expanded to better handle potential errors when making API calls. 

### Filtering, Pagination, Sorting

[The One API](https://the-one-api.dev/) does provide these capabilities in the form of `key=value` pairs. I don't think it would be much of a stretch to extend all the methods to take an `options` object as a second paramter to make use of these features.