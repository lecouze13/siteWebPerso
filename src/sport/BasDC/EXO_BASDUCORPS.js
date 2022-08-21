
import { useState } from 'react';

import './EXO_BASDUCORPS.css'
import { GRAFFE_POIDS } from "../GRAFFE_POIDS";

export const EXO_BASDUCORPS = () => {



    const [menu, setmenu] = useState(true);


    const [alert1, setalert1] = useState(false);

    const [graff_poids, Setgraff_poids] = useState(false);
    const afficher_poids = () => {



        if (poids_input < 1 || poids_input > 500 || poids_input === undefined) {

            setalert1(true)
        } else {
            Setgraff_poids(current => !current);
        }



    }
    const [poids_input, setpoids_input] = useState();
    const input_poids_verif = (e) => {

        setpoids_input(e.target.value)

    }
    const [button_graff_poids, Setbutton_graff_poids] = useState(false);
    const affiche_input_poids = () => {
        Setbutton_graff_poids(!button_graff_poids)
        setmenu(false)
    }

    const [entrainement, setentrainement] = useState(false);
    const affiche_entrainement = () => {
        setentrainement(true)
        setmenu(false)
    }

    return (

        <div >
            {menu ? (<div className='Haut_du_corp_div_choix'>
                <button className='margin_button_entrainement' onClick={affiche_input_poids}>Poids</button>

                <button className='margin_button_entrainement' onClick={affiche_entrainement}>Entrainement</button>
            </div>) : (
                <div>
                    {button_graff_poids ? (<div>
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
                                </div>
                            </div>)
                        }
                    </div>) : (<div></div>

                    )

                    }

                    {entrainement ? <h2>ekf,lle</h2> : <div></div>}



                </div>





            )







            }






        </div >
    )

}