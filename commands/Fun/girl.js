const client = require('discord.js');
const { MessageEmbed } = require('discord.js');
const arrayOfStatus = [
    `https://i.pinimg.com/736x/8b/80/47/8b8047bf62aa9ec2c73b144a13f4c791.jpg`,
    `https://4.bp.blogspot.com/-FLkexf8lEjc/XON-F01ZCjI/AAAAAAAANwE/8cYb6C5Y6osgUlahvb5V6vsryZ1Q9wBrACLcBGAs/s1600/Anh-Nen-Gai-Xinh-4K_Ongtv.Net-%2B20.jpg`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yd0x-m2Ra3dYs2Q7FDQViZi2RYskcH1yvw&usqp=CAU`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3QbYOK54OGxMhstnT_Z2se4NQ0COCthV7dg&usqp=CAU`,
    `https://2.bp.blogspot.com/-QHoyzkXhLOE/XON-C2uIMsI/AAAAAAAANvc/-LdAJJHR8UUvlD4S0VtgvDdQO78c7_OaACLcBGAs/w640-h426/Anh-Nen-Gai-Xinh-4K_Ongtv.Net-%2B1.jpg`,
    `https://3.bp.blogspot.com/-yYBOunJB350/XON-C2a8PEI/AAAAAAAANvg/iKZg6RCAUREoYv-cBSc0WKXHVwmCc4FogCLcBGAs/w640-h426/Anh-Nen-Gai-Xinh-4K_Ongtv.Net-%2B0.jpg`,
    `https://1.bp.blogspot.com/-jwH7eI12e6g/XON-FvUHGMI/AAAAAAAANwA/Sm9q0mZub7Epdwp1fpt4MRoXmlumRMo5gCLcBGAs/w640-h426/Anh-Nen-Gai-Xinh-4K_Ongtv.Net-%2B2.jpg`,
    `https://4.bp.blogspot.com/-f8WPnoayn2k/XON-GEJsnEI/AAAAAAAANwI/DUscrFRk3pYQrnDWeA_vmQ2-oQL7Cd9OQCLcBGAs/w640-h427/Anh-Nen-Gai-Xinh-4K_Ongtv.Net-%2B4.jpg`,
    `https://keomoi.com/wp-content/uploads/2019/05/anh-gai-dep-de-thuong-hinh-8.jpg`,
    `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpgy6_cRKTytv7ctbmcFYWcme4cV0o2-EY9g&usqp=CAU`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395398_hinh-nen-girl-xinh-4k-cho-pc-01.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395399_hinh-nen-girl-xinh-4k-cho-pc-02.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395401_hinh-nen-girl-xinh-4k-cho-pc-03.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395432_hinh-nen-girl-xinh-4k-cho-pc-04.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395434_hinh-nen-girl-xinh-4k-cho-pc-05.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395435_hinh-nen-girl-xinh-4k-cho-pc-06.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395436_hinh-nen-girl-xinh-4k-cho-pc-06.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395437_hinh-nen-girl-xinh-4k-cho-pc-06.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395438_hinh-nen-girl-xinh-4k-cho-pc-06.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395438_hinh-nen-girl-xinh-4k-cho-pc-06.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395438_hinh-nen-girl-xinh-4k-cho-pc-06.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395438_hinh-nen-girl-xinh-4k-cho-pc-06.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395438_hinh-nen-girl-xinh-4k-cho-pc-06.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395438_hinh-nen-girl-xinh-4k-cho-pc-06.jpg`,
    `https://photo2.tinhte.vn/data/attachment-files/2021/03/5395398_hinh-nen-girl-xinh-4k-cho-pc-01.jpg`,
  ]
module.exports = {
    // name: "girl",
    description: "girl",
    
    execute: async (client, message, args, PREFIX) => {
        if(!message.channel.nsfw){
            const NEmbed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle(':x: This command only use in nsfw channel!')
                .setFooter("Requested by @" + message.author.username);
            return message.reply({ embeds: [NEmbed] })
        }else{
        try{

        //    message.reply(`${arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)]}`)
           const PEmbed = new MessageEmbed()
                .setColor('RANDOM')
                .setImage(`${arrayOfStatus[Math.floor(Math.random() * arrayOfStatus.length)]}`)
                .setFooter("Requested by @" + message.author.username);
            return message.reply({ embeds: [PEmbed] })
        }catch{
        return;
        }
            }
        }
        }

    