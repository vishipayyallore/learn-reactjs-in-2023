import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        status: { type: String, required: true },
        category: { type: String, required: true },
        priority: { type: String, required: true },
        dateToStart: { type: String, required: true },
        dateToEnd: { type: String, required: true },
        reference: { type: String, required: true },
    },
    { timestamps: true, }
);

const modelName = "tasks";

// Delete the existing model if it exists to avoid OverwriteModelError
if (mongoose.models[modelName]) {
    mongoose.deleteModel(mongoose.model(modelName).modelName);
}

const taskModel = mongoose.model(modelName, taskSchema);

export default taskModel;
