import React, {useState} from 'react';

import axios from 'axios';
import {navigate} from '@reach/router';


export default function NewPirate(){
    const [pirateName, setPirateName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [treasureChests, setTreasureChests] = useState('')
    const [pirateCatchPhrase, setPirateCatchPhrase] = useState('')
    const [crewPosition, setCrewPosition] = useState('')
    const [pegLeg, setPegLeg] = useState(true)
    const [eyePatch, setEyePatch] = useState(true)
    const [hookHand, setHookHand] = useState(true)
    const [errors, setErrors] = useState(null)
    


    function handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8000/api/pirates', {
            pirateName,
            imageUrl,
            treasureChests,
            pirateCatchPhrase,
            crewPosition,
            pegLeg,
            eyePatch,
            hookHand
        })
        .then(response => navigate('/pirate/' + response.data._id))
        .catch((err) => {
            // this catch happens because of the res.status(400) in the controller
            setErrors(err.response.data.errors);
            console.log(err.response);
          });
        
    }





    return (
        <div>
            <div>
            <h1>Add New Pirate Here!</h1>
            <button onClick={() => navigate('/pirates')}>Crew Board</button>
            </div>

            <form onSubmit={handleSubmit}>
            <div>
                 <label>Pirate Name</label>
                 <input 
                     name="pirateName"
                     value={pirateName}
                     onChange={e => setPirateName(e.target.value)}
                 />

                {errors && (
                    <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.pirateName?.properties?.message}
                    </span>
                )}
             </div>    


             <div>
                 <label>Image Url</label>
                 <input 
                     name='imageUrl'
                     value={imageUrl}
                     onChange={e => setImageUrl(e.target.value)}
                 />
                 {errors && (
                    <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.imageUrl?.properties?.message}
                    </span>
                )}
             </div>


             <div>
                 <label>Treasure Chests</label>
                 <input 
                     name='treasureChests'
                     value={treasureChests}
                     type='number'
                     onChange={e => setTreasureChests(e.target.value)}
                 />

                {errors && (
                    <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.treasureChests?.properties?.message}
                    </span>
                )}
             </div>



             <div>
                 <label>Pirate Catch Phrase</label>
                 <input 
                     name="pirateCatchPhrase"
                     value={pirateCatchPhrase}
                     onChange={e => setPirateCatchPhrase(e.target.value)}
                 />

                {errors && (
                    <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.pirateCatchPhrase?.properties?.message}
                    </span>
                )}
             </div>

                
             <div>
                 <label>Crew Position</label>
                 <select  name="crewPosition" value={crewPosition} onChange={e => setCrewPosition(e.target.value)}>
                    <option value=""></option>
                    <option value="Captain">Captain</option>
                    <option value="First Mate">First Mate</option>
                    <option value="Boatswain">Boatswain</option>
                    <option value="Powder Monkey">Powder Monkey</option>
                    
                </select>

                {errors && (
                    <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.crewPosition?.properties?.message}
                    </span>
                )}
             </div>


             <div>
                 <label>Peg Leg</label>
                 <input 
                     type='checkbox'
                     checked={pegLeg}
                     onChange={e => setPegLeg(e.target.checked)}
                 />
                 {errors && (
                    <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.pegLeg?.properties?.message}
                    </span>
                )}
             </div>


             <div>
                 <label>Eye Patch</label>
                 <input 
                     type='checkbox'
                     checked={eyePatch}
                     onChange={e => setEyePatch(e.target.checked)}
                 />
                 {errors && (
                    <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.eyePatch?.properties?.message}
                    </span>
                )}
             </div>


             <div>
                 <label>Hook Hand</label>
                 <input 
                     type='checkbox'
                     checked={hookHand}
                     onChange={e => setHookHand(e.target.checked)}
                 />
                 {errors && (
                    <span style={{ color: "red" }}>
                    {/* ?. is called optional chaining, NEW feature in JS */}
                    {errors?.hookHand?.properties?.message}
                    </span>
                )}
             </div>


                <button>Add Pirate</button>
            </form>
        </div>
    )

}