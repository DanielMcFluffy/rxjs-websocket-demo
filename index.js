const {webSocket} = rxjs.webSocket;
const {tap, map} = rxjs.operators;

const subject = webSocket({
    // url: 'ws://localhost:8000',
    url: 'https://rxjs-websocket-demo.onrender.com',
    deserializer: msg => msg
});

subject.pipe(
    map(x => JSON.parse(x.data).response)
).subscribe({
    next: msg => {
        messageContainer.innerHTML += `
            <div><span>Received: </span> ${msg}</div>
        `
    },
    error: err => console.log(err),
    complete: () => console.log('complete')
   });


const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');

function sendMessage() {
    const message = messageInput.value;
    if (!message) {
        return alert('Message cannot be blank!');
    }
    messageContainer.innerHTML += `
        <div><span>Sent: </span> ${message}</div>
    `
    subject.next(message);
    messageInput.value = '';
}














window.sendMessage = sendMessage;