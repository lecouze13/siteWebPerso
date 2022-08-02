import './tableau.css'
import './chronometre.css'
import { makeStyles } from '@material-ui/core/styles';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, { useState, useEffect } from 'react';


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



export const Tableau = ({ var1 }) => {



    var date = new Date()
    var TodayDate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()

    // pour avoir aucun warning au compilateur
    if (TodayDate === 10)
        console.log(TodayDate)

    function createData(name, exo1, exo2, exo3, exo4, exo5, exo6, exo7, exo8, exo9, exo10, exo11) {
        return { name, exo1, exo2, exo3, exo4, exo5, exo6, exo7, exo8, exo9, exo10, exo11 }
    }

    const [rows, setItems] = useState([]);




    useEffect(() => {
        const rows = JSON.parse(localStorage.getItem('dataHDC'));
        if (rows) {
            setItems(rows);
        }

        if (var1[0] != null) {
            rows.push(createData(TodayDate, var1[0], var1[1], var1[2], var1[3], var1[4], var1[5], var1[6], var1[7], var1[8], var1[9], var1[10], var1[11]));
            localStorage.removeItem("dataHDC")
            localStorage.setItem("dataHDC", JSON.stringify(rows))
        }
    }, []);









    return (<div className='tableau_body'>
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
                        <StyledTableCell align="right">developper militaire</StyledTableCell>
                        <StyledTableCell align="right">relever epaule</StyledTableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell >
                            <StyledTableCell align="right">{row.exo1}</StyledTableCell >
                            <StyledTableCell align="right">{row.exo2}</StyledTableCell >
                            <StyledTableCell align="right">{row.exo3}</StyledTableCell >
                            <StyledTableCell align="right">{row.exo4}</StyledTableCell >
                            <StyledTableCell align="right">{row.exo5}</StyledTableCell >
                            <StyledTableCell align="right">{row.exo6}</StyledTableCell >
                            <StyledTableCell align="right">{row.exo7}</StyledTableCell >
                            <StyledTableCell align="right">{row.exo8}</StyledTableCell >
                            <StyledTableCell align="right">{row.exo9}</StyledTableCell >
                            <StyledTableCell align="right">{row.exo10}</StyledTableCell >
                            <StyledTableCell align="right">{row.exo11}</StyledTableCell >
                        </StyledTableRow >
                    ))}
                </TableBody>
            </Table>

        </TableContainer>




    </div>
    );

}






