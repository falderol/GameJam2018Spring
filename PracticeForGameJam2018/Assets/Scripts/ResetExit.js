#pragma strict
import UnityEngine.SceneManagement;

private var numQuestions:int = 16;
private var numQuestionsPerLevel:int = 5;

var parentQuestion:GameObject;
var parentBin:GameObject;
var Q1:GameObject;
var Q2:GameObject;
var Q3:GameObject;
var Q4:GameObject;
var Q5:GameObject;

private var questions:String[];
private var corAns:String[];
private var wrongAns1:String[];
private var wrongAns2:String[];
private var wrongAns3:String[];

function Start() {
questions = new String[numQuestions];
corAns = new String[numQuestions];
wrongAns1 = new String[numQuestions];
wrongAns2 = new String[numQuestions];
wrongAns3 = new String[numQuestions];

	var Q:GameObject[];
	Q = new GameObject[numQuestionsPerLevel];
	Q[0] = Q1;
	Q[1] = Q2;
	Q[2] = Q3;
	Q[3] = Q4;
	Q[4] = Q5;

	questions[0] = "What is the smallest dog breed?";
		corAns[0] = "Affenpinscher";
		wrongAns1[0] = "Chihuahua";
		wrongAns2[0] = "Maltese";
		wrongAns3[0] = "Pomeranian";
	questions[1] = "What is the largest dog breed?";
		corAns[1] = "Great Dane";
		wrongAns1[1] = "Mastiff";
		wrongAns2[1] = "Scottish Deerhound";
		wrongAns3[1] = "Saint Bernard";
	questions[2] = "What is the percentage of homes that own a dog?";
		corAns[2] = "36.4%";
		wrongAns1[2] = "45.2%";
		wrongAns2[2] = "98%";
		wrongAns3[2] = "21.7%";
	questions[3] = "A dog’s sense of smell is ____ better than that of humans?";
		corAns[3] = "10,000x";
		wrongAns1[3] = "1,000x";
		wrongAns2[3] = "10x";
		wrongAns3[3] = "100,000x";
	questions[4] = "How old of a scent can bloodhounds smell?";
		corAns[4] = "300 years";
		wrongAns1[4] = "20 years";
		wrongAns2[4] = "5 months";
		wrongAns3[4] = "1000 years";
	questions[5] = "T or F, dalmatians are born without spots?";
		corAns[5] = "True";
		wrongAns1[5] = "False";
		wrongAns2[5] = "False";
		wrongAns3[5] = "False";
	questions[6] = "How many muscles do dogs have in their ears?";
		corAns[6] = "18";
		wrongAns1[6] = "6";
		wrongAns2[6] = "100";
		wrongAns3[6] = "27";
	questions[7] = "Which country has the most dogs as pets?";
		corAns[7] = "USA";
		wrongAns1[7] = "Brazil";
		wrongAns2[7] = "India";
		wrongAns3[7] = "Egypt";
	questions[8] = "T or F, dogs have dreams?";
		corAns[8] = "True";
		wrongAns1[8] = "False";
		wrongAns2[8] = "False";
		wrongAns3[8] = "False";
	questions[9] = "T or F, dogs can fall in love?";
		corAns[9] = "True";
		wrongAns1[9] = "False";
		wrongAns2[9] = "False";
		wrongAns3[9] = "False";
	questions[10] = "What is the dog breed that can run the fastest?";
		corAns[10] = "Greyhound";
		wrongAns1[10] = "Afghan Hound";
		wrongAns2[10] = "German Shepherd";
		wrongAns3[10] = "Dalmatian";
	questions[11] = "Dog with the best nose?";
		corAns[11] = "Bloodhound";
		wrongAns1[11] = "Beagle";
		wrongAns2[11] = "Pug";
		wrongAns3[11] = "Chihuahua";
	questions[12] = "What dog breed has the best hearing?";
		corAns[12] = "Beagle";
		wrongAns1[12] = "Dalmatian";
		wrongAns2[12] = "Pug";
		wrongAns3[12] = "Golden Retriever";
	questions[13] = "Dogs are used for all the following except what?";
		corAns[13] = "Corporate espionage";
		wrongAns1[13] = "Police dogs";
		wrongAns2[13] = "Army dogs";
		wrongAns3[13] = "Cancer detection";
	questions[14] = "There are more than ____ dog breeds in the world (best answer)? ";
		corAns[14] = "339";
		wrongAns1[14] = "159";
		wrongAns2[14] = "212";
		wrongAns3[14] = "524";
	questions[15] = "Which of the following breeds is NOT commonly used as service dogs?";
		corAns[15] = "Chihuahua";
		wrongAns1[15] = "Poodle";
		wrongAns2[15] = "German Shepherd";
		wrongAns3[15] = "Saint Bernard";
	
	var i:int;
	for (i = 0; i < 5; i++) {
		var num:int;
		num = Random.Range(0, (numQuestions));
		while (questions[num] == null) {
			num = Random.Range(0, (10));
		}
		Q[i].transform.Find("QuestionText").gameObject.GetComponent(TextMesh).text = questions[num];
		Q[i].transform.Find("CorrectAnswerCube").gameObject.transform.Find("AnswerText").gameObject.GetComponent(TextMesh).text = corAns[num];
		Q[i].transform.Find("WrongAnswerCube (1)").gameObject.transform.Find("AnswerText").gameObject.GetComponent(TextMesh).text = wrongAns1[num];
		Q[i].transform.Find("WrongAnswerCube (2)").gameObject.transform.Find("AnswerText").gameObject.GetComponent(TextMesh).text = wrongAns2[num];
		Q[i].transform.Find("WrongAnswerCube (3)").gameObject.transform.Find("AnswerText").gameObject.GetComponent(TextMesh).text = wrongAns3[num];
		questions[num] = null;
	}
	parentQuestion.SetActive(false);
}

function OnTriggerStay(o:Collider) {
	if (ObjectControl.pickedUp == false) {
		if(o.transform.IsChildOf(parentBin.transform)) {
			if (o.gameObject.name.IndexOf("Correct") != -1) {
				SceneManager.LoadScene(SceneManager.GetActiveScene().name);
			}

			else if (o.gameObject.name.IndexOf("Wrong") != -1) {
				Application.Quit();
			}
		}
	}
}