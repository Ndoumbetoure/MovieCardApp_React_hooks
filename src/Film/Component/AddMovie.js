import { useState } from "react";


const AddMovies = ({handleAdd}) => {
    
    const[title, setTitle] = useState("");
    const[description, setDscription] = useState("");
    const[posterUrl, setPosterUrl] = useState("");
    const[rate, setRate] = useState("0");

    const formStyle = { color : 'black', textAlign : 'center', paddingBottom: '50px', marginTop:'-200px'}
    const handleSubmit = (e) => {
        e.preventDefault();

         const addmovie = {
            id: Math.random,
            title,
            description,
            posterUrl,
            rate,
        };
        handleAdd(addmovie)

    };
     

    return(
        <form onSubmit={handleSubmit} style={formStyle}>
             <input type="text" placeholder="Movie titel :" onChange={(e)=> setTitle(e.target.value)} value={title}/> <br /> <br />
             <input type="text" placeholder="Movie description :" onChange={(e)=> setDscription(e.target.value)} value={description}/> <br /> <br />
             <input type="text" placeholder="Movie URL :" onChange={(e)=> setPosterUrl(e.target.value)} value={posterUrl}/> <br /> <br />
             <input type="number" min="1" max="5" placeholder="Movie rate :" onChange={(e)=> setRate(e.target.value)} value={rate} /> <br /><br />
             <input type="submit" value='Add movie'/>
        </form>
    )
     

}


export default AddMovies;
