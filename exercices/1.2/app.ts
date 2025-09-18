import express from "express";
import routerMovie from "./routes/movies";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/movies", routerMovie);

export default app;
