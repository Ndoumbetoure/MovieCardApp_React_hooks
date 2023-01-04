import ReactStars from 'react-stars'


const MovieCard = ({props}) =>{

    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
      
return(
    <div>
       <div className="divPrincipal">
                   <div className='image-container d-flex justify-content-start m-3'>
                        <figure>
                            <img src={props.posterUrl} alt="" />
                            <div className="divDescription">
                                   <h5>{props.id}</h5>
                                   <h3>{props.title}</h3>
                                   <div><p>{props.description}</p></div>
                                   <span>
                                   <ReactStars
                                      count={5}
                                       onChange={ratingChanged}
                                       size={24} color2={'#ffd700'}
                                       value={props.rate}
                                       />
                                   </span>
                            </div> 
                        </figure>
                   </div>
                </div>
    </div>
)

}
export default MovieCard;



