using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class ShrinkGrow : MonoBehaviour {

	public Transform player;
	public Transform destinationPortal;

	private bool playerIsInField = false;

	// Update is called once per frame
	void Update () {
		if (playerIsInField) {
			Vector3 portalToPlayer = player.position - transform.position;
			float dotProduct = Vector3.Dot (transform.up, portalToPlayer);

			if (dotProduct < 0f) {
				float rotationDiff = Quaternion.Angle (transform.rotation, destinationPortal.rotation);
				rotationDiff += 180;
				player.Rotate (Vector3.up, rotationDiff);

				Vector3 positionOffset = Quaternion.Euler(0f, rotationDiff, 0f) * portalToPlayer;
				player.position = destinationPortal.position + positionOffset;
				playerIsInField = false;
			}
		}
	}

	void OnTriggerEnter (Collider other) {
		if (other.tag == "Player") {
			playerIsInField = true;
		}
	}

	void OnTriggerExit (Collider other) {
		if (other.tag == "Player") {
			playerIsInField = false;
		}
	}

	void OnTriggerStay (Collider other) {
		if (other.tag == "Player") {
			playerIsInField = false;
		}
	}
}
