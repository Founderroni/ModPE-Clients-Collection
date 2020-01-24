/*BersMagePE Hack Client*/



/*BersMagePE Hack Client*/

/* Gonna have fun with that :))) */



function removeAll(){
ModPE.log("BMPE: Hack deactivated");
 hack = 0;
  clientMessage("> BersMagePE deactivated.");

// Entity.setHealth(p,20);

ModPE.resetFov();
ModPE.setGameSpeed(20);
Player.setCanFly(false);

jumpfix = 0;

var GUI;

speed = 0;
spam = 0;
behind = 0;
ui = 0;
particle = 0;
tp = 0;
fly = 0;
hp = 0;
step = 0;
nofall = 0;
dig = 0;
glide = 0;
pano = 0;
jump = 0;
place = 0;
jesus = 0;
behind = 0;
rich = 0;
tnt = 0;
xray = 0;
spam = 0;
assault = 0;
ss = 20;
mount = 0;
climb = 0;
slide = 0;
    
}


hack = 0;

var p;

wait = 0;

var lastx;
var lasty;
var lastz;

repeat = 0;
rd = 0;
ss = 20;

air = 0;
airtime = 0;
deep = 0;
deepten = null;

speed = 0;
particle = 0;
tp = 0;
dig = 0;
fly = 0;
hp = 0;
step = 0;
nofall = 0;
dodge = 0;
glide = 0;
pano = 0;
jump = 0;
place = 0;
jesus = 0;
tnt = 0;
behind = 0;
mount = 0;
climb = 0;
slide = 0;

xray = 0;
spam = 0;
assault = 0;

spamdelay = 0;
schange = 0;

tntdelay = 0;
newdeep = 100;
dc = 10;

print("●▪ BersMagePE activated. ▪●");

ModPE.log("BMPE: Mod activated.");

function chatHook(str){

if(hack==1){

preventDefault();

if(str=="stats" || str=="sta"){
clientMessage(ChatColor.GREEN+"> Enabled Mods:");
if(glide ==1){
       
clientMessage("- Glide enabled");
}

if(nofall==1){
clientMessage("- Nofall enabled");
}

if(xray==1){
clientMessage("- Orefinder enabled");
}

if(assault==1){
clientMessage("- Assault enabled");
}

if(mount==1){
clientMessage("- Mount enabled");
}

if(step==1){
clientMessage("- Step enabled");
}

if(slide==1){
clientMessage("- Slide enabled");
}

if(climb==1){
clientMessage("- Climb enabled");
}

if(jesus==1){
clientMessage("- Jesus enabled");
}

if(speed==1){
clientMessage("- Speed enabled");
}

if(tp==1){
clientMessage("- Teleport enabled");
}

if(spam==1){
clientMessage("- Spam enabled");
}

if(tnt==1){
clientMessage("- TnTRun enabled");
}


if(jump==1){
clientMessage("- Highjump enabled");
}

if(pano==1){
clientMessage("- Panorama enabled");
}

if(place==1){
clientMessage("- Autoplacer enabled");
}

if(behind==1){
clientMessage("- Behind enabled");
}

if(hp==1){
clientMessage("- Health enabled");
}

if(dig==1){
clientMessage("- Digger enabled");
}

if(fly==1){
clientMessage("- Flight enabled");
}

}

if(str=="secret"){
clientMessage(" ");
clientMessage(ChatColor.GREEN+"> BersMagePE Commands:");
clientMessage("- TnTRun | tnt");

}

if(str=="info"){
clientMessage(" ");
clientMessage(ChatColor.GREEN+"> BersMagePE Commands:");
clientMessage("- Glide | gl");
clientMessage("- Teleport | tp");
clientMessage("- Speed | sp");
clientMessage("- Highjump | hj");
clientMessage("- Health | hp (no multiplayer)");
print("▪ Type 'info2' for page 2");
}

if(str=="info2"){
clientMessage(" ");
clientMessage(ChatColor.GREEN+"> BersMagePE Commands:");
clientMessage("- Panorama | pn");
clientMessage("- Flight | fly");
clientMessage("- Nofall | nf");
clientMessage("- Dig | dig");
clientMessage("- Step | st (buggy)");
print("▪ Type 'info3' for page 3");


}

if(str=="info3"){
clientMessage(" ");
clientMessage(ChatColor.GREEN+"> BersMagePE Commands:");
clientMessage("- Autoplacer | ap (no multiplayer)");
clientMessage("- Jesus | js");
clientMessage("- Behind | (soon)");
clientMessage("- Orefinder | xr");
print("▪ Type 'info4' for page 4");

}

if(str=="info4"){
clientMessage(" ");
clientMessage(ChatColor.GREEN+"> BersMagePE Commands:");
clientMessage("- Spam | sa (only multiplayer)");
clientMessage("- Assault | as (no multiplayer)");
clientMessage("- Mount | mt");
clientMessage("- Climb | cm");
print("▪ Type 'info5' for page 5");
}

if(str=="info5"){
clientMessage(" ");
clientMessage(ChatColor.GREEN+"> BersMagePE Commands:");
clientMessage("- Slide | sl");
}


if(str=="teleport" || str == "tp"){
if(tp==0){
tp = 1;
dig = 0;
clientMessage("> Teleport activated.");
    } else {
    tp = 0;
    clientMessage("> Teleport deactivated.");

      }

    }

if(str=="autoplacer" || str == "ap"){
if(place==0){
place = 1;
clientMessage("> Autoplacer activated.");
    } else {
    place = 0;
    clientMessage("> Autoplacer deactivated.");

      }

    }

if(str=="slide" || str == "sl"){
if(slide==0){
slide = 1;
clientMessage("> Slide activated.");
    } else {
    slide = 0;
    clientMessage("> Slide deactivated.");

      }

    }


if(str=="xray" || str == "xr"){
if(xray==0){
xray = 1;

clientMessage("> Orefinder activated.");
hp = 0;
    } else {
    xray = 0;
    clientMessage("> Orefinder deactivated.");

      }

    }

if(str=="assault" || str == "as"){
if(assault==0){
assault = 1;
Item.setMaxDamage(0,1000);
clientMessage("> Assault activated.");
    } else {
    assault = 0;
    Item.setMaxDamage(0,1);
    clientMessage("> Assault deactivated.");

      }

    }

if(str=="tntrun" || str == "tnt"){
if(tnt==0){
tnt = 1;
clientMessage("> TnTRun activated.");
    } else {
    tnt = 0;
    clientMessage("> TnTRun deactivated.");

      }

    }

if(str=="climb" || str == "cm"){
if(climb==0){
climb = 1;
clientMessage("> Climb activated.");
    } else {
    climb = 0;
    clientMessage("> Climb deactivated.");

      }

    }

if(str=="mount" || str == "mt"){
if(mount==0){
mount = 1;
clientMessage("> Mount activated.");
    } else {
    mount = 0;
    clientMessage("> Mount deactivated.");

      }

    }

if(str=="behind" || str == "bh"){
if(place==0){
behind = 1;
clientMessage("> Behind activated.");
    } else {
    behind = 0;
    clientMessage("> Behind deactivated.");

      }

    }

if(str=="jesus" || str == "js"){
if(jesus==0){
jesus = 1;
clientMessage("> Jesus activated.");
    } else {
    jesus = 0;
    clientMessage("> Jesus deactivated.");

      }

    }

if(str=="panorama" || str == "pn"){
if(pano==0){
pano = 1;
clientMessage("> Panorama activated.");
    } else {
    pano = 0;
    clientMessage("> Panorama deactivated.");

      }

    }

if(str=="highjump" || str == "hj"){
if(jump==0){
jump= 1;
clientMessage("> Highjump activated.");
    } else {
    jump = 0;
    clientMessage("> Highjump deactivated.");

      }

    }
if(str=="glide" || str == "gl"){
if(glide==0){
glide= 1;
clientMessage("> Glide activated.");
    } else {
    glide = 0;
    clientMessage("> Glide deactivated.");

      }

    }

if(str=="spam" || str == "sa"){
if(spam==0){
spam= 1;
clientMessage("> Spam activated.");
    } else {
    spam = 0;
    clientMessage("> Spam deactivated.");

      }

    }

if(str=="speed" || str == "sp"){
if(speed==0){
speed = 1;
ss = 50;
clientMessage("> Speed activated.");
ModPE.setFov(110);
ModPE.setGameSpeed(50);
    } else {
    speed = 0;
    ss = 20;
    spamdelay=0;
    clientMessage("> Speed deactivated.");
    ModPE.resetFov();
    ModPE.setGameSpeed(20);
      }

    }

if(str=="flight" || str == "fly"){
if(fly==0){
fly = 1;
clientMessage("> Flight activated.");
Player.setCanFly(true);
    } else {
    fly = 0;
    clientMessage("> Flight deactivated.");
    Player.setCanFly(false);
      }

    }

if(str=="nofall" || str == "nf"){
if(nofall==0){
nofall= 1;
clientMessage("> Nofall activated.");

    } else {
    nofall = 0;
    clientMessage("> Nofall deactivated.");
    
      }

    }

if(str=="step" || str == "st"){
if(step==0){
step = 1;
clientMessage("> Step activated.");

    } else {
    step = 0;
    clientMessage("> Step deactivated.");
    
      }

    }

if(str=="digger" || str == "dig"){
if(dig==0){
dig = 1;
tp = 0;
clientMessage("> Digger activated.");

    } else {
    dig = 0;
    clientMessage("> Digger deactivated.");
    
      }

    }

if(str=="health" || str == "hp"){
if(hp==0){
hp = 1;
xray = 0;
clientMessage("> Health activated.");
    } else {
    hp = 0;
    clientMessage("> Health deactivated.");

      }

    }

}

if(str=="client" || str== "cl"){

if(hack==0){
 hack = 1;
 clientMessage("> BersMagePE activated.");

} else {
   removeAll();
}

}

}


function useItem(x, y, z, itemId, blockId, side)
{
if(wait==0 ){
if(blockId != 54){
if(!( itemId >266 && itemId < 280)){
if(itemId != 256){
if(tp==1){
  Entity.setPosition(p,x,y+4,z);
}

if(dig==1){
  Entity.setPosition(p,x,y-2,z);
}
  }
}
}

}

}

function attackHook(attacker, victim)
{
if(assault==1){
Entity.setHealth(victim,0);
}
if(mount==1){
if(Entity.getEntityTypeId(victim)==63){
Entity.rideAnimal(attacker,victim);
}

}

}

function modTick()
{
if(slide==1){
if(Entity.getVelY(p) > 0.3){
if(jumpfix==0){
jumpfix = 1;
 Entity.setVelX(p, -1 * Math.sin(yaw / 180 * Math.PI));
    Entity.setVelZ(p, 1 * Math.cos(yaw / 180 * Math.PI));
   Entity.setVelY(p,0.8);
  }
}
}


if(spamdelay != ss ){
    spamdelay ++;

} else {
spamdelay = 0;
if(spam==1){
if(schange==0){
schange ++;
Server.sendChat("~ S P A M by B E R S M A G E PE ~");
} else if(schange==1){
schange ++;
Server.sendChat("~ S P A M is F U N ~");

}else if(schange==2){

schange ++;
Server.sendChat("~ Y O U can't do A N Y T H I N G ~");
} else if(schange==3){
schange ++;
Server.sendChat("~ C H A T to B I G ? ~");

} else if(schange==4){
schange ++;
Server.sendChat("~ W E L L not my P R O B L E M ~");

} else if(schange==5){
schange = 0;
Server.sendChat("~ I T  W I L L loop F O R E V E R ~");

}

  }

}

if(deep != 50){
deep ++;
newdeep = deep*2;
} else {
deep = 0;
}



if(xray==1){
ModPE.showTipMessage(ChatColor.GREEN+"               Locating - State: "+ChatColor.WHITE+newdeep+ "% searched...");
}

if(tntdelay != 30){
 tntdelay++;
} else {

  tntdelay = 0;
  if(tnt==1){
   Level.spawnMob(px,py-1,pz,65,"creeper");
  }

}


pitch = Entity.getPitch(p);
yaw = Entity.getYaw(p);

px = Entity.getX(p);
py = Entity.getY(p);
pz = Entity.getZ(p);

if(xray==1){

if(Level.getTile(px,py-deep,pz)== 14){
clientMessage(ChatColor.BLUE+"Locator:"+ChatColor.WHITE+" GOLD found.");
}

if(Level.getTile(px,py-deep,pz)== 15){
clientMessage(ChatColor.BLUE+"Locator:"+ChatColor.WHITE+" IRON found.");
}

if(Level.getTile(px,py-deep,pz)== 16){
clientMessage(ChatColor.BLUE+"Locator:"+ChatColor.WHITE+ " COAL found.");
}

if(Level.getTile(px,py-deep,pz)== 73){
clientMessage(ChatColor.BLUE+"Locator:"+ChatColor.WHITE+" REDSTONE found.");
}

if(Level.getTile(px,py-deep,pz)== 56){
clientMessage(ChatColor.BLUE+"Locator:"+ChatColor.WHITE+" DIAMOND found.");
}

}

if(jesus==1){
   if(Level.getTile(px,py-2,pz)==8 || Level.getTile(px,py-2,pz)==9){
Entity.setVelY(p,0.01);

}


if(Level.getTile(px,py-1,pz)==8 || Level.getTile(px,py-1,pz)==9){
Entity.setPosition(p,px,py+2,pz);
}


}

if(place==1){
 if(Level.getTile(px,py-2,pz)==0){
  Level.setTile(px,py-2,pz,5);
 }
}

if(Level.getTile(px,py-2,pz)!=0){
   jumpfix = 0;
}

if(jump==1){


 
  
   if(Entity.getVelY(p)> 0.3){

  if(jumpfix==0){
  jumpfix = 1;
   Entity.setVelY(p,1);
   }
   
}

}


if(pano==1){
  Entity.setRot(p,yaw+0.7,pitch);
}

if(glide==1){
  
   if(Level.getTile(px,py-2,pz)==0){
    if(Level.getTile(px,py-3,pz)==0){
      
   Entity.setVelY(p,0.00000000000000000000000001);

Entity.setVelY(p,-0.1);
   }
  }

}

if(Level.getTile(px,py-2,pz) != 0){


lastx = px;
lasty = py+1;
lastz = pz;
}

if(nofall==1){
  if(Entity.getVelY(p) < -0.6){

   Entity.setPosition(p,lastx,lasty+1,lastz);
   Entity.setVelY(p,0.0);

}
}

if(step==1){
   


   if(Level.getTile(px+1,py-1,pz) != 0){
   if(Level.getTile(px+1,py-1,pz) != 31){
    if(Level.getTile(px+1,py-1,pz) != 171){
       Entity.setPosition(p,px+1,py+1,pz);
}
}
   }

  if(Level.getTile(px-1,py-1,pz) != 0){
 if(Level.getTile(px-1,py-1,pz) != 31){
if(Level.getTile(px-1,py-1,pz) != 171){
       Entity.setPosition(p,px-1,py+1,pz);
}
}
   }

if(Level.getTile(px,py-1,pz+1) != 0){
if(Level.getTile(px,py-1,pz+1) != 31){
if(Level.getTile(px,py-1,pz+1) != 171){
       Entity.setPosition(p,px,py+1,pz+1);
}
}
   }

if(Level.getTile(px,py-1,pz-1) != 0){
if(Level.getTile(px,py-1,pz-1) != 31){
if(Level.getTile(px,py-1,pz-1) !=171 ){
       Entity.setPosition(p,px,py+1,pz-1);
}
   }
}


}

// Climb

if(climb==1){
   


   if(Level.getTile(px+1,py-1,pz) != 0){
   if(Level.getTile(px+1,py-1,pz) != 31){
    if(Level.getTile(px+1,py-1,pz) != 171){
       Entity.setVelY(p,0.5);
}
}
   }

  if(Level.getTile(px-1,py-1,pz) != 0){
 if(Level.getTile(px-1,py-1,pz) != 31){
if(Level.getTile(px-1,py-1,pz) != 171){
       Entity.setVelY(p,0.5);
}
}
   }

if(Level.getTile(px,py-1,pz+1) != 0){
if(Level.getTile(px,py-1,pz+1) != 31){
if(Level.getTile(px,py-1,pz+1) != 171){
       Entity.setVelY(p,0.5);
}
}
   }

if(Level.getTile(px,py-1,pz-1) != 0){
if(Level.getTile(px,py-1,pz-1) != 31){
if(Level.getTile(px,py-1,pz-1) !=171 ){
       Entity.setVelY(p,0.5);
}
   }
}


}

if(wait != 0){
wait = wait - 1;
}

if(pitch==90){
//wait = 100;
}

if(pitch==-90){
   if(hack==1){

}

}

if(hp==1){
  
  ModPE.showTipMessage(ChatColor.GOLD+"Enemy HP: "+ ChatColor.WHITE+Entity.getHealth(Player.getPointedEntity()));

}

}

function procCmd(command)
{
var cmd = command.split(" ");

}

function newLevel()
{
p = getPlayerEnt();

Entity.setCape(p,"obsidian");

print("[BersMagePE]  This client is made for multiplayer.");

}

function leaveGame()
{
print("[BMPE] Thanks for using my client :)");

}

