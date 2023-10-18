import { Card, CardImg, CardSubtitle } from "react-bootstrap"


const MovieCard=({title,posterURL,description,rating})=>
{

    return <Card className="moviecard">
         <Card.Title>{title} </Card.Title> 
         <CardImg  className="img-poster" src={posterURL}  alt="poster" />
         <CardSubtitle>{description}</CardSubtitle>
          <CardSubtitle> Rating : {rating}  </CardSubtitle>
    </Card>

}

export default MovieCard