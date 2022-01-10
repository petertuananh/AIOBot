//Because Of Big File We Cant Record This So We Have Previded Source Code
const config = require('../../JSON/config.json');
const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const db = require("quick.db");
// const {
//     MessageEmbed,
//     Message,
//     Client
// } = require("discord.js");
const {
    readdirSync
} = require("fs");
const {
    stripIndent
} = require('common-tags');
// const emojis = require("../../JSON/emoji.json")
let color = "#ff0000";

const create_mh = require(`../../functions/menu.js`);
module.exports = {
    name: "help",
    aliases: [`menu`, `hép`],
    category: 'Bot',
    description: "Show all command",
    cooldown: 5,
    // UserPerms: ["SEND_MESSAGE"],
    // BotPerms: ["SEND_MESSAGE"],
    run: async (client, message, args, prefix) => {
        if (!message.content.startsWith(prefix)) return;
        let categories = [];
        let cots = [];

        if (!args[0]) {
            let ignored = [
                "administrator",
                "test"
            ];
            const emo = {
                Information: `<:Information:912139638741811240>`,
                Administrator: `<:A_IconAdmin:927046263785000982> `,
                Utility: `<a:settings:915489052940189726>`,
                Moderation: `<:Employee:915203866243526686>`,
                Search: `<:search:927045915326439435>`,
                Fun: `🎈`,
                Economy: `<a:money:915396544587522048>`,
                Music: `<a:dj:915231895866986556>`,
                Game: `<:gw_gamepad:927045505358397490>`,
                AntiSwear: `<:TDN_security:927045324193808384> `,
                Images: `<a:Instagram:915396972180041739>`,
                Videos: `🎞`,
                Levels: `<:topggSunglasses:927044754179510272>`,
                Bot: `<:bot:915489911531012167>`,
                Protection: `<:sec:927042188767002644>`,
                Giveaways: `<a:congratulation:918701219789307915>`,
                Modmail: `<:mail:918758994422693889>`,
                Ticket: `<:TDN_ticket:927043894066155561> `,
                API: `<a:dev:927042918827577365>`,
                Shop: `<:shop:927043683323363359> `,
                Backup: `<:Cloud:927042603835342878>`,
                Dms: `<:message:923997977104756786>`,
                Bot: `<a:logodiscord:915232863207694378>`
            }

            let ccate = [];
            readdirSync("./commands/").forEach((dir) => {
                if (ignored.includes(dir.toLowerCase())) return;
                const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );

                if (ignored.includes(dir.toLowerCase())) return;

                const name = `${emo[dir]} <a:rc_deco_Dot:915487929248391178>  ${dir}`;
                let nome = dir.toUpperCase();

                let cats = new Object();
                cats = {
                    name: name,
                    value: `\`${prefix}help ${dir.toLowerCase()}\``,
                    inline: true
                }


                categories.push(cats);
                ccate.push(nome);
            });
            const des = stripIndent
            `
            📢 New nofitication:
            ${config.nofi}
            `
            const description = stripIndent
            `
            Your server prefix: ${prefix} 
            Commands ${client.user.username} have : ${message.client.commands.size}
            From <@!${config.ownerID}> with luv 🥰!

            `;
            const row = new MessageActionRow().addComponents(
                new MessageButton()
                .setStyle("LINK")
                .setURL(config.invite)
                .setEmoji('<:VerifiedBot:915188288225161216> ')
                .setLabel('Invite me'),
                new MessageButton()
                .setStyle("LINK")
                .setURL(config.support)
                .setEmoji('<:ServerTag:926995884829470770>')
                .setLabel('Support'),
                new MessageButton()
                .setStyle("LINK")
                .setURL(config.botWebsite)
                .setEmoji('🔗')
                .setLabel('Website'),
            )
            const embed = new MessageEmbed()
                .setAuthor(`Help Commands ❓`, client.user.displayAvatarURL())
                // .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .addFields(
                    { name: '📢 New nofitication:', value: `\`\`\`${config.nofi}\`\`\``},)
                // .addFields(name: 📢 New nofitication:, des)
                .setDescription(`\`\`\`${des}\`\`\``)
                .setDescription(`\`\`\`asciidoc\n${description}\`\`\``)
                .addFields(categories)
                // .setImage("")
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setImage(config.banner)
                .setColor(color)

            let menus = create_mh(ccate);
            return message.channel.send({
                embeds: [embed],
                components: menus.smenu
            }).then((msgg) => {

                const menuID = menus.sid;

                const select = async (interaction) => {
                    if (interaction.customId != menuID) return;

                    let {
                        values
                    } = interaction;

                    let value = values[0];

                    let catts = [];

                    readdirSync("./commands/").forEach((dir) => {
                        if (dir.toLowerCase() !== value.toLowerCase()) return;
                        const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                            file.endsWith(".js")
                        );
                        const cmds = commands.map((command) => {
                            let file = require(`../../commands/${dir}/${command}`); //getting the commands again

                            if (!file.name) return "No command!";

                            let name = file.name.replace(".js", "");

                            if (client.commands.get(name).hidden) return;


                            let des = client.commands.get(name).description;
                            let emo = client.commands.get(name).emoji;
                            let emoe = emo ? `${emo} - ` : ``;

                            let obj = {
                                cname: `${emoe}\`${name}\``,
                                des
                            }

                            return obj;
                        });

                        let dota = new Object();

                        cmds.map(co => {
                            if (co == undefined) return;

                            dota = {
                                name: `${cmds.length === 0 ? "Update....." : `<a:here:907106477867687956> ` + co.cname}`,
                                value: co.des ? co.des : `No description!`,
                                inline: true,
                            }
                            catts.push(dota)
                        });

                        cots.push(dir.toLowerCase());
                    });

                    if (cots.includes(value.toLowerCase())) {
                        const combed = new MessageEmbed()
                            .setAuthor(`[${value.charAt(0).toUpperCase() + value.slice(1)}] Help Commands ❓`)
                            // .setThumbnail(db.get(`thumb-${message.guild.id}`))
                            // .setTitle(`__[MENU] ${value.charAt(0).toUpperCase() + value.slice(1)}__`)
                            .setDescription(`\`\`\`Use ${prefix}help [command] to see details\nEx: ${prefix}help ping\`\`\`\n\n`)
                            .setFooter(client.user.username, client.user.displayAvatarURL())
                            .setTimestamp()
                            .addFields(catts)
                            .setImage(config.banner)
                            .setColor(color)

                        await interaction.deferUpdate();

                        return interaction.message.edit({
                            embeds: [combed],
                            components: menus.smenu
                        })
                    };
                };
                const filter = (interaction) => {
                    return !interaction.user.bot && interaction.user.id == message.author.id
                };

                const collector = msgg.createMessageComponentCollector({
                    filter,
                    componentType: "SELECT_MENU"
                });
                collector.on("collect", select);
                collector.on("end", () => null);

            });

        } else {
            let catts = [];

            readdirSync("./commands/").forEach((dir) => {
                if (dir.toLowerCase() !== args[0].toLowerCase()) return;
                const commands = readdirSync(`./commands/${dir}/`).filter((file) =>
                    file.endsWith(".js")
                );

                const cmds = commands.map((command) => {
                    let file = require(`../../commands/${dir}/${command}`);
                    if (!file.name) return "No command!.";
                    let name = file.name.replace(".js", "");
                    if (client.commands.get(name).hidden) return;
                    let des = client.commands.get(name).description;
                    let emo = client.commands.get(name).emoji;
                    let emoe = emo ? `${emo} - ` : ``;
                    let obj = {
                        cname: `${emoe}\`${name}\``,
                        des
                    }
                    return obj;
                });
                let dota = new Object();
                cmds.map(co => {
                    if (co == undefined) return;
                    dota = {
                        name: `${cmds.length === 0 ? "Updating." : `<a:here:907106477867687956>` + co.cname}`,
                        value: co.des ? co.des : `No description!`,
                        inline: true,
                    }
                    catts.push(dota)
                });

                cots.push(dir.toLowerCase());
            });

            const command =
                client.commands.get(args[0].toLowerCase()) ||
                client.commands.find(
                    (c) => c.aliases && c.aliases.includes(args[0].toLowerCase())
                );

            if (cots.includes(args[0].toLowerCase())) {
                const combed = new MessageEmbed()
                    .setAuthor(`[${args[0].charAt(0).toUpperCase() + args[0].slice(1)}] Commands❓`)
                    // .setThumbnail(db.get(`thumb-${message.guild.id}`))
                    .setDescription(`\`\`\`Use ${prefix}help [command] to see details\nEx: ${prefix}help ping\`\`\`\n\n`)
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setTimestamp()
                    .addFields(catts)
                    .setImage(config.banner)
                    .setColor(color)

                return message.channel.send({
                    embeds: [combed]
                })
            };

            if (!command) {
                const embed = new MessageEmbed()
                    .setAuthor(`Help Commands ❓`, client.user.displayAvatarURL())
                    // .setThumbnail(db.get(`thumb-${message.guild.id}`))
                    .setDescription(`<a:xx:915205922429751346> Error!\nUse \`${prefix}help\` to see the command list!`)
                    .setFooter(client.user.username, client.user.displayAvatarURL())
                    .setTimestamp()
                    .setColor("RED");
                return await message.channel.send({
                    embeds: [embed],
                    allowedMentions: {
                        repliedUser: false
                    },
                });
            }
            const embed = new MessageEmbed()
                .setAuthor(`Help ${args[0].charAt(0).toUpperCase() + args[0].slice(1)} Commands ❓`)
                // .setThumbnail(db.get(`thumb-${message.guild.id}`))
                .addField(
                    "<a:here:907106477867687956> Commands",
                    command.name ?
                    `\`${command.name}\`` : "\`This command has not been added yet\`",
                    true
                )
                .addField(
                    "<a:here:907106477867687956> Aliases:",
                    command.aliases ?
                    `\`${command.aliases.join("` `")}\`` :
                    "\`Sub-commands not yet added!\`", true
                )
                .addField(
                    "<a:here:907106477867687956> Usage:",
                    command.usage ?
                    `\`${prefix}${command.name} ${command.usage}\`` :
                    `\`${prefix}${command.name}\``
                )
                .addField(
                    "<a:here:907106477867687956> Description:",
                    command.description ?
                    `\`${command.description}\`` :
                    "\`Description has not been added yet\`", true
                )
                .setFooter(client.user.username, client.user.displayAvatarURL())
                .setTimestamp()
                .setColor(color);
            return await message.channel.send({
                embeds: [embed]
            });
        }
    },
}