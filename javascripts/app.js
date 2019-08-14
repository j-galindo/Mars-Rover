// Rover Object Goes Here
// ======================

// ======================
let rover = {
  direction:"E",
  x:0,
  y:0,
  travelLog:[]
};

function turnLeft(rover){
 console.log("turnLeft was called!");
 switch(rover.direction){
   case "N": 
     rover.direction = "W"
     console.log(rover);
     break;
   case "S":
     rover.direction = "E"
     console.log(rover);
     break;
   case "W":
     rover.direction = "S"
     console.log(rover);
     break;
   case "E":
     rover.direction = "N"
     console.log(rover);
     break;
 }
}
function turnRight(rover){
 console.log("turnRight was called!");
 switch(rover.direction){
   case "N": 
     rover.direction = "E"
     console.log(rover);
     break;
   case "S":
     rover.direction = "W"
     console.log(rover);
     break;
   case "W":
     rover.direction = "N"
     console.log(rover);
     break;
   case "E":
     rover.direction = "S"
     console.log(rover);
     break;
 }
}

function moveForward(rover){
 console.log("moveForward was called")
 if (rover.direction === "W"){
   rover.x-=1;
   console.log(rover.x);
   console.log(rover.y);
 } 
 else if (rover.direction === "N"){
   rover.y-=1;
   console.log(rover.x);
   console.log(rover.y);
 }
 else if (rover.direction === "S"){
   rover.y+=1; 
   console.log(rover.x);
   console.log(rover.y);
} else {
 rover.x+=1;
 console.log(rover.x);
 console.log(rover.y);
 }

 rover.travelLog.push([rover.x,rover.y]);
 console.log(rover.travelLog)

}

function command(commands,rover){
 for (i=0; i<commands.length; i++){
   switch (commands[i]){
     case "r" :
     turnRight(rover);
     break;
   }
   switch (commands[i]){
     case "f" :
     moveForward(rover);
     break;
   }
   switch (commands[i]){
     case "l" :
     turnLeft(rover);
     break;
   }
 }
}

command("rlfrf",rover);