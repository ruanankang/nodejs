/**
 * nodejs异步编程 - callback
 * 回调函数格式规范：error(第一个回调参数，当为null时表示成功)  data(剩余参数为回调函数的结果)
 */
'use strict';

function interview(callback) {
	setTimeout(() => {
		if (Math.random() < 0.5) {
			callback(null, 'success');
		} else {
			callback(new Error('fail'));
		}
	}, 100);
}

try {
	interview((err, res) => {
		if (err) {
			console.error(err);
		} else {
			console.log(res);
		}
	});
} catch (e) {
	console.log(1111);
	console.error(e);
}
