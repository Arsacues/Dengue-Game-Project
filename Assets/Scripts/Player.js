#pragma strict
 @HideInInspector
static var dengueCause:int=0;
 @HideInInspector
static var coins:int=900000;
 @HideInInspector
static var trashCollected:int;

function Start () {
}

function Update () {

}

function setCoins(newCoins:int){
coins = newCoins;
}

function getCoins(){
return coins;
}

function setDengueCause(dc:int){
if(dc<0)
dc=0;
dengueCause=dc;
}

function getDengueCause(){
return dengueCause;
}

function setTrashCollected(tc:int){
if(tc<0)
tc=0;
trashCollected = tc;
}

function getTrashCollected(){
return trashCollected;
}