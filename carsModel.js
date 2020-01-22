const db = require("./dbConfig.js")

module.exports = {
    get
}


function get(id) {

    console.log('here')
    db.select("*")
    .from("cars")
    .then(accounts => {
        console.log('here', accounts)
        return accounts
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get accounts' });
    
    })

}
