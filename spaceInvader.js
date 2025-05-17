"use strict";

window.onresize = signature;

signature();

function signature() {
    let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");
    
    context.fillStyle = "black";
    context.beginPath();
    context.rect(0,0,300,300);
    context.fill()

    context.fillStyle = "green"
    context.beginPath();
    context.rect(25,25,50,50);
    context.rect(225 ,25,50,50);
    context.rect(75,75,50,50);
    context.rect(175,75,50,50);
    context.rect(25,125,50,50);
    context.rect(225,125,50,50);
    context.rect(125,125,50,50);
    context.rect(125,175,50,50);
    context.rect(125,225,50,50);
    context.rect(75,225,50,50);
    context.rect(175,225,50,50);
    context.fill();

}