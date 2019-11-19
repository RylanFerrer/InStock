const shortid = require('shortid');

function createID() {
    return shortid.generate()
}


module.exports = {
    createID
}