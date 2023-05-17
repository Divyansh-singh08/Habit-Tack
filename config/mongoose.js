//getting started with the db connection object

const mongoose = require("mongoose");
const mongoURL = process.env.MONGODB_URL;

mongoose.set("strictQuery", false);

main()
	.then(() => {
		console.log("mongoose connected!!");
	})
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect(mongoURL);
}
