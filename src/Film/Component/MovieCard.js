import Rate from './Rating';


const MovieCard = ({props}) =>{


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
                                   <span>{<Rate/>}</span>
                                   {/* <div className='overlay d-flex align-items-center justify-content-center'>Add to Favourites</div> */}
                            </div> 
                        </figure>
                   </div>
                </div>
    </div>
)

}
export default MovieCard;



