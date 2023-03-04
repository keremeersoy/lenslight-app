import mongoose from "mongoose";

const conn = () => {
  mongoose
    .connect(process.env.DB_URL, {
      dbName: "lenslight-app",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected db successfully");
    })
    .catch((err) => {
      console.log(`db error ${err}`);
    });
};

export default conn;
