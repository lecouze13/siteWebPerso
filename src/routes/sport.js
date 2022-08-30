

import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import './invoices.css';
import './sport.css'
import { GlobalStyles } from '../theme/GlobalStyles';
import { useTheme } from '../theme/useTheme';


// import { Minuteur } from '../sport/minuteur'
import { ThemeProvider } from "styled-components";
// import pompe_PS from "../image/Pompe_PS.png";
import { EXO_HAUTDUCORPS } from "../sport/HautDC/EXO_HAUTDUCORPS";
import { EXO_BASDUCORPS } from "../sport/BasDC/EXO_BASDUCORPS";
import { Data } from "../sport/Data/Data";

// import { Tableau } from "../sport/tableau";
import WebFont from 'webfontloader';
import Header from '../header/header';
import Footer from '../footer/Footer';

export default function Invoices() {
    const { theme, themeLoaded, getFonts } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);


    const [choix, Setchoix] = useState(false);
    const [bas, setbas] = useState(false);
    const [data, setdata] = useState(false);

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
    const data_link = () => {
        Setchoix(false);
        setBegin(true);
        setdata(true)
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

            {begin ?
                <div> </div> :
                (<div className="main_button_choix">

                    <h2>Choisir le type d'entrainement</h2>
                    <div className="choix_button">
                        <button className="button_Hdc" onClick={Haut_du_corp}><h3> Haut du corps</h3></button>
                        <button className="button_Bdc" onClick={Bas_du_corp}> <h3>Bas du corps</h3></button>
                        <button className="button_Bdc" onClick={data_link}> <h3>Data</h3></button>

                    </div>
                    <a target="_blank" rel="noreferrer" className="link_kcal" href="https://lorenzo-geano-etu.pedaweb.univ-amu.fr/Projet_importants/muscu.php">Liens vers le calculateur de kcal</a>
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
            {data ? (<div><Data /> <data />
            </div>) : (<div></div>)
            }
            <Footer />
        </main >
    );
}