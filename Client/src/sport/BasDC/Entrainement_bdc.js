


import { useState, useEffect } from 'react';



import Pompe_ms from '../../image/muscu/Pompe_MS.jfif'
import Pompe from '../../image/muscu/Pompe Classique.png'
import pompe_PS from "../../image/muscu/Pompe_PS.png";
import Dips from '../../image/muscu/Dips.gif'
import Traction_Pronation from '../../image/muscu/Traction Pronation.png'
import Traction_Supination from '../../image/muscu/Traction_supination.webp'
import Superman from '../../image/muscu/Superman.webp'
import Curl_biceps from '../../image/muscu/Curl_biceps.webp'
import Curl_marteau from '../../image/muscu/Curl_marteau.webp'
import Developper_militaire from '../../image/muscu/Developper_militaire.webp'
import elevation_laterale from '../../image/muscu/Elevations-laterales.webp'

import { Tableau } from "../BasDC/tableau_bdc";
import axios from 'axios';
import ReactAudioPlayer from 'react-audio-player';
import music1 from '../../audio/music1Sport.mp3'
import music40min from '../../audio/40min_masculinity.mp3'

export const ENTRAINEMENT_BDC = ({ Suivant1, setSuivant1 }) => {


    [Suivant1, setSuivant1] = useState(true)


    const [Suivant2, setSuivant2] = useState(false);
    const [Suivant3, setSuivant3] = useState(false);
    const [Suivant4, setSuivant4] = useState(false);
    const [Suivant5, setSuivant5] = useState(false);
    const [Suivant6, setSuivant6] = useState(false);
    const [Suivant7, setSuivant7] = useState(false);
    const [Suivant8, setSuivant8] = useState(false);
    const [Suivant9, setSuivant9] = useState(false);
    const [Suivant10, setSuivant10] = useState(false);




    const [Suivant11, setSuivant11] = useState(false);

    const [Suivant12, setSuivant12] = useState(false);
    const [Suivant13, setSuivant13] = useState(false);
    const [Suivant14, setSuivant14] = useState(false);
    const [Suivantbiceps, setSuivantbiceps] = useState(false);






    const suivant2 = (e) => {
        setTimeout(() => {
            setSuivant2(true);
            setSuivant1(false);
        }, 10);


    }

    const suivant3 = (e) => {

        setTimeout(() => {
            setSuivant3(true);
            setSuivant2(false);;
        }, 10);

    }

    const suivant4 = () => {
        setTimeout(() => {
            setSuivant4(true);
            setSuivant3(false);;
        }, 10);
    }

    const suivant5 = () => {
        setTimeout(() => {
            setSuivant5(true);
            setSuivant4(false);;
        }, 10);
    }
    const suivant6 = () => {
        setTimeout(() => {
            setSuivant6(true);
            setSuivant5(false);
        }, 10);
    }
    const suivant7 = () => {
        setTimeout(() => {
            setSuivant7(true);
            setSuivant6(false);
        }, 10);
    }


    const suivant8 = () => {
        setTimeout(() => {
            setSuivant8(true);
            setSuivant7(false);
        }, 10);
    }


    const suivantbiceps = () => {
        setTimeout(() => {
            setSuivantbiceps(true);
            setSuivant9(false);
        }, 10);
    }
    const suivant9 = () => {
        setTimeout(() => {
            setSuivant9(true);
            setSuivant8(false);
        }, 10);
    }
    const suivant10 = () => {
        setTimeout(() => {
            setSuivant10(true);
            setSuivantbiceps(false);
        }, 10);
    }
    const suivant11 = () => {
        setTimeout(() => {
            setSuivant11(true);
            setSuivant10(false);
        }, 10);
    }
    const suivant12 = () => {
        setTimeout(() => {
            setSuivant12(true);
            setSuivant11(false);
        }, 10);
    }

    const suivant14 = () => {
        setTimeout(() => {
            setSuivant14(true);
            setSuivant13(false);
        }, 10);
    }

    var datee = new Date()
    var TodayDate = datee.getDate() + "/" + (datee.getMonth() + 1) + "/" + datee.getFullYear()

    const suivant13 = () => {


        setTimeout(() => {




            setSuivant13(true);
            setSuivant12(false);


            console.log(Tab_rep)

            axios.post("https://lorenzo-geano-sport-app.herokuapp.com/API/insertrep_bdc", { Tab_rep: Tab_rep, date: TodayDate })
                .then(() => { alert("inset succes") });




        }, 10);
    }


    const handleSubmit = (evt) => {
        evt.preventDefault();
        Tab_rep.push(name)
    }


    const [name, setName] = useState("");
    const [Tab_rep] = useState([]);


    const [music_1_over, setmusic_1_over] = useState(false)


    const changeMusic = () => {
        setmusic_1_over(!music_1_over)
    }








    return (

        <div>


            <ReactAudioPlayer
                src={music_1_over ? music1 : music40min}
                autoPlay
                controls
                volume={0.9}
                onEnded={changeMusic}

            />


            {
                Suivant1 ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2>Pompes decline </h2>
                        <img className="pompe" src={pompe_PS} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant2} /></div>

                    </form> </div >
                ) : (<div></div>)
            }




            <div className="Haut_du_corp_exo">
                {Suivant2 ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2>Pompe classique</h2>
                        <img className="pompe" src={Pompe} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant3} />

                        </div></form> </div>

                ) : (<div></div>)
                }
            </div >


            <div className="Haut_du_corp_exo">
                {Suivant3 ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2>Pompe  incline</h2>
                        <img className="pompe" src={Pompe_ms} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant4} />

                        </div></form> </div>

                ) : (<div></div>)}
            </div>

            <div className="Haut_du_corp_exo">
                {Suivant4 ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2>Dips</h2>
                        <img className="pompe" src={Dips} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant5} />

                        </div></form> </div>
                ) : (<div></div>)}
            </div>

            <div className="Haut_du_corp_exo">
                {Suivant5 ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2> Traction Pronation
                        </h2>
                        <img className="pompe" src={Traction_Pronation} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant6} />

                        </div></form> </div>
                ) : (<div></div>)}
            </div>


            <div className="Haut_du_corp_exo">
                {Suivant6 ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2>Traction Supination</h2>
                        <img className="pompe" src={Traction_Supination} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant7} />

                        </div></form> </div>
                ) : (<div></div>)}
            </div>





            <div className="Haut_du_corp_exo">
                {Suivant7 ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2>Superman</h2>
                        <img className="pompe" src={Superman} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant8} />

                        </div></form> </div>
                ) : (<div></div>)}
            </div>

            <div className="Haut_du_corp_exo">
                {Suivant8 ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2>curl biceps</h2>
                        <img className="pompe" src={Curl_biceps} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant9} />

                        </div></form> </div>
                ) : (<div></div>)}
            </div>

            <div className="Haut_du_corp_exo">
                {Suivant9 ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2>curl marteau</h2>
                        <img className="pompe" src={Curl_marteau} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivantbiceps} />

                        </div></form> </div>
                ) : (<div></div>)}
            </div>


            <div className="Haut_du_corp_exo">
                {Suivantbiceps ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2>curl 3</h2>
                        <img className="pompe" src={Developper_militaire} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant10} />

                        </div></form> </div>
                ) : (<div></div>)}
            </div>


            <div className="Haut_du_corp_exo">
                {Suivant10 ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2>developper militaire</h2>
                        <img className="pompe" src={Developper_militaire} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant11} />

                        </div></form></div>
                ) : (<div></div>)}

            </div>

            <div className="Haut_du_corp_exo">
                {Suivant11 ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2>exo epaule 2 </h2>
                        <img className="pompe" src={elevation_laterale} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant12} />

                        </div></form> </div>
                ) : (<div></div>)}

            </div>
            <div className="Haut_du_corp_exo">
                {Suivant12 ? (<div>
                    <form onSubmit={handleSubmit} className="forme_HDC">

                        <h2>exo epaule 3 </h2>
                        <img className="pompe" src={elevation_laterale} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant13} />

                        </div></form> </div>
                ) : (<div></div>)}

            </div>

            <div className="Haut_du_corp_exo_tableau">
                {Suivant13 ? (

                    <div className='btn_submit_div'>
                        <button onClick={suivant14}>Voir le Tableau</button>


                    </div>

                ) : (<div></div>)}
            </div>
            <div className="Haut_du_corp_exo_tableau">
                {Suivant14 ? (<div>
                    <Tableau
                        var1={Tab_rep}

                    />
                </div>
                ) : (<div></div>)}
            </div>
        </div>
    )
}