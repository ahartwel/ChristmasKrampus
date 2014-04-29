function Floor2One(childNum, playPosition, reverse) { //floor one animation one
    var floorY = floor[child[childNum].floor].y;
    var ElevatorElem = elevator[1].elem;
    console.log("Floor2One" + childNum);
  flipChildForward(childNum);
    console.log(childNum);
    child[childNum].floor=2;
    var frameTime = 10; // 8 is the full time of the animation 11 is the number of "Frames"
    console.log(frameTime); //check it
    child[childNum].tl = new TimelineMax({onComplete:Floor2Two, onCompleteParams:[childNum],onReverseComplete:callElevatorFloor, onReverseCompleteParams:[childNum]}); //new timeline
    child[childNum].tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:145, top:932}, {left:153, top:931}, {left:180, top:931}, {left:194, top:932},
{left:194, top:932}, {left:207, top:932}, {left:244, top:931}, {left:267, top:934},
{left:267, top:934}, {left:291, top:937}, {left:299, top:939}, {left:305, top:936},
{left:305, top:936}, {left:311, top:932}, {left:327, top:933}, {left:343, top:931},
{left:343, top:931}, {left:359, top:930}, {left:372, top:925}, {left:380, top:928},
{left:380, top:928}, {left:388, top:931}, {left:390, top:934}, {left:408, top:933},
{left:408, top:933}, {left:426, top:933}, {left:430, top:936}, {left:430, top:936},
]}});
    child[childNum].tl.play(0);
    flipChildForward(childNum);
   childJumpIn(childNum);
    
 if (reverse) {
       child[childNum].tl.call(killIt, [child[childNum].tl,1,childNum], this, .01);
        child[childNum].tl.reverse(0); 
  flipChild(childNum);

 }
  

    //.call(reverseItCallElevator1,[tl,childNum])
    
    
}

                                            
function callElevatorFloor(childNum) {
childWalking(childNum);
 ElevatorPickUp(childNum,1);   
console.log("CallElevatorFloor" + childNum);
}

       
                   
function Floor2Two(childNum, reverse) {
    childWalking(childNum);
  console.log("Floor2Two" + childNum);
    child[childNum].tl = new TimelineMax({onComplete:randomPathFloor2, onCompleteParams:[2,childNum]});
    var frameTime = 8;
    var whichPath = 2;
     flipChildForward(childNum);
    setTimeout(function() {
    child[childNum].tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:430, top:936}, {left:439, top:936}, {left:454, top:940}, {left:467, top:948},
{left:467, top:948}, {left:480, top:957}, {left:487, top:959}, {left:505, top:964},
{left:505, top:964}, {left:522, top:969}, {left:517, top:975}, {left:531, top:973},
{left:531, top:973}, {left:546, top:972}, {left:551, top:969}, {left:554, top:967},
]}});
if (reverse) {
        flipChild(childNum);
   child[childNum].tl.call(killIt, [child[childNum].tl,2,childNum], this, .01);
        child[childNum].tl.reverse(0);    
 }
                                                    }, 600);
                                            
                                           
                                            
}

function randomPathFloor2(whichPath, childNum) {
                   console.log("randPathFloor2" + childNum);                      
   switch(whichPath)
 {
    case 2:
         var randomOne = Math.random();
            if (randomOne<=.5) {
            Floor2Four(childNum);                                
            } else {
          Floor2Three(childNum); 
          }
         break;
    case 4:
         var randomOne2 = Math.random();
            if (randomOne2<=.5) {
             Floor2Six(childNum);
             
            } 
            else{
                Floor2Seven(childNum);
                
            } 
         break;
         
    case 10: 
         var randomOne = Math.random();
            if (randomOne<=.5) {
            Floor2Two(childNum,true);                                
            } else {
          Floor2Three(childNum); 
          }
            
    break;
    case 11: 
    var randomOne2 = Math.random();
             if (randomOne<=.5) {
            Floor2Six(childNum);                                
            } else {
          Floor2Four(childNum,true); 
          }
         break;
         
        case 12:
         var randomOne2 = Math.random();
             if (randomOne<=.5) {
            Floor2Seven(childNum);                                
            } else {
          Floor2Four(childNum,true); 
          }
         break;
         case 13:
         var randomOne2 = Math.random();
             if (randomOne<=.5) {
            Floor2Four(childNum);                                
            } else {
          Floor2Two(childNum,true); 
          }
         
            }
    
         
   }                                        
                                            
    function randomWaitMine(childNum, whichPath) {
         console.log("randomWaitMine" + childNum);
         childMine(childNum);
       var theWait = Math.floor(Math.random()*(10000-4000)+4000);
        console.log("randomWait" + theWait)
        setTimeout(function() {
        switch(whichPath) 
        {
         case 3:
            console.log("randomWait");
            Floor2Three(childNum, true);
               
            flipChild(1);
                break;
        case 6:
            console.log("randomWait");
            Floor2Six(childNum,true);
                break;
        case 7:
          console.log("randomWait");
            Floor2Seven(childNum,true);
                break;
 
        }
        
        
        },theWait);
        
        
        }

function Floor2Three(childNum,reverse) {
     console.log("Floor2Three" + childNum);
          childWalking(childNum);
   child[childNum].tl = new TimelineMax({onComplete:randomWaitMine, onCompleteParams:[childNum,3]});
    var frameTime = 8;
     flipChildForward(childNum);
   setTimeout(function() {
    child[childNum].tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:554, top:967}, {left:560, top:968}, {left:572, top:972}, {left:579, top:972},
{left:579, top:972}, {left:581, top:971}, {left:584, top:970}, {left:596, top:967},
{left:596, top:967}, {left:598, top:966}, {left:592, top:1011}, {left:628, top:1005},
{left:628, top:1005}, {left:633, top:1005}, {left:637, top:1006}, {left:646, top:1005},
{left:646, top:1005}, {left:655, top:1005}, {left:656, top:1007}, {left:670, top:1007},
{left:670, top:1007}, {left:685, top:1006}, {left:694, top:1003}, {left:702, top:1003},
{left:702, top:1003}, {left:711, top:1003}, {left:714, top:1001}, {left:714, top:1001},
]}});
        child[childNum].tl.play(0);
         if (reverse) {
        flipChild(childNum);
        child[childNum].tl.call(killIt, [child[childNum].tl,3,childNum], this, .01);
        child[childNum].tl.reverse(0);   
          
  tl.reverse(0);   
 }
        
        },50);                             
                                                
                                            
}
      
function Floor2Four(childNum,reverse) {
    console.log("Floor2Four" + childNum);
          childWalking(childNum);
        console.log("four");
   child[childNum].tl = new TimelineMax({onComplete:randomPathFloor2, onCompleteParams:[4,childNum]});
         flipChildForward(childNum);
    var frameTime = 8;
   setTimeout(function() {
    child[childNum].tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:554, top:967}, {left:554, top:967}, {left:572, top:961}, {left:594, top:941},
{left:594, top:941}, {left:608, top:928}, {left:621, top:918}, {left:636, top:918},
]}});
              child[childNum].tl.play(0);                                      
        if (reverse) {
            flipChild(childNum);
  child[childNum].tl.call(killIt, [child[childNum].tl,4,childNum], this, .01);
        child[childNum].tl.reverse(0);         
 }
                                                    
                                                   },50);                           
                                                
                                            
}

                                                    
   

              
function Floor2Six(childNum,reverse) {
        childWalking(childNum);
         console.log("Floor2Six" + childNum);
        var tl = new TimelineMax({onComplete:randomWaitMine, onCompleteParams:[childNum,6]});
     flipChildForward(childNum);
        var frameTime = 8;
        tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:636, top:918}, {left:636, top:918}, {left:647, top:918}, {left:669, top:918},
{left:669, top:918}, {left:691, top:917}, {left:707, top:917}, {left:729, top:918},
{left:729, top:918}, {left:751, top:918}, {left:760, top:919}, {left:782, top:919},
{left:782, top:919}, {left:804, top:919}, {left:806, top:918}, {left:806, top:918},
]}});
            tl.play(0);
                                                        
 if (reverse) {
            flipChild(childNum);
 tl.call(killIt, [tl,6,childNum], this, .01);
        tl.reverse(0);        
 }
        
        
        }


function Floor2Seven(childNum,reverse) {
          childWalking(childNum);
            
        console.log("Floor2Seven" + childNum);
    var tl = new TimelineMax({onComplete:randomWaitMine, onCompleteParams:[childNum,7]});
    var frameTime = 8;
    tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:633, top:918}, {left:633, top:918}, {left:622, top:919}, {left:585, top:910},
{left:585, top:910}, {left:548, top:901}, {left:537, top:897}, {left:524, top:895},
{left:524, top:895}, {left:511, top:893}, {left:486, top:885}, {left:486, top:885},
{left:486, top:885}, {left:486, top:885}, {left:498, top:886}, {left:508, top:880},
{left:508, top:880}, {left:518, top:874}, {left:519, top:870}, {left:519, top:870},
{left:519, top:870}, {left:519, top:870}, {left:499, top:870}, {left:499, top:870},
{left:499, top:870}, {left:499, top:870}, {left:504, top:868}, {left:504, top:852},
{left:504, top:852}, {left:504, top:835}, {left:503, top:829}, {left:490, top:831},
{left:490, top:831}, {left:478, top:833}, {left:457, top:837}, {left:447, top:834},
{left:447, top:834}, {left:438, top:830}, {left:434, top:831}, {left:434, top:831},
]}});
  flipChild(childNum); 
        tl.play(0);
 if (reverse) {
  tl.call(killIt, [tl,7,childNum], this, .01);
        tl.reverse(0); 
     flipChildForward(childNum);
 }
                                                
                                            
}
 
          
          
          
          
function Floor4One(childNum, playPosition, reverse) { //floor one animation one
 
    console.log(childNum);
    child[childNum].floor=4;
    var frameTime = 10; // 8 is the full time of the animation 11 is the number of "Frames"
    console.log(frameTime); //check it
    var tl = new TimelineMax({onComplete:randomPathFloor4, onCompleteParams:[2,childNum]}); //new timeline
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

   function Floor4Three(childNum,reverse) {
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
        flipChild(childNum);
        tl.call(killItFour, [tl,3,childNum], this, .01);
        tl.reverse(0);   
          
  tl.reverse(0);   
 }
        
        },50);                             
                                                
                                            
}   

   function Floor4Four(childNum,reverse) {
          childWalking(childNum);
       child[childNum].floor=4;
    var tl = new TimelineMax({onComplete:randomPathFloor4, onCompleteParams:[4,childNum]});
    var frameTime = 8;
     flipChild(childNum);
   setTimeout(function() {
    tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:602, top:1316}, {left:602, top:1316}, {left:537, top:1282}, {left:527, top:1273},
{left:527, top:1273}, {left:517, top:1264}, {left:483, top:1234}, {left:466, top:1230},
{left:466, top:1230}, {left:450, top:1225}, {left:418, top:1210}, {left:410, top:1205},
{left:410, top:1205}, {left:401, top:1199}, {left:385, top:1185}, {left:384, top:1183},
]}});
        tl.play(0);
         if (reverse) {
        flipChildForward(childNum);
        tl.call(killItFour, [tl,4,childNum], this, .01);
        tl.reverse(0);   
          
  tl.reverse(0);   
 }
        
        },50);                             
                                                
                                            
} 
                                                    
  function Floor4Five(childNum,reverse) {
          childWalking(childNum);
                                                    child[childNum].floor=4;
    var tl = new TimelineMax({onComplete:randomWaitMine4, onCompleteParams:[childNum,5]});
    var frameTime = 8;
     flipChild(childNum);
   setTimeout(function() {
    tl.to(child[childNum].elem, frameTime, {bezier:{type:'cubic', values:[
{left:382, top:1182}, {left:382, top:1182}, {left:269, top:1190}, {left:265, top:1189},
{left:265, top:1189}, {left:261, top:1188}, {left:261, top:1188}, {left:261, top:1188},
]}});
        tl.play(0);
         if (reverse) {
        flipChildForward(childNum);
        tl.call(killItFour, [tl,5,childNum], this, .01);
        tl.reverse(0);   
          

 }
        
        },50);                             
                                                
                                            
}
       

  function Floor4Six(childNum,reverse) {
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
        flipChild(childNum);
        tl.call(killItFour, [tl,6,childNum], this, .01);
        tl.reverse(0);   
          
  tl.reverse(0);   
 }
        
        },50);                             
                                                
                                            
}






function randomWaitMine4(childNum, whichPath) {
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

function randomPathFloor4(whichPath, childNum) {
                                        
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
function killItFour(tl, whatFloor,childNum) {

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
    Floor2One(childNum,1,true);
            break;
    case 1:
    tl.pause();
    tl.kill();
    ElevatorPickUp(childNum,1);
    childWalking(childNum);
}
}
                                            
                                            
                                            
                                            
                                                  
                                            