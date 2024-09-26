/* 
SwitchButton
==================
status: boolean
lamp: ElectricLamp
==================
+ connectToLamp(ElectricCamp): void
+ switchOff(): void
+ switchOn(): void

ElectricLamp
==================
status: boolean
==================
+ turnOff(): void
+ turnOn(): void
*/

class SwitchButton {
	constructor(status, lamp) {
		this.status = false;
		this.lamp = null; // chưa kết nối
	}
	connectToLamp(lamp) {
		this.lamp = lamp;
		console.log("Connected to lamp");
	}
	checkStatus() {
		console.log(this.status);
		return this.status;
	}
	switchOff() {
		if (this.lamp) {
			this.lamp.turnOff();
			this.status = false;
			console.log("Lamp turned off");
		} else {
			alert("No lamp connected yet!");
		}
	}
	switchOn() {
		if (this.lamp) {
			this.lamp.turnOn();
			this.status = true;
		} else {
			alert("No lamp connected yet!");
		}
	}
}

class ElectricCamp {
	constructor(status) {
		this.status = false;
	}
	turnOn() {
		this.status = true;
	}
	turnOff() {
		this.status = false;
	}
}

let lamp = new ElectricCamp();
let switchBtn = new SwitchButton();
switchBtn.connectToLamp(lamp); // Connected to lamp
switchBtn.checkStatus(); // false
switchBtn.switchOff(); // Lamp turned off
switchBtn.switchOn();
switchBtn.checkStatus(); // true
