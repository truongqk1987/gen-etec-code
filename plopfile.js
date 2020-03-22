const path = require('path');

const setGenerator = (generatorName) => {
	return require(path.join(__dirname, 'src-server', 'generators', generatorName))(_plop);
}


let _plop;
module.exports = function (plop) {
	_plop = plop;
	setGenerator('search-page');
};