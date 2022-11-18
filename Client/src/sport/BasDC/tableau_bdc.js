import '../HautDC/tableau.css'
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




    const [testNode, SettestNode] = useState([])

    useEffect(() => {
        axios.get("https://lorenzo-geano-sport-app.herokuapp.com/API/exo_bdc")
            .then((response) => { SettestNode(response.data) });


    }, []);





    return (
        <div className='global' style={{ width: '100%' }}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>date/exercice</StyledTableCell>
                            <StyledTableCell align="right">goblin squat </StyledTableCell>
                            <StyledTableCell align="right">fente/fente bulgare</StyledTableCell>
                            <StyledTableCell align="right">deadlift ischio</StyledTableCell>
                            <StyledTableCell align="right">extensions de mollets</StyledTableCell>
                            <StyledTableCell align="right">developper militaire</StyledTableCell>
                            <StyledTableCell align="right">ecarte epaule </StyledTableCell>
                            <StyledTableCell align="right">abdos/gainage </StyledTableCell>
                            <StyledTableCell align="right">Russian twist</StyledTableCell>

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

                            </StyledTableRow >
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>



        </div>

    );

}





