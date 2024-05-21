const express = require("express");
const app = express();
const port = 4000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, kavin");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
