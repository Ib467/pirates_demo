import React, {useEffect, useState} from 'react';
import axios from 'axios';


export default function SinglePirate(props) {
    const [pirate, setPirate] = useState(null)

    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/' + props.id)
        .then(response => setPirate(response.data));
    }, []);

    if (pirate == null) return 'Loading...'

    return (
        <div>
            <div>
                <h1>{pirate.pirateName}</h1>
            </div>

            <div>
            <img src={pirate.imageUrl} alt="pirate Image" width="300" height="300" />
            <p>{pirate.pirateCatchPhrase}</p>
            </div>

            <div>
                <h2>About:</h2>
                <p>Position: {pirate.crewPosition}</p>
                <p>Treasures: {pirate.treasureChests}</p>
                <p>Peg Leg: {pirate.pegLeg ? 'Yes' : 'No'}</p>
                <p>Eye Patch: {pirate.eyePatch ? 'Yes' : 'No'}</p>
                <p>Hook Hand: {pirate.hookHand ? 'Yes' : 'No'}</p>
            </div>


        </div>



    )

}