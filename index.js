const Discord = require("discord.js");
const config = require("./config.json");

// NOVA INSTÂNCIA DO CLIENT
const client = new Discord.Client();

const prefix = ">";

client.on("message", (msg) => {
  if (msg.author.bot) {
    // SE A MENSAGEM FOR DE UM BOT
    return;
  } else if (!msg.content.startsWith(prefix)) {
    // SE A MENSAGEM FOR DE USUÁRIO MAS NÃO UM COMANDO
    if (msg.content === "ping") {
      msg.reply("Pong!");
    }
    if (msg.content === "fin") {
      msg.reply("FON!");
    }
    if (msg.content === "meu cabelo não bate na bunda") {
      msg.reply("Mas eu bato :smirk:");
    }
    if (msg.content === "eu tava com meus mano la na minha quebrada") {
      msg.reply("Chegou o Movie Night e veio dar ideia errada!");
    }
    if (msg.content === "Sweater Weather") {
      msg.reply("OHHHHHHH OHH OHH!!");
    }
    if (msg.content === "Mama") {
      msg.reply("UHH UHHH UHHHHHHH !!");
    }
  } else {
    // SE FOR UM COMANDO
    const commandBody = msg.content.slice(prefix.length);
    const args = commandBody.split(" ");
    const command = args.shift().toLowerCase();

    if (command === "add") {
      const timeTaken = (Date.now() - msg.createdTimestamp) / 1000;

      msg.reply(`Agora eu vou procurar o filme e ja volto.`);
      msg.reply(
        `My name is Berry Allen, it took me ${timeTaken}s to answer you!`
      );
    }
    if (command === "vote") {
      const timeTaken = (Date.now() - msg.createdTimestamp) / 1000;

      msg.reply(`Agora eu vou te mostrar a lista de filmes em votação.`);
      msg.reply(
        `My name is Berry Allen, it took me ${timeTaken}s to answer you!`
      );
    }
    if (command === "remove") {
      const timeTaken = (Date.now() - msg.createdTimestamp) / 1000;

      msg.reply(`Agora eu vou tirar esse filme da lista.`);
      msg.reply(
        `My name is Berry Allen, it took me ${timeTaken}s to answer you!`
      );
    }
    if (command === "queue") {
      const timeTaken = (Date.now() - msg.createdTimestamp) / 1000;

      msg.reply(`Agora eu vou te mostrar a lista de filmes ja votados.`);
      msg.reply(
        `My name is Berry Allen, it took me ${timeTaken}s to answer you!`
      );
    }
    if (command === "calendar") {
      const timeTaken = (Date.now() - msg.createdTimestamp) / 1000;

      msg.reply(`Agora eu vou te mostrar a programação.`);
      msg.reply(
        `My name is Berry Allen, it took me ${timeTaken}s to answer you!`
      );
    }
    if (command === "surprise") {
      const timeTaken = (Date.now() - msg.createdTimestamp) / 1000;

      msg.reply(`Agora eu vou te sugerir um filme.`);
      msg.reply(
        `My name is Berry Allen, it took me ${timeTaken}s to answer you!`
      );
    }
  }
});

client.on("ready", () => {
  console.log(`O PAI TA ON! ${client.user.tag}`);
});

// LOGIN DO BOT
client.login(config.BOT_TOKEN);
