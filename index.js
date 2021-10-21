const { Client, Collection } = require('discord.js'); // npm i discord.js
const client = new Client({
    intents: 32767
});
const config = require('./config');
const path = require('path'); // npm i path
const dotenv = require('dotenv'); // npm i dotenv
const { readdirSync } = require('fs'); // npm i fs
dotenv.config();
const events = readdirSync(path.join(__dirname, 'events')).filter(file => file.endsWith('.js'));
for (file of events) {
    const event = require(path.join(__dirname, 'events', file));
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
    } else {
        client.on(event.name, (...args) => event.execute(...args, client));
    }
}
client.login(process.env.TOKEN);