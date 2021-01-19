canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 90;
car1_x = 10;
car1_y = 10;
car1_image = "car1.png";

car2_width = 100;
car2_height = 90;
car2_x = 10;
car2_y = 10;
car2_image = "car1 (1.png)";

backround_image = "racing.jpg";

car_image_1 = "car1 (1).png";
car_image_2 = "car1.png";

function add() {
    bt = new Image();
    bt.onload = uploadBackground;
    bt.src = backround_image;

    rt = new Image();
    rt.onload = uploadcar1;
    rt.src = car1_image;

    rt2 = new Image();
    rt2.onload = uploadcar2;
    rt2.src = car2_image;
}

function uploadBackground() {
    ctx.drawImage(bt, 0, 0, canvas.width, canvas.height);
}

function uploadcar1() {
    ctx.drawImage(rt, car1_x, car1_y, car1_width, car1_height);
}

function uploadcar2() {
    ctx.drawImage(rt2, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
     if(keyPressed == '38')
     {
         up();
         console.log("up");
     }
     if(keyPressed == '40')
     {
         down();
         console.log("down");
     }
     if(keyPressed == '37')
     {
         left();
         console.log("left");
     }
     if(keyPressed == '39')
     {
         right();
         console.log("right");
     }
}