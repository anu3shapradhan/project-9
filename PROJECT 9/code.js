var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["d02e0c77-b713-43ae-80fc-5c2df94dc37c","c10af39c-4270-4b2c-9354-686cff30dba5"],"propsByKey":{"d02e0c77-b713-43ae-80fc-5c2df94dc37c":{"name":"sam","sourceUrl":null,"frameSize":{"x":264,"y":392},"frameCount":1,"looping":true,"frameDelay":12,"version":"d_yF2AGM.3YAC0p6Hzw4UfN5sW1PLAe1","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":392},"rootRelativePath":"assets/d02e0c77-b713-43ae-80fc-5c2df94dc37c.png"},"c10af39c-4270-4b2c-9354-686cff30dba5":{"name":"car","sourceUrl":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/92Erx6f0Vu2F9ev0gP0kS7.yWbcHPGMJ/category_vehicles/car_green.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("sam")
  sam.scale= 0.08
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("car")
  car1.scale=0.1
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("car")
  car2.scale=0.1
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("car")
  car3.scale=0.1
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("car")
  car4.scale=0.1
  car4.shapeColor = "red";
  
 
//add the velocity to make the car move.
car1.velocityY= 3;
car2.velocityY=3;
car3.velocityY=-3;
car4.velocityY= -3;
function draw() {
   background("white");
  text("Deaths: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// create bounceoff function to make the car bounceoff the boundaries
car1.bounceOff(boundary1)
car1.bounceOff(boundary2)
car2.bounceOff(boundary1)
car2.bounceOff(boundary2)
car3.bounceOff(boundary1)
car3.bounceOff(boundary2)
car4.bounceOff(boundary1)
car4.bounceOff(boundary2)
//Add the condition to make the sam move left and right
if (keyDown("RIGHT")){
  sam.x=sam.x+2 ;
}
if (keyDown("LEFT")){
  sam.x=sam.x-2
}
//Add the condition to reduce the life of sam if it touches the car.
  if(sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)){
    sam.x=20;
    sam.y=190;
    life= life+1;
  }
 drawSprites();
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
