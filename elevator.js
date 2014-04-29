//PUT THE IDLE CHECK IN A DIFFERENT FUNCTION THAT THEN CALLS ELEVATORPICKUP SO THAT THE CHILD CAN WAIT IF THE ELEVATOR IS IN USE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   var elevatorOne = false;
       var elevatorTwo = false;


function callCartleft(childNum) {
    if (cartInUse==false) {
     cartInUse=true;
        var cart= document.getElementById("cart");
        whoInCart=childNum;
        TweenMax.to(cart,2, {left: 147, onComplete:Floor2One, onCompleteParams:[childNum]});
       
    } else {
              setTimeout(function() {
          callCartleft(childNum);  
        },2000);       
                    }
    
}


function callCartRight(childNum) {
    if (cartInUse==false) {
     cartInUse=true;
        var cart= document.getElementById("cart");
        whoInCart=childNum;
        TweenMax.to(cart,2, {left: 412, onComplete:Floor2One, onCompleteParams:[childNum,1, true]});
       
       
    } else {
              setTimeout(function() {
          callCartRight(childNum);  
        },2000);       
                    }
    
}

function callElevator(childNum, elevatorNum) { //make the elevator pick up the kid
     console.log("elevatorPickUp" + childNum);
       
        var elevatortl = new TimelineMax(); //create timeline
        elevatortl.to(elevator[elevatorNum].elem, 2,     {top:floor[child[childNum].floor].y})//bring elevator to kid
        .to(child[childNum].elem, .5, {left: elevator[elevatorNum].xpos})//bring child in
        .call(ElevatorBringtoFloor,[childNum, elevatorNum]);//start elevator moving
   
}


function ElevatorPickUp(childNum, elevatorNum) {
  console.log("callElevator" + childNum);
  if (elevatorNum==1) {
  if (elevatorOne==false) {  //check to see if elevator is being used
          
          elevatorOne=true; 
            
     callElevator(childNum, elevatorNum);   
        
      
      } else {
        setTimeout(function() {
         
         ElevatorPickUp(childNum, elevatorNum);
        },2000);
  }
  }
    
      if (elevatorNum==2) {
  if (elevatorTwo==false) {  //check to see if elevator is being used
     
          elevatorTwo=true; 
      callElevator(childNum, elevatorNum);   
       
      
      } else {
        setTimeout(function() {
          ElevatorPickUp(childNum, elevatorNum);  
        },2000);
  }
  }
    
    
    
}   


function alertShit() {
mak   
}


function ElevatorBringtoFloor(childNum, elevatorNum) { //bring the elevator and kid to floor
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
    

function makeKidLeave(childNum, elevatorNum) { //get that kid out and make the elevator available
      console.log("makeKidLeave" + childNum);
  
 if (floor[child[childNum].floor].side == "left") { //if floor is on the left shoot out kid on left
  TweenMax.to(child[childNum].elem,1,{left: "-=20px"});   
 }
    if (floor[child[childNum].floor].side == "right") { // if floor is on the right shoot out kid on the right
  TweenMax.to(child[childNum].elem,1,{left: "+=35px"});   
 }
   
    startWalking(childNum,elevatorNum); //call the function that calls the correct floor animations
     
}


function randomFloor(childNum, elevatorNum) { //get a random floor
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
           var newfloor=Math.floor(Math.random()*(8-5)+5); 
      }
     child[childNum].floor=newfloor;
        return newfloor;
    }
}


function startWalking(childNum,elevatorNum) { //send the kid out on the right path
      console.log("startWalking" + childNum);
  
 switch(child[childNum].floor)
 {
    case 1:
         Floor1One(childNum,0);
         break;
 
    case 2:
         callCartleft(childNum);
        break;
    case 3:
         Floor3One(childNum,0);
         break;
    case 4:
         Floor4One(childNum,0);
         break;
    case 5:
         Floor5One(childNum,0);
         break;
    case 6:
         Floor4Six(childNum,true);
         break;
    case 7:
         Floor7One(childNum,0);
         break;
}
   
    if (elevatorNum==1) {
         elevatorOne=false;
    } else {
        elevatorTwo=false;   
    }
}

        
    
