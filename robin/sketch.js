let sound, amplitude;

function preload() {
  sound = loadSound("robinisolated.wav");
}

function setup() {
  
  let cnv = createCanvas(600,600);
  cnv.mouseClicked(togglePlay);

  amplitude = new p5.Amplitude();

}

function draw() {
  
  background('#888181');
  noStroke();

  let level = amplitude.getLevel();
  let size = map(level, 0, 1, 0, 600);
  
  
    fill('#353131')
  ellipse(width/2, height/2, size*50, size*50);
    
    fill('rgb(205,105,18)')
  ellipse(width/2, height/2, size*40, size*40);
  
  fill('rgb(255,215,0)')
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