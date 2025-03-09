const Listing=require("./models/listing.js");
const Review=require("./models/reviews.js");
const ExpressError=require("./utils/ExpressError");
const {listingSchema,reviewSchema}=require("./schema.js");


module.exports.isLoggedIn=(req,res,next)=>{
    //console.log(req.path,"..",req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;//sirf variable men store
        req.flash("error","you must be logged  in");
        return res.redirect("/login");
    }
    next();

}
//passport ka aik masla hai -->see user.js -->post -->/login route -->k jb user loggedin ho jaye ga req.session.redirectUrl delete  hojaye ga is 
//liye hm isy locals men store krwa len gy q k passport tou locals ko delete nhi krwa skta 
module.exports.saveRedirectUrl=(req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

//login k bad listings pr redirect hota hai we want edit-->login--->listings nhi edit pr wapis aye(edit--->req.originalUrl)-->agr user loggedin nhi tb ye

//path--->login---->path(login k bad wapis usi route pr)



module.exports.isOwner=async(req,res,next)=>{
    let {id}=req.params;
    let listing= await Listing.findById(id);
    if(!listing.owner._id.equals(res.locals.currentUser._id)){
        req.flash("error","You are not the owner of the listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
    
}

module.exports.validateListing=(req,res,next)=>{
    let {error}=listingSchema.validate(req.body);
     if(error){
        let errMsg=error.details.map((el)=>el.message).join(",")
        throw new ExpressError(404,errMsg);
     }
     else{
        next();
     }
}

module.exports.validateReview=(req,res,next)=>{
    let {error}=reviewSchema.validate(req.body);
     if(error){
        let errMsg=error.details.map((el)=>el.message).join(",")
        throw new ExpressError(404,errMsg);
     }
     else{
        next();
     }
}

module.exports.isReviewAuthor=async(req,res,next)=>{
    let {id,reviewId}=req.params;
    let review= await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currentUser._id)){
        req.flash("error","You are not the author of the review");
        return res.redirect(`/listings/${id}`);
    }
    next();
    
}