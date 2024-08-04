const express = require("express");
const cors = require("cors");
const rootRouter = require("./routes/index");

const app = express();
app.use(cors());
app.use(express.json());





const Port = 3000;

app.use("/api/v1", rootRouter);


app.listen(Port, () => {
    console.log(`Server is listening on port ${Port}`)
});




