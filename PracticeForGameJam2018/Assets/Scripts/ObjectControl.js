#pragma strict

private var guiShow:boolean = false;
static var pickedUp:boolean = false;
private var foundAnswer:boolean = false;
var openDoorSound:AudioClip;
var closeDoorSound:AudioClip;
var onHand:Transform;

private var objectPickedUp:GameObject;
private var pickedUpObjectParent:Transform;
private var objectLookedAt:GameObject;

var hit:RaycastHit;
var fwd:Vector3;
var rayLength = 3;

function Start() {
	fwd = transform.TransformDirection(Vector3.forward);
	guiShow = false;
}

function Update() {
	fwd = transform.TransformDirection(Vector3.forward);

	if(Physics.Raycast(transform.position, fwd, hit, rayLength)) {
		if(hit.collider.gameObject.tag == "OpenDoor") {
			guiShow = true;
			objectLookedAt = hit.collider.gameObject;
			if(Input.GetKeyDown("e")) {
				closeDoor(objectLookedAt);
				guiShow = false;

			}
		}

		else if(hit.collider.gameObject.tag == "ClosedDoor") {
			guiShow = true;
			objectLookedAt = hit.collider.gameObject;
			if(Input.GetKeyDown("e")) {
				openDoor(objectLookedAt);
				guiShow = false;
			}
		}

		else if(hit.collider.gameObject.tag == "LockedDoor") {
			guiShow = true;
		}

		else if (hit.collider.gameObject.tag == "PickUpAble") {
			guiShow = true;
			objectPickedUp = hit.collider.gameObject;
			if(Input.GetKeyDown("e") && (pickedUp == false)) {
				pickUp(objectPickedUp);
				pickedUp = true;
				guiShow = false;
			}

			else if(Input.GetKeyDown("e") && (pickedUp == true)) {
				drop(objectPickedUp);
				pickedUp = false;
				guiShow = false;
			}
		}

		else if(Input.GetKeyDown("e") && (pickedUp == true)) {
			drop(objectPickedUp);
			pickedUp = false;
			guiShow = false;
		}

		else {
			guiShow = false;
		}
	
	}
}

function OnGUI() {
	if(Physics.Raycast(transform.position, fwd, hit, rayLength)) {
		if(hit.collider.gameObject.tag == "OpenDoor") {
			if (guiShow == true) {
				GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Close Door");
			}
		}

		if(hit.collider.gameObject.tag == "ClosedDoor") {
			if (guiShow == true) {
				GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Open Door");
			}
		}

		if(hit.collider.gameObject.tag == "LockedDoor") {
			if (guiShow == true) {
				GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Door Locked");
			}
		}

		else if (hit.collider.gameObject.tag == "PickUpAble") {
			if (guiShow == true && pickedUp == false) { 
				GUI.Box(Rect(Screen.width / 2, Screen.height / 2, 100, 25), "Pick Up");
			}
		}
	} 
}

function pickUp(oPU : GameObject) {
	var object:GameObject = oPU;
	object.GetComponent.<Rigidbody>().useGravity = false;
	object.GetComponent.<Rigidbody>().isKinematic = true;
	object.transform.position = onHand.position;
	object.transform.rotation = Quaternion.Euler(Vector3(0,0,0));
	pickedUpObjectParent = object.transform.parent;
	object.transform.parent = GameObject.Find("FPSController").transform;
	object.transform.parent = GameObject.Find("FirstPersonCharacter").transform;
}

function drop(object : GameObject) {
	object.transform.parent = pickedUpObjectParent;
	object.GetComponent.<Rigidbody>().useGravity = true;
	object.GetComponent.<Rigidbody>().isKinematic = false;
}

function openDoor(door : GameObject) {
	door.GetComponent.<Animation>().Play("DoorOpen");
	door.GetComponent.<AudioSource>().PlayOneShot(openDoorSound);
	objectLookedAt.tag = "OpenDoor";
}

function closeDoor(door : GameObject) {
	door.GetComponent.<Animation>().Play("DoorClose");
	door.GetComponent.<AudioSource>().PlayOneShot(closeDoorSound);
	objectLookedAt.tag = "ClosedDoor";
}
