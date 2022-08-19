
import { useState } from 'react';

import './EXO_BASDUCORPS.css'
import { GRAFFE_POIDS } from "../GRAFFE_POIDS";

export const EXO_BASDUCORPS = () => {
    const [poids_input, setpoids_input] = useState();
    const [alert1, setalert1] = useState(false);

    const [graff_poids, Setgraff_poids] = useState(false);
    const afficher_poids = () => {



        if (poids_input < 1 || poids_input > 500 || poids_input === undefined) {

            setalert1(true)
        } else {
            Setgraff_poids(current => !current);
        }



    }
    const input_poids_verif = (e) => {

        setpoids_input(e.target.value)

    }


    return (

        <div >


            {graff_poids ? (
                <GRAFFE_POIDS Poids_input={poids_input} />) : (
                <div>
                    {alert1 ? (<div class="alert alert-danger" id="alert_poids" role="alert">
                        Entrez une valeur comprise entre 0 et 500 kg
                    </div>) : (<div></div>)}

                    <div className='div_poids'>
                        <label for="nb_rep"> Votre Poids en (kg)</label>  <input type="number" id="input_poids" step="0.01" min="1"
                            onChange={input_poids_verif} />
                        <button onClick={afficher_poids} >Valider</button>
                    </div></div>)
            }



        </div >
    )

}