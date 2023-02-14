// JS File for hw-04
// Joao Pedro & Pratheek
// Last modified: 2.13.23

// Define event handler 
function addClickBorder() {

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

addClickBorder();

// store the "Last Point Clicked" text as a constant
const previousClicked = document.getElementById("previous-click");

// selects all circles within the SVG
// and stores them in a const
const data2 = document.querySelectorAll("circle");

// sets the previous coordinate as blank before any clicks
let previousCoord = "";

// adds a "click" event listener for each circle in the SVG
data2.forEach(circle => {circle.addEventListener("click", point => {
    
    // stores the coordinates of the circle that was clicked
    const coordinates = `(${point.target.getAttribute("cx")}, ${point.target.getAttribute("cy")})`;

    // stores the coordinates of the circle that was clicked under a new constant
    previousCoord = coordinates;

    // adds the coordinates of the clicked circle to the "Last Point Clicked" text constant
    previousClicked.textContent = `Last Point Clicked: ${previousCoord}`;
  });
});