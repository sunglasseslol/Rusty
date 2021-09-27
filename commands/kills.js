const footer = 'Rusty made by sunglasses#0420, Information gathered from rustlabs.com, Steam API';
const title = 'Shows stats of the given STEAMID64 for Rust'
const icon1 = 'https://i.redd.it/gzrqicukid0z.jpg';
const color = 0x272a21;
const fetch = require('node-fetch');

module.exports = {
    name : 'kills',
    description : 'Kills',
    execute(message, args) {
        if(!args.length) return;
        if(args[0] == null) return;
        console.log('idgiven: ' + args);
        let url = 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=252490&key=4A3DA3C2CEB5617EF8660D9A09FC39EB&steamid=' + args;
        const getPosts = () => {
            return fetch(url)
                .then(res => res.json()) 
                .then(posts => console.log(posts));
        }
        let s = getPosts().res().playerstats
        let count = 0;
        let s1 = 0;
        let s2 = 0;
        let s3 = 0;
        let s4 = 0;
        let s5 = 0;
        let s6 = 0;
        let s7 = 0;
        getPosts();
        while(count < s.playerstats.length) {
            if(s.playerstats[count].name == 'kill_player') {
                s1 = s.playerstats[count].value
            }
            if(s.playerstats[count].name == "kill_bear"){
                s2 = s.playerstats[count].value;
            }
            if(s.playerstats[count].name == "kill_boar"){
                s3 = s.playerstats[count].value;
            }
            if(s.playerstats[count].name == "kill_stag"){
                s4 = s.playerstats[count].value;
            }
            if(s.playerstats[count].name == "kill_chicken"){
                s5 = s.playerstats[count].value;
            }
            if(s.playerstats[count].name == "kill_horse"){
               s6 = s.playerstats[count].value;
            }
            if(s.playerstats[count].name == "kill_wolf"){
                s7 = s.playerstats[count].value;
            }
            count++
        }
        let total = s1 + s2 + s3 + s4 + s5 + s6 + s7;
        message.reply("\n**" + name + "** (" + args + ")\n\n__**Kills:**__ \n**Total:**  " + total + "\n**Players:** " + s1 + "\n**Bear:** "+ s2 + "\n**Wolf:** " + s7 + "\n**Deer:** " + s4 + "\n**Horse:** " + s6 + "\n**Boar:** " + s3 + "\n**Chicken:** " + s5+"\n\nNote: Bot only shows statistics provided by Steam.");
    }
}   