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
 