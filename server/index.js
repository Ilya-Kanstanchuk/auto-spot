import express from "express";
import connectToDB from "./db/AutoDB.js";
import cors from "cors";
import auth from "./routes/auth.js";
import offer from "./routes/offer.js";
import admin from "./routes/admin.js";
const app = express();
const port = process.env.PORT;

const allowedOrigins = [process.env.FRONTEND_ORIGIN || "http://localhost:5173"];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked by CORS:", origin);
        callback(null, false);
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/offer", offer);
app.use("/api/admin", admin);

app.listen(port, () => {
  connectToDB();
  console.log(`Server running on port ${port}`);
});
