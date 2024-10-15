const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
    console.log('Escaneie o QR Code acima com o WhatsApp.');
});

client.on('ready', () => {
    console.log('Bot está pronto e conectado ao WhatsApp!');
});

client.on('message', message => {
    console.log(`Mensagem recebida: ${message.body}`);
    console.log(`Mensagem de: ${message.from}`);

    if (message.body.toLowerCase() === 'oi') {
        message.reply('Olá! Como posso te ajudar?');
    } else if (message.body.toLowerCase() === 'ping') {
        message.reply('pong');
    }
});

client.initialize();
