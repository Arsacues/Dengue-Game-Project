#pragma strict
@HideInInspector
var isCalled:int = 0;
@HideInInspector
var scWidth:int = 0;
@HideInInspector
var scHeight:int = 0;
function Start () {
	scWidth = Screen.width;
	scHeight = Screen.height;		
}

function Update () {
if (Input.GetMouseButtonDown(0)) {
         var ray : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
         var hit : RaycastHit;
         if (Physics.Raycast (ray, hit)) {
             if (hit.collider.tag == "DH2") {
             isCalled=1;
            } else{
             isCalled =0;
             }
          }
     }
     
}

function OnGUI(){
if(isCalled==1)
GUI.Button(Rect(scWidth/2,(scHeight/2)+(scHeight/4),120,120), name);
}
