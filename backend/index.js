import express from "express";
import mongose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";
import routes from "./routes/appRoutes";

const app = express();
const PORT = 4000;

// mongo connection
mongose.Promise = global.Promise;
mongose.connect("mongodb://localhost/myDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// bodyparser setup
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

// routes
routes(app);

app.get("/", (req, res) => {
  res.send(`Node works on PORT ${PORT} !`);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
