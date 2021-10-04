const fetch = require('node-fetch')
require('dotenv')

class steamapi {
    constructor(steamid) {
        this.steamid = steamID
    }
    async getSummary(){
        var response = await fetch(process.env.APIGETSUM +'&steamids=' + this.steamID);
        var json = await response.json();
        return json;

    }
   async getVanity(){
        var response = await fetch(process.env.APIGETVANITY +'&vanityurl=' + this.steamID);
        var json = await response.json();
        return json;
    }
    async getStatus() {
        let response = await fetch(process.env.APIGET + this.steamid)
        let json = await response.json()
        return json
    }
}

module.export = steamapi