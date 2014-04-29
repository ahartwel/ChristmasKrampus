
    
    function Floor5One(childNum) { //floor one animation one
    child[childNum].floor=5;
    var frameTime = 6; // 8 is the full time of the animation 11 is the number of "Frames"
    console.log(frameTime); //check it
    var tl = new TimelineMax(); //new timeline
    tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:784, top:1135}, {left:784, top:1135}, {left:792, top:1138}, {left:824, top:1135},
{left:824, top:1135}, {left:856, top:1131}, {left:892, top:1136}, {left:900, top:1135},
{left:900, top:1135}, {left:908, top:1134}, {left:954, top:1139}, {left:974, top:1136},
{left:974, top:1136}, {left:994, top:1134}, {left:1010, top:1129}, {left:1021, top:1138},
{left:1021, top:1138}, {left:1032, top:1147}, {left:1064, top:1138}, {left:1064, top:1138},
]}}).call(reverseItCallElevator5,[tl,childNum]);
    flipChildForward(childNum);
   childWalking(childNum);
    
 
  

    //.call(reverseItCallElevator1,[tl,childNum])
    
    
}

                                            
function reverseItCallElevator5(tl,childNum) { //at the end of walking reverse that shit so he goes back to elevator for more mining!
    tl.pause(); //pause it so it don't move
    var randomWait = Math.floor(Math.random()*(4000-3000+1))+3000; // get a random wait time
    
    setTimeout(function() {
        tl.addCallback(pauseIt,0,[tl]); //this pause is needed otherwise it goes back to css positioning and fucks up the elevator animations
        tl.addCallback(ElevatorPickUp,0,[childNum,2]); //call for the elevator, its always elevator 1 from floor1
        tl.reverse(); //start walking back from out of frame so we can get to those callbacks!
    }, randomWait);
}



    
    function Floor7One(childNum) { //floor one animation one
    child[childNum].floor=7;
    var frameTime = 6; // 8 is the full time of the animation 11 is the number of "Frames"
    console.log(frameTime); //check it
    var tl = new TimelineMax(); //new timeline
    tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:784, top:1287}, {left:784, top:1287}, {left:799, top:1290}, {left:817, top:1287},
{left:817, top:1287}, {left:835, top:1284}, {left:883, top:1283}, {left:899, top:1287},
{left:899, top:1287}, {left:915, top:1291}, {left:943, top:1292}, {left:955, top:1288},
{left:955, top:1288}, {left:967, top:1285}, {left:967, top:1285}, {left:967, top:1285},
]}}).call(reverseItCallElevator7,[tl,childNum]);
    flipChildForward(childNum);
   childWalking(childNum);
    
 
  

    //.call(reverseItCallElevator1,[tl,childNum])
    
    
}

                                            
function reverseItCallElevator7(tl,childNum) { //at the end of walking reverse that shit so he goes back to elevator for more mining!
    tl.pause(); //pause it so it don't move
     childMine(childNum);
    var randomWait = Math.floor(Math.random()*(4000-3000+1))+3000; // get a random wait time
    
    setTimeout(function() {
        tl.addCallback(pauseIt,0,[tl]); //this pause is needed otherwise it goes back to css positioning and fucks up the elevator animations
        tl.addCallback(ElevatorPickUp,0,[childNum,2]); //call for the elevator, its always elevator 1 from floor1
                                            flipChild(childNum);
        tl.reverse(); //start walking back from out of frame so we can get to those callbacks!
        childWalking(childNum);
    }, randomWait);
}