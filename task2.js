// Write a function that takes string and object as arguments then checks if the object has the key wih value of string.

function isInObject(key, obj) {
	return key in obj;
}

// Tests
console.log(isInObject("name", { name: "John" })); // true
console.log(isInObject("age", { name: "John" })); // false
console.log(isInObject(5, [1, 2, 3, 4, 5])); // false
