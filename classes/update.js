const steamapi = require('./steamapi') 
const fs = require('fs')
require('dotenv')

class update {
    constructor(steamid) {
        this.steamid = steamID
        this.steamapi = new steamapi(steamid)
    }
}