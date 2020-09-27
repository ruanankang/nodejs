'use strict';

const sd = require('silly-datetime');

module.exports = {
	formatTime(param) {
		return sd.format(new Date(param * 1000), 'YYYY-MM-DD HH:mm');
	}
};
