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

  floorUp() {
    if(this.floor < this.MAXFLOOR){
      this.floor++;
    }else{return this.floor;}
  }

  floorDown() {
    if(this.floor > 0){
      this.floor--;
    }else{return this.floor;}
  }
  call() {
    this.floor = person.originFloor;
  }

  log() {
    console.log("Direction: " + this.direction + ' | Floor: ' + this.floor);
  }
}


module.exports = Elevator;
