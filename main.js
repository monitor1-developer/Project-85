//start canvas
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//define width and height of car1
car1_width = 100;
car1_height = 90;

//define width and height of car2
car2_width = 100;
car2_height = 90;

//define the position of the car1
car1_x = 10;
car1_y = 10;

//define the position of the car2
car2_x = 10;
car2_y = 100;


//define the images into variables
background_image = "racing.jpg"
car1_image = "car1.png";
car2_image = "car2.png";
console.log("background_img = " + background_image);

//start function "add"
function add() {
    //upload background image
    background_img = new Image();
    background_img.onload = uploadBackground;
    background_img.src = background_image;
    //upload car1 image 
    car1_img = new Image();
    car1_img.onload = uploadCar1;
    car1_img.src = car1_image;
    //upload car2 image 
    car2_img = new Image();
    car2_img.onload = uploadCar2;
    car2_img.src = car2_image;
}

//start function "uploadBackground"
function uploadBackground() {
    //drawBackground
    ctx.drawImage(background_img, 0, 0, canvas.width, canvas.height);
}

//start function "uploadCar1"
function uploadCar1() {
    //drawRover
    ctx.drawImage(car1_img, car1_x, car1_y, car1_width, car1_height);
}

//start function "uploadCar2"
function uploadCar2() {
    //drawRover
    ctx.drawImage(car2_img, car2_x, car2_y, car2_width, car2_height);
}

//add listener
window.addEventListener("keydown", my_keydown);

//start function "keydown"
function my_keydown(e) {
    keypressed = e.keyCode;
    if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }

    if (keypressed == '87') {
        w();
        console.log("w");
    }

    if (keypressed == '65') {
        a();
        console.log("a");
    }

    if (keypressed == '83') {
        s();
        console.log("s");
    }

    if (keypressed == '68') {
        d();
        console.log("d");
    }
}

//car1 movement

//start function "up"
function up() {
    if (car1_y >= 0) {
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed, x = " + car1_x  + "y = " + car1_y);
        uploadBackground();
        uploadCar1();
    }
}

//start function "down"
function down() {
    if (car1_y <= 500) {
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed, x = " + car1_x  + "y = " + car1_y);
        uploadBackground();
        uploadCar1();
    }
}

//start function "left"
function left() {
    if (car1_x >= 0) {
        car1_x = car1_x - 10;
        console.log("When left arrow is pressed, x = " + car1_x  + "y = " + car1_y);
        uploadBackground();
        uploadCar1();
    }
}

//start function "right"
function right() {
    if (car1_x <= 700) {
        car1_x = car1_x + 10;
        console.log("When right arrow is pressed, x = " + car1_x  + "y = " + car1_y);
        uploadBackground();
        uploadCar1();
    }
}

//car2 movement

//start function "w"
function w() {
    if (car2_y >= 0) {
        car2_y = car2_y - 10;
        console.log("When w key is pressed, x = " + car2_x  + "y = " + car2_y);
        uploadBackground();
        uploadCar2();
    }
}

//start function "a"
function a() {
    if (car2_y <= 500) {
        car2_y = car2_y + 10;
        console.log("When down arrow is pressed, x = " + car2_x  + "y = " + car2_y);
        uploadBackground();
        uploadCar2();
    }
}

//start function "s"
function s() {
    if (car2_x >= 0) {
        car2_x = car2_x - 10;
        console.log("When left arrow is pressed, x = " + car2_x  + "y = " + car2_y);
        uploadBackground();
        uploadCar2();
    }
}

//start function "d"
function d() {
    if (car2_x <= 700) {
        car2_x = car2_x + 10;
        console.log("When right arrow is pressed, x = " + car2_x  + "y = " + car2_y);
        uploadBackground();
        uploadCar2();
    }
}

if (car1_x > 700) {
    document.getElementById('gamestatus').innerHTML = "Car 1 has won the game.";
} elseif (car2_x > 700) {
    document.getElementById('gamestatus').innerHTML = "Car 2 has won the game.";
}
