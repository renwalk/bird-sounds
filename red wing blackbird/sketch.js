let sound, amplitude;

function preload() {
  sound = loadSound("RedWingBlackBird.wav");
}

function setup() {
  
  let cnv = createCanvas(600,600);
  cnv.mouseClicked(togglePlay);

  amplitude = new p5.Amplitude();

}

function draw() {
  
  background(0);
  noStroke();
  fill('#F44336');
  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 600);
    
    
  ellipse(width/2, height/2, size*20, size*20);
  
  fill('yellow')
  ellipse(width/2, height/2, size*5, size*5);

    
      
}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}