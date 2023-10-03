// Write a function that takes any object and logs every key and value from only own properties.
function logOwnValues(obj) {
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			console.log(key, obj[key]);
		}
	}
}