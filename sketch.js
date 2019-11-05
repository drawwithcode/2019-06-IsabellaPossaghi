var heart = [];
var speed;

var background_c;
var button;
var size;
var button2;

var slider;

var myTitle

var myText

var myInput





function preload() {
  soul = loadImage("./assests_images/soul.png");
  cupid = loadImage("./assests_images/cupid.png")
}

function setup() {

  button2 = createButton("love size")
  button2.mousePressed(change_size);
  button2.style('background-color', "orangered");
  button2.position(220, 87);

  button = createButton("love color")
  button.mousePressed(change_background);
  button.style('background-color', "orangered");
  button.position(220, 120);

  slider = createSlider(1, 500, 250);
  slider.position(640, 120)

  myInput = createInput("");
  myInput.position(640, 87);

  var myTitle = select("h1");


  background_c = color(0);
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 200; i++) {
    heart[i] = new Heart();
  }

}

function change_background() {
  background_c = color(255, Math.random() * 255, 255);
}

function change_size() {
  size = Math.random(10, 30)
}




function draw() {
  background(background_c, 50)
  speed = map(mouseX, 0, width, 0, 60);
  //translate(width / 2, height / 2);
  for (var i = 0; i < heart.length; i++) {
    heart[i].update();
    heart[i].show();
  }

  //love helper
  image(cupid, 100 * random(1, 1.05), 100 * random(1, 1.05), 200, 210)
  imageMode(CENTER)

  //love message
  textSize (slider.value());
  textAlign (CENTER);
  text (myInput.value(), width/2, height/2);
  textSize(slider.value())
  textFont("Gravitas One")


}



function Heart() {
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width); //it's all about the z!
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width / 1.5;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 300, 0);



    //
    // if (mouseIsPressed) {
    //   image(soul,sx, sy, r*5, r*5)
    //   imageMode(CENTER)
    // } else {
    image(soul, sx, sy, r * size, r * size)
    //   imageMode(CENTER)
    // }


    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    //"arrow"
    line(sx, sy, px, py);
    strokeWeight(size*8)
    stroke(	230,  20 , 70)


  }
}
