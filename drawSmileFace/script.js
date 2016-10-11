var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.fillStyle = 'yellow';
context.strokeStyle = 'black';
context.beginPath();
context.arc(320, 240, 200, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();

context.fillStyle = 'white';
 
context.beginPath();
context.arc(270, 175, 30, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();
 
context.beginPath();
context.arc(370, 175, 30, 0, 2 * Math.PI);
context.fill();
context.stroke();
context.closePath();

context.fillStyle = 'red';
 
context.beginPath();
context.arc(320, 240, 150, 0, -1 * Math.PI);
context.fill()
context.stroke();
context.closePath();