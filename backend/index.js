import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const port = 3002
// import cors from "cors";


app.use(express.static("public"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors())


app.listen(port, () => console.log("Server running", port))


