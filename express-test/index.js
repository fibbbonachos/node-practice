const express = require("express");
const app = express();
const port = 3000;

app.use(app.router);
app.use(express.static("public"));

app.use();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
