

function childWalking(childNum) {
    if ($(child[childNum].elem).hasClass('childJump')) {
        $(child[childNum].elem).removeClass('childJump');
        $(child[childNum].elem).removeClass('childMine'); 
        $(child[childNum].elem).addClass('childJumpOut');
        setTimeout(function() {
            jumpOutListener(childNum);
        },500);
    } else {
    $(child[childNum].elem).removeClass('childJump');
    $(child[childNum].elem).removeClass('childJumpOut');
        $(child[childNum].elem).removeClass('childMine'); 
        $(child[childNum].elem).addClass('childWalk');
    
    }
}

function childJumpIn(childNum) {
    $(child[childNum].elem).removeClass('childJumpOut');
        $(child[childNum].elem).removeClass('childMine'); 
        $(child[childNum].elem).removeClass('childWalk');
    $(child[childNum].elem).addClass('childJump');
}

function childMine(childNum) {
  $(child[childNum].elem).removeClass('childJumpOut');
        $(child[childNum].elem).removeClass('childWalk');
    $(child[childNum].elem).removeClass('childJump');
     $(child[childNum].elem).addClass('childMine'); 
}




function jumpOutListener(childNum) { //start the walking
  
    $(child[childNum].elem).removeClass("childJumpOut");
    $(child[childNum].elem).addClass("childWalk");
}


 
function flipChild(childNum) {
    
     $(child[childNum].elem).addClass('flipped');   

}

function flipChildForward(childNum) {
     $(child[childNum].elem).removeClass('flipped'); 
}