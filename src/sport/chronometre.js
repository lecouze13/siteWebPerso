import { useState, useEffect } from 'react';
import './chronometre.css'
let cmpt = 0
export const Chronometre = () => {

    const [counter, setCounter] = useState(0);
    const [miliseconde, setMiliseconde] = useState(0);
    const [minute, setminute] = useState(0);
    const [seconde2, setseconde2] = useState(0);
    const [miliseconde2, setMiliseconde2] = useState(0);
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

            intervalle = setInterval(() => {
                cmpt++
                setMiliseconde((miliseconde) => miliseconde + 1);
                if (cmpt % 10 === 0) {
                    setMiliseconde2((miliseconde2) => miliseconde2 + 1)
                    setMiliseconde(0)

                }
                if (cmpt % 100 === 0) {
                    setCounter((setCounter) => setCounter + 1)

                    setMiliseconde(0)
                    setMiliseconde2(0)
                }

                if (cmpt % 1000 === 0) {
                    setseconde2((seconde2) => seconde2 + 1);
                    setCounter(0)
                }



                if (cmpt % 6000 === 0) {
                    setminute((minute) => minute + 1)

                    setCounter(0)
                    setseconde2(0)
                }

                console.log(cmpt)

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
            console.log(" le chronometre n'est pas activer")
        }

    }

    return (
        <main>
            <h2>Bonjour voici un chronometre avec plusieur fonctionnalite</h2>
            <div className='container'>
                <div className='timer'></div><p className='timer_p'> {minute}  :{seconde2}{counter} : {miliseconde2}{miliseconde}</p>
                <div className='bouton_menu'>
                    <button className='demarrer' onClick={Start}>Start</button>
                    <button className='demarrer' onClick={pause}>Pause</button>
                    <button className='demarrer' onClick={Reset}>Reset</button>
                </div>
            </div>

        </main>
    )
}


