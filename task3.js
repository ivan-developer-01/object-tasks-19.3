// Write a function that creates empty object but without the prototype.

function returnObjWithoutPrototype() {
	obj = new Object();
	obj.__proto__ = null;
	return objh;
}