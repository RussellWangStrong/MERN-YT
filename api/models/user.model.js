import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require:true,
        unique:true,
    },
    email:{
        type: String,
        require:false,
        unique:true,
    },

    password:{
        type: String,
        require:true,
    },

    avatar:{
        type:String,
        default: "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png"
    },

}, {timestamps:true});

const User = mongoose.model('User',userSchema);

export default User;