import { useState, useEffect } from 'react';
import './minuteur.css'
let cmpt = 0
export const Minuteur = ({ Miliseconde, Miliseconde2, Seconde, Seconde2, Minute }) => {

    const [counter, setCounter] = useState(Seconde);
    const [miliseconde, setMiliseconde] = useState(Miliseconde);
    const [minute, setminute] = useState(Minute);
    const [seconde2, setseconde2] = useState(Seconde2);
    const [miliseconde2, setMiliseconde2] = useState(Miliseconde2);
    const [isactive, setactive] = useState(false);
    const [isset, setisset] = useState(false);

    function Start() {
        if (isactive === true && isset === true) {
            alert("deja en marche")
        }
        else {



            setactive(true);
            setisset(true)


        }
    }
    var intervalle

    useEffect(() => {
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
        setMiliseconde(1)
        setMiliseconde2(0)
        setseconde2(0)
        cmpt = 0
        Setvalue1(0)
        Setvalue2(0)
        Setvalue3(0)
        Setvalue4(0)
        Setvalue5(0)
    }


    function pause() {

        if (isactive === true) {


            setisset(false)
        }
        else {
            console.log(" le chronometre n'est pas activer")
        }

    }
    const [value1, Setvalue1] = useState(0)
    const [value2, Setvalue2] = useState(0)
    const [value3, Setvalue3] = useState(0)
    const [value4, Setvalue4] = useState(0)
    const [value5, Setvalue5] = useState(0)

    const handleChange1 = () => {
        Setvalue1(value1 + 1);
        setminute(value1);


        if (value1 === 9) {
            console.log("eeee" + value1)
            Setvalue1(0);
            setminute(9);
        }


    };
    const handleChange2 = () => {
        Setvalue2(value2 + 1);
        setseconde2(value2);


        if (value2 === 5) {
            console.log("eeee" + value2)
            Setvalue2(0);
            setseconde2(5);

        }


    };
    const handleChange3 = () => {
        Setvalue3(value3 + 1);
        setCounter(value3);


        if (value3 === 9) {
            console.log("eeee" + value3)
            Setvalue3(0);
            setCounter(9);
        }


    };
    const handleChange4 = () => {
        Setvalue4(value4 + 1);
        setMiliseconde2(value4);


        if (value4 === 9) {
            console.log("eeee" + value4)
            Setvalue4(0);
            setMiliseconde2(9);
        }


    };
    const handleChange5 = () => {
        Setvalue5(value5 + 1);
        setMiliseconde(value5);


        if (value5 === 9) {
            console.log("eeee" + value5)
            Setvalue5(0);
            setMiliseconde(9);
        }


    };
    return (
        <main>
            {/* <h2> minuteur avec plusieur fonctionnalite</h2> */}

            <div className='container'>

                <div className='timer'></div><p className='timer_p'>
                    <div className='all'>
                        <div className='bouton_up' onClick={handleChange1} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                            </svg>
                        </div>
                        <p className='texte_bouton_up'> {minute}</p>
                    </div>

                    <div className='point'><p className='texte_bouton_up'>:</p></div>
                    <div className='all'>
                        <div className='bouton_up' onClick={handleChange2} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                            </svg>
                        </div>

                        <p className='texte_bouton_up'>{seconde2}</p>
                    </div>


                    <div className='all'>
                        <div className='bouton_up' onClick={handleChange3} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                            </svg>
                        </div>
                        <p className='texte_bouton_up'>{counter}</p>
                    </div>

                    <div className='point'><p className='texte_bouton_up'>:</p></div>
                    <div className='all'>
                        <div className='bouton_up' onClick={handleChange4} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                            </svg>
                        </div>

                        <p className='texte_bouton_up'>{miliseconde2}</p>
                    </div>
                    <div className='all'>
                        <div className='bouton_up' onClick={handleChange5} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-square" viewBox="0 0 16 16">
                                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                <path d="M3.544 10.705A.5.5 0 0 0 4 11h8a.5.5 0 0 0 .374-.832l-4-4.5a.5.5 0 0 0-.748 0l-4 4.5a.5.5 0 0 0-.082.537z" />
                            </svg>
                        </div>
                        <p className='texte_bouton_up'>{miliseconde}</p>
                    </div>

                </p>
                <div className='bouton_menu_min'>
                    <button className='demarrer' onClick={Start}>Start</button>
                    <button className='demarrer' onClick={pause}>Pause</button>
                    <button className='demarrer' onClick={Reset}>Reset</button>
                </div>

            </div >
            <div class="minuteur">



            </div>

        </main >
    )
}


