const bodyParser = require("body-parser"); // 解码url的传参

const urlencodedParser = bodyParser.urlencoded({ extended: false });

let data = [
	{ id: 0, item: "任务1", completed: false },
	{ id: 1, item: "任务2", completed: false },
	{ id: 2, item: "任务3", completed: true },
	{ id: 3, item: "任务4", completed: false },
	{ id: 4, item: "任务5", completed: true },
	{ id: 5, item: "任务6", completed: false }
];

module.exports = function (app) {
	// 获取数据
	app.get("/todo", function (req, res) {
		res.render("todo", { todos: data });
	});

	// 新增数据
	app.post("/todo", urlencodedParser, function (req, res) {
		const id = data.length === 0 ? 0 : data[data.length - 1].id + 1;
		data.push({
			id,
			item: req.body.item,
			completed: false
		});
		res.json(data);
	});

	// 删除数据
	app.delete("/todo", urlencodedParser, function (req, res) {
		const delId = parseInt(req.query.id);
		data = data.filter((ele) => {
			return ele.id !== delId;
		});
		res.json(data);
	});

	// 更新数据
	app.patch("/todo", urlencodedParser, function (req, res) {
		const updateId = parseInt(req.query.id);
		data.forEach((ele) => {
			if (ele.id === updateId) {
				ele.completed = true;
			}
		});
		res.json(data);
	});
};
