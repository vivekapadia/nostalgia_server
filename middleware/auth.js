import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

const secret = process.env.SECERT_KEY;

const auth = async (req, res, next) => {
	try {
		// server side its a for authorization
		const token = req.headers.authorization.split(" ")[1];
		const isCustomAuth = token.length < 500;

		let decodedData;

		if (token && isCustomAuth) {
			decodedData = jwt.verify(token, secret);

			req.userId = decodedData?.id;
		} else {
			decodedData = jwt.decode(token);

			req.userId = decodedData?.sub;
		}

		next();
	} catch (error) {
		console.log(error);
	}
};

export default auth;
