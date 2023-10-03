// Write a function that takes any object and logs every key and value from only own properties.
function logOwnValues(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			console.log(key + ": " + obj[key]);
		}
	}
}

// Tests
const obj = { a: 1, b: 2, c: 3, d: 4 };
logOwnValues(obj);

const obj2 = [1, 2, 3, 4, "a", true];
obj2.testValue = "test";
logOwnValues(obj2);

const emptyObj = {};
logOwnValues(emptyObj);
