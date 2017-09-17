module.exports = function check(str, bracketsConfig) {

	let a = '';
	bracketsConfig.forEach( i => {
		var s = '\\' + i.join('\\');
		a= a + '|' + s;
	});

	a = a.slice(1);
	const regEx = new RegExp( a ,'g');
	console.log(regEx);

	while (regEx.exec(str)) { 
		str = str.replace(regEx, '');
	}
	return !str.length;
}
