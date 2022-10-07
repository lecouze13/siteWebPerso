
import { useState, useEffect } from 'react';

import './GRAFFE_POIDS.css'

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



import axios, * as others from 'axios';




export const GRAFFE_POIDS = ({ Poids_input }) => {

    var date = new Date()
    var TodayDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    // pour avoir aucun warning au compilateur
    // if (TodayDate === 10)
    //     console.log(TodayDate)

    // function createData(name, poids) {
    //     return { name, poids }
    // }
    // const [data, setData] = useState([])
    // const verif_poids = JSON.parse(localStorage.getItem('Poids'));

    // if (verif_poids === null) {
    //     const dataf = [
    //         {
    //             name: TodayDate,
    //             poids: Poids_input,

    //         },

    //     ]

    //     localStorage.setItem("Poids", JSON.stringify(dataf))

    // }
    // useEffect(() => {

    //     const data = JSON.parse(localStorage.getItem('Poids'));
    //     if (data)
    //         setData(data);
    //     else {

    //     }
    //     if (verif_poids != null) {
    //         data.push(createData(TodayDate, Poids_input))
    //         localStorage.removeItem("Poids")
    //         localStorage.setItem("Poids", JSON.stringify(data))
    //     }


    // }, []);// eslint-disable-line react-hooks/exhaustive-deps




    const [testNode, SettestNode] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9000/API/poids")
            .then((response) => { SettestNode(response.data) });
        console.log("poids input == " + testNode.data)


    }, []);








    console.log(testNode.date)

    return (
        <div>

            <h1> Courbe de la masse corporelle </h1>
            <ResponsiveContainer width="100%" aspect={2.5}>
                <LineChart
                    width={500}
                    height={400}
                    data={testNode}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis type='number' domain={[30, 70]} />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="poids"
                        stroke="#8884d8"
                        activeDot={{ r: 5 }}
                    />

                </LineChart>
            </ResponsiveContainer>
        </div>

    );
}