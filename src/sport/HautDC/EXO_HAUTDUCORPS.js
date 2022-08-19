

import { useState } from 'react';
import '../chronometre.css'
import './EXO_HAUTDUCORPS.css'
import { Chronometre } from '../chronometre'
import { Echauffement } from '../Echauffement'
import { Entrainement_hdc } from './Entrainement_hdc';

import { Tableau } from "./tableau";
import { handleBreakpoints } from '@mui/system';









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
                        Seconde={5}
                        Seconde2={0}
                        Minute={0}
                        handle_traing_hdc={handle_traing_hdc}

                    />
                </div>
                ) : (<div> </div>)}





                {menu_choix_training ? (<div>
                    <button className='margin_button_entrainement' onClick={suivant} >
                        Débutez l'entrainement</button>
                    <button className='margin_button_entrainement' onClick={suivant13}> Afficher tab Perfs</button>
                    <button className='margin_button_entrainement' onClick={echauff_trigger}>Echauffement</button></div>) : (<div></div>)

                }

            </div>
            <div className="Haut_du_corp_exo_tableau">

                {Suivant13 ? (<div>
                    <Tableau
                        var1={Tab_rep}

                    />
                </div>
                ) : (<div></div>)}
            </div>
            {Suivant ? (<div className="Haut_du_corp_exo">
                <Chronometre />
                < Entrainement_hdc Suivant1={Suivant1}
                    setSuivant1={setSuivant1}

                />
            </div>
            ) : (<div>
            </div>)


            }
        </div>
    )
}