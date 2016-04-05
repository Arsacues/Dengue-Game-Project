 @HideInInspector
   var objectSelected:boolean = false;
 @HideInInspector
   var scWidth:int = 0;
 @HideInInspector
   var scHeight:int = 0;
    
 var playerScript:GameObject;
    
     @HideInInspector
     var showBox:boolean = false;
     @HideInInspector
     var showBox2:boolean = false;
     @HideInInspector
     var showBox3:boolean = false;
     @HideInInspector
     var miniGame1Button:boolean = false;
     @HideInInspector
     var miniGame2Button:boolean = false;
     @HideInInspector
     var showCloseButton:boolean = false;
     @HideInInspector
     var showCoinsButton = false;
     @HideInInspector
     var showCoins2Button = false;
     
     
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
            if (hit.collider.tag == "Mosquito Arena")
            {
            objectSelected = true;
           	miniGame1Button=true;
           	miniGame2Button=true;
           }
           else if(hit.collider.tag == "DH1" || hit.collider.tag == "DH2" || hit.collider.tag == "House" || hit.collider.tag == "Factory" || hit.collider.tag == "Hospital" || hit.collider.tag == "School"|| hit.collider.tag == "Trash" || hit.collider.tag == "House2")
           {
           	objectSelected=false;
           	miniGame1Button=false;
           	miniGame2Button=false;
           }
        }
    }
   }
   
  
  
   function OnGUI(){
   var clonedLevel2:Transform;
   var boxWidth = (50*scWidth)/100;
   var  boxHeight = (80*scHeight)/100;
   var x = scWidth/2 - 60; //center of GUIButton = half of the GUIButton width
   var y = scHeight/2 - 100; //centre of GUIButton = half of the GUIButton Height
   var closeBoxSize = 22;
   var coinButtonWidth = 110;
   var coinButtonHeight = 50;
   if (objectSelected)
   {
   if(miniGame1Button)
   	   {
   	        if (GUI.Button(Rect((scWidth/2)-140,(scHeight/2)+(scHeight/4),120,120), "Electric Racket"))
      	 	{
             	showBox=true;
             	showBox2=true;
             	showCloseButton=true;
              	miniGame1Button = false;
              	showCoinsButton = true;
              	miniGame2Button = false;
            }
       }
       
    if(miniGame2Button)
   	   {
   	        if (GUI.Button(Rect((scWidth/2),(scHeight/2)+(scHeight/4),120,120), "Chemical Bomb"))
      	 	{
             	showBox=true;
             	showBox3=true;
             	showCloseButton=true;
              	miniGame1Button = false;
              	showCoins2Button = true;
              	miniGame2Button = false;
            }
       }
   }
       
       if(showBox)
       {
       	 //main box
       	  GUI.Box(Rect((scWidth/2)-boxWidth/2,(scHeight/2)-(boxHeight/2),boxWidth,boxHeight), "");
          showCloseButton = true;
          //showCoinsButton = true;
       }
       
       //minigame1 Box
       if(showBox2)
       {
       	  // Smaller box
       	  GUI.Box(Rect((scWidth/2)-boxWidth/2,(scHeight/2)-(boxHeight/2),boxWidth,boxHeight/21), "<b>Eleminate Infected Mosquitos Electirc Racket</b>");
          // The upgrading details and Closing action
          if (GUI.Button(Rect((scWidth/2)+(boxWidth/2)-(closeBoxSize+2),(scHeight/2)-(boxHeight/2)+2,closeBoxSize,closeBoxSize), "<color=red><b>X</b></color>"))
      	 	{
             	showBox=false;
             	showBox2=false;
             	showCoinsButton = false;
              	showCloseButton = false;
              	
            }
       
       }
       
       
       //minigame2 Box
       if(showBox3)
       {
       	  // Smaller box
       	  GUI.Box(Rect((scWidth/2)-boxWidth/2,(scHeight/2)-(boxHeight/2),boxWidth,boxHeight/21), "<b>Eleminate Infected Mosquitos Chemical Bomb</b>");
          // The upgrading details and Closing action
          if (GUI.Button(Rect((scWidth/2)+(boxWidth/2)-(closeBoxSize+2),(scHeight/2)-(boxHeight/2)+2,closeBoxSize,closeBoxSize), "<color=red><b>X</b></color>"))
      	 	{
             	showBox=false;
             	showBox3=false;
             	showCoins2Button = false;
              	showCloseButton = false;
              	
            }
       
       }
       
       
       //Getting variables from player
        var coins:int;
		coins = playerScript.GetComponent(Player).getCoins();
       
       //Minigame1 Coins Check
       if(showCoinsButton){
       	if(coins>=2000){
       	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=yellow>2000</color>")){
       		playerScript.GetComponent(Player).setCoins((coins-2000));
       		Application.LoadLevel("miniGame1");
       		showBox=false;
            showBox2=false;
            showCoinsButton = false;
            showCloseButton = false;
       	}
       	}
       	else{
       	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=red>2000</color>"))
       	Debug.Log("Not Enough Coins!");
       	}
       }
       
       
      //Minigame2 Coins Check
      if(showCoins2Button){
       	if(coins>=5000){
       	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=yellow>5000</color>")){
       		playerScript.GetComponent(Player).setCoins((coins-5000));
       		Application.LoadLevel("miniGame2");
       		showBox=false;
            showBox3=false;
            showCoins2Button = false;
            showCloseButton = false;
       	}
       	}
       	else{
       	if(GUI.Button(Rect((scWidth/2)-boxWidth/14,(scHeight/2)+(scHeight/4),coinButtonWidth,coinButtonHeight), "<color=red>2000</color>"))
       	Debug.Log("Not Enough Coins!");
       	}
       } 
       
   }
