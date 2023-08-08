const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_db'
});

connection.connect((err)=>{
    if(err)
    {
        console.error('Error connecting to database:',err);
        return;
    }

    console.log('Database Connected!!');
});

module.exports = connection;