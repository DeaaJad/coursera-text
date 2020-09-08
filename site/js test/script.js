//arrays
//var array = new Array();
//array[0] = "yaakov";
//array[1] = 2;
//array[2] = function(name){
//	console.log("hello" + name);
//};
//array[3] = {course: " HTML , CSS & JS"};

//console.log(array)


function MakrMultiplier (multiplier) {
	function b(){
		console.log("multiplier is " + multiplier)
	}
	b();
	return (
		function (x){
			console.log("x is :"+x );
			
			return multiplier * x;
		}
	);
}
var doubleAll = MakrMultiplier(2);
console.log(doubleAll(100))
