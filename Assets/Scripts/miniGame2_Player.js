#pragma strict
 @HideInInspector
   var scWidth:int = 0;
 @HideInInspector
   var scHeight:int = 0;
var score:int =0;
var gameTime:float = 10.0;
var playerScript:GameObject; 
var playable:boolean = true;
 var showBox:boolean = true;
     var showBox2:boolean = true;
     var showUpgradeButton:boolean = true;
     var showCoinsButton = true;
function Start () {
playable=true;
scWidth = Screen.width;
scHeight = Screen.height;
InvokeRepeating("CountDown",1.0,1.0);
}

function Update () {
if(playable){
if(Input.GetMouseButtonDown(0))
{
var hit: RaycastHit;
var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	if(Physics.Raycast(ray,hit,100.0))
	{
		if(hit.transform.tag == "Board")
		{
			var boardScript = hit.transform.GetComponent(miniGame2_Board);
			boardScript.numberOfClicks-=1;
			score+=boardScript.boardPoints;
			playable=false;
			gameTime=1;
		}
	}



}
}
}

function CountDown(){
if(--gameTime==0){
CancelInvoke("CountDown");
playable=false;
var coins = playerScript.GetComponent(Player).getCoins();
playerScript.GetComponent(Player).setCoins((coins+score));
}
}

function OnGUI(){
   var boxWidth = (50*scWidth)/100;
   var  boxHeight = (80*scHeight)/100;
   var x = scWidth/2 - 60; //center of GUIButton = half of the GUIButton width
   var y = scHeight/2 - 100; //centre of GUIButton = half of the GUIButton Height
   var coinButtonWidth = 110;
   var coinButtonHeight = 50;
GUI.Label(Rect(10,10,100,20),"Score: "+score);
GUI.Label(Rect(10,25,100,35),"Time: "+gameTime);

if(gameTime==0){
 	  GUI.Box(Rect((scWidth/2)-boxWidth/2,(scHeight/2)-(boxHeight/2),boxWidth,boxHeight), "Results");
      	  GUI.Label(Rect((scWidth/2)-boxWidth/20,(scHeight/2)-(boxHeight/20),100,20),"Score: "+score);	
          
          	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=yellow>Done!</color>"))
       	{
      		Application.LoadLevel("main");
       		showBox=false;
            showBox2=false;
       	}
}
}

function getScore(){
return score;
}