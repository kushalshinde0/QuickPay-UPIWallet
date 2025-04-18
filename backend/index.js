const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use(express.json());

const rootRouter = require("./routes/index");
app.use("/api/v1", rootRouter);

const port = 5000;

app.listen(port, () => {
  console.log(`your app is listening at port ${port}`);
});
