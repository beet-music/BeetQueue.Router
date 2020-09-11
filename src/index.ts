import * as express from "express";
import AssetsRouter from "./assets";

const app = express();
const port = parseInt(process.env["PORT"] ?? "8080", 10);

app.set("view engine", "ejs");

app.use("/assets", AssetsRouter);

app.get("/", (req, res) => {
    res.render("test", { name: "Raresh" });
});

app.listen(port, () => {
    console.log(`Listening to http://localhost:${port}`);
});
