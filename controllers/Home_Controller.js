//landing page handle
module.exports.landingPage = (req,res)=>{
    //google authenticated
    if(req.isAuthenticated()){
        return res.render('home');
    }
    return res.render('landingPage');
}