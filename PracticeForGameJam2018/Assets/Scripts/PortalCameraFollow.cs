using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PortalCameraFollow : MonoBehaviour {

	public Transform playerCamera;
	public Transform destinationPortal;
	public Transform currentPoral;

	void Update () {
		Vector3 playerOffsetFromPortal = playerCamera.position - destinationPortal.position;
		transform.position = currentPoral.position + playerOffsetFromPortal;
	
		float angularDifferenceBetween2Portals = Quaternion.Angle (currentPoral.rotation, destinationPortal.rotation);
		Quaternion portalRotDiff = Quaternion.AngleAxis (angularDifferenceBetween2Portals,Vector3.up);
		Vector3 newCameraDirection = portalRotDiff * playerCamera.forward;
		transform.rotation = Quaternion.LookRotation (newCameraDirection, Vector3.up);
	}
}
