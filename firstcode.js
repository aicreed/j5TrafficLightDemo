const five = require("johnny-five");
let wait = require("wait-for-stuff");
const board = new five.Board({port:"COM3"});

 board.on("ready", function() {

//Init variables - during first cycle all lights plus buzzer is powered for a "self test"
    let red = new five.Led(2);
    red.on();

    let amber = new five.Led(3);
    amber.on();

    let green = new five.Led(4);
    green.on();

    let pedLight =  new five.Led(5);//This pin is for both the x2 ped lights and the pizo buzzer
    pedLight.on();

    //Begin the loop
    while(true){

      wait.for.time(2);
      pedLight.off();//Make sure ped light is off - its not safe to cross.

      wait.for.time(5);//Get traffic ready to move
      amber.on();
  
      wait.for.time(2);//Traffic is moving
      red.off();
      amber.off();
      green.on();
  
      wait.for.time(10);//Start slowing traffic
      green.off();
      amber.on();
  
      wait.for.time(3);//Traffic is stopped
      amber.off();
      red.on();

      wait.for.time(5);
      pedLight.on();//Wait 5 seconds for traffic then allow ped to cross.
      wait.for.time(10); //10 seconds to cross
    }


    }); 
