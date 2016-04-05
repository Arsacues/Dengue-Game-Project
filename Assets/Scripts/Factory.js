 @HideInInspector
   var objectSelected:boolean = false;
 @HideInInspector
   var scWidth:int = 0;
 @HideInInspector
   var scHeight:int = 0;
 var playerScript:GameObject;  
     @HideInInspector
     var showBurryBox:boolean = false;
     @HideInInspector
     var showBurnBox:boolean = false;
     @HideInInspector
     var showRecycleBox:boolean = false;
     @HideInInspector
     var showBox2:boolean = false;
     @HideInInspector
     var showBurryButton:boolean = false;
     @HideInInspector
     var showCloseButton:boolean = false;
     @HideInInspector
     var showBurryCoinsButton = false;
     @HideInInspector
     var showBurnButton:boolean = false;
      @HideInInspector
     var showBurnCoinsButton = false;
     @HideInInspector
     var showRecycleButton:boolean = false;
      @HideInInspector
     var showRecycleCoinsButton = false;
     
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
            if (hit.collider.tag == "Factory" && showBurnBox == false	&& showBurryBox == false	&& showRecycleBox == false)
            {
            objectSelected = true;
            showBurnButton = true;
           	showBurryButton = true;
           	showRecycleButton = true;
           }
           else if(hit.collider.tag == "DH1" || hit.collider.tag == "DH2" || hit.collider.tag == "Mosquito Arena" || hit.collider.tag == "House" || hit.collider.tag == "Hospital" || hit.collider.tag == "School"|| hit.collider.tag == "Trash")
           {
           	objectSelected=false;
           	showBurnButton = false;
           	showBurryButton = false;
           	showRecycleButton = false;
           	
           }
        }
    }
   }
   
  
  
   function OnGUI(){
    var coins:int;
	coins = playerScript.GetComponent(Player).getCoins();
	var trash:int;
	trash = playerScript.GetComponent(Player).getTrashCollected();
   var boxWidth = (50*scWidth)/100;
   var  boxHeight = (80*scHeight)/100;
   var x = scWidth/2 - 60; //center of GUIButton = half of the GUIButton width
   var y = scHeight/2 - 100; //centre of GUIButton = half of the GUIButton Height
   var closeBoxSize = 22;
   var coinButtonWidth = 110;
   var coinButtonHeight = 50;
   if (objectSelected)
   {
   //Burry Option
   if(showBurryButton)
   	   {
   	   
   	   if(trash>0){
   	        if (GUI.Button(Rect(scWidth/2,(scHeight/2)+(scHeight/4),120,120), "<color=white><b>Burry</b></color>"))
      	 	{
             	showBurryBox=true;
             	showBox2=true;
             	showCloseButton=true;
              	showBurryButton = false;
              	showBurnButton = false;
              	showRecycleButton = false;
            }
            
            }
            if(trash==0){
            if (GUI.Button(Rect(scWidth/2,(scHeight/2)+(scHeight/4),120,120), "<color=red><b>Burry</b></color>"))
      	 	{
             	showBurryButton = false;
             	showBurnButton = false;
              	showRecycleButton = false;
            }
            }
            
       }
       //Burn Option
       if(showBurnButton)
   	   {
   	   
   	   if(trash>0){
   	        if (GUI.Button(Rect((scWidth/2)-130,(scHeight/2)+(scHeight/4),120,120), "<color=white><b>Burn</b></color>"))
      	 	{
             	showBurnBox=true;
             	showBox2=true;
             	showCloseButton=true;
              	showBurryButton = false;
              	showBurnButton = false;
              	showRecycleButton = false;
            }
            
            }
            if(trash==0){
            if (GUI.Button(Rect((scWidth/2)-130,(scHeight/2)+(scHeight/4),120,120), "<color=red><b>Burn</b></color>"))
      	 	{
             	showBurnButton = false;
             	showBurryButton = false;
              	showRecycleButton = false;
            }
            }
            
       }
       
       //Recycle Option
      if(showRecycleButton)
   	   {
   	   
   	   if(trash>0){
   	        if (GUI.Button(Rect((scWidth/2)+130,(scHeight/2)+(scHeight/4),120,120), "<color=white><b>Recycle</b></color>"))
      	 	{
             	showRecycleBox=true;
             	showBox2=true;
             	showCloseButton=true;
              	showRecycleButton = false;
              	showBurryButton = false;
              	showBurnButton = false;
            }
            
            }
            if(trash==0){
            if (GUI.Button(Rect((scWidth/2)+130,(scHeight/2)+(scHeight/4),120,120), "<color=red><b>Recycle</b></color>"))
      	 	{
             	showRecycleButton = false;
             	showBurryButton = false;
              	showBurnButton = false;
            }
            }
            
       }
       
   }
       
       if(showBurryBox)
       {
       	 //main box
       	  GUI.Box(Rect((scWidth/2)-boxWidth/2,(scHeight/2)-(boxHeight/2),boxWidth,boxHeight), "\n\n\n\nYou Can Burry Your Trash Here \n\nBurrying Trash Will Reduce the Dengue Cause By 30% \n\nBurrying Trash Rewards 0 Coins");
         // Debug.Log("I am in Burry Box");
          showCloseButton = true;
          showBurryCoinsButton = true;
       }
       
       if(showBurnBox)
       {
       	 //main box
       	   GUI.Box(Rect((scWidth/2)-boxWidth/2,(scHeight/2)-(boxHeight/2),boxWidth,boxHeight), "\n\n\n\nYou Can Burn Your Trash Here \n\nBurning Trash Will Reduce the Dengue Cause By 20%\n\nBurning Trash Rewards 0 Coins");
       //   Debug.Log("I am in Burn Box");
          showCloseButton = true;
          showBurnCoinsButton = true;
       }
       
       if(showRecycleBox)
       {
       	 //main box
       	  GUI.Box(Rect((scWidth/2)-boxWidth/2,(scHeight/2)-(boxHeight/2),boxWidth,boxHeight), "\n\n\n\nYou Can Recycle Your Trash Here \n\nRecyling Trash Will Reduce the Dengue Cause By 40%\n\nRecycling Trash Rewards 0 Coins");
        //   Debug.Log("I am in Recycle Box");
          showCloseButton = true;
          showRecycleCoinsButton = true;
       }
       
       if(showBox2)
       {
       	  // Smaller box
       	  GUI.Box(Rect((scWidth/2)-boxWidth/2,(scHeight/2)-(boxHeight/2),boxWidth,boxHeight/21), "<b>Trash Factory</b>");
          // The recycling details and Closing action
          if (GUI.Button(Rect((scWidth/2)+(boxWidth/2)-(closeBoxSize+2),(scHeight/2)-(boxHeight/2)+2,closeBoxSize,closeBoxSize), "<color=red><b>X</b></color>"))
      	 	{
      	 	    showRecycleutton = false;
             	showBurryButton = false;
              	showBurnButton = false;
             	showBurryBox=false;
             	showBurnBox=false;
             	showRecycleBox=false;
             	showBox2=false;
             	showBurryCoinsButton = false;
             	showBurnCoinsButton = false;
             	showRecycleCoinsButton=false;
              	showCloseButton = false;
              	
            }
       
       }
       
       //Getting variables from player
       var dengueCause:int;
		dengueCause = playerScript.GetComponent(Player).getDengueCause();
		
		   if(showBurnCoinsButton){
       	if(coins>=5000){
       	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=yellow>5000</color>")){
       		playerScript.GetComponent(Player).setCoins((coins-5000));
       		playerScript.GetComponent(Player).setDengueCause(dengueCause-20);
       		playerScript.GetComponent(Player).setTrashCollected(trash-1);
       		showBurnBox=false;
            showBox2=false;
            showBurnCoinsButton = false;
            showCloseButton = false;
       	}
       	}
       	else{
       	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=red>5000</color>"))
       	Debug.Log("Not Enough Coins!");
       	}
       }
		
       if(showBurryCoinsButton){
       	if(coins>=10000){
       	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=yellow>10000</color>")){
       		playerScript.GetComponent(Player).setCoins((coins-10000));
       		playerScript.GetComponent(Player).setDengueCause(dengueCause-30);
       		playerScript.GetComponent(Player).setTrashCollected(trash-1);
       		showBurryBox=false;
            showBox2=false;
            showBurryCoinsButton = false;
            showCloseButton = false;
       	}
       	}
       	else{
       	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=red>10000</color>"))
       	Debug.Log("Not Enough Coins!");
       	}
       }
       
       
          if(showRecycleCoinsButton){
       	if(coins>=20000){
       	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=yellow>20000</color>")){
       		playerScript.GetComponent(Player).setCoins((coins-20000));
       		playerScript.GetComponent(Player).setDengueCause(dengueCause-40);
       		playerScript.GetComponent(Player).setTrashCollected(trash-1);
       		showRecycleBox=false;
            showBox2=false;
            showRecycleCoinsButton = false;
            showCloseButton = false;
       	}
       	}
       	else{
       	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=red>20000</color>"))
       	Debug.Log("Not Enough Coins!");
       	}
       }
       
   }
