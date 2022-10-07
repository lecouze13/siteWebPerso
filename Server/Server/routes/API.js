var express = require('express');
var app = express();
app.use(express.json());
var bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
var router = express.Router();
const { createPool } = require('mysql2');
var cookieParser = require('cookie-parser');
app.use(cookieParser());



const pool = createPool({
    host: "localhost",
    user: "root",
    password: "Fran0147890",
    connectionLimit: 10
})


router.get('/', (req, ress,) => {
    pool.query('SELECT * FROM database_siteperso.users', (err, res) => {



        ress.send(res)


    });
});




var Username, Username2




router.post('/insertPseudo', (req, resp) => {
    Username = req.body.Username

    const Mdp = req.body.Mdp
    console.log("Username insetpseudo==" + Username)
    const sqlInsert = "INSERT INTO database_siteperso.users (Username, Mdp) VALUES (?, ?);"
    pool.query(sqlInsert, [Username, Mdp], (err, result) => {
        console.log("resulte" + result)


    });

})




router.post('/insertrep', (req, ress,) => {
    id_users = Username;
    date = req.body.date
    tst1 = req.body.Tab_rep[0]
    tst2 = req.body.Tab_rep[1]
    tst3 = req.body.Tab_rep[2]
    tst4 = req.body.Tab_rep[3]
    tst5 = req.body.Tab_rep[4]
    tst6 = req.body.Tab_rep[5]
    tst7 = req.body.Tab_rep[6]
    tst8 = req.body.Tab_rep[7]
    tst9 = req.body.Tab_rep[8]
    tst10 = req.body.Tab_rep[9]
    tst11 = req.body.Tab_rep[10]
    tst12 = req.body.Tab_rep[11]
    tst13 = req.body.Tab_rep[12]
    tst14 = req.body.Tab_rep[13]
    tst15 = req.body.Tab_rep[14]

    const sqlInsert = "INSERT INTO database_siteperso.tab_hdc (id_users, date, exo1, exo2, exo3, exo4, exo5, exo6, exo7, exo8, exo9, exo10, exo11, exo12, exo13, exo14) VALUES (?,?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)"
    pool.query(sqlInsert, [id_users, date, tst1, tst2, tst3, tst4, tst5, tst6, tst7, tst8, tst9, tst10, tst11, tst12, tst13, tst14], (err, result) => {
        console.log("resulte" + result)
        console.log("erreur : " + err)
    });
});






router.get('/poids', (req, ress,) => {


    pool.query(' SELECT poids,date FROM database_siteperso.poids where idUsers=?', [Username], (err, res) => {

        console.log("Username= podis=" + Username)


        ress.send(res)


    });
});

router.post('/addpoids', (req, ress,) => {
    const idUsers = Username
    const Poids = req.body.poids_input
    const date = req.body.date
    const sqlInsert = "INSERT INTO database_siteperso.poids (idUsers, Poids, date) VALUES (?,?,?);"

    pool.query(sqlInsert, [idUsers, Poids, date], (err, result) => {
        console.log("resulte" + result)
        console.log("erreur : " + err)
    });
});







router.get('/exo_hdc', (req, ress,) => {


    pool.query(' SELECT * FROM database_siteperso.tab_hdc where id_users=?', [Username], (err, res) => {

        console.log("Username exo_hdc==" + Username)
        ress.cookie("userData", "eeee");

        ress.send(res)


    });
});


module.exports = router;
