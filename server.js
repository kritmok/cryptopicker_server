const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

//setup routers
app.use("/auth", require("./routes/jwtAuth"));
app.use("/watchlist", require("./routes/watchlist"));

app.listen(5000, () =>{
    console.log("Server is up and running on port 5000");
})