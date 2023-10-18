
// getting the element of from the index.html
const screen = document.querySelector(".screen");

const ans = document.querySelector(".ans");
const clear = document.querySelector(".clear");
const del = document.querySelector(".delete");

const nums = document.querySelectorAll(".b");
const signs = document.querySelectorAll(".s");

let input = "";
let sig = "";
let input2 = "";

for (var j = 0; j < signs.length; j++) {
	signs[j].addEventListener('click', function() {
		sig = this.innerHTML;
		input2 = input;
		input = "";
		screen.innerHTML = 0;
	});
}
for (var i = 0; i < nums.length; i++) {
	nums[i].addEventListener('click', function() {
    	inputs(this.innerHTML);
  });
}

function inputs(num){
	input +=  num;
	input = parseInt(input);
	screen.innerHTML = input;
}

del.addEventListener("click", function() {
	if (sig == "") {
		input = input.substring(0, input.length - 1);
		screen.innerHTML = input;
	} else {
		input2 = input2.slice(0, -1);
	}
})

ans.addEventListener("click", () => {
	screen.innerHTML = "";
	if (sig == "+") {
		screen.innerHTML = input2 + input;
	} else if (sig == "-") {
		screen.innerHTML = input2 - input;
	} else if (sig == "x") {
		screen.innerHTML = input2 * input;
	} else if (sig == "/") {
		screen.innerHTML = input2 / input;
	}
})



