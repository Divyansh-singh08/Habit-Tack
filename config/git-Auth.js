//github login strategy

const passport = require("passport");
const User = require("../models/user");
const GithubStrategy = require("passport-github2").Strategy;
const crypto = require("crypto");
//gitHub login strategy

// passport.use(new GithubStrategy({}));

passport.use(
	new GithubStrategy(
		{
			clientID: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GIT_AUTH_KEY,
			callbackURL: process.env.GITHUB_CALLBACK_URL,
		},
		async (accessToken, refreshToken, profile, done) => {
			const email = `${profile.username}@gmail.com`;
			console.log(email);
			const user = await User.findOne({ email: email });
			//if user is not present in the dB
			console.log(user);
			if (!user) {
				console.log(user);
				const newUser = await User.create({
					email: email,
					password: crypto.randomBytes(20).toString("hex"),
					name: profile.username,
				});
				console.log(newUser);
				return done(null, newUser);
			}
			//if present then just return
			return done(null, user);
			// );
		}
	)
);
