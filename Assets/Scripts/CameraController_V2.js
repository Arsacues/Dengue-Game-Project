#pragma strict
//public var:int x=0;
//public var:int y=0;
//public var:int z=0;
//var mainCamera : Camera;
var coinTexture : Texture;
var tempratureTexture : Texture;
var trashTexture : Texture;
var playerScript:GameObject;
//var myStyle : GUIStyle;
function Start () {

}

function Update () {
var cameraSize:float = Camera.main.orthographicSize;
var cameraMaxSize:float = 3.0;
var cameraMinSize:float = 1.0;
var cameraSpeed:float = 3.0;
//Camera Zooms In
//if (Input.GetKey ("i") && cameraSize >cameraMinSize)
//	Camera.main.orthographicSize -=cameraSpeed*Time.deltaTime ;
//Setting the Camera Zooms In to 1
//if (cameraSize < 1 )	
//	Camera.main.orthographicSize = 1;
//Camera Zooms Out
//if (Input.GetKey ("o") &&  cameraSize <cameraMaxSize) 
//	{
//		Camera.main.orthographicSize +=cameraSpeed*Time.deltaTime;
//		if(Camera.main.orthographicSize>=cameraMaxSize){
//		Camera.main.transform.position.x =-10.0;
//		Camera.main.transform.position.z =-10;
//		}
//	}
//Setting the Camera Zooms In to 3
if (cameraSize > 3 )	
	Camera.main.orthographicSize = 3;	
//Camera Moves Down - Zoom In 1~2
if (Input.GetKey ("s")&&  Camera.main.transform.position.x>-13 && Camera.main.transform.position.z>-13)
	{
	if(cameraSize >= cameraMinSize && cameraSize < 2)
	 Camera.main.transform.Translate(-(Time.deltaTime*cameraSpeed),0,-(Time.deltaTime*cameraSpeed),Space.World) ;
	}
//Camera Moves Up - Zoom In 1~2 
if  (Input.GetKey ("w")&&  Camera.main.transform.position.x<=-7 && Camera.main.transform.position.z<=-7)
	{
	if(( cameraSize >= cameraMinSize && cameraSize < 2))
	 Camera.main.transform.Translate(Time.deltaTime*cameraSpeed,0,Time.deltaTime*cameraSpeed,Space.World) ;
	}
//Camera Moves Down - Zoom In 2~3
if (Input.GetKey ("s")&&  Camera.main.transform.position.x>-13 && Camera.main.transform.position.z>-13)
	{
	if(cameraSize >= 2 && cameraSize < 3)
	 Camera.main.transform.Translate(-(Time.deltaTime*cameraSpeed),0,-(Time.deltaTime*cameraSpeed),Space.World) ;
	}
//Camera Moves Up - Zoom In 2~3
if  (Input.GetKey ("w")&&  Camera.main.transform.position.x<=-7 && Camera.main.transform.position.z<=-7)
	{
	if(( cameraSize >= 2 && cameraSize < 3))
	 Camera.main.transform.Translate(Time.deltaTime*cameraSpeed,0,Time.deltaTime*cameraSpeed,Space.World) ;
	}		
//Camera Moves Right - Zoom In 1~2
if (Input.GetKey ("d")&& Camera.main.transform.position.x<-6 && Camera.main.transform.position.z>-13) 
	{
	if((cameraSize >= cameraMinSize && cameraSize < 2))
	Camera.main.transform.Translate(Time.deltaTime*cameraSpeed,0,-(Time.deltaTime*cameraSpeed),Space.World) ;
	}
//Camera Moves Left - Zoom In 1~2
if (Input.GetKey ("a") && Camera.main.transform.position.z<-8 && Camera.main.transform.position.x>-13) 
	{
	if((cameraSize >= cameraMinSize && cameraSize < 2))
	Camera.main.transform.Translate(-(Time.deltaTime*cameraSpeed),0,Time.deltaTime*cameraSpeed,Space.World) ;
	}
	//Camera Moves Right - Zoom In 2~3
if (Input.GetKey ("d")&& Camera.main.transform.position.x<-8 && Camera.main.transform.position.z>-11) 
	{
	if((cameraSize >= 2 && cameraSize < 3))
	Camera.main.transform.Translate(Time.deltaTime*cameraSpeed,0,-(Time.deltaTime*cameraSpeed),Space.World) ;
	}
//Camera Moves Left - Zoom In 2~3
if (Input.GetKey ("a") && Camera.main.transform.position.z<-8 && Camera.main.transform.position.x>-11) 
	{
	if((cameraSize >= 2&& cameraSize < 3))
	Camera.main.transform.Translate(-(Time.deltaTime*cameraSpeed),0,Time.deltaTime*cameraSpeed,Space.World) ;
	}
}


function OnGUI(){

var coins:int;
var dCause:int;
var trash:int;
coins = playerScript.GetComponent(Player).getCoins();
dCause = playerScript.GetComponent(Player).getDengueCause();
trash = playerScript.GetComponent(Player).getTrashCollected();
var gsText:GUIStyle = new GUIStyle();
var boxesWidth = 220;
var boxesHeight =30;
var box_1_posX = Screen.width-boxesWidth-10;
var box_1_posY = 30;
var box_2_posX = Screen.width-boxesWidth-10;
var box_2_posY = 90;
var box_3_posX = Screen.width-boxesWidth-10;
var box_3_posY = 150;
var lable_1_posX =box_1_posX+10;
var lable_1_posY =box_1_posY-18;
var lable_2_posX =box_2_posX+10;
var lable_2_posY =box_2_posY-18;
var lable_3_posX =box_3_posX+10;
var lable_3_posY =box_3_posY-18;
GUI.Box		(Rect(box_1_posX,box_1_posY,boxesWidth,boxesHeight), "<b><color=white>Player Score: "+coins+"</color></b>");
GUI.Box		(Rect(box_2_posX,box_2_posY,boxesWidth,boxesHeight), "<b><color=white>Dengue Meter: "+dCause+"%</color></b>");
GUI.Box		(Rect(box_3_posX,box_3_posY,boxesWidth,boxesHeight), "<b><color=white>Trash Collected: "+trash+"</color></b>");
GUI.Label	(Rect(lable_1_posX,lable_1_posY,boxesWidth,boxesHeight), "<b><color=white>Max: 1 000 000</color></b>");
GUI.Label	(Rect(lable_2_posX,lable_2_posY,boxesWidth,boxesHeight), "<b><color=white>Max: 100%</color></b>");
GUI.Label	(Rect(lable_3_posX,lable_3_posY,boxesWidth,boxesHeight), "<b><color=white>Max: 10</color></b>");
GUI.DrawTexture(Rect(box_1_posX+180,box_1_posY-25,35,75),coinTexture, ScaleMode.ScaleToFit, true, 0.0f);
GUI.DrawTexture(Rect(box_1_posX+180,box_2_posY-25,40,80),tempratureTexture, ScaleMode.ScaleToFit, true, 0.0f);
GUI.DrawTexture(Rect(box_1_posX+170,box_3_posY-20,65,75),trashTexture, ScaleMode.ScaleToFit, true, 0.0f);
}
