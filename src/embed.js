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
                name: 'Terompet kontol',
                type: "Playing",
                url: "https://discordapp.com/"
            }
        });
    });




client.on('message', (receivedMessage) => {
  if (receivedMessage.author == client.user) { // Prevent bot from responding to its own messages
      return
  }
  
  if (receivedMessage.content.startsWith("oumae")) {
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
      receivedMessage.channel.send("Babu disini, still running your argument..\n\n**Heeeee...** \nI found some results from your lyrics query\nClick link below:\n:musical_note: http://oumae.kireisubs.org/?n0=" + arguments,{ files: ["https://i.imgur.com/T7i3rON.png"] })
  }
}

function helpCommand(arguments, receivedMessage) {
  if (arguments.length > 0) {
      receivedMessage.channel.send("It looks like you might need help with " + arguments)
  } else {
      receivedMessage.channel.send("I'm not sure what you need help with. Try `!help [topic]`")
  }
}

function multiplyCommand(arguments, receivedMessage) {
  if (arguments.length < 2) {
      receivedMessage.channel.send("Not enough values to multiply. Try `!multiply 2 4 10` or `!multiply 5.2 7`")
      return
  }
  let product = 1 
  arguments.forEach((value) => {
      product = product * parseFloat(value)
  })
  receivedMessage.channel.send("The product of " + arguments + " multiplied together is: " + product.toString())
}

client.login('NjMzMTU5ODQ1NTU3NTY3NDk4.XaP6Pw.pYKZwH3mCvfsw5MoJ6z9rUALHl0')