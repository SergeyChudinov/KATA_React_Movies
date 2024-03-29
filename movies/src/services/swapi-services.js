export default class MovieService {
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTYxNzY2ODUyYWI2ZTUzOGI0MDBkMTUzNDcwNDE4NyIsInN1YiI6IjY1MTUzYzIzYzUwYWQyMDBhZDdlZmVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IEIOmTK49ZI1D_MACjGt2vi5GzyQU7cPu0s1MkzW2ys',
    },
  }

  url = 'https://api.themoviedb.org/3/search/movie?query=return'
  searchUrl = 'https://api.themoviedb.org/3/search/movie?query='
  genre = 'https://api.themoviedb.org/3/genre/movie/list?language=ru'
  urlPart = 'https://image.tmdb.org/t/p/w500/'

  async getResource(url) {
    const res = await fetch(url, this.options)
    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , status: ${res.status}`)
    }
    return await res.json()
  }

  async getAllMovies() {
    const res = await this.getResource(this.url)
    return res.results.map(this._transformMovies).slice(0, 10)
  }

  async searchAllMovies(search) {
    const res = await this.getResource(`${this.searchUrl}${search}`)
    return res.results.map(this._transformMovies).slice(0, 10)
  }

  async getAllGenre() {
    const res = await this.getResource(this.genre)
    return res
  }
  _transformMovies = (person) => {
    return {
      id: person.id,
      title: person.title,
      date: person.release_date,
      overview: person.overview,
      vote: 0.0,
      url: this.urlPart + person.poster_path,
      genre: person.genre_ids,
    }
  }
}
