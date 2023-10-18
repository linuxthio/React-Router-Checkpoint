import { useState } from "react"
import { Button, Card } from "react-bootstrap"


const Filter = ({movies,setMoviescy}) => {
    const [ischeck, setIscheck] = useState(null)
    const [inputfilt, setInputFilt ]= useState("")
    // const [moviescy, setMoviescy] = useState([...movies])


    const onSub = (e) => {
        e.preventDefault()
        console.log(e)
        let mm = [...movies]
        if (ischeck === 'rate') {
    
          mm = movies.filter((m) => m.rating.trim().toLowerCase() === inputfilt.trim().toLowerCase())
        } else if (ischeck === 'title') {
    
          mm = movies.filter((m) => m.title.trim().toLowerCase() === inputfilt.trim().toLowerCase())
        }
        setMoviescy([...mm])
        setInputFilt("")
      }

      const chInputFilt = (ev) => {
        setInputFilt(ev.target.value)
      }
    
      const onchangerad = (e) => {
        setIscheck(e.target.value)
      }
    
    return <Card className="card-filter">
        <form action="" onSubmit={onSub} className='filtre-movie'>
            <h2>Filtrer</h2>
            <div className="inputfilter">
            <input type="text" onChange={chInputFilt} value={inputfilt} placeholder="title/rate" />
            <input type="radio" name="movie" id="" checked={ischeck === 'title'} onChange={onchangerad} value='title' /> <label htmlFor="movie">title</label>
            <input type="radio" name="movie" id="" checked={ischeck === 'rate'} onChange={onchangerad} value='rate' /> <label htmlFor="movie">rate</label>
            <Button type="submit" value="envoie">Filtrer</Button>
            </div>
        </form>
    </Card>
}


export default Filter