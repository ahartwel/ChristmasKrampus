function Floor1One(childNum, playPosition) { //floor one animation one
    child[childNum].floor=1;
      console.log("Floor1One" + childNum);
  
    var frameTime = 8/7; // 8 is the full time of the animation 11 is the number of "Frames"
    console.log(frameTime); //check it
     child[childNum].tl = new TimelineMax(); //new timeline
    child[childNum].tl.to(child[childNum].elem, 10, {bezier:{type:'cubic', values:[
{left:90, top:803}, {left:88, top:803}, {left:87, top:803}, {left:87, top:803},
{left:87, top:803}, {left:78, top:803}, {left:64, top:804}, {left:55, top:805},
{left:55, top:805}, {left:47, top:805}, {left:46, top:805}, {left:39, top:807},
{left:39, top:807}, {left:33, top:808}, {left:25, top:805}, {left:20, top:807},
{left:20, top:807}, {left:15, top:808}, {left:11, top:811}, {left:5, top:807},
{left:5, top:807}, {left:0, top:803}, {left:-10, top:806}, {left:-10, top:806},
{left:-10, top:806}, {left:-10, top:806}, {left:-24, top:806}, {left:-24, top:806},
]}}).call(reverseItCallElevator1,[child[childNum].tl,childNum]);
    child[childNum].tl.play(0);
    flipChild(childNum);
   childWalking(childNum);
    
 
  

    //.call(reverseItCallElevator1,[tl,childNum])
    
    
}



                 
                   



function pauseIt(tl,childNum) {
      console.log("pauseIt" + childNum);
  
    console.log("pausing");
     tl.pause();//simple pause function
     tl.kill();
    }

function killIt(tl, whatFloor,childNum) {
  console.log("killIt" + childNum);
  
    switch(whatFloor) 
    {
    case 3:console.log("killing");
    tl.pause();
    tl.kill();
            setTimeout(function() {
    randomPathFloor2(13,childNum);
    },100);
            break;
    case 6:
    tl.pause();
    tl.kill();
     setTimeout(function() {
    randomPathFloor2(12,childNum);
},100);
            break;
    case 4:
    tl.pause();
  tl.kill();
 setTimeout(function() {
    randomPathFloor2(10,childNum);
},100);
            break;
    case 7:
    tl.pause();
    tl.kill();
 setTimeout(function() {
    randomPathFloor2(11,childNum);
},100);
            break;
    case 2:
    tl.pause();
    tl.kill();
 setTimeout(function() {
    Floor2One(childNum,1,true);
},100);
            break;
    case 1:
    tl.pause();
    tl.kill();
 setTimeout(function() {
    ElevatorPickUp(childNum,1);
    childWalking(childNum);
},100);
}
}



    function reverseItCallElevator1(tl,childNum) { //at the end of walking reverse that shit so he goes back to elevator for more mining!
    tl.pause(); //pause it so it don't move
          console.log("reverseitCallElevator1" + childNum);
  
    var randomWait = Math.floor(Math.random()*(4000-3000+1))+3000; // get a random wait time
    flipChildForward(childNum);
    setTimeout(function() {
        tl.addCallback(pauseIt,0,[tl,childNum]); //this pause is needed otherwise it goes back to css positioning and fucks up the elevator animations
        tl.addCallback(ElevatorPickUp,0,[childNum,1]); //call for the elevator, its always elevator 1 from floor1
        tl.reverse(); //start walking back from out of frame so we can get to those callbacks!
    }, randomWait);
}

