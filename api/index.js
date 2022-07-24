import { Router } from "express";
import Gayong from "./gayong";
import Gibon from "./gibon";


const app = Router();

app.use("/gayong", Gayong);
app.use("/gibon", Gibon);




export default app;