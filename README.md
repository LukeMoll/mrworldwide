MrWorldwide
===

## Usage
Any user can send `!region` to activate *MrWorldwide*. It will then change your server's voice region to one which isn't currently selected, and then change it back 5 seconds later. The tag of the user who requested the region change will be put in the audit log.

## Installing
1. Clone the repository and run `npm i`
2. [Create a Discord application](https://discordapp.com/developers/applications)
3. Under the *Bot* tab click "Add Bot"
4. Copy the Client ID (from *General Information*) and Bot Token (from *Bot*).
   They should be used for the **environment variables** `DISCORD_TOKEN`, `DISCORD_CLIENT_ID`, and `DISCORD_CLIENT_SECRET`.
5. Run `npm run invite` and click the link to add it to your server
6. Start the bot with `npm start`

## Optional HTTP server
For compatibility with services like Coolify, you can run a HTTP server by providing the enviroment variable HTTP_PORT. This server will respond `204` to any request.