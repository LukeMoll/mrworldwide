MrWorldwide
===

## Usage
Any user can send `!region` to activate *MrWorldwide*. It will then change your server's voice region to one which isn't currently selected, and then change it back 5 seconds later. The tag of the user who requested the region change will be put in the audit log.

## Installing
1. Clone the repository and run `npm i`
2. [Create a Discord application](https://discordapp.com/developers/applications)
3. Under the *Bot* tab click "Add Bot"
4. Copy the Client ID (from *General Information*) and Bot Token (from *Bot*) to `keys.js.example`
5. Rename `keys.js.example` to `keys.js`
6. Run `npm run invite` and click the link to add it to your server
7. Start the bot with `npm start`