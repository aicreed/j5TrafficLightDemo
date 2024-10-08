const five = require("johnny-five");
let wait = require("wait-for-stuff");
const board = new five.Board({port:"COM3"});

 board.on("ready", function() {

//Prepare code
    let red = new five.Led(2);
    red.on();

    let amber = new five.Led(3);
    amber.off();

    let green = new five.Led(4);
    green.off();

    let pedLight =  new five.Led(5);
    pedLight.on();

    //Begin the loop
    while(true){

      wait.for.time(2);
      pedLight.off();//Make sure ped light is off - its not safe to cross.

      wait.for.time(5);
      amber.on();
  
      wait.for.time(2);
      red.off();
      amber.off();
      green.on();
  
      wait.for.time(10);
      green.off();
      amber.on();
  
      wait.for.time(3);
      amber.off();
      red.on();

      wait.for.time(5);
      pedLight.on();//Wait 5 seconds then allow ped to cross.
      wait.for.time(10); //10 seconds to cross
    }


    }); 
