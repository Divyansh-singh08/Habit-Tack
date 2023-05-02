const express = require("express");
const passport = require("passport");
const {
	createUser,
	SignIn,
	SignUp,
	createSession,
	signOut,
	home,
} = require("../controllers/User_Controller");
const routers = express.Router();

//create user
routers.post("/create", createUser);
routers.post(
	"/session",
	passport.authenticate("local", { failureRedirect: "/user/signIn" }),
	createSession
);
routers.get("/signIn", SignIn);
routers.get("/signUp", SignUp);
routers.get("/sign-out", signOut);

routers.get("/home", home);

//authentication
routers.get(
	"/auth/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);
routers.get(
	"/auth/google/callback",
	passport.authenticate("google", {
		failureRedirect: "/user/signIn",
		successRedirect: "/user/home",
	})
);

routers.get(
	"/auth/github",
	passport.authenticate("github", { scope: ["user:email"] })
);

routers.get(
	"/auth/github/callback",
	passport.authenticate("github", {
		failureRedirect: "/user/signIn",
		successRedirect: "/user/home",
	})
);

module.exports = routers;
