import express from "express";

import { config } from "dotenv";
import route from "./route/index.js";
import contest_route from "./route/contest.js";
config();


const app = express();

app.use(express.json());


app.use("/api/auth", route);
app.use("/api", contest_route);

app.listen(3000, () => {
  console.log(`server start at ${3000}`);
});
