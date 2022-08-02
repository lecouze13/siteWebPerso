

import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './invoices.css';
import './sport.css'
import { GlobalStyles } from '../theme/GlobalStyles';
import { useTheme } from '../theme/useTheme';
import { Chronometre } from '../sport/chronometre'
// import { Minuteur } from '../sport/minuteur'
import { ThemeProvider } from "styled-components";
// import pompe_PS from "../image/Pompe_PS.png";
import { EXO_HAUTDUCORPS } from "../sport/EXO_HAUTDUCORPS";
import { EXO_BASDUCORPS } from "../sport/EXO_BASDUCORPS";
import { GRAFFE_POIDS } from "../sport/GRAFFE_POIDS";
// import { Tableau } from "../sport/tableau";
import WebFont from 'webfontloader';
import Header from '../header/header';
export default function Invoices() {
    const { theme, themeLoaded, getFonts } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);


    const [choix, Setchoix] = useState(false);
    const [bas, setbas] = useState(false);

    const [begin, setBegin] = useState(false);
    const Haut_du_corp = () => {
        Setchoix(true);
        setBegin(true);
        setbas(false);
    }

    const Bas_du_corp = () => {
        Setchoix(false);
        setBegin(true);
        setbas(true);
    }


    useEffect(() => { setSelectedTheme(theme) }, [themeLoaded],);// eslint-disable-line react-hooks/exhaustive-deps

    // 4: Load all the fonts
    useEffect(() => {
        WebFont.load({
            google: {
                families: getFonts()
            }
        });
    });














    return (
        <main>
            {
                themeLoaded && <ThemeProvider theme={selectedTheme}>
                    <GlobalStyles />







                </ThemeProvider>
            }
            <Header />
            <Outlet />
            {begin ? (



                <div> </div>







            ) : (<div className="main_button_choix">

                <h2>Choisir le type d'entrainement</h2>
                <div className="choix_button">
                    <button className="button_Hdc" onClick={Haut_du_corp}><h3> Haut du corps</h3></button>
                    <button className="button_Bdc" onClick={Bas_du_corp}> <h3>Bas du corps</h3></button>
                </div>
            </div >)
            }

            {
                choix ? (
                    <div>
                        {/* <Tableau /> */}

                        <EXO_HAUTDUCORPS />

                    </div>
                ) :
                    (
                        <div></div>

                    )

            }

            {bas ? (<div> <EXO_BASDUCORPS />
            </div>) : (<div></div>)
            }

        </main >
    );
}