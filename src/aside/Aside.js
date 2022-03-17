import './Aside.css'
import croix from '../image/croix.png'
import { useState } from 'react'
import Boutonradio from '../bouton _radio/Bouton_radio';
import Boutoncheckbox from '../bouton_checkbox/Bouton_checkbox';
export const Aside = ({ handleChange1, value, checked, handleChange_checkbox, checked2,
    handleChange_checkbox2 }) => {
    const [open, setopen] = useState(true)




    const [valRange, set_val_range] = useState("")
    const handlechangeRange = (e) => {
        set_val_range(e.target.value)
    }
    return open ? (

        <main>

            <button className="open_cart" onClick={() => setopen(false)}>

                <div className="open_cart_1"></div>
                <div className="open_cart_2"></div>
                <div className="open_cart_3"></div>

            </button>

        </main>
    ) : (
        <aside>
            <button className='bouton_croix' onClick={() => setopen(true)}>
                <img id="croix" src={croix} alt=" croix"></img>
            </button>
            <ul>

                <ol>

                    <Boutonradio
                        label4="Tout afficher"
                        label1=" Moins de 5€"
                        label2="5€ à 10€"
                        label3="10€ et plus"
                        handleChange1={handleChange1}
                        value={value}

                    />



                </ol>
                <ol>
                    <Boutoncheckbox
                        labelCheckbox="nom Z->A"
                        checked={checked}
                        handleChange_checkbox={handleChange_checkbox}
                    />
                </ol>
                <ol>
                    <Boutoncheckbox
                        labelCheckbox="Prix croissant"
                        checked={checked2}
                        handleChange_checkbox={handleChange_checkbox2}
                    />
                </ol>

                <ol>
                    <div>
                        <input type="range" id="volume" name="volume"
                            min="0" max="100" step="1" value={valRange} onChange={handlechangeRange}></input>
                        <label for="volume">Volume ={valRange}</label>
                    </div>
                </ol>
                <ol>
                    test 1
                </ol>
                <ol>
                    test 1
                </ol>
                <ol>
                    test 1
                </ol>
                <ol>
                    test 1
                </ol>
                <ol>
                    test 1
                </ol>
            </ul>


        </aside>
    )
}


