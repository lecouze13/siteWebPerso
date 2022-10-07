
import { useState } from 'react';

import './EXO_BASDUCORPS.css'



export const EXO_BASDUCORPS = () => {



    const [menu, setmenu] = useState(true);









    const [entrainement, setentrainement] = useState(false);
    const affiche_entrainement = () => {
        setentrainement(true)
        setmenu(false)
    }







    return (

        <div >
            {menu ? (<div className='Haut_du_corp_div_choix'>

                <button className='margin_button_entrainement' onClick={affiche_entrainement}>Entrainement</button>

            </div>) : (
                <div>


                    {entrainement ? <a target="_blank" rel="noreferrer" className="link_kcal" href="https://www.youtube.com/watch?v=G2NWfxVM8jg&ab_channel=EricFlag">Lien vers L'entrainement</a> : <div></div>}
                </div>


            )

            }

        </div >
    )

}