import Filter from "./Filter"
import { useState } from "react"
// import Movies from './Movies'
import MovieCard from './MovieCard'
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const MovieList = ({movies,setMovies}) => {

    // const [movies, setMovies] = useState([...movies0])
    const [moviescy, setMoviescy] = useState([...movies])

 
    const FormAdd = () => {
        /// les state pour les input
        const [inputtitle, setInptitle] = useState("")
        const [inputurl, setInpurl] = useState("")
        const [inputdesc, setInpdesc] = useState("")
        const [inputrate, setInprate] = useState("")
        const [inputiframe, setInpiframe] = useState("")

        const addMovie = (e) => {  // ajout de new film
            e.preventDefault()
            let mm = [...movies]

            if (inputtitle !== "" && inputurl !== "" && inputdesc !== "" && inputrate !== "" && inputiframe !== "") {

                let m = {
                    title: inputtitle,
                    posterURL: inputurl,
                    description: inputdesc,
                    bande: inputiframe,
                    rating: inputrate + ""
                }
                console.log(m)
                mm.push(m)

                setMovies([...mm])
                setMoviescy([...mm])
            } else {
                alert("Veuillez remplir les champs SVP.")
            }
        }

        const onchtitle = (e) => {
            setInptitle(e.target.value)
        }
        const onchurl = (e) => {
            setInpurl(e.target.value)

        }
        const onchdesc = (e) => {
            setInpdesc(e.target.value)

        }
        const onchrate = (e) => {
            setInprate(e.target.value)

        }
        const onchiframe = (e) => {
            setInpiframe(e.target.value)

        }

        return <div className='form-add'>
            <form onSubmit={addMovie} className='add-movie'>
                <h2>Ajouter un nouveau film</h2>
                <input type="text" placeholder='le titre du film' onChange={onchtitle} value={inputtitle} />
                <input type="text" placeholder='url du poster' onChange={onchurl} value={inputurl} name="" id="" />
                <input type="text" placeholder='description ...' onChange={onchdesc} value={inputdesc} name="" id="" />
                <input type="text" placeholder='iframe youtube ...' onChange={onchiframe} value={inputiframe} name="" id="" />
                <input type="number" max={10} min={1} placeholder='rating' onChange={onchrate} value={inputrate} name="" id="" />
                <Button type="submit"  className="primary" >Ajout</Button>
            </form>
        </div>
    }

    return (
        <div className='body'>

            <FormAdd />
            <div className='main'>
                <Filter movies={movies} setMoviescy={setMoviescy} />
                {console.log(moviescy)}
                <div className="all-movies" >
                {moviescy.map((f) => <div key={Date.now() + f.title + Math.random()}><Link to={`/description/`}  state={{movies:f}}  style={{textDecoration:"none"}} ><MovieCard title={f.title} posterURL={f.posterURL} description={f.description.substring(0,120)+"..."}  rating={f.rating} /></Link></div>)}
                </div>
            </div>
        </div>
    );
    
}

// {moviescy.map((f) => <div key={Date.now() + f.title + Math.random()}><Link to={`/description/${f.title}///${f.posterURL}///${f.description}///${f.bande}///${f.rating}`}> <MovieCard title={f.title} posterURL={f.posterURL} description={f.description.substring(0,120)+"..."}  rating={f.rating} /></Link></div>)}

export default MovieList