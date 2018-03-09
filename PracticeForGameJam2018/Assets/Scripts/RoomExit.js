#pragma strict

var isFirstExit = true;
var previousQuestion:GameObject;

function OnTriggerExit(o:Collider) {
	if (isFirstExit) {
		isFirstExit = false;
		previousQuestion.SetActive(false);
	}
}