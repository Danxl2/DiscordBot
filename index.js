const { Client } = require('discord.js'); // npm i discord.js
const client = new Client({
    intents: 32767
});
const config = require('./config');
const path = require('path'); // npm i path
const dotenv = require('dotenv'); // npm i dotenv
dotenv.config();
client.login(process.env.TOKEN);