
import { useState } from 'react';
import { Chronometre } from '../chronometre'
import '../chronometre.css'
import { Echauffement } from '../Echauffement'
import { Tableau } from "./tableau_bdc";
import '../HautDC/EXO_HAUTDUCORPS.css'
import { ENTRAINEMENT_BDC } from './Entrainement_bdc'


export const EXO_BASDUCORPS = () => {












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

        <div className='global'>
            <div className="Haut_du_corp_div_choix">
                {menu_choix_training ? (<div className='global'>

                    <button className='margin_button_entrainement' onClick={suivant13}> Afficher tab Perfs</button>
                    <button className='margin_button_entrainement' onClick={echauff_trigger}>Echauffement</button>
                    <button className='margin_button_entrainement' onClick={suivant} >
                        Débutez l'entrainement</button></div>) : (<div></div>)

                }
            </div>

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



            <div className="Haut_du_corp_exo_tableau">

                {Suivant13 ? (<div>
                    <Tableau />
                </div>
                ) : (<div></div>)}
            </div>
            {
                Suivant ? (<div className="Haut_du_corp_exo">
                    <Chronometre />
                    <ENTRAINEMENT_BDC Suivant1={Suivant1}
                        setSuivant1={setSuivant1}

                    />
                </div>
                ) : (<div>
                </div>)


            }

        </div>
    )

}