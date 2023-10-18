import mongoose from "mongoose";
import Express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();

//  routes
import main from "./routes/main.js";

const DB = process.env.DATABASE_KEY;

const app = Express();
const PORT = process.env.PORT || 5000;

app.use(Express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("server vishal");
});

//  routes
app.use(main);

mongoose.set("strictQuery", false);
mongoose
  .connect(DB)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`connection success ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e.message);
  });
