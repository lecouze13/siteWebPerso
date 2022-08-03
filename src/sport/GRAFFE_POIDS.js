
import { useState, useEffect } from 'react';

import './GRAFFE_POIDS.css'

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



var bool_verif_data;



export const GRAFFE_POIDS = ({ Poids_input }) => {

    var date = new Date()
    var TodayDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    // pour avoir aucun warning au compilateur
    if (TodayDate === 10)
        console.log(TodayDate)

    function createData(name, poids) {
        return { name, poids }
    }
    const [data, setData] = useState([])
    const verif_poids = JSON.parse(localStorage.getItem('Poids'));

    if (verif_poids === null) {
        const dataf = [
            {
                name: TodayDate,
                poids: Poids_input,

            },

        ]

        localStorage.setItem("Poids", JSON.stringify(dataf))
        bool_verif_data = 0
    }
    useEffect(() => {

        const data = JSON.parse(localStorage.getItem('Poids'));
        if (data)
            setData(data);
        else {

        }
        if (verif_poids != null) {
            data.push(createData(TodayDate, Poids_input))
            localStorage.removeItem("Poids")
            localStorage.setItem("Poids", JSON.stringify(data))
        }

        console.log(data)
        console.log(data)
    }, []);

    return (
        <div className='main_poids'>

            <LineChart
                width={1000}
                height={600}
                data={data}

            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis type='number' domain={[60, 80]} />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="poids"
                    stroke="#8884d8"
                    activeDot={{ r: 5 }}
                />

            </LineChart>


        </div>
    );
}