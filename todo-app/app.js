const express = require("express");
const todoController = require("./controller/todoController");

const app = express();

// 设置视图引擎
app.set("view engine", "ejs");

// 设置默认文件地址
app.use(express.static("./public"));

todoController(app);

app.listen(3000);
