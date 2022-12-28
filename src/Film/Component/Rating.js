import React,  {useState} from "react";
import { FaStar } from "react-icons/fa";

const Rate = () => {
    
    const [rate, setRate] = useState(0);

    const divStyle = {display:'flex',
        
        minHeight: '60vh',
        fontSize: 25 }

    const inputStyle = {
        display: 'none'
    }

    const divOb = {cursor: 'pointer'}
    return(
        <div style={divStyle}>
            {[...Array(5)].map((item, index) => {
                const givenRating = index +1;
                
                return(
                    <label>
                        <input style={inputStyle} type="radio" value={givenRating} onClick={() => {setRate(givenRating);}}/>
                        <div style={divOb}> 
                            <FaStar color={givenRating < rate || givenRating === rate ? "red" : "gray"}/>
                        </div>
                    </label>
                );
            })}
        </div>
    );
};

export default Rate;