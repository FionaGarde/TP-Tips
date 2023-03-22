const jwt = require("jsonwebtoken");

const jwtKey = process.env.JWT_KEY;

exports.verifyToken = (req, res) => {
    let token = req.headers['authorization'];

    if(token !== undefined){
        //console.log(token, jwt)
        jwt.verify(token, jwtKey, (error, payload) => {
            //console.log(payload);
            if(error){
                console.log(error);
                res.status(403);
                res.json({message: "Accès interdit : token invalide"});
            }
            else{
                next(payload);
            }
        })
    }
    else{
        res.status(403);
        res.json({message: "Accès interdit : token manquant"})
    }
}