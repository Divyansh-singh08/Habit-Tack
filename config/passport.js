const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

//import the user model bcz who signIn all details store here
const User = require("../models/user");

//authentication using passport js
passport.use(
	new LocalStrategy(
		{
			usernameField: "email",
			//this allow us to first argument as req function call
			passReqToCallback: true,
		},
		async function (req, email, password, done) {
			try {
				const user = await User.findOne({ email: email });

				if (!user || user.password != password) {
					console.log(`Invalid Password`);
					req.flash('error',`Invalid Username OR Password`);
					return done(null, false);
				}

				return done(null, user);
			} catch (err) {
				console.log("Error in passportJS", err);
				// req.flash('error',`Error you got ${err}`);
				return done(err);
			}
		}
	)
);

//serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function (user, done) {
	//we want to store user id in encrypted format
	//this will do it automatically into the cookies
	done(null, user.id);
});

//deserializing the user from the key in the cookies
//taking information of the key from the cookies is deserialize
passport.deserializeUser(async function (id, done) {
	try {
		//find the user is present in the db
		const user = await User.findById(id);

		return done(null, user);
	} catch (err) {
		console.log("Error in passportJS", err);
		return done(null,err);
	}
});


//sending data to the current user to the view
//check user authentication
passport.checkAuthentication =(req, res, next) => {
	//first user sign-in then pass on the next() function->>>controller
	if (req.isAuthenticated()) {
		console.log(" authenticated verified");

		return next();
	}

	//if user is not sign in
    console.log('check authentication false');
	return res.redirect("/user/sign-in");
};

//set the user for views
passport.setAuthenticatedUser = async (req, res, next) => {
	if (req.isAuthenticated()) {
		//req.user contains the current signed in user from the session cookies
		//and we are sending this to the locals for the views
		//if user-sign-in then information of user store in cookies
		res.locals.user = req.user;
	}
	next();
};


module.exports = passport;