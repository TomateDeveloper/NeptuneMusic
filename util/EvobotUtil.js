module.exports = {
  canModifyQueue(member) {
    const { channelID } = member.voice;
    const botChannel = member.guild.voice.channelID;

    if (channelID !== botChannel) {
      member.send("¡Primero necesitas ingresar al canal de voz!").catch(console.error);
      return;
    }

    return true;
  }
};
