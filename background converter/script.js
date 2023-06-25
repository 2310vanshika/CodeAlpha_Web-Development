function bgchange(color) {
	let colorarray = ["#900C3F ", "#DAF7A6", "#5D6D7E", "#D98880", "#D6DBDF "];
	document.body.style.background = colorarray[color];
}

var colorarray = ["#900C3F ", "#DAF7A6", "#5D6D7E", "#D98880", "#D6DBDF "];
var colorbox = document.getElementById("colorbox");

colorarray.forEach(function (color, index) {
	let span = document.createElement("span");
	span.style.backgroundColor = color;
	span.addEventListener("click", function () {
		bgchange(index);
	});
	colorbox.appendChild(span);
});
