#pragma strict

var deerClip:AudioClip;
var isFirstTime = true;

function OnTriggerEnter(o:Collider) {
	
}

function OnTriggerExit(o:Collider) {
	if (isFirstTime == true) {
		isFirstTime = false;
		playSound();
	}
}

function playSound() {
	GetComponent.<AudioSource>().PlayOneShot(deerClip);
}