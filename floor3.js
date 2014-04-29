
    
    function Floor3One(childNum) { //floor one animation one
    child[childNum].floor=3;
    var frameTime = 6; // 8 is the full time of the animation 11 is the number of "Frames"
    console.log(frameTime); //check it
    var tl = new TimelineMax(); //new timeline
    tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:90, top:1074}, {left:90, top:1074}, {left:68, top:1074}, {left:40, top:1076},
{left:40, top:1076}, {left:12, top:1079}, {left:-8, top:1081}, {left:-8, top:1081},
{left:-8, top:1081}, {left:-8, top:1081}, {left:-28, top:1081}, {left:-28, top:1081},
{left:-28, top:1081}, {left:-28, top:1081}, {left:-56, top:1081}, {left:-56, top:1081},
]}}).call(reverseItCallElevator3,[tl,childNum]);
                                                    
    tl.play(0);
    flipChild(childNum);
   childWalking(childNum);
    
 
  

    //.call(reverseItCallElevator1,[tl,childNum])
    
    
}

                                            
function reverseItCallElevator3(tl,childNum) { //at the end of walking reverse that shit so he goes back to elevator for more mining!
    tl.pause(); //pause it so it don't move
    var randomWait = Math.floor(Math.random()*(4000-3000+1))+3000; // get a random wait time
    
    setTimeout(function() {
                                            flipChildForward(childNum);
        tl.addCallback(pauseIt,0,[tl]); //this pause is needed otherwise it goes back to css positioning and fucks up the elevator animations
        tl.addCallback(ElevatorPickUp,0,[childNum,1]); //call for the elevator, its always elevator 1 from floor1
        tl.reverse(); //start walking back from out of frame so we can get to those callbacks!
    }, randomWait);
}