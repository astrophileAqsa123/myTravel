const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const Mongo_url="mongodb://127.0.0.1:27017/myTravel";
main().then(()=>{
    console.log("Connected to DB");
}).catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect(Mongo_url);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:'66b0801cd1d7f5a1229efc60'}));//map returns a new array
    await Listing.insertMany(initData.data);
    console.log("data was intialized");

};
initDB();