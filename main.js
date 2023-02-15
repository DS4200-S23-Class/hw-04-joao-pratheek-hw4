// JS File for hw-04
// Joao Pedro & Pratheek
// Last modified: 2.13.23

// adds or removes a border to a circle when clicked 
function clickBorder() {

	// selects all circles within the SVG
	// and stores them in a const
	const data = document.querySelectorAll("circle");

	// calls the function for each circle in the SVG
	data.forEach(function(circle) {
    
	// stores circle's borders in a variable and initially sets them as missing
    var border = false;

    // adds a "click" event listener to the function 
    circle.addEventListener("click", function() {

    	// if there's no border on a circle
    	if (!border) {
    	// add a black border
        circle.setAttribute("stroke", "black");
        // set the border's width to 4
        circle.setAttribute("stroke-width", "4");
        // store the border as present
        border = true;

  		// if there's already a border on a circle
      } else {
      	// remove the border
        circle.removeAttribute("stroke");
        // store the border as missing
        border = false;
      }
    });
  });
}

// runs function
clickBorder();

// store the "Last Point Clicked" text as a constant
const previousClicked = document.getElementById("previous-click");

// selects all circles within the SVG
// and stores them in a const
const data2 = document.querySelectorAll("circle");

// sets the previous coordinate as blank before any clicks
let previousCoord = "";

// adds a "click" event listener for each circle in the SVG
data2.forEach(circle => {circle.addEventListener("click", point => {
    
    // stores the coordinates of the circle that was clicked as a constant
    const coordinates = `(${point.target.getAttribute("cx") / 45}, ${Math.abs((point.target.getAttribute("cy") - 450) / 45)})`;

    // stores the coordinates of the circle that was clicked under a new constant
    previousCoord = coordinates;

    // adds the coordinates of the clicked circle to the "Last Point Clicked" text constant
    previousClicked.textContent = `Last Point Clicked: ${previousCoord}`;
  });
});


// adds a data point to the scatter plot
function addPoint() {

	// grabs the frame of the scatterplot
    let graph = document.getElementById("frame");

    // grabs the x-coordinate of a point
    let cx = document.getElementById("x-value").value;

    // grabs the y-coordinate of a point
    let cy = document.getElementById("y-value").value;

    // creates a new data point as a circle and stores it as a constant
    const newPoint = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    // gives the new data point the id "point"
    newPoint.setAttribute("id", "point");
    // gives the new data point the class "style"
    newPoint.setAttribute("class", "style");
    // gives the new data point the new x-coordinate
    newPoint.setAttribute("cx", cx);
    // gives the new data point the new y-coordinate
    newPoint.setAttribute("cy", cy);
    // gives the new data point a radius of 10
    newPoint.setAttribute("r", 10);

    // appends the new data point to the scatterplot
    graph.appendChild(newPoint);

    var border = false;

    newPoint.addEventListener("click", function() {
    	
    	// if there's no border on a new data point
    	if (!border) {
    	// add a black border
        newPoint.setAttribute("stroke", "black");
        // set the border's width to 4
        newPoint.setAttribute("stroke-width", "4");
        // store the border as present
        border = true;

  		// if there's already a border on a new data point
      } else {
      	// remove the border
        newPoint.removeAttribute("stroke");
        // store the border as missing
        border = false;
      }
    });

    // store the "Last Point Clicked" text as a constant
	const previousClicked = document.getElementById("previous-click");

	// sets the previous coordinate as blank before any clicks
	let previousCoord = "";

	// adds a "click" event listener for the new data point
	newPoint.addEventListener("click", function(point) {

		// stores the coordinates of the new data point that was clicked as a constant
		const coordinates = `(${point.target.getAttribute("cx") / 45}, ${Math.abs((point.target.getAttribute("cy") - 450) / 45)})`;

		// stores the coordinates of the new data point that was clicked under a new constant
		previousCoord = coordinates

		// adds the coordinates of the new data point that was clicked to the "Last Point Clicked" text constant
		previousClicked.textContent = `Last Point Clicked: ${previousCoord}`;
	});
}

// adds event handler to button
document.getElementById("subButton").addEventListener("click", addPoint);



