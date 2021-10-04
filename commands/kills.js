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
        let url = process.env.APIGETSTATS + args
        function get() {
            return fetch(url)
                .then(async res => {
                    let data = JSON.stringify(await res.json())
                    console.log(data)
                    message.channel.send(data)
                    .catch(console.error)
                }) 
                .catch(console.error);
                
        }
        get();
    }
}   