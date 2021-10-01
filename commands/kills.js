const footer = 'Rusty made by sun#0420, Information gathered from Steam API';
const title = 'Shows stats of the given STEAMID64 for Rust'
const icon1 = 'https://i.redd.it/gzrqicukid0z.jpg';
const color = 0x272a21;
const fetch = require('node-fetch');
const fs = require('fs');

module.exports = {
    name : 'kills',
    description : 'Kills',
    execute(message, args) {
        if(!args.length) return;
        if(args[0] == null) return;
        if(isNaN(args[0])) return;
        if(args[0].length != 17) return;
        console.log('idgiven: ' + args);
        let url = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=252490&key=4A3DA3C2CEB5617EF8660D9A09FC39EB&steamid=' + args;
        function getPosts () {
            return fetch(url)
                .then(res => {
                    res.json()
                    let data = JSON.stringify(res);
                    message.channel.send(data)
                }) 
                .then(posts => console.log(posts));
                
        }
        getPosts();
    }
}   