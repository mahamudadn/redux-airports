import { useDispatch } from "react-redux";
import {useState} from 'react';



function AirLineForm() {

    const dispatch = useDispatch();
    const [newAirline, setNewAirline] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();



        dispatch({
            type: 'ADD_AIRLINE',
            payload: newAirline
        });

        setNewAirline('');
    }













    return (

<>
            
    <h1>Redux Airport</h1>

    <form onSubmit={handleSubmit}>
    <input
        placeholder="Airline Name" 
        type="text"
        onChange={event => setNewAirline(event.target.value)}
        value={newAirline}
    >
    </input>
    
    <button type="submit">Add Airline</button>
    </form>

    </>
    )
    
}


export default AirLineForm;