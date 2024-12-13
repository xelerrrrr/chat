

window.onload = function() {
// Create a WebSocket object with the server URL
const socket = new WebSocket("wss://eventsub.wss.twitch.tv/ws");

// Listen to the open event, which indicates the connection is established

// Listen to the open event, which indicates the connection is established
socket.onopen = () => {
  console.log("WebSocket connection opened");
  // Send a message to the server
  socket.send("Hello from the browser!");




    document.getElementById('messages').innerHTML = 'hi';
};

// Listen to the message event, which contains the data received from the server
socket.onmessage = (event) => {
  console.log("Message from the server:", event.data);
};

// Listen to the close event, which indicates the connection is closed
socket.onclose = (event) => {
  console.log("WebSocket connection closed");
};

// Listen to the error event, which indicates there is an error with the connection
socket.onerror = (error) => {
  console.error("WebSocket error:", error);
};
}
