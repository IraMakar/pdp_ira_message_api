require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const modules = require("./modules");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/sendMessage", async (req, res) => {
  const { templateName, chat_id } = req.body;
  const sendResult = await modules[templateName]({ chat_id });
  res.send(`${JSON.stringify(sendResult, null, 2)}`);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
