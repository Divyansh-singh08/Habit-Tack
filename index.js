const express = require("express"); //express lib used
require("dotenv").config();
const PORT = process.env.PORT || 7000;
const path = require("path");
const app = express(); //for starting the express server
// const chalk = require("chalk");
// import chalk from "./chalk";

//express-ejs-layouts is a middleware for the Express web application framework
//that allows you to use layouts in your views using the EJS template engine.
// const expressLayouts = require("express-ejs-layouts");

//connect to the dataBase
const db = require("./config/mongoose");
const passport = require("passport");
const passportLocal = require("./config/passport");
const cookieParser = require("cookie-parser");
const expressLayouts = require("express-ejs-layouts");
const GoogleStrategy = require("./config/google-Auth");
const GitHubStrategy = require("./config/git-Auth");
const cors = require("cors");

//cors
app.use(cors());

//view engine as a middleware
app.set("view engine", "ejs");
app.set("views", "./views");

//urlencoded add to extract data from
//when we pass data to the server then data is encoded
//before reaching the data to the main data nut not change so we use this
app.use(express.urlencoded());

//stylesheet middleware SCSS
const sassMiddleware = require("node-sass-middleware");

app.use(
	sassMiddleware({
		src: "./assets/scss",
		dest: "./assets/css",
		debug: false,
		outputStyle: "extended",
		prefix: "/css",
	})
);

//css files connect
app.use(express.static(path.join(__dirname, "assets")));

//layouts in your views
app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

//flash message
////now need to show some notification the user connect-flash
const flash = require("connect-flash");
const flashMiddleware = require("./config/flash");

//cookies
app.use(cookieParser());

//passport middleware
const session = require("express-session");
const MongoStore = require("connect-mongo");

const store = MongoStore.create(
	{
		mongoUrl: "mongodb://127.0.0.1:27017/habits",
		autoRemove: "disabled",
	},
	(err) => {
		console.log(err || "connection is connected in mongoes ok");
	}
);
app.use(
	session({
		name: "habits",
		secret: "1percentIam",
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: 1000 * 60 * 600,
		},
		store: store,
	})
);

//passport
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

//flash
//we use here of flash-notification
//it will store the flashMsg into the cookies so we write here ...
app.use(flash());
app.use(flashMiddleware.setFlash);

// router --> connected to the route
app.use("/", require("./router"));

//server connection stablish using express
app.listen(PORT, (err) => {
	if (err) {
		console.error(
			// chalk.red(
			`Server error ${err}: There are error processing your request at the server. Please try again later or contact support if the issue persists`
			// )
		);
	}
	console.log(
		// chalk.green(
		`Your request was processed successfully.at ${PORT}`
		// )
	);
});
