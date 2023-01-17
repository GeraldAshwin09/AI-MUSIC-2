music_1="";
music_2=""; 

function preload()
{
music_1= loadSound("Top Gun Maverick Theme Sound Effect.mp3");
music_2= loadSound("Inception Soundtrack-Dream is Collapsing (Hans Zimmer).mp3");
}
function setup()
{
    canvas = createCanvas(550, 500);
canvas.center();

video=createCapture(VIDEO);
video.hide();
}

function draw()
{
    image(video, 0, 0, 550, 550);
}