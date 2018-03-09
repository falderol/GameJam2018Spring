#pragma strict

var pauseMenuOn:boolean = false;
var controlMenuOn:boolean = false;
var pauseCanvas:Transform;
var controlCanvas:Transform;

public function ControlMenuOn() {
	pauseMenuOn = false;
	pauseCanvas.gameObject.SetActive(pauseMenuOn);
	controlMenuOn = true;
	controlCanvas.gameObject.SetActive(controlMenuOn);
}

public function ControlMenuOff() {
	pauseMenuOn = true;
	pauseCanvas.gameObject.SetActive(pauseMenuOn);
	controlMenuOn = false;
	controlCanvas.gameObject.SetActive(controlMenuOn);
}