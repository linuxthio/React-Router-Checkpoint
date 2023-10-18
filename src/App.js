// import logo from './logo.svg';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Movies from './Movies'
import Description from './Description';
import {Routes,Route, Link } from 'react-router-dom'
import { useState } from 'react';



function App() {
  const [movies,setMovies]=useState([...Movies])

  return <div className="App">

    <nav className='navbar'>

    <h1 className='titre-page'><Link to={'/'} style={{textDecoration:"none",color:'white'}}>My Favorite Movies</Link></h1>
    <Link to={'/'}  style={{textDecoration:"none",boxShadow:'0 0 1px 0.2px white',padding:'10px',color:'yellowgreen',marginLeft:'20px'}} className='home'>Home</Link>
    </nav>
    
      
      <Routes>
        <Route path="/" element={<MovieList  movies={movies}   setMovies={setMovies}/>} />
        <Route path="/description" element={<Description/>}/>
      </Routes>
    <h1 className='footer'>THIONGANE </h1>
  </div>
}

export default App;
