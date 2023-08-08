const db = require("../DB/db");
const bcrypt = require("bcrypt");

const UserModel = {
    create: (userData, callBack) => {
        bcrypt.hash(userData.password,10,(err,hashedPassword) => {
            if(err)
            {
                return;
            }
            const sql = 'INSERT INTO tbl_user (name,email,password) VALUES(?,?,?)';
            db.query(sql,[userData.name,userData.email,hashedPassword],callBack);
        });

    },

    update: (id,newData,callback) => {
        bcrypt.hash(newData.password,10,(err,hashedPassword) => {
            if(err)
            {
                return;
            }
            
            const sql = "UPDATE tbl_user SET name = ?,email = ?,password = ? where id = ?";
            db.query(sql,[newData.name,newData.email,hashedPassword,id],callback);
        });
    },

    deletebyid: (id,callBack) => {
        const sql = "DELETE FROM tbl_user WHERE id = ?";
        db.query(sql,id,callBack);
    },

    selectAll: (callBack) => {
        const sql = 'SELECT * FROM tbl_user';
        db.query(sql,callBack);
    }
}

module.exports = UserModel;