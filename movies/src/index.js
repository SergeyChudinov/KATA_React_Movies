import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import App from './components/app'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// <React.StrictMode>
// </React.StrictMode>

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNTYxNzY2ODUyYWI2ZTUzOGI0MDBkMTUzNDcwNDE4NyIsInN1YiI6IjY1MTUzYzIzYzUwYWQyMDBhZDdlZmVjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IEIOmTK49ZI1D_MACjGt2vi5GzyQU7cPu0s1MkzW2ys',
//   },
// }

// fetch('https://api.themoviedb.org/3/movie/popular', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err))
