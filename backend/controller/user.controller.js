const userModel = require("../model/usermodel");

const UserController = {
    create: (req,resp) => {
        const userData = req.body;

        userModel.create(userData, (err,result) => {
            if(err)
            {
                resp.status(500).json({error: err.message});
                return;
            }
            resp.status(201).json({message: 'User created successfully!!'})
        })
    },

    update: (req,resp) => {
        const id = req.params.id;
        const newData = req.body;

        userModel.update(id,newData,(err,result) => {
            if(err)
            {
                resp.status(500).json({error: err.message});
                return;
            }
            resp.status(201).json({message: 'User updated successfully!!'})
        })
    },

    deletebyid: (req,resp) => {
        const id = req.params.id;

        userModel.deletebyid(id,(err,result) => {
            if(err)
            {
                resp.status(500).json({error: err.message});
                return;
            }
            resp.status(201).json({message: 'User record deleted successfully!!'})
        })
    },

    selectAll: (req,resp) => {
        userModel.selectAll((err,result) => {
            if(err)
            {
                resp.status(500).json({error: err.message});
                return;
            }
            resp.json(result);
        })
    }
}

module.exports = UserController;