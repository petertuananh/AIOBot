const chalk = require(`chalk`);
const { MessageSelectMenu, MessageActionRow } = require(`discord.js`);
// const emojis = require("../JSON/emoji.json")

const create_mh = (array) => {
    if (!array) throw new Error(chalk.red.bold(`The option is not being supplied! Make sure you provide options!`));
    if (array.length < 0) throw new Error(chalk.red.bold(`Must contain at least one option to choose from!`));
    let select_menu;
    let id = `help-menus`;
    let menus = [];
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
    
    array.forEach(cca => {
        let name = cca;
        let sName = `${name.toUpperCase()}`
        let tName = name.toLowerCase();
        let fName = name.toUpperCase();

        return menus.push({
            label: `📢 | ${sName}`,
            description: `Click here to see the command list of ${tName.toUpperCase()}!`,
            value: fName
        })
    });

    let smenu1 = new MessageSelectMenu()
        .setCustomId(id)
        .setPlaceholder(`=-=-=-=-=-=Select Command List=-=-=-=-=-=`)
        .addOptions(menus)

    select_menu = new MessageActionRow()
        .addComponents(
            smenu1
        );


    return {
        smenu: [select_menu],
        sid: id
    }
}

module.exports = create_mh;