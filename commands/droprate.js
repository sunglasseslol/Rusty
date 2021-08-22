const title = 'The likeliness of you finding ';
const footer = 'Rusty made by sunglasses#0420, Information gathered from rustlabs.com';
const icon1 = 'https://i.redd.it/gzrqicukid0z.jpg';
const color = 0x272a21

module.exports = {
    name : 'droprate',
    description : 'Tells you the most likely places you will find a gun',
    execute(message, args) {
        if(!args.length) return;
        const helpembed = {
            color : color,
            title : 'List of all droprate arguments. EX : >droprate ak',
            fields : [
                {
                    name : 'Assault Rifle',
                    value : 'ak, assault rifle'
                },
                {
                    name : 'MP5A4',
                    value : 'mp5, mp5a4'
                },
                {
                    name : 'L96',
                    value : 'l96'
                },
                {
                    name : 'Double Barrel Shotgun',
                    value : 'db, double barrel'
                },
                {
                    name : 'Custom SMG',
                    value : 'smg, custom smg'
                },
                {
                    name : 'Bolt Action Sniper',
                    value : 'bolt, bolt action sniper'
                },
                {
                    name : 'M39',
                    value : 'm39'
                },
                {
                    name : 'Thompson',
                    value : 'tommy, thompson, tommy gun'
                },
                {
                    name : 'Nailgun',
                    value : 'nailgun'
                },
                {
                    name : 'Python Revolver',
                    value : 'python, python revolver'
                },
                {
                    name : 'Semi-Automatic-Rifle',
                    value : 'sar, semi auto rifle, semi automatic rifle'
                },
                {
                    name : 'Revolver',
                    value : 'revolver, rev, rev'
                },
                {
                    name : 'LR - 300',
                    value : 'lr'
                },
                {
                    name : 'Semi Automatic Pistol',
                    value : 'semipistol, semiautopistol, p2'
                },
                {
                    name : 'M249',
                    value : 'm2, m249'
                },
                {
                    name : 'Waterpipe Shotgun',
                    value : 'pipe, waterpipe, wateripe shotgun'
                },
                {
                    name : 'Crossbow',
                    value : 'crossy, crossbow'
                },
                {
                    name : 'SPAS 12 Shotgun',
                    value : 'spas, spas 12'
                }
            ],
                timestamp: new Date(),
                footer : {
                    icon_url: icon1,
                    text: footer
                }
        }
        const m2embed = {
            color : color,
            title : `${title}M249 ( M2 ) In Rust`,
            fields : [
                {
                    name : 'APC Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 8 %'
                },
                {
                    name : 'Helicopter Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 7 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const akembed = {
            color : color,
            title : `${title}an Assault Rifle ( AK ) In Rust`,
            fields : [
                {
                    name : 'Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 20 %'
                },
                {
                    name : 'Oil Rig Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 20 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 3 %'
                },
                {
                    name : 'Helicopter Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'APC Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const mp5embed = {
            color : color,
            title : `${title}an MP5A4 In Rust`,
            fields : [
                {
                    name : 'Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 20 %'
                },
                {
                    name : 'Oil Rig Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 20 %'
                },
                {
                    name : 'Supply Drop',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 12 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 3 %'
                },
                {
                    name : 'Helicopter Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'APC Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Military Tunnel Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const l96embed = {
            color : color,
            title : `${title}an L96 in Rust`,
            fields : [
                {
                    name : 'APC Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 21 %'
                },
                {
                    name : 'Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 3 %'
                },
                {
                    name : 'Oil Rig Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 3 %'
                },
                {
                    name : 'Helicopter Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 0.3 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.2 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.2 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const dbembed = {
            color : color,
            title : `${title}a Double Barrel Shotgun in Rust`,
            fields : [
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 9 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 9 %'
                },
                {
                    name : 'Sunken Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Oil Rig Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.2 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const customsmgembed = {
            color : color,
            title : `${title}a Custom SMG in Rust`,
            fields : [
                {
                    name : 'Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 22 %'
                },
                {
                    name : 'Oil Rig Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 22 %'
                },
                {
                    name : 'Supply Drop',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 22 %'
                },
                {
                    name : 'APC Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 4 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 10 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Helicopter Crate',
                    value : 'Condition: 100 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Military Crate',
                    value : 'Condition : 10 % | Amount : 1 | Chance : 0.5 %'
                },
                {
                    name : 'Oil Rig Scientist',
                    value : 'Condtion : 100 % | Amount : 1 | Chance : 0.1 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const boltembed = {
            color : color,
            title : `${title}a Bolt Action Sniper in Rust`,
            fields : [
                {
                    name : 'Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 20 %'
                },
                {
                    name : 'Oil Rig Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 20 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 1 - 5 % | Amount : 1 | Chance : 3 %'
                },
                {
                    name : 'APC Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Helicopter Crate',
                    value : 'Condition : 10 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition: 100 % | Amount : 1 | Chance : 1 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const m39embed = {
            color : color,
            title : `${title}a M39 in Rust`,
            fields : [
                {
                    name : 'Supply Drop',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 12 %'
                },
                {
                    name : 'Oil Rig Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 4 %'
                },
                {
                    name : 'Locked Crate',
                    value : 'Condition : 1 - 5 % | Amount : 1 | Chance : 4 %'
                },
                {
                    name : 'APC Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Helicopter Crate',
                    value : 'Condition : 10 % | Amount : 1 | Chance : 0.4 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 0.3 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition: 100 % | Amount : 1 | Chance : 0.2 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const thompsonembed = { 
            color : color,
            title : `${title}a Thompson in Rust`,
            fields : [
                {
                    name : 'Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 22 %'
                },
                {
                    name : 'Oil Rig Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 22 %'
                },
                {
                    name : 'Supply Drop',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 22 %'
                },
                {
                    name : 'APC Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 4 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Helicopter Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition: 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Military Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Oil Rig Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.8 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const nailgunembed = {
            color : color,
            title : `${title}a Nailgun in Rust`,
            fields : [
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 2 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const pythonembed = {
            color : color,
            title : `${title}a Python Revolver in Rust`,
            fields : [
                {
                    name : 'Oil Rig Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 10 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Milatary Crate',
                    value : 'Condition : 10 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Oil Rig Scientist',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 0.1 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.08 %'
                }
            ],
            timestamp: new Date(), 
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const sarembed = {
            color : color,
            title : `${title}a SAR in Rust`,
            fields : [
                {
                    name : 'Supply Drop',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 22 %'
                },
                {
                    name : 'Oil Rig Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Milatary Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Oil Rig Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.09 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.06 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const revolverembed = {
            color : color,
            title : `${title}a Revolver in Rust`,
            fields : [
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Sunken Chest',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Oil Rig Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.2 %'
                },
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const lrembed = {
            color : color,
            title : `${title}a Revolver in Rust`,
            fields : [
                {
                    name : 'Oil Rig Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 4 %'
                },
                {
                    name : 'Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 4 %'
                },
                {
                    name : 'Supply Drop',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'APC Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Helicopter Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.4 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.3 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.3 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const semipistolembed = {
            color : color,
            title : `${title}a Revolver in Rust`,
            fields : [
                {
                    name : 'Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Oil Rig Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Milatary Crate',
                    value : 'Condition : 10 - 20 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Oil Rig Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.1 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.07 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const eokaembed = {
            color : color,
            title : `${title}an Eoka in Rust`,
            fields : [
                {
                    name : 'None',
                    value : 'Sorry! This weapon can only be obtained from barrels / crafting!'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const pipeyembed = {
            color : color,
            title : `${title}a Waterpipe Shotgun in Rust`,
            fields : [
                {
                    name : 'Underwater Lab Elite Crate',
                    value : 'Condition : 25 - 75 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 25 - 75 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Sunken Chest',
                    value : 'Condition : 25 - 75 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Underwater Lab blue Crate',
                    value : 'Condition : 25 - 75 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Crate',
                    value : 'Condition : 25 - 75 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Patrol Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.2 %'
                },
                {
                    name : 'Oil Rig Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.2 %'
                },
                {
                    name : 'Underwater Dweller',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.2 %'
                },
                {
                    name : 'Excavator Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.2 %'
                },
                {
                    name : 'Tunnel Dweller',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 0.2 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const spasembed = {
            color : color,
            title : `${title}a SPAS - 12 Shotgun in Rust`,
            fields : [
                {
                    name : 'Oil Rig Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 14 %'
                },
                {
                    name : 'Locked Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 14 %'
                },
                {
                    name : 'Supply Drop',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 12 %'
                }, 
                {
                    name : 'Helicopter Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Cargo Ship Scientist',
                    value : 'Condition : 25 - 75 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Miliatry Tunnels Scientist',
                    value : 'Condition : 25 - 75 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'APC Crate',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Underwater Lab Elite Crate',
                    value : 'Condition : 1 - 3 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100 % | Amount : 1 | Chance : 1 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 1 - 3 % | Amount : 1 | Chance : 1 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        const crossbowembed = {
            color : color,
            title : `${title}an Crossbow In Rust`,
            fields : [
                {
                    name : 'Tool Box',
                    value : 'Condition : 20 - 50 % | Amount : 1 | Chance : 3 %'
                },
                {
                    name : 'Underwater Lab Tool Box',
                    value : 'Condition : 20 - 50 % | Amount : 1 | Chance : 3 %'
                },
                {
                    name : 'Elite Tier Crate',
                    value : 'Condition : 20 - 50 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Heavy Scientist',
                    value : 'Condition : 100  % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Underwater Lab Elite Crate',
                    value : 'Condition : 20 - 50 % | Amount : 1 | Chance : 2 %'
                },
                {
                    name : 'Sunken Crate',
                    value : 'Condition : 20 - 50 % | Amount : 1 | Chance : 2 %'
                }
            ],
            timestamp: new Date(),
            footer : {
                icon_url: icon1,
                text: footer
            }
        }
        if(args[0] === 'help') {
            message.channel.send({embed : helpembed})
            .then(console.log(helpembed))
            .catch(console.error);
        }
        if(args[0] === 'ak' || args[0] === 'assault' && args[1] === 'rifle') {
            message.channel.send({embed : akembed})
            .then(console.log(akembed))
            .catch(console.error);
        }
        if(args[0] === 'mp5a4' || args[0] === 'mp5') {
            message.channel.send({embed : mp5embed})
            .then(console.log(mp5embed))
            .catch(console.error);
        }
        if(args[0] === 'l96') {
            message.channel.send({embed : l96embed})
            .then(console.log(l96embed))
            .catch(console.error);
        }
        if(args[0] === 'double' && args[1] === 'barrel' || args[0] === 'db') {
            message.channel.send({embed : dbembed})
            .then(console.log(dbembed))
            .catch(console.error);
        }
        if(args[0] === 'smg' || args[0] === 'custom' && args[1] === 'smg' || args[0] == 'custom') {
            message.channel.send({embed : customsmgembed})
            .then(console.log(customsmgembed))
            .catch(console.error);
        }
        if(args[0] === 'bolt' || args[0] === 'bolt' && args[1] === 'action' && args[2] === 'sniper') {
            message.channel.send({embed : boltembed})
            .then(console.log(boltembed))
            .catch(console.error);
        }
        if(args[0] === 'm39') {
            message.channel.send({embed : m39embed})
            .then(console.log(m39embed))
            .catch(console.error)
        }
        if(args[0] === 'tommy' && args[1] === 'gun' || args[0] === 'tommy' || args[0] == 'thompson') {
            message.channel.send({embed : thompsonembed})
            .then(console.log(thompsonembed))
            .catch(console.error);
        }
        if(args[0] === 'nailgun') {
            message.channel.send({embed : nailgunembed})
            .then(console.log(nailgunembed))
            .catch(console.error);
        }
        if(args[0] === 'python' || args[0] == 'python' && args[1] === 'revolver') {
            message.channel.send({embed : pythonembed})
            .then(console.log(pythonembed))
            .catch(console.error);
        }
        if(args[0] == 'sar' || args[0] == 'semi' && args[1] == 'automatic' && args[2] == 'rifle' || args[0] == 'semi' && args[1] == 'auto' && args[2] == 'rifle') {
            message.channel.send({embed : sarembed})
            .then(console.log(sarembed))
            .catch(console.error);
        }
        if(args[0] == 'revolver') {
            message.channel.send({embed : revolverembed})
            .then(console.log(revolverembed))
            .catch(console.error);
        }
        if(args[0] == 'lr' || args[0] == 'lr300') {
            message.channel.send({embed : lrembed})
            .then(console.log(lrembed))
            .catch(console.error);
        }
        if(args[0] == 'semi' && args[1] == 'pistol' || args[0] == 'semi' && args[1] == 'auto' && args[2] == 'pistol') {
            message.channel.send({embed : semipistolembed})
            .then(console.log(semipistolembed))
            .catch(console.error);
        }
        if(args[0] == 'eoka') {
            message.channel.send({embed : eokaembed})
            .then(console.log(eokaembed))
            .catch(console.error);
        }
        if(args[0] == 'm2' || args[0] == 'm249') {
            message.channel.send({embed : m2embed})
            .then(console.log(m2embed))
            .catch(console.error);
        }
        if(args[0] == 'water' && args[1] == 'pipe' ||  args[0] == 'pipe' || args[0] == 'pipey') {
            message.channel.send({embed : pipeyembed})
            .then(console.log(pipeyembed))
            .catch(console.error);
        }
        if(args[0] == 'crossbow' || args[0] == 'crossy') {
            message.channel.send({embed : crossbowembed})
            .then(console.log(crossbowembed))
            .catch(console.error);
        }
        if(args[0] == 'spas' || args[0] == 'spas' && args[1] == '12') {
            message.channel.send({embed : spasembed})
            .then(console.log(spasembed))
            .catch(console.eroor)
        }
    }
}