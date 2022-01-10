// // const { Command } = require("reconlx")
// // const ms = require("ms")

// // module.exports = new Command({
// //     name: "timeout",
// //     description: "timeout a member",
// //     category: "mod",
// //     usage: '<user>',
// //     accessableby: "",
// //     options: [
// //         // {
// //         // name: "user",
// //         // description: "member to perform the timeout",
// //         // type: "USER",
// //         // required: true
// //         // },
// //         {
// //             "User": {
// //                 name: "user",
// //                 description: "member to perform the timeout",
// //                 required: true
// //             }
// //         },
// //         {
// //             "String": {
// //                 name: "length",
// //                 description: "length of timeout",
// //                 required: true
// //             }
// //         },
// //         {
// //             "String": {
// //                 name: "reason",
// //                 description: "reason for this timeout",
// //                 required: true
// //             }
// //         },
// //         // {
// //         //     name: "length",
// //         //     description: "length of timeout",
// //         //     type: "STRING",
// //         //     required: true
// //         // },
// //         // {
// //         //     name: "reason",
// //         //     description: "reason for this timeout",
// //         //     type: "STRING",
// //         //     required: true
// //         // },
// //     ],
// //     run: async ( interaction ) => {
// //         // const options = interaction.options._hoistedOptions 
// //         const user = interaction.options.getUser('user')
// //         const length = interaction.options.getString('length')
// //         const reason = interaction.options.getString('reason')
// //         // let user = options.find((e) => e.name == "user")
// //         // let length = options.find((e) => e.name == "length")
// //         // let reason = options.find((e) => e.name == "reason")
// //         const member = interaction.guild.members.cache.get(user.id)

// //         const timeInMs = ms(length)
// //         if (!timeInMs)
// //             return interaction.followUp("Please specify a vaild time!")

// //         member.timeout(timeInMs, reason);
// //         interaction.followUp(`${user} has been timeout-ed for ${length}!\nReason:${reason}`)
// //     }
// // })

// const { Command } = require("reconlx");
// const ms = require("ms");

// module.exports = new Command({
//     name: 'timeout',
//     description: 'timeout a member in the server',
//     // permissions: "ADMINISTRATOR",
//     memberpermissions: ["MODERATE_MEMBERS"],
//     options: [
//         {
//                         "User": {
//                             name: "user",
//                             description: "member to perform the timeout",
//                             required: true
//                         }
//                     },
//                     {
//                         "String": {
//                             name: "length",
//                             description: "length of timeout",
//                             required: true
//                         }
//                     },
//                     {
//                         "String": {
//                             name: "reason",
//                             description: "reason for this timeout",
//                             required: true
//                         }
//                     },
//     ],
//     run: async (client, interaction) => {
//     try {
//         const options = interaction.options._hoistedOptions 
//         const user = interaction.options.getUser("user");
//         const length = interaction.options.getString("length");
//         const reason = interaction.options.getString("reason");
//         const member = interaction.guild.members.cache.get(user.id);

//         const timer = ms(length);
//         if (!timer)
//         return interaction.followUp("Please specify the time!");
//         member.timeout(timer, reason);
//         interaction.followUp(
//             `${user} you have been timed out in the server for ${length}!
// _**Reason**: ${reason}_`
//         );
//     } catch(e) {
//         interaction.send(String(e.stack).bgRed)
//     }
//     }
// });