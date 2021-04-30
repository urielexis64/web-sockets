// HTML references
const lblOnline = document.getElementById("lblOnline");
const lblOffline = document.getElementById("lblOffline");
const txtMessage = document.getElementById("txtMessage");
const btnSend = document.getElementById("btnSend");

const socket = io();

socket.on("connect", () => {
	lblOffline.style.display = "none";
	lblOnline.style.display = "";
});

socket.on("disconnect", () => {
	lblOnline.style.display = "none";
	lblOffline.style.display = "";
});

btnSend.addEventListener("click", () => {
	const message = txtMessage.value;
	const payload = {
		message,
		id: "xd",
		date: new Date().getTime(),
	};
	socket.emit("send-message", payload);
});

socket.on("data", (data) => {
	console.log(data);
});
