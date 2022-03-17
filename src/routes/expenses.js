import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from "styled-components";
import WebFont from 'webfontloader';
import { GlobalStyles } from '../theme/GlobalStyles';
import { useTheme } from '../theme/useTheme';
import axios from "axios";
import "./expenses.css"
import Login from "./login/Login";

import Header from '../header/header';

// import { LineChart, CartesianGrid, XAxis, YAxis } from 'recharts';
// import { Bar } from 'react-chartjs-2';

// import Chart from 'chart.js/auto'


var test = new Array();





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

    const [bool, setbool] = useState(true)


    const [etat_login, Setetat_login] = useState(false);







    function handleSubmit(e) {

        Setetat_login(true)
        localStorage.setItem("key", etat_login)
    }
    var connecter_localStorage = localStorage.getItem("key")

    const btc_data = new Array();


    useEffect(() => {
        const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
        axios.get(url).then((response) => {





            setdata(response.data);
            setbool(false);

        });
        setInterval(() => {


            const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';
            axios.get(url).then((response) => {





                setdata(response.data);
                setbool(false);

                localStorage.setItem("databtc", JSON.stringify(btc_data))

                btc_data.push(response.data.bpi.EUR.rate)





            });
        }, 30000);//minute



    }, []);


    test = JSON.parse(localStorage.getItem("databtc"));
    console.log(test)


    // const state = {
    //     labels: ['January', 'February', 'March',
    //         'April', 'May'],
    //     datasets: [
    //         {
    //             label: 'Rainfall',
    //             backgroundColor: 'rgba(75,192,192,1)',
    //             borderColor: 'rgba(0,0,0,1)',
    //             borderWidth: 2,
    //             data: [parseFloat(test[0].replace(/,/, '.')), parseFloat(test[1].replace(/,/, '.')), parseFloat(test[2].replace(/,/, '.'))]
    //         }
    //     ]
    // }




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
                            <div>
                                {

                                }


                            </div>

                            <div>
                                {
                                    bool ? (
                                        <h1>Loading...</h1>
                                    ) : (

                                        <div>
                                            <h1> le bitcoin vaut {dataa.bpi.EUR.rate} €</h1>
                                            <h2> L'update date du {dataa.time.updated}  </h2>
                                        </div>)}
                            </div>
                            <table>
                                <ul>{test.map(test => <tr key={test}> {test} </tr>)}</ul>
                            </table>


                            {/* <Bar
                                data={state}
                                options={{
                                    title: {
                                        display: true,
                                        text: 'Average Rainfall per month',
                                        fontSize: 10
                                    },
                                    scales: {
                                        y: {
                                            min: 34,
                                            max: 34.8,
                                            stepSize: 0.01,
                                        },
                                    },
                                }}
                            /> */}
                        </div >

                    ) : (
                        <Login
                            etat_login_local={connecter_localStorage}
                            handleSubmit={handleSubmit}
                        />
                    )
            }

        </main >
    );

}
