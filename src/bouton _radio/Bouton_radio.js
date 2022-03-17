
import "./Bouton_radio.css"
function Bouton_radio({ label1, label2, label3, label4, handleChange1 }) {




    // const handleChange2 = () => {
    //     Setvalue(event.target.value);
    //     alert(value);
    // };

    // const handleChange3 = () => {
    //     Setvalue(event.target.value);
    //     alert(value);
    // };


    // const handleChange3 = () => {
    //     setvalue('3');
    //     alert(value);
    // };


    return (
        <div className='div_radio_superieur'>
            <div className='div_radio_inferieur'>

                <input type="radio" id="choix1"
                    name="radio_prix" value="0"
                    onChange={handleChange1}

                ></input> <label for="choix1">{label4}</label>
            </div>
            <div className='div_radio_inferieur'>

                <input type="radio" id="choix1"
                    name="radio_prix" value="5"
                    onChange={handleChange1}

                ></input> <label for="choix1">{label1}</label>
            </div>
            <div className='div_radio_inferieur'>

                <input type="radio" id="choix1"
                    name="radio_prix" value="9"
                    onChange={handleChange1}

                ></input>     <label for="choix1">{label2}</label>

            </div>
            <div className='div_radio_inferieur'>

                <input type="radio" id="choix1"
                    name="radio_prix" value="10"
                    onChange={handleChange1}

                ></input><label for="choix1">{label3}</label>
            </div>

        </div>
    )
}
export default Bouton_radio