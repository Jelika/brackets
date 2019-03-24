module.exports = function check(str, bracketsConfig) {
	const stack = [];
	for (let i = 0; i < str.length; i++) { //check all elements
		let bool = false;
		for (let j = 0; j < bracketsConfig.length; j++) {
			if (str[i] === bracketsConfig[j][0]) {
				bool = true;
					};
				}
					if (bool && stack[stack.length -1] !== str[i]) {
				stack.push(str[i]);
			}
		

	 else {
			let configIndex;
			for (let j = 0; j < bracketsConfig.length; j++) {
				if (stack[stack.length - 1] === bracketsConfig[j][0]) {
					configIndex = j;
				}
			}
			if (bracketsConfig[configIndex]) {
				if (bracketsConfig[configIndex][1] === str[i]) {
					stack.pop();
				} else {
					stack.push(str[i]);
				}
			}

		}
	}

	return !stack.length
}

