using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PortalTextureSetup : MonoBehaviour {

	public Camera c;

	public Material cMat;

	// Use this for initialization
	void Start () {
		if (c.targetTexture) {
			c.targetTexture.Release ();
		}	
		c.targetTexture = new RenderTexture (Screen.width, Screen.height, 24);
		cMat.mainTexture = c.targetTexture;
	}
}
