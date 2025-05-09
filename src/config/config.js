module.exports = {
  prefix: process.env.PREFIX || '!',
  embedColor: '#006496', // Discord Blurple
  footer: 'Get Going',
  statusMessages: {
    online: 'DM me for assistance!',
    idle: 'Watching for new ModMail tickets'
  },
  cooldowns: {
    commands: 3, // cooldown in seconds for normal commands
    newTicket: 60, // cooldown in seconds for creating a new ticket
    ticketMessage: 2, // cooldown in seconds between messages in an existing ticket
    staffResponse: 1 // cooldown in seconds for staff responses
  },
  ticketSettings: {
    closeConfirmation: true, // require confirmation before closing a ticket
    transcripts: true, // save ticket transcripts
    logsEnabled: true, // enable logging in a designated channel
    maxOpenTickets: 1, // maximum number of open tickets per user
    autoClose: {
      enabled: true, // automatically close inactive tickets
      inactiveHours: 72 // close tickets inactive for this many hours
    }
  },
  credits: {
    name: 'Noah',
    website: 'Head of Operations'
  }
}; 
