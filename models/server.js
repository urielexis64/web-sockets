const express = require("express");
const cors = require("cors");
require("dotenv").config();

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.server = require("http").createServer(this.app);
		this.io = require("socket.io")(this.server);

		this.paths = {};

		// Middlewares
		this.middlewares();

		//Application routes
		this.routes();

		// Sockets
		this.sockets();
	}

	middlewares() {
		// CORS
		this.app.use(cors());

		// Public directory
		this.app.use(express.static("public"));
	}

	routes() {
		/* this.app.use(this.paths.auth, require("../routes/auth.routes")); */
	}

	sockets() {
		this.io.on("connection", (socket) => {
			console.log("Client connected");

			socket.on("send-message", (payload) => {
				console.log(payload);
			});
		});
	}

	listen() {
		this.server.listen(this.port, () => {
			console.log(`Listening at http://localhost:${this.port}`);
		});
	}
}

module.exports = Server;
