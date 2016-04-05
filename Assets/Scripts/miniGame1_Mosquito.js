#pragma strict
@HideInInspector
var numberOfClicks:int = 1;
var mosquitoPoints:int = 100;
var respwanTimeWait:float = 2.0;
var explosion:Transform;
function Start () {
var position = Vector3(Random.Range(-6,6),Random.Range(-4,4),0);
transform.position = position;
}

function Update () {
if(numberOfClicks == 0){
Instantiate(explosion, transform.position, transform.rotation);
var position = Vector3(Random.Range(-6,6),Random.Range(-4,4),0);
RespawnWaitTime();
transform.position = position;
numberOfClicks = 1;
}
}


function RespawnWaitTime(){

GetComponent.<Renderer>().enabled = false;
yield WaitForSeconds(respwanTimeWait);
GetComponent.<Renderer>().enabled = true;

}