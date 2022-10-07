

import { useState } from 'react';
import '../chronometre.css'
import './EXO_HAUTDUCORPS.css'
import { Chronometre } from '../chronometre'
import { Echauffement } from '../Echauffement'
import { ENTRAINEMENT_HDC } from './Entrainement_hdc';

import { Tableau } from "./tableau";











export const EXO_HAUTDUCORPS = () => {


    const [Suivant, setSuivant] = useState(false);




    const [echauff, setechauff] = useState(false);
    const echauff_trigger = () => {
        setechauff(true);
        setmenu_choix_training(false)
    }

    const [Tab_rep] = useState([]);
    const [Suivant1, setSuivant1] = useState(false);
    const [Suivant13, setSuivant13] = useState(false);
    const [menu_choix_training, setmenu_choix_training] = useState(true);


    const suivant = () => {
        setSuivant1(true);
        setSuivant(true);
        setSuivant13(false);
        setmenu_choix_training(false)
    }

    const suivant13 = () => {
        setSuivant13(current => !current);
        setmenu_choix_training(false)
    }





    const handle_traing_hdc = () => {

        setSuivant(true)
        setechauff(false)
    }



    return (

        <div>
            <div className="Haut_du_corp_div_choix">

                {echauff ? (<div>
                    <Echauffement Miliseconde={1}
                        Miliseconde2={0}
                        Seconde={0}
                        Seconde2={0}
                        Minute={4}
                        handle_traing_hdc={handle_traing_hdc}

                    />
                </div>
                ) : (<div> </div>)}





                {menu_choix_training ? (<div>

                    <button className='margin_button_entrainement' onClick={suivant13}> Afficher tab Perfs</button>
                    <button className='margin_button_entrainement' onClick={echauff_trigger}>Echauffement</button>
                    <button className='margin_button_entrainement' onClick={suivant} >
                        Débutez l'entrainement</button></div>) : (<div></div>)

                }

            </div>
            <div className="Haut_du_corp_exo_tableau">

                {Suivant13 ? (<div>
                    <Tableau />
                </div>
                ) : (<div></div>)}
            </div>
            {Suivant ? (<div className="Haut_du_corp_exo">
                <Chronometre />
                <ENTRAINEMENT_HDC Suivant1={Suivant1}
                    setSuivant1={setSuivant1}

                />
            </div>
            ) : (<div>
            </div>)


            }
        </div>
    )
}