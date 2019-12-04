let slider;
let icons = [];
let ogWidth;
let ogHeight;
let button;
function preload(){
  for(let i = 0; i <= 12; i++){
     icons[i] = loadImage(`images/image_${i}.png`);
   }
 }

function setup() {
  createCanvas(windowWidth, windowHeight);
  ogHeight = windowHeight;
  ogWidth = windowWidth;
  for(let i = 4; i >= 0; i--){
     icons[i].width = ogWidth;
     icons[i].height = ogHeight;
     image(icons[i],0,0);
   }

  slider = createSlider(0, ogWidth, 0);
  slider.position(10, 10);
  slider.style('width', '1200px');
  button = select('#icon_0');
  button.class('buttonStyle');
  button.position(0,ogHeight-75);
  button.mousePressed(buttonPressed);
}

function draw() {
  let val = slider.value();
  console.log(ogHeight);
  console.log(val);
  if(val < 400){
    image(icons[3],0,0);
  }
  else if(val > 400 && val < 800){
    tint(255,127);
    image(icons[2],0,0);
  }
  else if(val > 800 && val < 1200){
    //tint(255,127);
    image(icons[4],0,0);

  }
  else if(val > 1200 && val < 1500){
    //tint(255,127);
    image(icons[0],0,0);
  }
  else if(val > 1500 && val < 2000 ){
    //tint(255,127);
    image(icons[1],0,0);
  }
}


function buttonPressed(){
  //window.location.href = <a href = "pagetwo.html" target="_self">continue</a>
  createA('pagetwo.html', 'continue');
}
