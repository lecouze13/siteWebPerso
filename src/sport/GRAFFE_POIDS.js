
import { useState, useEffect } from 'react';

// import './GRAFFE_POIDS.css'

import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';







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
    const [test, setTest] = useState()

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('Poids'));
        if (data) {
            setData(data);
        }
        if (Poids_input != null) {
            data.push(createData(TodayDate, Poids_input))
            localStorage.removeItem("Poids")
            localStorage.setItem("Poids", JSON.stringify(data))
        }
    }, []);

    return (
        <div className='main_poids'>

            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
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