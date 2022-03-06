import express from "express";
import { APP_PORT } from "./config";
import routes from "./routes/index";
const app = express();

const port = APP_PORT || 3500;

app.get("/", (req, res) => {
  res.send("Are you ready to make RESTful Services!!!");
});

app.use("/api", routes);

app.listen(port, () => console.log(`server is running on port ${port}`));
