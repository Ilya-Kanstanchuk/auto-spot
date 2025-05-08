import express from "express";
import connectToDB from "./db/AutoDB.js";
import cors from "cors";
import auth from "./routes/auth.js";
import offer from "./routes/offer.js";
const app = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/offer", offer);

app.listen(port, () => {
  connectToDB();
  console.log(`Server running on port ${port}`);
});
