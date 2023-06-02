# LOTR Movies & Quotes SDK

JavaScript SDK for accessing the Lord of the Rings' movies and their quotes. Information for the SDK was provided via [The One API](https://the-one-api.dev/).


## Installation

```
npm i lotr-movie-quote-sdk
```

## Initialization

Before getting started with this SDK, you will need to sign up for a [The One Api Account](https://the-one-api.dev/account).  


After signing up you will receive an access token that can be used to initialize the SDK, like the example below:

```
import lotr from 'lotr-movie-quote-sdk';
const LOTR = new lotr('YOUR_ACCESS_TOKEN');
```

## Usage

There are two categories of information you can receive from this SDK; `movie` or `quote`

Note: Each method returns a promise that must be handled. For example:

```
console.log(await LOTR.movies.getAll())
```

or

```
LOTR.movies.getAll().then((movies) => console.log(movies))
```

### Movie

#### `LOTR.movies.getAll()`
List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies. The following is an example of the return:
```
[
  {
    _id: '5cd95395de30eff6ebccde56',
    name: 'The Lord of the Rings Series',
    runtimeInMinutes: 558,
    budgetInMillions: 281,
    boxOfficeRevenueInMillions: 2917,
    academyAwardNominations: 30,
    academyAwardWins: 17,
    rottenTomatoesScore: 94
  },
  {
    _id: '5cd95395de30eff6ebccde57',
    name: 'The Hobbit Series',
    runtimeInMinutes: 462,
    budgetInMillions: 675,
    boxOfficeRevenueInMillions: 2932,
    academyAwardNominations: 7,
    academyAwardWins: 1,
    rottenTomatoesScore: 66.33333333
  },
  ...etc
]
```

#### `LOTR.movies.getSingle('MOVIE_ID')`
Request one specific movie by id. The following is an example of the return:
```
[
  {
    _id: '5cd95395de30eff6ebccde57',
    name: 'The Hobbit Series',
    runtimeInMinutes: 462,
    budgetInMillions: 675,
    boxOfficeRevenueInMillions: 2932,
    academyAwardNominations: 7,
    academyAwardWins: 1,
    rottenTomatoesScore: 66.33333333
  }
]
```

### Quote

#### `LOTR.quotes.getAll()`
List of all movie quotes. The following is an example of the return:
```
[
  {
    _id: '5cd96e05de30eff6ebcce7e9',
    dialog: 'Deagol!',
    movie: '5cd95395de30eff6ebccde5d',
    character: '5cd99d4bde30eff6ebccfe9e',
    id: '5cd96e05de30eff6ebcce7e9'
  },
  {
    _id: '5cd96e05de30eff6ebcce7ea',
    dialog: 'Deagol!',
    movie: '5cd95395de30eff6ebccde5d',
    character: '5cd99d4bde30eff6ebccfe9e',
    id: '5cd96e05de30eff6ebcce7ea'
  },
  ...etc
]
```

#### `LOTR.quotes.getSingle('QUOTE_ID')`
Request one specific movie quote by id. The following is an example of the return:
```
[
  {
    _id: '5cd96e05de30eff6ebcce7e9',
    dialog: 'Deagol!',
    movie: '5cd95395de30eff6ebccde5d',
    character: '5cd99d4bde30eff6ebccfe9e',
    id: '5cd96e05de30eff6ebcce7e9'
  }
]
```

#### `LOTR.quotes.getAllByMovie('MOVIE_ID')`
Request all quotes for one specific movie by id (only working for the LotR trilogy). The following is an example of the return:
```
[
  {
    _id: '5cd96e05de30eff6ebcce7e9',
    dialog: 'Deagol!',
    movie: '5cd95395de30eff6ebccde5d',
    character: '5cd99d4bde30eff6ebccfe9e',
    id: '5cd96e05de30eff6ebcce7e9'
  },
  {
    _id: '5cd96e05de30eff6ebcce7ea',
    dialog: 'Deagol!',
    movie: '5cd95395de30eff6ebccde5d',
    character: '5cd99d4bde30eff6ebccfe9e',
    id: '5cd96e05de30eff6ebcce7ea'
  },
  ...etc
]
```