let messages = []; // Array to store messages
let extraMessagesCount = 0; // Counter for extra messages








    

    // <script src="https://github.com/tmijs/tmi.js/releases/download/v1.8.4/tmi.min.js"></script>

 
const client = new tmi.Client({
	channels: [ 'xelerrrrr' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	console.log(tags);
	console.log(channel);
	console.log(message);
	console.log(self);
	console.log(`${tags['display-name']}: ${message}`);
    // if ((tags['display-name']) != "xelerrrrr") {
        sendMessage(message, tags['display-name']);
    // }
});



