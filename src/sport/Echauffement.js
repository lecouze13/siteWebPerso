import { useState, useEffect } from 'react';
import "./Echauffement.css"




import nuques from '../image/echauff/cercle de nuques.png'
import jumping_jack from '../image/echauff/jumping_jack.gif'
import epaules from '../image/echauff/cercle depaules.png'
import coudes from '../image/echauff/cercle de coudes.gif'
import poigne from '../image/echauff/cercle de poignes.gif'
import genou from '../image/echauff/coude au genou.jpg'
import gainage from '../image/echauff/squat a position pompe a gainage.png'
import ReactAudioPlayer from 'react-audio-player';
import music1 from '../audio/music1Sport.mp3'



// import './Echauffement.css'
let cmpt = 0
export const Echauffement = ({ Miliseconde, Miliseconde2, Seconde, Seconde2, Minute,
    handle_traing_hdc }) => {

    const [counter, setCounter] = useState(Seconde);
    const [miliseconde, setMiliseconde] = useState(Miliseconde);
    const [minute, setminute] = useState(Minute);
    const [seconde2, setseconde2] = useState(Seconde2);
    const [miliseconde2, setMiliseconde2] = useState(Miliseconde2);
    const [isactive, setactive] = useState(false);
    const [isset, setisset] = useState(false);

    //deffilement image


    const [image1, setimage1] = useState(false);
    const [image2, setimage2] = useState(false);
    const [image3, setimage3] = useState(false);
    const [image4, setimage4] = useState(false);
    const [image5, setimage5] = useState(false);
    const [image6, setimage6] = useState(false);
    const [image7, setimage7] = useState(false);
    const [image8, setimage8] = useState(false);




    function Start() {
        if (isactive === true && isset === true) {

        }
        else {



            setactive(true);
            setisset(true)


        }
    }
    var intervalle
    useEffect(() => {
        Start();
        if (isactive === true && isset === true) {
            cmpt = miliseconde + miliseconde2 * 10 + counter * 100 + seconde2 * 1000 + minute * 6000
            intervalle = setInterval(() => {
                // if (miliseconde === 0
                //     //  && miliseconde === 0 && counter === 0 && seconde2 === 0 && minute === 0
                // ) {
                //     alert("stop");
                // }


                if (cmpt > 1) {


                    cmpt--
                    setMiliseconde((miliseconde) => miliseconde - 1);


                    if (cmpt % 10 === 0) {

                        setMiliseconde2((miliseconde2) => miliseconde2 - 1)
                        setMiliseconde(9)

                    }
                    if (cmpt % 100 === 0) {

                        setCounter((counter) => counter - 1)

                        setMiliseconde(9)
                        setMiliseconde2(9)
                    }

                    if (cmpt % 1000 === 0) {
                        setseconde2((seconde2) => seconde2 - 1);
                        setCounter(9)
                    }



                    if (cmpt % 6000 === 0) {
                        setminute((minute) => minute - 1)

                        setCounter(9)
                        setseconde2(5)
                    }
                    if (cmpt === 1) {

                        setimage8(true)
                        setimage7(false)



                    }


                    if (cmpt === 6000) {

                        setimage7(true)
                        setimage6(false)

                    }
                    if (cmpt === 9000) {

                        setimage6(true)
                        setimage5(false)
                    }
                    if (cmpt === 12000) {
                        setimage5(true)
                        setimage4(false)
                    }
                    if (cmpt === 15000) {

                        setimage4(true)
                        setimage3(false)
                    }
                    if (cmpt === 18000) {

                        setimage3(true)
                        setimage2(false)

                    }
                    if (cmpt === 21000) {
                        setimage2(true)
                        setimage1(false)

                    }
                    if (cmpt === 24000) {

                        setimage1(true)



                    }


                    // console.log(cmpt)
                }
                else {
                    Reset();
                }
            }, 10);
        } else {
            clearInterval(intervalle);

        }
        return () => {
            clearInterval(intervalle);
        };
    }, [isactive, isset]);











    function Reset() {


        setisset(false)

        setCounter(0)
        setminute(0)
        setMiliseconde(0)
        setMiliseconde2(0)
        setseconde2(0)
        cmpt = 0
    }


    function pause() {

        if (isactive === true) {


            setisset(false)
        }
        else {

        }

    }













    return (
        <div>
            <ReactAudioPlayer
                src={music1}
                autoPlay
                controls

            />
            <main className='container_echauff'>



                {/* // partie audio */}


                {image1 ? (<div className='div_img_echauff'>


                    <h2>jumping jack</h2>
                    <img className="img_echauf" src={jumping_jack} alt="jumping jack"></img>

                </div>
                ) : (<div></div>)}

                {image2 ? (<div className='div_img_echauff'>


                    <h2>cercle de nuques</h2>
                    <img className="img_echauf" src={nuques} alt="cercle de nuques"></img>

                </div>
                ) : (<div></div>)}

                {image3 ? (<div>


                    <h2>cercle d'epaules    </h2>
                    <img className="img_echauf" src={epaules} alt="cercle d'epaules"></img>

                </div>
                ) : (<div></div>)}

                {image4 ? (<div>


                    <h2>  cercle de coudes  </h2>
                    <img className="img_echauf" src={coudes} alt="cercle de coudes"></img>

                </div>
                ) : (<div></div>)}

                {image5 ? (<div>


                    <h2>cercle de poignes    </h2>
                    <img className="img_echauf" src={poigne} alt="cercle de poignes"></img>

                </div>
                ) : (<div></div>)}

                {image6 ? (<div>


                    <h2>   coude au genou </h2>
                    <img className="img_echauf" src={genou} alt="coude au genou"></img>

                </div>
                ) : (<div></div>)}

                {image7 ? (<div className='div_img_echauff'>


                    <h2>squat / pompe / gainage    </h2>
                    <img className="img_echauf" src={gainage} alt="squat a position pompe a gainage"></img>

                </div>
                ) : (<div></div>)}

                {image8 ? (<div>


                    <h2>echauff terminer    </h2>
                    <img className="img_echauf" src={gainage} alt="squat a position pompe a gainage"></img>
                    <button onClick={handle_traing_hdc
                    }>Continuer sur l'entrainement Hdc</button>
                </div>
                ) : (<div></div>)
                }

                <div className='timer'></div><p className='timer_echauff'> {minute}  :{seconde2}{counter} : {miliseconde2}{miliseconde}</p>
            </main >
        </div>
    )
}


