import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(
            `Mongoose connected: ${conn.connection.host}`.cyan.underline.bold
        );
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold);
    }
};

export default connectDB;
