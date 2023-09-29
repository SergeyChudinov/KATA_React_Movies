export default class MovieService {
  options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTYxNzY2ODUyYWI2ZTUzOGI0MDBkMTUzNDcwNDE4NyIsInN1YiI6IjY1MTUzYzIzYzUwYWQyMDBhZDdlZmVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IEIOmTK49ZI1D_MACjGt2vi5GzyQU7cPu0s1MkzW2ys',
    },
  }

  async getResource() {
    const res = await fetch('https://api.themoviedb.org/3/movie/popular', this.options)
    if (!res.ok) {
      throw new Error(`Could not fetch , status: ${res.status}`)
    }
    return await res.json()
  }

  async getAllMovies() {
    const res = await this.getResource()
    // console.log(res.results)
    return res.results.map(this._transformMovies).slice(0, 10)
  }

  _transformMovies = (person) => {
    return {
      id: person.id,
      title: person.title,
      date: person.release_date,
      overview: person.overview,
      vote: person.vote_average,
      backdropPath: person.backdrop_path,
    }
  }
}
