const footer = 'Rusty made by sunglasses#0420, Information gathered from rustlabs.com, rust-servers.info';
const title = 'Shows amount of player kills of the given steam 64 for Rust'
const icon1 = 'https://i.redd.it/gzrqicukid0z.jpg';
const color = 0x272a21
const fetch = require('node-fetch')

module.exports = {
    name : 'kills',
    description : 'Kills',
    execute(message, args) {
        if(!args.length) return;
        if(args[0] == null) return;
        console.log('idgiven: ' + args);
        let url = 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=4A3DA3C2CEB5617EF8660D9A09FC39EB&steamids=' + args;
        const getPosts = () => {
            return fetch(url)
                .then(res => res.json())
                .then(posts => console.log(posts))

        }
        getPosts();
    }
}   