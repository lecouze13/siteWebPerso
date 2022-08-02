
import { useState } from 'react';

// import { Minuteur } from '../sport/minuteur pm^fle$kfe$'
//test
import { GRAFFE_POIDS } from "./GRAFFE_POIDS";

export const EXO_BASDUCORPS = () => {
    const [poids_input, setpoids_input] = useState();
    const [graff_poids, Setgraff_poids] = useState(false);
    const afficher_poids = () => {
        Setgraff_poids(current => !current);

    }
    // const Submit_poids = () => {
    //     setpoids_input(poids_input)
    // }

    return (

        <div>


            {graff_poids ? (
                <GRAFFE_POIDS Poids_input={poids_input} />) : (
                <div> <label for="nb_rep"> Votre Poids en (kg)</label>  <input type="text" id="nb_rep"
                    onChange={e => setpoids_input(e.target.value)} />
                    <button onClick={afficher_poids} >Valider</button>
                </div>)
            }



        </div >
    )

}