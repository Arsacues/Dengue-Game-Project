#pragma strict

var customGuiStyle : GUIStyle;


function Start(){
 
}

function OnGUI()
{
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
GUI.Label	(Rect(lable_1_posX,lable_1_posY,boxesWidth,boxesHeight), "<b><color=white>Max: 1 000 000</color></b>",customGuiStyle);
}