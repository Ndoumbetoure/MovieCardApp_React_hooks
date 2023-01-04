import { useState} from "react";
import {MoviesData} from "../../MoviesData";
import AddMovies from "./AddMovie";
import MovieCard from './MovieCard';
import { FormControl } from 'react-bootstrap'
import ReactStars from "react-stars";

const MovieListe = () => {

    const [moviesData, setMoviesData] = useState(MoviesData);
    const st = {display:'flex',alignItems: 'center', justifyContent: 'spaceEvenly', flexWrap: 'wrap', textAlign : 'center', paddingTop:"200px"}
    const dec = {display:'flex', textAlign : "center", marginTop:"-180px", paddingLeft : '550px', color:'red'}
 
    
                
            const handleAdd = (addnewmovie) => {
                    setMoviesData([...moviesData, addnewmovie]);
                   }
                


            function filterMovie(newRating) {
                   setMoviesData(MoviesData.filter((movie) => movie.rate === newRating));
            }


    
     return(
        <>
         <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div>
                <div style={dec}>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-2"
                        onChange={(e) => setMoviesData(MoviesData.filter(movie => movie.title.toLowerCase().includes(e.target.value.toLowerCase()) ))}
                    />

                    <div style={st}>
                       <ReactStars
                          count={5}
                          size={24} color2={'#ffd700'}
                          onChange={filterMovie}
                       />
                    </div>
                    
                </div>           
                         
                <div style={st}  >
                    {
                         moviesData.map((item) => 
                         (<MovieCard props={item} key={item.id}/>)
                         )
                    }
                </div>
            </div>
              
            <div>
                <AddMovies  handleAdd = {handleAdd}/>
            </div>
        </>
    )
};


export default MovieListe;




