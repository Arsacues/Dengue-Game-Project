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


if(Input.GetMouseButtonDown(0))
{
var hit: RaycastHit;
var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);
	if(Physics.Raycast(ray,hit,100.0))
	{
		if(hit.transform.tag == "Board" || hit.transform.tag == "Mosquito" || hit.transform.tag == "Butterfly")
		{
			numberOfClicks=0;
		}
		
	}



}


if(numberOfClicks == 0){
Instantiate(explosion, transform.position, transform.rotation);
var position = Vector3(1000,1000,1000);
transform.position = position;
}
}
