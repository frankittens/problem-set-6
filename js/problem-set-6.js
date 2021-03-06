/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  const canvas = document.getElementById('canvas1');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, 50, 10);
  ctx.font = "48px sans-serif";
  ctx.strokeText("Hello, World!", 10, 50);
}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  const canvas = document.getElementById('canvas2');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width2, canvas2.height);
  let height;
  let width;
  let x;
  let y;
  while(true) {
    height = prompt("Height: ");
    width = prompt("Width: ");
    x = prompt("X: ")
    y = prompt("Y: ")
    if(x<5 || y<5 || width<1 || height<1 || canvas.width - x - width<0 || canvas.height - y - height<0) {
      continue;
    }
    else {
      break;
    }
  }
  ctx.strokeRect(x, y, width, height);
}

/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  const canvas = document.getElementById('canvas3');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas3.width, canvas3.height);
  let color=prompt("Color: ");
    if (color == "black" || color == "blue" || color == "green" || color == "orange" || color == "purple" || color == "red" || color == "yellow") {
    ctx.fillStyle = color;
    ctx.fillRect(10, 10, 100, 50)
  } else {
      alert("Try another color.")
  }
}

/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
  const canvas = document.getElementById('canvas4');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas4.width, canvas4.height);
  let side1;
  let side2;
  let side3;
  let x = 10;
  let y = 10;
  while (true) {
     side1 = Number(prompt("Side 1: "));
     side2 = Number(prompt("Side 2: "));
     side3 = Number(prompt("Side 3: "));
     if (((side1**2) + (side2**2) == (side3**2)) && side1 > 0 && side2 > 0 && side3 > 0 && canvas4.width  - x - side1 >= 0 && canvas4.height - y - side2 >=0) {
       break;
     }
     else {
       alert("That is not a valid triangle.")
       break;
     }
  }
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y + side1);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x, y + side1);
    ctx.lineTo(x + side2, y + side1);
    ctx.stroke();

    ctx.moveTo(x, y);
    ctx.lineTo(x + side2, y + side1);
    ctx.stroke();
}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  const canvas = document.getElementById('canvas5');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas5.width, canvas5.height);
  let radius;
  while (true) {
    radius = Number(prompt("Radius: "));
    if (radius >= 1 && radius <= canvas5.width && Number.isInteger(radius)) {
      break;
    }
  }
  let x = canvas5.width
  let y = canvas5.height
  let eye = radius * .1
  let smile = radius * .7
  ctx.beginPath();
  ctx.arc (x / 2, y / 2, radius, 0, Math.PI * 2);
  ctx.stroke ();

  ctx.beginPath();
  ctx.arc (x / 2 - radius / 3, y / 2 - radius / 4, eye, 0, Math.PI * 2);
  ctx.stroke ();

  ctx.beginPath();
  ctx.arc (x / 2 + radius / 3, y / 2 - radius / 4, eye, 0, Math.PI * 2);
  ctx.stroke ();

  ctx.beginPath();
  ctx.arc (x / 2, y / 2, smile, 0, Math.PI);
  ctx.stroke ();
}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
  const canvas = document.getElementById('canvas6');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas6.width, canvas6.height);

      let outerRadius = Number(prompt("Enter an outer radius."));
      let innerRadius = Number(prompt("Enter an inner radius."));
      if (outerRadius >= innerRadius && canvas6.width >= outerRadius + 125 && canvas6.height >= outerRadius + 125 && innerRadius >= 1 && outerRadius >= 1){
        let points = 5;
        let outerx = [];
        let outery = [];
        let innerx = [];
        let innery = [];
        for(let i = 0; i < points; i++){
          outerx.push(Math.cos((Math.PI *2 * i) / points - (Math.PI / 2)) * outerRadius + 125);
          outery.push(Math.sin((Math.PI * 2 * i) / points - (Math.PI / 2)) * outerRadius + 125);
          innerx.push(Math.cos(((Math.PI * 2 * i) / points) - (Math.PI / 2) + (Math.PI / points)) * innerRadius + 125);
          innery.push(Math.sin(((Math.PI * 2 * i) / points) - (Math.PI / 2) + (Math.PI / points)) * innerRadius + 125);
        }
        ctx.beginPath();
        ctx.moveTo(outerx[0], outery[0]);
        for(let j = 0; j < outerx.length; j++){
          ctx.lineTo(innerx[j], innery[j]);
          ctx.lineTo(outerx[j + 1], outery[j + 1]);
        }
        ctx.lineTo(outerx[0], outery[0]);
        ctx.stroke();
        ctx.closePath();
    }
    else{
      alert("Invaid Input(s). Try again.");
      }
}

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let canvas = document.getElementById('canvas7');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas7.width, canvas7.height);
  let lengthOfSide = 80;
  let center = [10 + (lengthOfSide) / 2 + lengthOfSide / Math.sqrt(2), 10 + (lengthOfSide / 2) + (lengthOfSide / Math.sqrt(2))]
  console.log(center)
  let numberOfVertices = 8;
  let vertexX = [];
  let vertexY = [];

  for(let i = 0; i < numberOfVertices; i++){
    vertexX.push(Math.cos(((Math.PI * 2 * i) / numberOfVertices) - Math.PI / 8) * 100 + center[0]);
    vertexY.push(Math.sin(((Math.PI * 2 * i) / numberOfVertices) - Math.PI / 8) * 100 + center[1]);
  }
  ctx.beginPath();
  ctx.moveTo([vertexX][0], vertexY[0]);
  for(let j=0; j < vertexX.length; j++){
    ctx.lineTo(vertexX[j], vertexY[j]);
  }
  ctx.lineTo(vertexX[0], vertexY[0]);
  ctx.stroke();

  ctx.fillStyle= "red";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath();
  ctx.textAlign= "center";
  ctx.font= "56px Georgia";
  ctx.fillStyle= "white";
  ctx.fillText("STOP", center[0], center[1] + 15);
  ctx.closePath()
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let canvas = document.getElementById('canvas8');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas8.width, canvas8.height);
  let lengthOfSide = Number(prompt("Enter side length."));
  let x = 10;
  let y = canvas8.height - 10;
  let i = 0;
  lineNumber = 1;
  while(i < 5){
    for(let j = 0 + lineNumber; j <= 5; j++){
      ctx.strokeRect(x, y - lengthOfSide, lengthOfSide, lengthOfSide);
      x += lengthOfSide;
    }
    x = 10 + (lengthOfSide / 2) * lineNumber;
    y -= lengthOfSide;
    lineNumber++;
    i++;
  }

}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse() {
  let canvas = document.getElementById('canvas9');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas9.width, canvas9.height);

  while(true){
  colorOfDoor = prompt("Enter a color for the Door");
  colorOfHouse = prompt("Enter a color for the House");
  if((colorOfDoor=="brown" || colorOfDoor=="blue" || colorOfDoor=="green" || colorOfDoor=="orange" || colorOfDoor=="purple" || colorOfDoor=="red" || colorOfDoor=="yellow")
  && (colorOfHouse=="brown" || colorOfHouse=="blue" || colorOfHouse=="green" || colorOfHouse=="orange" || colorOfHouse=="purple" || colorOfHouse=="red" || colorOfHouse=="yellow")) {
    break;
  }
  else{
    alert("One or more of your colors is invalid");
  }
}
let x = 150;
let lengthHouse = 576;
let heightHouse = 400;
let y = canvas8.height - heightHouse - 10;
ctx.beginPath();

ctx.fillStyle = colorOfHouse;
ctx.fillRect(x, y, lengthHouse, heightHouse);

ctx.fillStyle = colorOfDoor;
ctx.fillRect(x + (lengthHouse / 2) - 30, y + 300, 60, 100);
ctx.strokeRect(x + (lengthHouse / 2) - 30, y + 300, 60, 100);
ctx.stroke();


ctx.fillStyle="gray";
ctx.moveTo(x, y);
ctx.lineTo(x + 286, 150);
ctx.lineTo(x + lengthHouse, y);
ctx.lineTo(x, y);
ctx.fill();

ctx.fillStyle="#ADD8E6";
ctx.fillRect(300, y + 100, 50, 50);
ctx.fillRect(526, y + 100, 50, 50);
ctx.fillRect(300, y + 200, 50, 50);
ctx.fillRect(526, y + 200, 50, 50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle='black';
ctx.arc(450, 700, 6, 0, Math.PI*2);
ctx.fill();
ctx.closePath()
}
