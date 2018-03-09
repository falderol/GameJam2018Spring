#pragma strict

var pauseMenuOn:boolean = false;
var canvas:Transform;
var controlCanvas:Transform;

function Update () {
	if (Input.GetKeyDown(KeyCode.Escape)) {
		Pause();
		controlCanvas.gameObject.SetActive(false);
	}
}

public function Pause() {
	pauseMenuOn = !pauseMenuOn;
	canvas.gameObject.SetActive(pauseMenuOn);
	if (pauseMenuOn) {
		Time.timeScale = 0;
	}
	else {
		Time.timeScale = 1;
	}
}

public function Exit() {
	Application.Quit();
}

public function Reset() {
	SceneManager.LoadScene(SceneManager.GetActiveScene().name);
}