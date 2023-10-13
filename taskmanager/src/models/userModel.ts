import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { timestamps: true, }
);

const modelName = "users";

// Delete the existing model if it exists
if (mongoose.models[modelName]) {
    mongoose.deleteModel(mongoose.model(modelName).modelName);
}

const userModel = mongoose.model(modelName, userSchema);


export default userModel;
