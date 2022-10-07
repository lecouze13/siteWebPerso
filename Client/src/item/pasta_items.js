
import './pasta_items.css'
function pasta_items({ name, cover, id, price }) {

    return (
        (<li key={id} className='pasta_item'>


            <img className='img_pasta_item' src={cover} alt={`${name} cover`} />
            {name} {price}€
            <div className="cuisson_afffichage">
            </div>

        </li>
        ))

}
// function click(pastaName) {
//     alert(`Tu selectionne ${pastaName}`)

// }
export default pasta_items