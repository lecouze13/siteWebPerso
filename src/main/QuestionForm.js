
import './QuestionForm.css'

function QuestionForm({ setActiveCategory, categories, activeCategory }) {




    return (

        <div className="Selecteur_Pates">
            <label for="TypePasta">Entrez un type de pate</label>




            <div className="input-group">

                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"

                    value={activeCategory}
                    onChange={(e) => {
                        setActiveCategory(e.target.value)
                        // Test();

                    }




                    } />



                <button className="btn btn-outline-success my-2 my-sm-0"
                    onClick={() => setActiveCategory('')}>Reset
                </button>
            </div>

        </div>

    )
}



export default QuestionForm


