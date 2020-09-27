module.exports = (playerAction) => {
	const random = Math.random() * 3;
	let computerAction = 'paper';

	if (random < 1) {
		computerAction = 'rock';
	} else if (random > 2) {
		computerAction = 'scissor';
	}

	console.log(`电脑：${computerAction}`);

	if (computerAction === playerAction) {
		console.log('drawn');
		return 0;
	} else if (
		(computerAction === 'rock' && playerAction === 'paper') ||
		(computerAction === 'scissor' && playerAction === 'rock') ||
		(computerAction === 'paper' && playerAction === 'paper')
	) {
		console.log('you win');
		return 1;
	} else {
		console.log('you lost');
		return 2;
	}
};
