import { http } from "./src/config/dotenv";
import app from "./src/config/express";
app.listen(http.port)