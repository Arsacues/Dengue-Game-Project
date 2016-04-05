 @HideInInspector
   var objectSelected:boolean = false;
 @HideInInspector
   var scWidth:int = 0;
 @HideInInspector
   var scHeight:int = 0;
 var playerScript:GameObject;  
     
     var showBox:boolean = false;
     var showBox2:boolean = false;
     var showUpgradeButton:boolean = false;
     var showCloseButton:boolean = false;
     var showCoinsButton = false;
     
     
   function Start () {
     scWidth = Screen.width;
       scHeight = Screen.height;        
   }
  
   function Update () {
   if (Input.GetMouseButtonDown(0)) {
        var ray : Ray = Camera.main.ScreenPointToRay (Input.mousePosition);
        var hit : RaycastHit;
        if (Physics.Raycast (ray, hit))
        {
            if (hit.collider.tag == "House2")
            {
            objectSelected = true;
           	showUpgradeButton=true;
           }
           else if(hit.collider.tag == "DH1" || hit.collider.tag == "DH2" || hit.collider.tag == "Mosquito Arena" || hit.collider.tag == "Factory" || hit.collider.tag == "Hospital" || hit.collider.tag == "School"|| hit.collider.tag == "Trash" || hit.collider.tag == "House")
           {
           	objectSelected=false;
           	showUpgradeButton=false;
           }
        }
    }
   }
   
  
  
   function OnGUI(){
   var clonedLevel2:Transform;
   var boxWidth = (50*scWidth)/100;
   var boxHeight = (80*scHeight)/100;
   var x = scWidth/2 - 60; //center of GUIButton = half of the GUIButton width
   var y = scHeight/2 - 100; //centre of GUIButton = half of the GUIButton Height
   var closeBoxSize = 22;
   var coinButtonWidth = 110;
   var coinButtonHeight = 50;
   if (objectSelected)
   {
   if(showUpgradeButton)
   	   {
   	        if (GUI.Button(Rect(scWidth/2,(scHeight/2)+(scHeight/4),120,120), "Upgrade"))
      	 	{
             	showBox=true;
             	showBox2=true;
             	showCloseButton=true;
              	showUpgradeButton = false;
            }
       }
   }
       
       if(showBox)
       {
       	 //main box
       	  GUI.Box(Rect((scWidth/2)-boxWidth/2,(scHeight/2)-(boxHeight/2),boxWidth,boxHeight), "");
          showCloseButton = true;
          showCoinsButton = true;
       }
       
       if(showBox2)
       {
       	  // Smaller box
       	  GUI.Box(Rect((scWidth/2)-boxWidth/2,(scHeight/2)-(boxHeight/2),boxWidth,boxHeight/21), "<b>Upgrade To Level 3</b>");
          // The upgrading details and Closing action
          if (GUI.Button(Rect((scWidth/2)+(boxWidth/2)-(closeBoxSize+2),(scHeight/2)-(boxHeight/2)+2,closeBoxSize,closeBoxSize), "<color=red><b>X</b></color>"))
      	 	{
             	showBox=false;
             	showBox2=false;
             	showCoinsButton = false;
              	showCloseButton = false;
              	
            }
       
       }
       
       //Getting variables from player
        var coins:int;
		coins = playerScript.GetComponent(Player).getCoins();
       
       if(showCoinsButton){
       	if(coins>=1000000){
       	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=yellow>1000000</color>")){
       		playerScript.GetComponent(Player).setCoins((coins-1000000));
       		transform.Translate(0,0,0);
       		transform.localScale += new Vector3(0.9F, 0.2, 0.1F);
       		showBox=false;
            showBox2=false;
            showCoinsButton = false;
            showCloseButton = false;
       	}
       	}
       	else{
       	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=red>1000000</color>"))
       	Debug.Log("Not Enough Coins!");
       	}
       }
       
   }
