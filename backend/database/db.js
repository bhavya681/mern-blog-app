import mongoose, { connect } from "mongoose";
import "dotenv/config";

const connectDB = async () => {

    try {

        await connect(process.env.MONGO_CONNECT);
        console.log("*---Successfully Connected To MongoDB---*");

    } catch (error) {

        console.log(error);

    }

}

export default connectDB;