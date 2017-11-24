/**
 * Start server bot for FURS.
 *
 * @summary Bot for Discord.
 *
 * @author 	Kitsune Solar <kitsune.solar@gmail.com>
 * @link 	https://metastore.pro
 * ------------------------------------------------------------------------------------------------------------------ */

'use strict';

const Discord = require('discord.js');
const fs = require('fs');
const config = require('./config.json');
const client = new Discord.Client({
	autoReconnect: true
});
const token = config.setToken;
const game = config.setGame;
const color = config.setColor;
const prefix = config.setCmdTrigger;

client.on('ready', () => {
	console.log('Logged in as ' + client.user.username + '!');
	client.user.setPresence({
		game: {
			name: game
		}
	});
});

client.on('guildMemberAdd', member => {
	let msg = 'Привет, ' + member + '!\n' +
		'\nДобро пожаловать на один из лучших серверов сообщества FURRY. Я личный робот этого сообщества.' +
		'\nУ нас ты можешь найти друзей по интересам, узнать много нового и необычного, рассказать о своем увлечении или навыке в прямом эфире на нашем радио.' +
		'\nНиже представлены ссылки и описания наших ресурсов.' +
		'\n\n```markdown' +
		'\n# РЕСУРСЫ\n' +
		'\n[-] https://furs.network     - сеть сообщества FURRY.' +
		'\n[-] https://radio.wtf        - интернет-радиостанция.' +
		'\n\n# СОЦИАЛЬНЫЕ СЕТИ\n' +
		'\n[-] https://vk.com/furs.life - сообщество FURRY в ВКонтакте.' +
		'```';

	let channel = member.guild.channels;
	let channel_log = channel.find('name', 'log-bot');
	let channel_general = channel.find('name', 'public');

	if (!channel_log || !channel_general) return;

	channel_log.send(msg);
	channel_general.send(msg);
});

client.login(token);
