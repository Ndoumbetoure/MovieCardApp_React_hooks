import { useState} from "react";
import {MoviesData} from "../../MoviesData";
import AddMovies from "./AddMovie";
import MovieCard from './MovieCard';
import { FormControl } from 'react-bootstrap'
import Rate from "./Rating";

const MovieListe = () => {

    const [moviesData, setMoviesData] = useState(MoviesData);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchRate, setSearchRate] = useState("");
    const st = {display:'flex',alignItems: 'center', justifyContent: 'spaceEvenly', marginBottom: '100px', flexWrap: 'wrap', textAlign : 'center', paddingTop:"5px"}
    const dec = {display:'flex', textAlign : "center", marginTop:"-180px", paddingLeft : '550px', color:'red'}

    const handleChange = (e) => {
        let value = e.target.value
        setSearchTerm(value);
    };


    const ratingChanged = (newRating) => {
        setSearchRate(newRating);
    }

    console.log(searchRate);

    const handleAdd = (addnewmovie) => {
        setMoviesData([...moviesData, addnewmovie]);
    }
    
    
    return(

        <>
         <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <div >
                <div style={dec}>
                    <FormControl
                        type="text"
                        placeholder="Search"
                        className="mr-2"
                         onChange={handleChange}
                        value={searchTerm}
                    />
                    <Rate onChange={ratingChanged}/>
                </div>

                <div style={st} >
                        {moviesData.filter((item) =>{
                            return item.title.toLowerCase().includes(searchTerm.toLowerCase()) || item.rate >= parseInt(searchRate);
                        }) 
                           .map((item) => {
                                return (<MovieCard props={item} key={item.id}/>)
                            })}
                </div>
            </div>
            
            <div>
                <AddMovies  handleAdd = {handleAdd}/>
            </div>
        </>
    )
};


export default MovieListe;




