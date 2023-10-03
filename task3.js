// Write a function that creates empty object but without the prototype.

function returnObjWithoutPrototype() {
	obj = new Object();
	obj.__proto__ = null;
	return objh;
}

// Tests
const newObj = returnObjWithoutPrototype();
console.log(newObj); // {}
console.log(newObj.__proto__); // undefined
console.log(Object.getPrototypeOf(newObj)); // null