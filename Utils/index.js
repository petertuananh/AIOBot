const fs = require('fs');
const { prefix } = require('../JSON/config.json')

module.exports = {
	logger: require('./Logger'),
};

function getCommands() {
	let categories = [];
	

	fs.readdirSync('./commands/').forEach((dir) => {
		const directories = fs.readdirSync(`./commands/${dir}/`).filter((file) => file.endsWith('.js'));

		const value = [];

		let ignored = [
			"administrator",
			"test"
		];

		if (ignored.includes(dir.toLowerCase())) return;

        const commands = directories.map((command) => {
			let file = require(`../commands/${dir}/${command}`);

			value.push({
				name: file.name ? file.name.replace(".js", "") : 'Lệnh này chưa được thêm',
				usage: file.usage ? `${prefix}${file.name} ${file.usage}` : `${prefix}${file.name}`,
				aliases: file.aliases ? file.aliases.join(" ║ ") : 'Lệnh phụ chưa được thêm',
				description: file.description ? file.description : 'Mô tả chưa được thêm',
	
			});
		})

		

		let data = new Object();
			
			data = {
				name: dir.toUpperCase(),
				value,
		};

		categories.push(data);
	})
	return categories;
}

module.exports = { getCommands }