// HTML references
const lblOnline = document.getElementById("lblOnline");
const lblOffline = document.getElementById("lblOffline");

const socket = io();

socket.on("connect", () => {
	lblOffline.style.display = "none";
	lblOnline.style.display = "";
});

socket.on("disconnect", () => {
	lblOnline.style.display = "none";
	lblOffline.style.display = "";
});
