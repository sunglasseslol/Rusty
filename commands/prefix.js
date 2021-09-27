const { prefix } = require('C:/Users/fred/Desktop/Bots/Discord Bots/Rusty/rusty')
const footer = 'Rusty made by sunglasses#0420, Information gathered from rustlabs.com, Steam API';
const title = 'Variable Prefixes'
const icon1 = 'https://i.redd.it/gzrqicukid0z.jpg';
const color = 0x272a21;

module.exports = {
    name : 'prefix',
    description : `Let's the user change the prefix ( Default is . )`,
    execute(message, args) {
        if(args[0] == null) { console.log('user printed null') }
        prefix = args[0].value;
    }
}