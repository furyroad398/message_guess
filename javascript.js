var message = ['Your sign is sun',
    'You are having good luck',
    'You should:trust no one']

function newMessage() {
    var randomNumber = Math.floor(Math.random() * (message.length));
    document.getElementById('messageDisplay').innerHTML = message[randomNumber];
}
