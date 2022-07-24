import express from "express";
import axios from "axios";
import api from "./api";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", api);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});




