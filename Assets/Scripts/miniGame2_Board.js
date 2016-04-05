#pragma strict
@HideInInspector
var numberOfClicks:int = 1;
@HideInInspector
var boardPoints:int;
var explosion:Transform;
function Start () {
boardPoints = 5500;
}

function Update () {
if(numberOfClicks == 0){
Instantiate(explosion, transform.position, transform.rotation);
numberOfClicks=1;
}
}
