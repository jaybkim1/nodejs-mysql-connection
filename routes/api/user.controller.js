const mysql_dbc = require('../../db_con')();

/* =======================
    CONNECT TO MYSQL SERVER
==========================*/
const connection = mysql_dbc.init();
mysql_dbc.test_open(connection);

/* 
    GET /api/user/list
*/

const login = function (req, res) {
    res.send('login')
};

const join = function (req, res) {
    res.send('join')
};

const deleteAccount = function (req, res) {
    res.send('deleteAccount')
};

const passwordChange = function (req, res) {
    res.send('passwordChange')
};

const showAllData = function (req, res) {
    res.send('showAllData')

    connection.query('select * from account', function (err, rows, fields) {
        connection.end();
        console.log(rows);
        console.log(rows._id);
        console.log(rows['._id']);
     
    });

};


// exports.login = (req, res) => {
//     console.log('login')
// }

// exports.join = (req, res) => {
//     console.log('join')
// }

/*
    POST /api/user/assign-admin/:username
*/
// exports.assignAdmin = (req, res) => {
//     // refuse if not an admin
//     if (!req.decoded.admin) {
//         return res.status(403).json({
//             message: 'you are not an admin'
//         })
//     }

//     User.findOneByUsername(req.params.username)
//         .then(
//             user => {
//                 if (!user) throw new Error('user not found')
//                 user.assignAdmin()
//             }
//         ).then(
//             res.json({
//                 success: true
//             })
//         ).catch(
//             (err) => { res.status(404).json({ message: err.message }) }
//         )
// }

module.exports = {
    login: login,
    join: join,
    deleteAccount: deleteAccount,
    passwordChange: passwordChange,
    showAllData: showAllData
};

