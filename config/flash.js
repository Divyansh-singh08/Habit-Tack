//notification pop logic
module.exports.setFlash = (req, res, next) => {
	try{
        res.locals.flash = {
            success: req.flash("success"),
            error: req.flash("error"),
        };
        next();
    }catch(err){
        console.log('got the error in popUp');
    }
};
