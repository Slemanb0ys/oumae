const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client()


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('ready', () => {
    console.log('Bot: Hosting ' + `${client.users.size}` + ' users, in ' + `${client.channels.size}` + ' channels of ' + `${client.guilds.size}` + ' guilds.');
        client.user.setStatus('online')
        client.user.setPresence({
            game: {
                name: '!oumae',
                type: "Playing",
                url: "https://discordapp.com/"
            }
        });
    });

    client.on('message', (receivedMessage) => {
      if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
          return
      }
      
      if (receivedMessage.content.startsWith("!")) {
          processCommand(receivedMessage)
      }
  })
  
  function processCommand(receivedMessage) {
      let fullCommand = receivedMessage.content.substr(1) // Remove the leading exclamation mark
      let splitCommand = fullCommand.split(" ") // Split the message up in to pieces for each space
      let primaryCommand = splitCommand[0] // The first word directly after the exclamation is the command
      let arguments = splitCommand.slice(1) // All other words are arguments/parameters/options for the command
  
      console.log("Command received: " + primaryCommand)
      console.log("Arguments: " + arguments) // There may not be any arguments
  
      if (primaryCommand == "oumae") {
          helpCommand(arguments, receivedMessage)
      } else if (primaryCommand == "multiply") {
          multiplyCommand(arguments, receivedMessage)
      } else {
          receivedMessage.channel.send("Try `!oumae`")
      }
  }
  
  function helpCommand(arguments, receivedMessage) {
      if (arguments.length > 0) {
        receivedMessage.channel.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: ":white_check_mark: Click here: " + arguments,
            url: "https://oumae.kireisubs.org/?n0=" + arguments,
            description: "Click link above,feel free to correct these Lyrics, or wrong object, sorry for disappointing!",
         
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© oumae"
            }
          }

          
        });
          
        receivedMessage.channel.send("I found some results from your query\n:mag: **" + arguments+"**",{ files: ["https://i.imgur.com/3bE3UPT.png"] })
      
    
    } else {
          receivedMessage.channel.send("usage [prefix] query instead, ie\n```!oumae bokuben ending```")
      }
  }
  

client.login('NjMzMTU5ODQ1NTU3NTY3NDk4.XaTHfw.9mfoEF68jrqjN3oIYbH6xlPTF64')