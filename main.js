var canvas = new fabric.Canvas('myCanvas');
block_image_width= 30;
block_image_height= 30;
player_x =10;
player_y = 10;
var player_object="";

function player_update()
{
    fabric.Image.fromURL("steve photo.png", function(Img) {
    player_object = Img;
    
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set({
        top:player_y,
        left:player_x
});
    canvas.add(player_object);

});

}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
    block_image_object = Img;
    
    block_image_object.scaleToWidth(block_image_width);
    block_image_object.scaleToHeight(block_image_height);
    block_image_object.set({
        top:player_y,
        left:player_x
});
    canvas.add(block_image_object);

});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80')
{
    console.log("p and shift pressed together");
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

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

    if(keyPressed == '40')
    {
        right();
        console.log("right");
    }

    if(keyPressed == '66')
    {
        new_image('minecraft block (brick).png' );
        console.log("b");
    }

    if(keyPressed == '65')
    {
        new_image('diamond axe.png' );
        console.log("A");
    }

    if(keyPressed == '80')
    {
        new_image('diamond pickaxe.png' );
        console.log("P");
    }

    if(keyPressed == '68')
    {
        new_image('minecraft block (diamond block).png' );
        console.log("D");
    }

    if(keyPressed == '97')
    {
        new_image('minecraft block (andestine block).png' );
        console.log("a");
    }

    if(keyPressed == '67')
    {
        new_image('minecraft block (cobblestone block).png' );
        console.log("C");
    }

    if(keyPressed == '68')
    {
        new_image('minecraft block (cobblestone block).png' );
        console.log("D");
    }

    if(keyPressed == '71')
    {
        new_image('minecraft block (golden block).png' );
        console.log("G");
    }

    if(keyPressed == '103')
    {
        new_image('minecraft block (granite block).png' );
        console.log("g");
    }

    if(keyPressed == '76')
    {
        new_image('minecraft block (log oak).png' );
        console.log("L");
    }

    if(keyPressed == '81')
    {
        new_image('minecraft block (quartz block).png' );
        console.log("Q");
    }

    if(keyPressed == '87')
    {
        new_image('minecraft block (wooden block).png' );
        console.log("W");
    }
}

function up()
{
    if(player_y>=0)
    {
        player_y = player_y - block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("When Up arrow key is pressed, X = " + player_x +" , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}       

function down()
{
    if(player_y<=500)
    {
        player_y = player_y + block_image_height;
        console.log("block image height =" + block_image_height);
        console.log("When Down arrow key is pressed, X = " + player_x +" , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}       

function left()
{
    if(player_x>=0)
    {
        player_x = player_x - block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("When Left arrow key is pressed, X = " + player_x +" , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}       

function right()
{
    if(player_x>=850)
    {
        player_x = player_x + block_image_width;
        console.log("block image width =" + block_image_width);
        console.log("When Right arrow key is pressed, X = " + player_x +" , Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}       