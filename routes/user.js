require('body-parser');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const routes = express.Router();
const {getUser,getIdUser,postUser,deleteUser,patchUser}=require("./controllers/user.js")

let users = [{
    "firstname":"Roman",
    "lastname":"bas",
    "age":24,
},{
    "firstname":"Baskar",
    "lastname":"bro",
    "age":23,
}];

// GET_ROUTES:-
routes.get("/:id",getIdUser)
routes.get('/',getUser)
// POST_ROUTE:- change everything use post & put
routes.post("/",postUser);
// DELETE_ROUTES:-
routes.delete("/:id",deleteUser);
// PATCH_ROUTES:- Any modification
routes.patch("/:id",patchUser)



module.exports =routes;
