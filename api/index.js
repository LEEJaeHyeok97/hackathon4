import { Router } from "express";
import Gayong from "./gayong";
import Gibon from "./gibon";
import Jeungsang from "./jeungsang";


const app = Router();

app.use("/gayong", Gayong);
app.use("/gibon", Gibon);
app.use("/jeungsang", Jeungsang);




export default app;