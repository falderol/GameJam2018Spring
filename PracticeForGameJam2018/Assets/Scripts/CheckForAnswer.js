#pragma strict

var foundAnswer = false;
var parentBin:GameObject;
var binBase1:GameObject;
var binBase2:GameObject;
var doorToUnlock:GameObject;
var nextQuestion:GameObject;

private var wrongAnswer:boolean = true;
private var hasBlock:boolean = false;

function OnTriggerExit(o:Collider) {
	if(o.transform.IsChildOf(parentBin.transform)) {
		if (wrongAnswer && foundAnswer == false) {
			parentBin.GetComponent.<Animation>().Play("ResetAnswer");
			binBase1.GetComponent.<Renderer>().material.color = Color.white;
			binBase2.GetComponent.<Renderer>().material.color = Color.white;
			hasBlock = false;
		}
	}
}

function OnTriggerStay(o:Collider) {
	if (foundAnswer == false) {
		if (ObjectControl.pickedUp == false && !hasBlock) {
			if(o.transform.IsChildOf(parentBin.transform)) {
				if (o.gameObject.name.IndexOf("Correct") != -1) {
					foundAnswer = true;
					parentBin.GetComponent.<Animation>().Play("CorrectAnswer");
					binBase1.GetComponent.<Renderer>().material.color = Color.green;
					binBase2.GetComponent.<Renderer>().material.color = Color.green;
					doorToUnlock.tag = "ClosedDoor";
					doorToUnlock.GetComponent.<Renderer>().material.color = Color.green;
					nextQuestion.SetActive(true);
					wrongAnswer = false;
					hasBlock = true;
				}

				else if (o.gameObject.name.IndexOf("Wrong") != -1){
					parentBin.GetComponent.<Animation>().Play("WrongAnswer");
					binBase1.GetComponent.<Renderer>().material.color = Color.red;
					binBase2.GetComponent.<Renderer>().material.color = Color.red;
					wrongAnswer = true;
					hasBlock = true;
				}
			}
		}
	}
}