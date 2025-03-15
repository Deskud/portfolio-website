const expresss = require("express");
const app = expresss();
const cors = require("cors");
const corsOption = {
    origin: ["http://localhost:5173"],
}

app.use(cors(corsOption));


app.get("/api", (req, res) => {

    res.json({ games: ["mhw", "mh:rise", "tf2", "fc6"] });

})

app.listen(8080, () => {
    console.log("Brudder is working!");
});