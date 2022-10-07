import './tableau.css'
import '../chronometre.css'
import { } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// stylisation du tableau
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


var bool = 0
export const Tableau = () => {



    var date = new Date()
    var TodayDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    // pour avoir aucun warning au compilateur
    if (TodayDate === 10)
        console.log(TodayDate)

    // function createData(name, exo1, exo2, exo3, exo4, exo5, exo6, exo7, exo8, exo9, exo10, exo11, exo12, exo13) {
    //     return { name, exo1, exo2, exo3, exo4, exo5, exo6, exo7, exo8, exo9, exo10, exo11, exo12, exo13 }
    // }

    // const [rows, setItems] = useState([]);



    // const verif_exo = JSON.parse(localStorage.getItem('dataHDC'));
    // if (var1.length === 0) {

    // }
    // else {


    //     if (verif_exo === null) {
    //         const dataf = [
    //             {
    //                 name: TodayDate,

    //                 exo1: var1[0],
    //                 exo2: var1[1],
    //                 exo3: var1[2],
    //                 exo4: var1[3],
    //                 exo5: var1[4],
    //                 exo6: var1[5],
    //                 exo7: var1[6],
    //                 exo8: var1[7],
    //                 exo9: var1[8],
    //                 exo10: var1[9],
    //                 exo11: var1[10],
    //                 exo12: var1[11],
    //                 exo13: var1[12],
    //                 exo14: var1[13],
    //             },

    //         ]

    //         localStorage.setItem("dataHDC", JSON.stringify(dataf))
    //         bool = 1

    //     }
    // }
    // console.log(var1.length)

    // useEffect(() => {
    //     const rows = JSON.parse(localStorage.getItem('dataHDC'));
    //     if (rows) {
    //         setItems(rows);
    //     }

    //     if (verif_exo != null) {
    //         if (bool === 1 || var1.length === 0) { // pour ne pas reafficher des ligne si on affiche tab

    //         }
    //         else {
    //             rows.push(createData(TodayDate, var1[0], var1[1], var1[2], var1[3], var1[4], var1[5], var1[6], var1[7], var1[8], var1[9], var1[10], var1[11], var1[12], var1[13]));
    //         }
    //         localStorage.removeItem("dataHDC")
    //         localStorage.setItem("dataHDC", JSON.stringify(rows))
    //         bool = 0
    //     }
    // }, []);// eslint-disable-line react-hooks/exhaustive-deps

    const [testNode, SettestNode] = useState([])

    useEffect(() => {
        axios.get("http://localhost:9000/API/exo_hdc")
            .then((response) => { SettestNode(response.data) });


    }, []);

    console.log(testNode)





    return (
        <div style={{ width: '100%' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Rep/execice</StyledTableCell>
                            <StyledTableCell align="right">Pompe Main surrelever </StyledTableCell>
                            <StyledTableCell align="right">Pompe classique</StyledTableCell>
                            <StyledTableCell align="right">Pompe pieds surrelever</StyledTableCell>
                            <StyledTableCell align="right"> Dips</StyledTableCell>
                            <StyledTableCell align="right">exo dos1</StyledTableCell>
                            <StyledTableCell align="right">exo dos2</StyledTableCell>
                            <StyledTableCell align="right">superman</StyledTableCell>
                            <StyledTableCell align="right">curl haltere</StyledTableCell>
                            <StyledTableCell align="right">curl marteau</StyledTableCell>
                            <StyledTableCell align="right">curl 3</StyledTableCell>
                            <StyledTableCell align="right">developper militaire</StyledTableCell>
                            <StyledTableCell align="right">relever epaule</StyledTableCell>
                            <StyledTableCell align="right">epaule 3</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {testNode.map((testNodes) => (
                            <StyledTableRow key={TodayDate}>
                                <StyledTableCell component="th" scope="row">
                                    {testNodes.date}
                                </StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo1}</StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo2}</StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo3}</StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo4}</StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo5}</StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo6}</StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo7}</StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo8}</StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo9}</StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo10}</StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo11}</StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo12}</StyledTableCell >
                                <StyledTableCell align="right">{testNodes.exo13}</StyledTableCell >
                            </StyledTableRow >
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>



        </div>

    );

}






