// let playerAction = process.argv[process.argv.length - 1];

const game = require('./lib');

// const result = game(playerAction);
let count = 0;

process.stdin.on('data', (e) => {
	const playerAction = e.toString().trim();
	const result = game(playerAction);

	if (result === 1) {
		count++;
	}

	console.log(count);

	if (count === 3) {
		console.log('you trible kill');
		process.exit();
	}
});
