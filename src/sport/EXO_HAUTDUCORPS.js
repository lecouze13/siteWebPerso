

import { useState } from 'react';
import './chronometre.css'
import './EXO_HAUTDUCORPS.css'
// import { Minuteur } from '../sport/minuteur'
import pompe_PS from "../image/Pompe_PS.png";
import { Tableau } from "./tableau";
import { delay } from 'lodash';
export const EXO_HAUTDUCORPS = () => {

    // function createData(name, exo1, exo2, exo3, exo4, exo5, exo6, exo7, exo8, exo9) {
    //     return { name, exo1, exo2, exo3, exo4, exo5, exo6, exo7, exo8, exo9 };
    // }
    // var var1;
    // const rows = [
    //     createData("teste", var1, 6, 24, 4, 1, 1, 1, 1, 1, 1),


    // ];

    const [Suivant, setSuivant] = useState(false);



    const [Suivant1, setSuivant1] = useState(false);
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



    const [name, setName] = useState("");
    const [Tab_rep] = useState([]);




    const handleSubmit = (evt) => {
        evt.preventDefault();
        Tab_rep.push(name)
    }





    const testt = () => {
        console.log("World!");
    }





    const suivant = () => {
        setSuivant1(true);
        setSuivant(true);
        setSuivant13(false);
    }

    const suivant2 = (e) => {
        setTimeout(() => {
            setSuivant2(true);
            setSuivant1(false);;
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
            setSuivant5(false);;
        }, 10);
    }
    const suivant7 = () => {
        setTimeout(() => {
            setSuivant7(true);
            setSuivant6(false);;
        }, 10);
    }


    const suivant8 = () => {
        setTimeout(() => {
            setSuivant8(true);
            setSuivant7(false);;
        }, 10);
    }


    const suivant9 = () => {
        setTimeout(() => {
            setSuivant9(true);
            setSuivant8(false);;
        }, 10);
    }
    const suivant10 = () => {
        setTimeout(() => {
            setSuivant10(true);
            setSuivant9(false);;
        }, 10);
    }
    const suivant11 = () => {
        setTimeout(() => {
            setSuivant11(true);
            setSuivant10(false);;
        }, 10);
    }
    const suivant12 = () => {
        setTimeout(() => {
            setSuivant12(true);
            setSuivant11(false);;
        }, 10);
    }
    const suivant13 = () => {
        setSuivant13(current => !current);

    }




    return (

        <div className="Haut_du_corp_div">

            <div className="Haut_du_corp_exo_tableau">
                {Suivant13 ? (<div>
                    <Tableau
                        var1={Tab_rep}

                    />
                </div>
                ) : (<div></div>)}
            </div>


            {Suivant ? (<div className="Haut_du_corp_exo">
                {Suivant1 ? (<div>
                    <form onSubmit={handleSubmit}>

                        <h2>Pompe Main surrelever</h2>
                        <img className="pompe" src={pompe_PS} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant2} /></div>

                    </form> </div>
                ) : (<div></div>)}
            </div>
            ) : (<div><button className='margin_button_entrainement' onClick={suivant} > Débutez l'entrainement</button>
                <button onClick={suivant13}> Afficher tab Perfs</button></div>)


            }



            <div className="Haut_du_corp_exo">
                {Suivant2 ? (<div>
                    <form onSubmit={handleSubmit}>

                        <h2>Pompe classique</h2>
                        <img className="pompe" src={pompe_PS} alt="pompe spike"></img>
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
                    <form onSubmit={handleSubmit}>

                        <h2>Pompe pieds surrelever</h2>
                        <img className="pompe" src={pompe_PS} alt="pompe spike"></img>
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
                    <form onSubmit={handleSubmit}>

                        <h2>Dips</h2>
                        <img className="pompe" src={pompe_PS} alt="pompe spike"></img>
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
                    <form onSubmit={handleSubmit}>

                        <h2>exo dos 1</h2>
                        <img className="pompe" src={pompe_PS} alt="pompe spike"></img>
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
                    <form onSubmit={handleSubmit}>

                        <h2>exo dos 2</h2>
                        <img className="pompe" src={pompe_PS} alt="pompe spike"></img>
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
                    <form onSubmit={handleSubmit}>

                        <h2>Superman</h2>
                        <img className="pompe" src={pompe_PS} alt="pompe spike"></img>
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
                    <form onSubmit={handleSubmit}>

                        <h2>curl biceps</h2>
                        <img className="pompe" src={pompe_PS} alt="pompe spike"></img>
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
                    <form onSubmit={handleSubmit}>

                        <h2>curl marteau</h2>
                        <img className="pompe" src={pompe_PS} alt="pompe spike"></img>
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
                    <form onSubmit={handleSubmit}>

                        <h2>developper militaire</h2>
                        <img className="pompe" src={pompe_PS} alt="pompe spike"></img>
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
                    <form onSubmit={handleSubmit}>

                        <h2>exo epaule 2 </h2>
                        <img className="pompe" src={pompe_PS} alt="pompe spike"></img>
                        <div className="rep_div">
                            <label for="nb_rep"> Nombres de rep :</label>

                            <input type="text" id="nb_rep" value={name} onChange={e => setName(e.target.value)}
                            />  </div>
                        <div className='btn_submit_div'>
                            <input className="btn btn-primary" type="submit" value="Valider" onClick={suivant12} />

                        </div></form> </div>
                ) : (<div></div>)}

            </div>
            {console.log(Tab_rep)}


            <div className="Haut_du_corp_exo_tableau">
                {Suivant12 ? (<div>
                    <Tableau
                        var1={Tab_rep}

                    />
                </div>
                ) : (<div></div>)}
            </div>
        </div>
    )
}