import React from "react";
import './login.css'
import { useState, useEffect } from "react";

import axios, * as others from 'axios';
export default function Login({ etat_login_local, handleSubmit, SetUser, Username }) {

    const [Mdp, setmdp] = useState("")
    const [check, setcheck] = useState(false)

    const [Mdp_login, setMdp_login] = useState("")
    const [Username_login, setUsername_login] = useState("")

    const [login, setbtnlogin] = useState(false)
    const [register, setbtnregister] = useState(false)

    const [alert, setalert] = useState(false)



    // function handlecheckbox() {

    //     setcheck(!check);
    // }

    const connect_user = (e) => {
        SetUser(e.target.value)



    }

    const connect_user_login = (e) => {
        setUsername_login(e.target.value)



    }


    const login_button = () => {

        setbtnlogin(true)
        setbtnregister(false)


    }
    const register_button = () => {

        setbtnregister(true)
        setbtnlogin(false)
    }





    const [testNode, SettestNode] = useState([])

    useEffect(() => {
        axios.get("https://app-sport-geano.netlify.app/")
            .then((response) => { SettestNode(response.data) });



    }, []);



    let test
    const submit_connection = (e) => {
        for (let i = 0; i < testNode.length; i++) {




            if (testNode[i].Username === Username) {

                console.log("compte existe deja");
                test = 1
            }

        }
        for (let i = 0; i < testNode.length; i++) {
            if (test !== 1) {
                test = 1
                sessionStorage.setItem("Pseudo", Username)
                axios.post("https://app-sport-geano.netlify.app/API/insertPseudo", { Username: Username, Mdp: Mdp })
                    .then(() => { alert("inset succes") });


                setbtnregister(false)

                handleSubmit()
            }
            else {

            }
        }


    }


    //verification des donne

    //login
    const submit_verif = () => {

        for (let i = 0; i < testNode.length; i++) {

            if (testNode[i].Username === Username_login && testNode[i].Mdp === Mdp_login) {
                sessionStorage.setItem("Pseudo", Username_login)


                axios.post("https://app-sport-geano.netlify.app/API/insertPseudo", { Username: Username_login })
                    .then(() => { alert("inset succes") });

                handleSubmit()
                setbtnlogin(false)


            }
            else {
                setalert(true)
            }

        }



    }






    return (
        etat_login_local ? (
            <h3>Vous ete connecter  {Username}</h3>
        ) : (
            <div>
                {alert ? (<div class="alert alert-danger" id="alert_poids" role="alert">
                    Mauvais mot de passe ou Pseudo
                </div>) : (<div></div>)}

                <button className="login_button" onClick={login_button}>
                    log in
                </button>
                <button className="login_button" onClick={register_button}>
                    Register
                </button>


                {
                    register ? <div className="form_register_login">

                        <h3>Register</h3>

                        <div className="form-group">
                            <label>Pseudo/User</label>
                            <input type="text" title="E mail"
                                className="form-control" placeholder="Enter email" value={Username}
                                onChange={connect_user} />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" title="Mot de pass" className="form-control"
                                placeholder="Enter password" value={Mdp}
                                onChange={(e) => setmdp(e.target.value)} />
                        </div>


                        <button title="Se connecter" onClick={submit_connection} className="btnn">Submit </button>

                    </div> : (<div></div>)
                }

                {
                    login ?
                        <div className="form_register_login">
                            <h3>Log In</h3>

                            <div className="form-group">
                                <label>Pseudo/User</label>
                                <input type="text" title="Pseudo"
                                    className="form-control" placeholder="Enter email" value={Username_login}
                                    onChange={connect_user_login} />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" title="Mot de pass" className="form-control"
                                    id="test" placeholder="Enter password" value={Mdp_login}
                                    onChange={(e) => setMdp_login(e.target.value)} />
                            </div>


                            <button title="Se connecter" onClick={submit_verif} className="btnn">Submit </button>


                        </div > : (<div></div>)
                }
            </div >
        )
    );

}