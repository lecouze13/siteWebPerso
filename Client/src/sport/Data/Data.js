

import { useState } from 'react';




import { GRAFFE_POIDS } from "../GRAFFE_POIDS";
import { PERF_MAX } from "../BasDC/PERF_MAX.js";
import axios from 'axios';





export const Data = () => {



    const [menu, setmenu] = useState(true);


    const [alert1, setalert1] = useState(false);

    const [graff_poids, Setgraff_poids] = useState(false);

    var datee = new Date()
    var TodayDate = datee.getDate() + "/" + (datee.getMonth() + 1) + "/" + datee.getFullYear()

    const afficher_poids = () => {



        if (poids_input < 1 || poids_input > 500 || poids_input === undefined) {

            setalert1(true)
        } else {


            axios.post("https://lorenzo-geano-sport-app.herokuapp.com/API/addpoids", { poids_input: poids_input, date: TodayDate })
     
            setTimeout(() => {
                Setgraff_poids(current => !current);
            }, 35);

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






    const [button_perf_max, Setbutton_perf_max] = useState(false);
    const affiche_perf_max = () => {
        Setbutton_perf_max(true)
        setmenu(false)

    }


    const [Pompe_max, setPompe_max] = useState();
    const input_Pompe_max = (e) => {

        setPompe_max(e.target.value)

    }



    const [PRO_max, settraction_PRO] = useState();
    const input_traction_PRO = (e) => {

        settraction_PRO(e.target.value)
    }

    const [SUP_max, settraction_SUP] = useState();
    const input_traction_SUP = (e) => {

        settraction_SUP(e.target.value)
    }



    const [max1, setmax1] = useState(false);

    const aff_max1 = () => {

        if (Pompe_max < 1 || Pompe_max > 500 || Pompe_max === undefined) {

            setalert1(true)
        } else {
            setalert1(false)
            setmax1(true)
            setmenu(false)
            setmax2(true)

        }






    }

    const [max2, setmax2] = useState(false);

    const aff_max2 = () => {
        if (PRO_max < 1 || PRO_max > 500 || PRO_max === undefined) {

            setalert1(true)
        } else {
            setalert1(false)
            setmax2(false)
            setmax3(true)

        }


    }

    const [max3, setmax3] = useState(false);
    const [affiche_perf_max_graphe, setaffiche_perf_max_graphe] = useState(false);

    const aff_max3 = () => {
        if (SUP_max < 1 || SUP_max > 500 || SUP_max === undefined) {

            setalert1(true)
        } else {
            setalert1(false)
            setmax3(false)
            setaffiche_perf_max_graphe(true)

        }


    }







    return (

        <div >
            {menu ? (<div className='Haut_du_corp_div_choix'>
                <button className='margin_button_entrainement' onClick={affiche_input_poids}>Poids</button>

                <button className='margin_button_entrainement' onClick={affiche_perf_max}>REP MAX</button>

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








                    {button_perf_max ?
                        (
                            <div>


                                {alert1 ? (<div class="alert alert-danger" id="alert_poids" role="alert">
                                    Entrez une valeur comprise entre 0 et 500 kg
                                </div>) : (<div></div>)}

                                {max1 ? <div></div> :

                                    (<div className='div_poids'>
                                        <label for="nb_rep"> Pompe(rep max)</label>  <input type="number" id="input_poids" step="0.01" min="1"
                                            onChange={input_Pompe_max} />
                                        <button onClick={aff_max1} >Valider</button>
                                    </div>)
                                }


                                {max2 ? (<div className='div_poids'>
                                    <label for="nb_rep">Traction Pronation(rep max)</label>  <input type="number" id="input_poids" step="0.01" min="1"
                                        onChange={input_traction_PRO} />
                                    <button onClick={aff_max2} >Valider</button>
                                </div>) : <div></div>

                                }
                                {max3 ? (<div className='div_poids'>
                                    <label for="nb_rep"> Traction Supination(rep max)</label>  <input type="number" id="input_poids" step="0.01" min="1"
                                        onChange={input_traction_SUP} />
                                    <button onClick={aff_max3} >Valider</button>
                                </div>) : <div></div>

                                }
                            </div>) :
                        <div></div>

                    }

                    {affiche_perf_max_graphe ? <PERF_MAX Pompe_max={Pompe_max}
                        PRO_max={PRO_max}
                        SUP_max={SUP_max} /> : <div></div>
                    }


                </div>





            )



            }


        </div >
    )
}