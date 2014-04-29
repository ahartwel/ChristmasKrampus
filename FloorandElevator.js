function theRules() {
//PUT THE IDLE CHECK IN A DIFFERENT FUNCTION THAT THEN CALLS ELEVATORPICKUP SO THAT THE CHILD CAN WAIT IF THE ELEVATOR IS IN USE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    
    
this.ElevatorPickUp = function(childNum, elevatorNum) { //make the elevator pick up the kid
     console.log("elevatorPickUp" + childNum);
  
        var elevatortl = new TimelineMax(); //create timeline
        elevatortl.to(elevator[elevatorNum].elem, 2,     {top:floor[child[childNum].floor].y})//bring elevator to kid
        .to(child[childNum].elem, .5, {left: elevator[elevatorNum].xpos})//bring child in
        .call(ElevatorBringtoFloor,[childNum, elevatorNum]);//start elevator moving
   
}


this.callElevator = function(childNum, elevatorNum) {
  console.log("callElevator" + childNum);
  
  if (elevator[elevatorNum].state=="idle") {  //check to see if elevator is being used
     
          elevator[elevatorNum].state="droppingOff"; 
      ElevatorPickUp(childNum, elevatorNum);
        
      
      } else {
        setTimeout(function() {
         callElevator(childNum, elevatorNum);   
        },5000);
  }
}   


this.alertShit = function() {
mak   
}


this.ElevatorBringtoFloor = function(childNum, elevatorNum) { //bring the elevator and kid to floor
    //this elevator is dropping stuff off now
    var theFloor = randomFloor(childNum, elevatorNum);//get a random floor to go to
      console.log("ElevatorBringtoFloor" + childNum);
  
    var elevatorBring = new TimelineMax();//create timeline
    elevatorBring.to(elevator[elevatorNum].elem, 2, {top: floor[theFloor].y})
    .call(makeKidLeave,[childNum,elevatorNum]);//move the elevator to the new floor
    var childBring = new TimelineMax();
    if (elevatorNum==2) {
    var childYGo = floor[child[childNum].floor].y+57;//move the kid seperately, because of differing heights
    }
    if (elevatorNum==1) {
    var childYGo = floor[child[childNum].floor].y+75;//move the kid seperately, because of differing heights
    }
    childBring.to(child[childNum].elem, 2, {top: childYGo});
    
}
    

this.makeKidLeave = function(childNum, elevatorNum) { //get that kid out and make the elevator available
      console.log("makeKidLeave" + childNum);
  
 if (floor[child[childNum].floor].side == "left") { //if floor is on the left shoot out kid on left
  TweenMax.to(child[childNum].elem,1,{left: "-=20px"});   
 }
    if (floor[child[childNum].floor].side == "right") { // if floor is on the right shoot out kid on the right
  TweenMax.to(child[childNum].elem,1,{left: "+=35px"});   
 }
   
    startWalking(childNum,elevatorNum); //call the function that calls the correct floor animations
     
}


this.randomFloor = function(childNum, elevatorNum) { //get a random floor
      console.log("randomFloor" + childNum);
  
 if (elevatorNum == 1) { //if elevator one only choose elevator one floors
     var newfloor=Math.floor(Math.random()*(5-1)+1);   
      while (newfloor == child[childNum].floor) { //use the while loop to make sure its a different floor
           var newfloor=Math.floor(Math.random()*(5-1)+1); 
      }
     child[childNum].floor=newfloor;
     return newfloor;
     
            }
 
    if (elevatorNum == 2) { //if elevator two only get elevator two floors
      var newfloor=Math.floor(Math.random()*(8-5)+5); 
        console.log(newfloor);;
           while (newfloor == child[childNum].floor) { //use the while loop to make sure its a different floor
           var newfloor=Math.floor(Math.random()*(8-5)+1); 
      }
     child[childNum].floor=newfloor;
        return newfloor;
    }
}


this.startWalking = function(childNum,elevatorNum) { //send the kid out on the right path
      console.log("startWalking" + childNum);
  
 switch(child[childNum].floor)
 {
    case 1:
         Floor1One(childNum,0);
         break;
 
    case 2:
         Floor2One(childNum,0);
        break;
    case 3:
         Floor3One(childNum,0);
         break;
    case 4:
         Floor4One(1,0);
         break;
    case 5:
         Floor5One(1,0);
         break;
    case 6:
         Floor4Six(childNum,true);
         break;
    case 7:
         Floor7One(1,0);
         break;
}
    elevator[elevatorNum].state="idle";
}

this.killIt = function(tl, whatFloor,childNum) {
  console.log("killIt" + childNum);
  
    switch(whatFloor) 
    {
    case 3:console.log("killing");
    tl.pause();
    tl.kill();
    randomPathFloor2(13,childNum);
            break;
    case 6:
    tl.pause();
    tl.kill();
    randomPathFloor2(12,childNum);
            break;
    case 4:
    tl.pause();
  tl.kill();
    randomPathFloor2(10,childNum);
            break;
    case 7:
    tl.pause();
    tl.kill();
    randomPathFloor2(11,childNum);
            break;
    case 2:
    tl.pause();
    tl.kill();
    Floor2One(1,1,true);
            break;
    case 1:
    tl.pause();
    tl.kill();
    ElevatorPickUp(childNum,1);
    childWalking(childNum);
}
}
        
    this.Floor4One = function(childNum, playPosition, reverse) { //floor one animation one
 
    console.log(childNum);
    child[childNum].floor=4;
    var frameTime = 10; // 8 is the full time of the animation 11 is the number of "Frames"
    console.log(frameTime); //check it
    var tl = new TimelineMax({onComplete:this.randomPathFloor4, onCompleteParams:[2,childNum]}); //new timeline
    tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:145, top:1318}, {left:145, top:1318}, {left:269, top:1319}, {left:296, top:1318},
{left:296, top:1318}, {left:322, top:1317}, {left:369, top:1309}, {left:374, top:1311},
{left:374, top:1311}, {left:379, top:1313}, {left:388, top:1319}, {left:405, top:1318},
{left:405, top:1318}, {left:422, top:1318}, {left:433, top:1315}, {left:444, top:1320},
{left:444, top:1320}, {left:454, top:1325}, {left:483, top:1330}, {left:497, top:1325},
{left:497, top:1325}, {left:510, top:1321}, {left:517, top:1320}, {left:546, top:1319},
{left:546, top:1319}, {left:574, top:1318}, {left:594, top:1320}, {left:599, top:1319},
{left:599, top:1319}, {left:603, top:1317}, {left:603, top:1317}, {left:603, top:1317},
]}});
    tl.play(0);
    flipChildForward(childNum);
   childWalking(childNum);
    
 if (reverse) {
       tl.call(killItFour, [tl,1,childNum], this, .01);
        tl.reverse(0); 
  flipChild(childNum);

 }
                                                   }

  this.Floor4Three = function(childNum,reverse) {
          childWalking(childNum);
                                                    child[childNum].floor=4;
    var tl = new TimelineMax({onComplete:randomWaitMine4, onCompleteParams:[childNum,3]});
    var frameTime = 8;
     flipChildForward(childNum);
   setTimeout(function() {
    tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:603, top:1316}, {left:603, top:1316}, {left:591, top:1308}, {left:589, top:1307},
{left:589, top:1307}, {left:587, top:1306}, {left:600, top:1306}, {left:606, top:1299},
{left:606, top:1299}, {left:612, top:1293}, {left:607, top:1295}, {left:624, top:1295},
{left:624, top:1295}, {left:640, top:1295}, {left:650, top:1293}, {left:659, top:1292},
{left:659, top:1292}, {left:668, top:1292}, {left:673, top:1291}, {left:673, top:1291},
]}});
        tl.play(0);
         if (reverse) {
        
        tl.call(killItFour, [tl,3,childNum], this, .01);
        tl.reverse(0);   
          
  tl.reverse(0);   
 }
        
        },50);                             
                                                
                                            
}   

    this.Floor4Four = function(childNum,reverse) {
          childWalking(childNum);
       child[childNum].floor=4;
    var tl = new TimelineMax({onComplete:randomPathFloor4, onCompleteParams:[4,childNum]});
    var frameTime = 8;
     flipChildForward(childNum);
   setTimeout(function() {
    tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:602, top:1316}, {left:602, top:1316}, {left:537, top:1282}, {left:527, top:1273},
{left:527, top:1273}, {left:517, top:1264}, {left:483, top:1234}, {left:466, top:1230},
{left:466, top:1230}, {left:450, top:1225}, {left:418, top:1210}, {left:410, top:1205},
{left:410, top:1205}, {left:401, top:1199}, {left:385, top:1185}, {left:384, top:1183},
]}});
        tl.play(0);
         if (reverse) {
        
        tl.call(killItFour, [tl,4,childNum], this, .01);
        tl.reverse(0);   
          
  tl.reverse(0);   
 }
        
        },50);                             
                                                
                                            
} 
                                                    
  this.Floor4Five = function(childNum,reverse) {
          childWalking(childNum);
                                                    child[childNum].floor=4;
    var tl = new TimelineMax({onComplete:randomWaitMine4, onCompleteParams:[childNum,5]});
    var frameTime = 8;
     flipChildForward(childNum);
   setTimeout(function() {
    tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:382, top:1182}, {left:382, top:1182}, {left:269, top:1190}, {left:265, top:1189},
{left:265, top:1189}, {left:261, top:1188}, {left:261, top:1188}, {left:261, top:1188},
]}});
        tl.play(0);
         if (reverse) {
        
        tl.call(killItFour, [tl,5,childNum], this, .01);
        tl.reverse(0);   
          

 }
        
        },50);                             
                                                
                                            
}
       

  this.Floor4Six = function(childNum,reverse) {
          childWalking(childNum);
      child[childNum].floor=6;
    var tl = new TimelineMax({onComplete:ElevatorPickUp, onCompleteParams:[childNum,2]});
    var frameTime = 8;
     flipChildForward(childNum);
   setTimeout(function() {
    tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:384, top:1182}, {left:384, top:1182}, {left:495, top:1179}, {left:523, top:1174},
{left:523, top:1174}, {left:550, top:1170}, {left:601, top:1161}, {left:617, top:1165},
{left:617, top:1165}, {left:633, top:1168}, {left:638, top:1171}, {left:647, top:1169},
{left:647, top:1169}, {left:657, top:1166}, {left:683, top:1164}, {left:693, top:1164},
{left:693, top:1164}, {left:702, top:1164}, {left:706, top:1166}, {left:715, top:1164},
{left:715, top:1164}, {left:724, top:1161}, {left:734, top:1164}, {left:739, top:1164},
{left:739, top:1164}, {left:744, top:1163}, {left:749, top:1163}, {left:749, top:1163},
]}})
;
        tl.play(0);
         if (reverse) {
        
        tl.call(killItFour, [tl,6,childNum], this, .01);
        tl.reverse(0);   
          
  tl.reverse(0);   
 }
        
        },50);                             
                                                
                                            
}






this.randomWaitMine4 = function(childNum, whichPath) {
         childMine(childNum);
       var theWait = Math.floor(Math.random()*(10000-4000)+4000);
        console.log("randomWait" + theWait)
        setTimeout(function() {
        switch(whichPath) 
        {
         case 3:
            console.log("randomWait");
            Floor4Three(childNum, true);
               
            flipChild(1);
                break;
        case 5:
            console.log("randomWait");
            Floor4Five(childNum,true);
                break;
        case 7:
          console.log("randomWait");
            Floor2Seven(childNum,true);
                break;
 
        }
        
        
        },theWait);
        
        
        }

this.randomPathFloor4 = function(whichPath, childNum) {
                                        
   switch(whichPath)
 {
    case 2:
         var randomOne = Math.random();
            if (randomOne<=.5) {
            Floor4Three(childNum);                                
            } else {
          Floor4Four(childNum); 
          }
         break;
    case 3:
         var randomOne2 = Math.random();
            if (randomOne2<=.5) {
             Floor4One(childNum,0,true);
             
            } 
            else{
                Floor4Four(childNum);
                
            } 
         break;
         
    case 4: 
         var randomOne = Math.random();
            if (randomOne<=.5) {
            Floor4Five(childNum);                                
            } else {
          Floor4Six(childNum); 
          }
            
    break;
    case 10: 
    var randomOne2 = Math.random();
             if (randomOne<=.5) {
            Floor4Three(childNum);                                
            } else {
          Floor4One(childNum,0,true); 
          }
         break;
         
        case 12:
         var randomOne2 = Math.random();
             if (randomOne<=.5) {
            Floor4Six(childNum);                                
            } else {
          Floor4Four(childNum,true); 
          }
         break;
         case 11: 
            var randomOne2 = Math.random();
             if (randomOne<=.5) {
            Floor4Five(childNum);                                
            } else {
          Floor4Four(childNum,true); 
          }
         break;
            }
    
         
   }  
this.killItFour = function(tl, whatFloor,childNum) {

    switch(whatFloor) 
    {
    case 3:console.log("killing");
    tl.pause();
    tl.kill();
    randomPathFloor4(3,childNum);
            break;
    case 5:
    tl.pause();
    tl.kill();
    randomPathFloor4(12,childNum);
            break;
    case 4:
    tl.pause();
    tl.kill();
    randomPathFloor4(10,childNum);
            break;
    case 6:
    tl.pause();
    tl.kill();
    randomPathFloor4(11,childNum);
            break;
    case 2:
    tl.pause();
    tl.kill();
    Floor2One(1,1,true);
            break;
    case 1:
    tl.pause();
    tl.kill();
    ElevatorPickUp(childNum,1);
    childWalking(childNum);
}
}

    
    
}