
import "./bouton_checkbox.css"
function Bouton_checkbox({ labelCheckbox,
    checked, handleChange_checkbox }) {


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
        <div className='div_check_superieur'>


            <input type="checkbox" id="choix1_checkbox"
                name="checkbox_type"
                onChange={handleChange_checkbox}

                value={checked}

            ></input>
            <label for="choix1_checkbox">{labelCheckbox}</label>
        </div>

    )
}
export default Bouton_checkbox