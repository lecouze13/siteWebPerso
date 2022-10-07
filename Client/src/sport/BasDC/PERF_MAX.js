
import { useState, useEffect } from 'react';


import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';







export const PERF_MAX = ({ Pompe_max, PRO_max, SUP_max }) => {

    var date = new Date()
    var TodayDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    // pour avoir aucun warning au compilateur
    if (TodayDate === 10)
        console.log(TodayDate)

    function createData(name, pompe, traction_PRO, traction_SUP) {
        return { name, pompe, traction_PRO, traction_SUP }
    }
    const [data, setData] = useState([])
    const verif_poids = JSON.parse(localStorage.getItem('Perfmax'));

    if (verif_poids === null) {
        const dataf = [
            {
                name: TodayDate,
                pompe: Pompe_max,
                traction_PRO: PRO_max,
                traction_SUP: SUP_max
            },

        ]

        localStorage.setItem("Perfmax", JSON.stringify(dataf))

    }
    useEffect(() => {

        const data = JSON.parse(localStorage.getItem('Perfmax'));
        if (data)
            setData(data);
        else {

        }
        if (verif_poids != null) {
            data.push(createData(TodayDate, Pompe_max, PRO_max, SUP_max))
            localStorage.removeItem("Perfmax")
            localStorage.setItem("Perfmax", JSON.stringify(data))
        }


    }, []);// eslint-disable-line react-hooks/exhaustive-deps


    return (
        <div>
            <h1>Courbe des perf max </h1>
            <ResponsiveContainer width="100%" aspect={2.5}>
                <LineChart
                    width={500}
                    height={400}
                    data={data}

                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type='number' domain={[0, 50]} />
                    <Tooltip color='blue' />
                    <Legend color='yellow' />
                    <Line
                        type="monotone"
                        dataKey="pompe"
                        stroke="blue"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="traction_PRO"
                        stroke="lightgrey"
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="traction_SUP"
                        stroke="red"
                        activeDot={{ r: 8 }}
                    />

                </LineChart>
            </ResponsiveContainer>
        </div>

    );
}