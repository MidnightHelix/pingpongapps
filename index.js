const express = require("express");
const cors = require('cors')

const app = express();

app.options('*', cors()) // include before other routes
app.use(cors())

app.get("/", (req, res) => {
	return res.json({data: "test" });
});

app.get("/ping", (req, res) => {
  return res.json({data: "100" })
});

app.listen(8080);
console.log(`App listening on http://localhost:8080`);
