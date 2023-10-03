// Write a function that creates empty object but without the prototype.

function createObjWithoutPrototype() {
	const obj = new Object();
	obj.__proto__ = null;
	return obj;
}

// Tests
const newObj = createObjWithoutPrototype();
console.log(newObj); // {}
console.log(newObj.__proto__); // undefined
console.log(Object.getPrototypeOf(newObj)); // null
