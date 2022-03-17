import React from "react";
import './login.css'
import { useState } from "react";
export default function Login({ etat_login_local, handleSubmit }) {
    const [email, setemail] = useState("")
    const [mdp, setmdp] = useState("")
    const [check, setcheck] = useState(false)


    function handlecheckbox() {

        setcheck(!check);
    }

    return (
        etat_login_local ? (
            <h3>Vous ete connecter</h3>
        ) : (
            <form onSubmit={() => handleSubmit()}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" title="E mail" className="form-control" placeholder="Enter email" value={email}
                        onChange={(e) => setemail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" title="Mot de pass" className="form-control" placeholder="Enter password" value={mdp}
                        onChange={(e) => setmdp(e.target.value)} />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" title=" se souvenir" className="custom-control-input" id="customCheck1" value={check}
                            onChange={() => handlecheckbox()} />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" title="Se connecter" className="btnn">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="/">password?</a>
                </p>
            </form>
        )
    );

}