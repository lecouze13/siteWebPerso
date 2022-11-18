import './Header.css'
import { Link } from "react-router-dom";
import logo from '../image/logocyan.png'
import { useEffect, useState } from 'react';

function Header() {
    var connecter_localStorage = localStorage.getItem("key")
    function deconnexion() {
        localStorage.removeItem("key");
        sessionStorage.removeItem("Pseudo")
        window.location.reload()
    }
    const [UserLocalStorage, setUserLocalStorage] = useState(false)
    useEffect(() => {


        setUserLocalStorage(sessionStorage.getItem("Pseudo"))

    }, [])


    return (


        <div className='header'>

            <div className="titre">
                <img className='logo' src={logo}></img>
            </div>
            <nav className='nav_header'>

                <div className="header_menue"><Link className="menue" to="/">Home</Link>

                    <Link className="menue" to="/invoices">Theme</Link>
                    <Link className="menue" to="/expenses">Login</Link>
                    <Link className="menue" to="/sport">Sport&diet</Link></div>


            </nav>
            <div className="eee">
                {
                    connecter_localStorage ? (
                        <div className="connecter_container" title="Vous ete connecter">
                            <div className="connecter_div">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>

                                <h4>{UserLocalStorage}</h4>
                            </div>
                            <button className='button_deco' onClick={() => deconnexion()}>déconnexion</button>

                        </div>

                    ) : (

                        <div className="connecter_div" title="Vous ete deconnecter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                            </svg>
                            <h4>deconnecter</h4>
                        </div>)}

            </div>
        </div>








    )
}
export default Header


