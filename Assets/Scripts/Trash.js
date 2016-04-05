#pragma strict
var playerScript:GameObject;
var timeDelay = 3.0;
var staticDelay = 3.0;
@HideInInspector
var randomNumber:int;
@HideInInspector
var generate:boolean = true;
@HideInInspector
var objectSelected:boolean = false;
@HideInInspector
var scWidth:int = 0;
@HideInInspector
var scHeight:int = 0;
@HideInInspector
var showCollectButton:boolean = false;
@HideInInspector
var trash:int;
@HideInInspector
var dengueCause:int;
	    
function Start () {
	timeDelay = 3.0;
	scWidth = Screen.width;
	scHeight = Screen.height; 
	
}

//Spawn locations: -2.16,0.21,0.59
//				   -1.43,0.21,-1.74
//				    2.09,0.21,-1.46

function Update () {
dengueCause = playerScript.GetComponent(Player).getDengueCause();
//var realtime = Time.realtimeSinceStartup;
//Debug.Log("Real time: "+realtime+"\nDelayTime: "+timeDelay);
trash = playerScript.GetComponent(Player).getTrashCollected(); 
if(Time.realtimeSinceStartup > timeDelay && trash<10 && dengueCause<=80){
if(generate){
playerScript.GetComponent(Player).setDengueCause(dengueCause+20);
randomNumber = Random.Range(1,30);
generate = false;
}
if(randomNumber>= 1 && randomNumber <=10)
transform.position = Vector3(-1.16, 0.1, -1.289);
if(randomNumber> 10 && randomNumber <=20)
transform.position = Vector3(2.3, 0.1, -0.834);
if(randomNumber> 20 && randomNumber <=30)
transform.position = Vector3(-1.15, 0.1, -3.66);
}
   if (Input.GetMouseButtonDown(0)) {
        var ray : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
        var hit : RaycastHit;
        if (Physics.Raycast (ray, hit))
        {
            if (hit.collider.tag == "Trash")
            {
            objectSelected = true;
           	showCollectButton=true;
           }
           else if(hit.collider.tag == "DH1" || hit.collider.tag == "DH2" || hit.collider.tag == "Mosquito Arena" || hit.collider.tag == "Factory" || hit.collider.tag == "Hospital" || hit.collider.tag == "School" || hit.collider.tag == "House" || hit.collider.tag == "House2")
           {
           	objectSelected=false;
           	showCollectButton=false;
           }
        }
    }
}


 function OnGUI(){
 	trash = playerScript.GetComponent(Player).getTrashCollected();
 
   if (objectSelected)
   {
   if(showCollectButton)
   	   {
   	        if (GUI.Button(Rect(scWidth/2,(scHeight/2)+(scHeight/4),120,120), "Collect"))
      	 	{
             	playerScript.GetComponent(Player).setTrashCollected(trash+1);
             	playerScript.GetComponent(Player).setDengueCause(dengueCause-10);
             	transform.position = Vector3(900, 900, 900);
             	generate = true;
                timeDelay=Time.realtimeSinceStartup+staticDelay;
             	showCollectButton = false;
            }
       }
   }
       
   }
