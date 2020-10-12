// Creative Tech
// Design Challenge 8

/** 
Use p5.js visualize a data set that is of interest to you.

**    The data set should have at least 100 data points or be dynamic
**    Your visualization can be scientific (i.e. useful), speculative, experimental, artistic, etc.
**    You can’t modify the data set (e.g. try not to manually parse, arrange, and clean the data, but use code instead).
**    Extra: Make it animated or interactive

** data: sunspot data from 1945-2017
** /_assets/list_aavso-arssn_daily.txt

also look at 10.4 cm solar flux and radio flux for correlation??
**/


// constants
let cx, cy; // centerX, centerY
let sunRadius = 200;
let ssnRadius;


// load text file
var data;
function preload() {
	// load any fonts or other resources
	data = loadTable('_data/list_aavso-arssn_daily2.csv', 'tsv', 'header');
}

function setup() {
	// createCanvas(1024,768);
	createCanvas(windowWidth,windowHeight);
	
	// space...the final frontier
	background(0);


	// curious...how many rows do we have?
	// console.log("ROWCOUNT: " + data.getRowCount());
	// the row columns
	// console.log("COLUMNS: " + data.columns);
	let sunspots = data.getColumn("SSN");
	let year = data.getColumn("Year");
	let month = data.getColumn("Month");
	let day = data.getColumn("Day");
	let date = year + "-" + month + "-" + day;
	
	cx = windowWidth/2;
	cy = windowHeight/2;

		minYear = min(year);
		maxYear = max(year);

		
// write specific lines out of our file using a for loop
	let d = data.getRowCount(); // total number of days
	for(var i = 0; i < d; i++) {
		// console.log("sunspots: " + sunspots[i]);
		
		// if(year[i] == 2000) {
			// draw sunspots
			stroke(255,0,0);
			
			// angles for sin() and cos() start at 3 o'clock position
			// subract HALF_PI to make them start at top
			let radius = sunspots[i];
			
			
			let pointAngle = 360/d; // divide 360 degrees by number of data points
			// console.log("angle: " + pointAngle);
			
			// drawing a sunburst effect plotting sunspots out from center			
			for (angle = 270; angle < 630; angle = angle+pointAngle){
				let newX = cos(radians(angle)) * radius;
				let newY = sin(radians(angle)) * radius;
				line(newX + 200, newY + 200, cx, cy);
				console.log(sunspots[i] + " | " + newX + " | " + newY);
			}
			
			/**  for line chart
			// let ssnXpos = map(i, 0, data.getRowCount(), 0, windowWidth);
			// let ssnYpos = sunspots[i];
			point(ssnXpos, ssnYpos);
			**/
		
			// }	// end if		
	} // end for 
  
} // end setup

function draw() {
	drawSun(cx, cy, 100, color(255,250,214));
	
	// draw line at 100
	// stroke(150);
	// line(0,100,windowWidth,100);
	// draw line at 200
	// line(0,200,windowWidth,200);
	
	// draw line at 300
	// line(0,300,windowWidth,300);

	// draw line at 400
	// line(0,400,windowWidth,400);

}

function drawSun(posX,posY,radius,color) {
	noStroke();
	fill(color);
	circle(posX, posY, radius);
}


