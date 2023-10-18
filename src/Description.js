import { useLocation } from "react-router"
// import Movies from "./Movies"
import MovieCard from "./MovieCard"


const Description = () => {
    // const par = useParams()
    // const film = [...movies].filter((m) => m.id === parseInt(par.id))[0]
    // console.log(film)
    const film=useLocation()['state']['movies']
   
    let title=film['title']
    let posterURL=film['posterURL']
    let description=film['description']
    let rating=film['rating']
    console.log(film['bande'])
    // un peu de code pour construire l'iframe de youtube 
    // extraction du titre 
    let titre_youtube = film['bande'].split(' title=')[1].split(' frameborder=')[0].split('"')[1]

    // extraction de la source
    let src_youtube = film['bande'].split('src=')[1].split(' title=')[0].split('"')[1]
   

    // console.log(titre_youtube)
    // console.log(src_youtube)

    return <div >
        {film!==undefined?<div className="description" >
        <h1>{film.title}</h1>
        <div style={{ display: "flex"}}>
            <MovieCard title={title} posterURL={posterURL} description={""} rating={rating} />
            <div style={{ flex: "4", borderRadius: "20px", boxShadow: "0 0 12px 2px yellow", margin: "10px", padding: "20px" }}>
                <h2 style={{ textAlign: "center" }}>Description</h2>
                <p >{description}</p>
            </div>
        </div>
        <iframe style={{ marginTop: "20px",marginBottom:'60px', boxShadow: "0 0 2px 2px white",marginLeft:"50%",transform:"translateX(-50%)", borderRadius: "20px" }} width="853" height="480" title={titre_youtube} src={src_youtube} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " allowfullscreen></iframe>
        </div>: <h1>No data to display !</h1>}
    </div>

}


export default Description