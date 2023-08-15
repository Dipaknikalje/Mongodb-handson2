const express = require("express");
const route = require("./routes/route");

const app = express();
app.use(express.json());
app.use("/api", route);

app.get("/", (req, res) => {
  res.send({
    msg: "default page",
  });
});

app.listen(6000, () => {
  console.log("site running on port 6000");
});
