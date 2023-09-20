import mongoose from "mongoose";

export const connectToMongoDb = async () => {

    try {
        const mongoDbUrl = process.env.MONGO_DB_URI || "";
        if (mongoDbUrl === "") {
            throw new Error("MongoDB URL is not defined");
        }

        await mongoose.connect(mongoDbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB connected`);
    } catch (error) {
        console.log(`MongoDB connection failed: ${error}`);
    }

};