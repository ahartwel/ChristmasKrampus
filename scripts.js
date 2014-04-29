         var truck = new Object();
        var child = new Array();
        var elevator = new Array();
        elevator[1] = new Object();
        elevator[2] = new Object();
        var cartInUse = false;
        var whoInCart = 0;
        var floor = new Array();
        floor[1] = new Object();
        floor[2] = new Object();
        floor[3] = new Object();
        floor[4] = new Object();
        floor[5] = new Object();
        floor[6] = new Object();
        floor[7] = new Object();
    $(".children").each(function() {
         child[childLength]=new Object();
     });
  elevator[1].state=false;
    elevator[2].state=false;

        var childLength= 0;
        var tl = new Array();
        var floorsLength = 7;
var numOfClouds = 0;

    $( document ).ready(function() {
       
        setup();
        cloudsStart();
        truckTimetoLeave();
        truckTimetoEnter();
        
        setTimeout(function() {
            Floor2One(0);
            Floor1One(1);
            Floor2One(2);
            Floor2One(3);
            Floor3One(4);
            Floor4One(5);
            Floor5One(6);
            Floor2Two(7);
            Floor2Four(8);
            Floor4Five(9);
            Floor7One(10);
            Floor7One(11);
        },500);
        
        setInterval(function() {
           var countThoseDays = countdown( new Date(2014, 11, 25) ).toString();
           
            document.getElementById("count").innerHTML=countThoseDays;
        }, 1000);
        
       
        
    });





function setup() {
    //set up truck
    var truckevent = $("#truck")[0];
    truckevent.addEventListener("webkitAnimationIteration", trucklistener , false);
    truck.animating = false;
    var cloudsevent = new Array();
    
        cloudsevent[0] = $(this)[0];
        cloudsevent[0].addEventListener("webkitAnimationEnd", cloudlistener0 , false);
    
   
    
     $(".children").each(function() {
         child[childLength]=new Object();
         child[childLength].elem=this;
         child[childLength].state="cartIn";
         child[childLength].floor=2;
         child[childLength].elevatorNum=0;
         child[childLength].cart=false;
         childLength++;
     });
    childLength--;
    
    elevator[1].state="idle";
    elevator[2].state="idle";
    elevator[1].elem=$("#elevator1");
    elevator[2].elem=$("#elevator2");
    elevator[1].xpos=110;
    elevator[2].xpos=765;
    
    
    floor[1].y=733;
    floor[2].y=862;
    floor[3].y=1005;
    floor[4].y=1248;
    floor[5].y=1078;
    floor[6].y=1108;
    floor[7].y=1232;
    
    floor[1].side="left";
    floor[2].side="right";
    floor[3].side="left";
    floor[4].side="right";
    floor[5].side="right";
    floor[6].side="left";
    floor[7].side="right";
    
  
   
}

//clouds
function cloudsStart() {
    $( "#clouds img" ).each(function() {
       var id = $(this);
        cloudStarterTimer(id); 
      });
}

function eachCloudTimer(id) {
     var moveto = randomYValue();
        
        $( id ).css('top', moveto + "px");
       $( id ).addClass("cloudanimate"); 
       $( id ).removeClass("invisible");
}



function randomYValue() {
 var yVal = 150*Math.random();   
return yVal;
}

function cloudStarterTimer(idd) {
 var cloudtimer = Math.random();   
 cloudtimer = 50000*cloudtimer+1500;
    setTimeout(function() {
         eachCloudTimer(idd);
        setTimeout(function() {
            cloudreturn(idd);
        }, 42000);
    }, cloudtimer);
}

function cloudreturn(id) {
     $( id ).removeClass("cloudanimate"); 
       $( id ).addClass("invisible");
    
     var el      = id,
         newone  = el.clone(true);
    
    el.before(newone);
    
    $(id).remove();
    
    
     var moveto = randomYValue();
       
        $( newone ).css('top', moveto + "px");
        cloudStarterTimer(newone);
    
}

function cloudlistener0(e) { //listen for the truck being gone and for the truck pulling in
  var whichcloud = $(this);
    eachCloudTimer(whichcloud);
}


//truckstart
//truck start
//truck start
//truck leaving

function truckTimetoLeave() {  //set up the timer to check if it can leave
    var timer = Math.random();
    timer = 20000*timer + 2000;
    
    setTimeout(function() {
     truckLeave();   
    },timer);
    
}

function truckLeave() {  //see if the truck is currently being animated and if not send it off
    
 if    (truck.animating==true) {
  truckTimetoLeave();   
 } else {
     truckAnimate();
     truckTimetoLeave();  
 }
    
}

function truckAnimate() { //add classes for animation and create event listener
  $("#truck").addClass("truck");
  $("#truckimg").addClass("truckturn");
    $("#truckimg").addClass("truckimgout");
  $("#truck").removeClass("invisible");
    $("#door").addClass("doorup");
    truck.animating=true;
    
}


//truck entering 

function truckTimetoEnter() {  //set up the timer to check if it can leave
    var timerin = Math.random()
    timerin = 20000*timerin + 2000;
    
    setTimeout(function() {
     truckEnter();   
    },timerin);
    
}

function truckEnter() {  //see if the truck is currently being animated and if not send it off
    
 if    (truck.animating==true) {
  truckTimetoEnter();   
 } else {
     truckAnimateIn();
     truckTimetoEnter();
 }
    
}

function truckAnimateIn() { //add classes for animation and create event listener
   
  $("#truck").addClass("truckin");
    $("#truckimg").addClass("truckimgin");
  $("#truckimg").addClass("truckturnin");
  $("#truck").removeClass("invisible");
    $("#door").addClass("doorup");
    truck.animating=true;
   
}

function trucklistener(e) { //listen for the truck being gone and for the truck pulling in
   switch(e.type)
   {
    case "webkitAnimationIteration":
           $("#door").removeClass("doorup");
          
     $("#truck").removeClass("truck");
    $("#truck").removeClass("truckin");
  $("#truckimg").removeClass("truckturn");
           $("#truckimg").removeClass("truckturnin");
             $("#truckimg").removeClass("truckimgout");
           $("#truckimg").removeClass("truckimgin");
  $("#truck").addClass("invisible");
           
           truck.animating=false;
    
   }
}