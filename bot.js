const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (mes) => {
    if(mes.content.toLowerCase() == "!region") {
        try {
            mes.guild.fetchVoiceRegions().then(regions => {
                let otherRegion = regions
                    .map(reg => reg.id)
                    .filter((v,t,a) => v!=mes.guild.region)[0];
                
                let mainRegion = mes.guild.region;
                
                mes.guild.setRegion(otherRegion, `Switching voice region at the request of ${mes.member.user.tag}.`);
                setTimeout(() => {
                    mes.guild.setRegion(mainRegion, `Switching voice region back.`);
                }, 5000);
            })
        } catch (error) {
            console.log(error);
            mes.reply("An error occurred:```"+error+"```");
        }
    }
    else if(mes.mentions.users.get(client.user.id) !== undefined) {
        // this message mentions us
        mes.channel.send(`Goodbye ${mes.member}! If people are having trouble connecting to voice, they can use ${"`!region`"} to switch to a different region and back again.`)
    }
});

client.login(require('./keys').token);

if (process.env.HTTP_PORT !== undefined)
{
    const http = require('http');

    const http_port = process.env.HTTP_PORT;
    console.log(`Starting HTTP server on ${http_port}.`);

    http.createServer((req, res) => {
        res.writeHead(204);
        res.end();
    }).listen(http_port, "0.0.0.0");
}
