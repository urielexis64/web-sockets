const express = require("express");
const cors = require("cors");
require("dotenv").config();

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;

		this.paths = {};

		// Middlewares
		this.middlewares();

		//Application routes
		this.routes();
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

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Listening at http://localhost:${this.port}`);
		});
	}
}

module.exports = Server;
