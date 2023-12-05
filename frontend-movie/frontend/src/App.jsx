import './App.css'
import api from './api/axiosConfig'
import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import {Routes, Route} from 'react-router-dom'
import Home from './components/home/Home'
import { Header } from './components/header/Header'
import Trailer from './components/trailer/Trailer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Reviews  from './components/reviews/Reviews'

function App() {

  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState();


  const getMovies = async () => {

    try {
      const response = await api.get("/api/v1/movies")

      console.log(response.data);

      setMovies(response.data)

    }
    catch (err) {
      console.log(err);
    }
  }


  useEffect(() => {
    getMovies();
  }, [])

      const getMovieData = async (movieId) => {
        try {
          const response = await api.get(`/api/v1/movies/${movieId}`);

          const signleMovie = response.data;

          setMovie(signleMovie);
          setReviews();

        } catch (error) {
          console.log(err);
        }
      }


  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home movies={movies}/>}/>
        <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
        <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews} setReviews={setReviews}/>}></Route>
        </Route>
      </Routes>

    </div>
  )
}

export default App