import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    profession: { type: String, required: true },
},
    { timestamps: true });

// delete the model if exists
if (mongoose.models) {
    if (mongoose.models.users) {
        delete mongoose.models.users;
    }
}

export const UserModel = mongoose.model("users", userSchema);



