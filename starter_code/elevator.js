/*jshint esversion:6*/

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = 'up';
  }

  start() {
    let intervalId = setInterval(() => {
      log();
    },1*1000);
  }

  stop() {clearInterval(intervalId);}
  update() {this.log();}
  _passengersEnter() { }
  _passengersLeave() { }
  floorUp() { }
  floorDown() { }
  call() { }

  log() {
    console.log("Direction: " + this.direction + ' | Floor: ' + this.floor);
  }
}

module.exports = Elevator;
