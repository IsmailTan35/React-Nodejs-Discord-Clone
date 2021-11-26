module.exports.maintenancesPost = function (req,res) {
    var con =req.app.db
    con.query(`SELECT * FROM wt_maintenances`, function (err, result, fields) {
        if(result.length>=0){
            res.setHeader('Content-Type', 'application/json')
            res.send("JSON.stringify(result)")
            res.end()
        }
        else{
            res.sendStatus(404)
            res.end()
        }
    })
}