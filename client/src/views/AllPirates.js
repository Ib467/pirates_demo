import React,{ useEffect, useState }  from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';


export default function AllPirates(){
    const [pirates, setPirates] = useState(null)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates')
        .then(response => setPirates(response.data))
        .catch(() => setHasError(true))
    }, [])

    function handleDelete(id){
        axios.delete('http://localhost:8000/api/pirates/' + id)
        .then(() => setPirates(pirates.filter(pirate => pirate._id != id)))
    }


    if(hasError) return 'something went wrong!';

    if (pirates == null) return "Loading...";

    return (
        <div>
            <div>
                <h1>Pirate Crew</h1>
                <p><button onClick={() => navigate('/pirate/new') }>Add Pirate</button></p>
            </div>
            {pirates.map(pirate => (
                <div key={pirate._id}>
                <p>
                <h2>{pirate.pirateName}</h2>
                <img src={pirate.imageUrl} alt="pirate Image" width="300" height="300" />
                
                <button onClick={() => navigate('/pirate/' + pirate._id)}>View Pirate</button> | |
                <button onClick={() => handleDelete(pirate._id)}>Walk the Plank</button>
                </p>





                </div>

                

            ))}
        </div>
    )
}