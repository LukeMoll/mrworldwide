
if (process.env.DISCORD_TOKEN === undefined)
{
    console.error("Environment $DISCORD_TOKEN was not defined!");
    abort();
}

if (process.env.DISCORD_CLIENT_ID === undefined)
{
    console.error("Environment variable $DISCORD_CLIENT_ID was not defined!");
    abort();
}

if (process.env.DISCORD_CLIENT_SECRET === undefined)
{
    console.error("Environment variable $DISCORD_CLIENT_SECRET was not defined!");
    abort();
}

module.exports = {
    token: process.env.DISCORD_TOKEN,
    clientid: process.env.DISCORD_CLIENT_ID,
    clientsecret: process.env.DISCORD_CLIENT_SECRET
};