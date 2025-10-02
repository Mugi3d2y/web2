import express from "express";
import routerMovie from "./routes/movies";
import routerTexts from "./routes/texts";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



let compteur = 0;
app.use((_req, _res, next) => {
    compteur++;
    console.log(`GET counter : ${compteur}`);
    next();
});

app.use("/movies", routerMovie);
app.use("/texts",routerTexts);

export default app;
