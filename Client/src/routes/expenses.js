import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../theme/GlobalStyles';
import { useTheme } from '../theme/useTheme';
import axios from "axios";
import "./expenses.css"
import Login from "./login/Login";
import Footer from '../footer/Footer';

import Header from '../header/header';

// import { LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';
// import { Bar } from 'react-chartjs-2';

// import Chart from 'chart.js/auto'








export default function Expenses() {









    const { theme, themeLoaded, getFonts } = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => { setSelectedTheme(theme) }, [themeLoaded],);// eslint-disable-line react-hooks/exhaustive-deps

    // 4: Load all the fonts
    useEffect(() => {
        WebFont.load({
            google: {
                families: getFonts()
            }
        });
    });




    const [dataa, setdata] = useState([])
    if (dataa) { }



    const [etat_login, Setetat_login] = useState(false);







    function handleSubmit(e) {

        Setetat_login(true)
        localStorage.setItem("key", etat_login)
    }
    var connecter_localStorage = localStorage.getItem("key")




    useEffect(() => {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        const btc_data = [];
        axios.get(url).then((response) => {





            setdata(response.data);


        });
        setInterval(() => {


            const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
            axios.get(url).then((response) => {





                setdata(response.data);


                localStorage.setItem("databtc", JSON.stringify(btc_data))

                btc_data.push(response.data.bpi.EUR.rate)





            });
        }, 30000);//minute



    }, []);






    const [Username, SetUser] = useState()


    return (
        <main >

            {
                themeLoaded && <ThemeProvider theme={selectedTheme}>
                    <GlobalStyles />







                </ThemeProvider>
            }
            <Header />
            <Outlet />
            {
                connecter_localStorage ?
                    (




                        <div>

                           
                        </div >

                    ) : (
                        <Login
                            etat_login_local={connecter_localStorage}
                            handleSubmit={handleSubmit}
                            Username={Username}
                            SetUser={SetUser}

                        />
                    )
            }
            <Footer />

        </main >
    );

}



