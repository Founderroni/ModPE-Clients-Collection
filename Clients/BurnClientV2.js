//GUI STUFF

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
var Button = android.widget.Button;
var LinearLayout = android.widget.LinearLayout;
var RelativeLayout = android.widget.RelativeLayout;
var PopupWindow = android.widget.PopupWindow;
var ScrollView = android.widget.ScrollView;
var TextView = android.widget.TextView;
var CheckBox = android.widget.CheckBox;
var Switch = android.widget.Switch;
var Toast = android.widget.Toast;
var Runnable = java.lang.Runnable;
var View = android.view.View;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var Gravity = android.view.Gravity;
var Intent = android.content.Intent;
var Uri = android.net.Uri; 

//Some Variables
var timee = 25;
var playerDir = [0, 0, 0];
var numbers = android.text.InputType.TYPE_CLASS_NUMBER;
var number = android.text.InputType.TYPE_NUMBER_FLAG_SIGNED;
var mobDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var glidemotion = -0.000000000001;

//utils by godsoft
var Utils = {
	        
            Block: {
                 isLiquid: function(id) {
			if(id >= 8 && id <= 11) return true;
			return false;
		         }
            },
            Velocity: {
			calculateSpeed: function() {
				return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2));
				}
			},
            Player: {
                isInWater: function() {
			if(Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            } else {
			return false;
			   }
		    },
		isBobGround: function() {
			var y = Entity.getY(getPlayerEnt());
			while(y > 1) y -= 1;
			if((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            }
			if((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            } else {
			return false;
			  }
		    },
                isOnGround: function() {
			var y = Entity.getY(getPlayerEnt());
			while(y > 1) y -= 1;
			if((Math.round(y * 100) >= 61 && Math.round(y * 100) <= 63) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            }
			if((Math.round(y * 100) >= 11 && Math.round(y * 100) <= 13) && getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())) != 0 && !Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            } else {
			return false;
			  }
		    },
            isCollidedHorizontally: function() {
			var x = Entity.getX(getPlayerEnt());
			var z = Entity.getZ(getPlayerEnt());
			var blockX = Math.round(x - 0.5);
			var blockZ = Math.round(z - 0.5);
			while(x < 1) x += 1;
			while(z < 1) z += 1;
			while(x > 1) x -= 1;
			while(z > 1) z -= 1;

			if(Math.round(x * 100) == 31) x -= 0.01;
			if(Math.round(z * 100) == 31) z -= 0.01;
			if(Math.round(x * 100) == 69) x += 0.01;
			if(Math.round(z * 100) == 69) z += 0.01;
			if(Math.round(x * 100) == 30) blockX--;
			if(Math.round(z * 100) == 30) blockZ--;
			if(Math.round(x * 100) == 70) blockX++;
			if(Math.round(z * 100) == 70) blockZ++;
			//clientMessage(blockX+";"+blockZ);
			if(getTile(blockX, Entity.getY(getPlayerEnt()), blockZ) == 0 && getTile(blockX, Entity.getY(getPlayerEnt()) - 1, blockZ) == 0) return false;

			if(Block.getDestroyTime(getTile(blockX, Entity.getY(getPlayerEnt()) - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, Entity.getY(getPlayerEnt()), blockZ)) <= 0.1) return false;

			if(Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
			if(Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
			return false;
		}
	}
};

//BACKGROUND STUFF

var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.BLUE); //ButtonBGColor
bg.setStroke(4, android.graphics.Color.CYAN); //ButtonStroke
bg.setCornerRadius(2); //ButtonCornerRadius

var xbg = new android.graphics.drawable.GradientDrawable();
xbg.setColor(android.graphics.Color.BLUE); //XButtonBGColor
xbg.setStroke(4, android.graphics.Color.CYAN); //XButtonStroke
xbg.setCornerRadius(2); //XButtonCornerRadius

//MORE GUI + VARIABLES
function newLevel()
{
clientMessage("§4Burn§4V2 §4By Ayhan and Affan");
clientMessage("§4Thanks For Using BurnClient");
clientMessage("§4This Client Was Made By Ayhan and Affan!");
clientMessage( ChatColor.BLUE + "SYSTEM:Welcome "+ ChatColor.GREEN + Player.getName(Player.getEntity()) + ChatColor.YELLOW + " Your Using Burn Client");
ModPE.showTipMessage('§4HAVE FUN USING BURN CLIENT!!!!')
}
ModPE.log(4)
ModPE.langEdit("menu.copyright","§4Burn Client§4V1");
ModPE.langEdit("menu.play","§4Burn");

var GUI;
var menu;
var exitUI;

//YOUR CLIENT INFORMATION

var VERSION = " [B1]";
var NAME = "Burn Hack Client";
var DEVELOPERS = "Ayhan and Affan";
var cBtn = "Burn"

var jetpacks
var jetpackss = false;
var jetpacked = false;

var ghosts
var ghostss = false;
var ghosted = false;

var autowalks
var autowalkss = false;
var autowalked = false;

var autoreachs;
var autoreachss = false;
var autoreached = false;

var autowalk1s
var autowalk1ss = false;
var autowalk1ed = false;

var tapjumps;
var tapjumpss = false;
var tapjumped = false;

var bhps;
var bhped = false;
var bhpss = false;

var airjumpcounter = 0;
var grapples
var grappless = false;
var grappleed = false;



var elevators
var elevatored = false;

var esps;
var espss = false;
var esped = false;

var dolphins
var dolphinss = false;
var dolphined = false;

var jumpbtns;
var jumpbtned = false;
var jumpbtnss = false;

var towers;
var towered = false;
var towerss = false;

var tawrs;
var tawred = false;
var tawrss = false;

var rchs;
var rched = false;
var rchss = false;

var crosshairs
var crosshairss = false;
var crosshaired = false;

var speedtick = 0;
var bstspeeds;
var bstspeedss = false;
var bstspeeded = false;

var flys;
var flyed = false;
var flyss = false;

var taptps;
var taptpss = false;
var taptped = false;

var ndgs;
var ndgss = false;
var ndged = false;

var noknocks;
var noknockss = false;
var noknocked = false;

var safewlks;
var safewlked = false;
var safewlkss = false;


var noknocks;
var noknockss = false;
var noknocked = false;

var tpaurs;
var tpaurss = false;
var tpaured = false;

var csteps
var cstepss = false;
var csteped = false;

var sps;
var sped = false;
var spss = false;

var driftcounter = 0;
var grapple1s
var grapple1ss = false;
var grapple1ed = false;

var crouchtps;
var crouchtpss = false;
var crouchtped = false;

var aim
var aimbotss = false;
var aimed = false;

var speeds
var speedss = false;
var speeded = false;

var switchaims
var switchaimed = false;
var saimed = false;

var switchrchs;
var switchrched = false;
var switchrchss = false;

var cspeeds
var cspeedss = false;
var cspeeded = false;

var jke
var jkes = false;
var jkeed = false;

function tmiD(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
var txtId = android.widget.TextView(ctx);
txtId.setText(" Item Id:");
txtId.setTextSize(12);
var txtAmount = android.widget.TextView(ctx);
txtAmount.setText(" Item Amount:");
txtAmount.setTextSize(12);
var txtData = android.widget.TextView(ctx);
txtData.setText(" Item Data:");
txtData.setTextSize(12);
var tmiLayout = new android.widget.LinearLayout(ctx);
var tmiLayout1 = new android.widget.LinearLayout(ctx);
var tmiScroll = android.widget.ScrollView(ctx);
tmiScroll.addView(tmiLayout);
tmiLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
tmiLayout1.addView(tmiScroll);
var tmi = android.widget.Button(ctx);
var id = new android.widget.EditText(ctx);
var amount = new android.widget.EditText(ctx);
var data = new android.widget.EditText(ctx);
var add = new android.widget.Button(ctx);
var cancel = new android.widget.Button(ctx);
 tmi.setText("TooManyItems"); 
var tmiDialog = new android.app.Dialog(ctx);
tmiDialog.setContentView(tmiLayout1);
tmiDialog.setTitle("TooManyItems");
tmiLayout.setGravity(android.view.Gravity.CENTER);
cancel.setText("Cancel");
   add.setText("Add");
id.setHint("Item ID");
id.setText("1");
amount.setHint("Amount");
amount.setText("1")
data.setHint("Data/Damage");
data.setText("0");
id.setInputType(numbers);
amount.setInputType(numbers);
data.setInputType(numbers);
var fullstack = android.widget.Button(ctx);
var currAmount = amount.getText()==1;
fullstack.setText(currAmount?"Fullstack":"One");

tmiDialog.show();
tmiLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
//tmiLayout1.setPadding(25);
tmiLayout.addView(txtId);
tmiLayout.addView(id);
tmiLayout.addView(txtAmount);
tmiLayout.addView(amount);
tmiLayout.addView(txtData);
tmiLayout.addView(data);
tmiLayout.addView(fullstack);
tmiLayout.addView(add);
tmiLayout.addView(cancel);

fullstack.setOnClickListener(new android.view.View.OnClickListener(){
onClick: function(viewarg){
currAmount = !currAmount;
amount.setText(currAmount?"1":"64");
fullstack.setText(currAmount?"Fullstack":"One");
}});

 add.setOnClickListener(new android.view.View.OnClickListener(){

onClick: function(viewarg){

var itemId = parseInt(id.getText());
var iAmount = parseInt(amount.getText());
var iData = parseInt(data.getText());

if(itemId == null){

itemId = "1";

}

if(iData == null){

iData = "0";

}

Player.addItemInventory(itemId, iAmount, iData);

if(Level.getGameMode() == 1){



}

tmiDialog.dismiss();





}

});
cancel.setOnClickListener (new android.view.View.OnClickListener(){
onClick : function(viewarg){

tmiDialog.dismiss();
clientMessage(" ")

}});
}
catch(e) {
print(e);

}}}));
}

function tpD(){
var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
    ctx.runOnUiThread(new java.lang.Runnable({ run: function(){
        try{
var txtX = android.widget.TextView(ctx);
txtX.setText(" X:");
txtX.setTextSize(12);
var txtY = android.widget.TextView(ctx);
txtY.setText(" Y:");
txtY.setTextSize(12);
var txtZ = android.widget.TextView(ctx);
txtZ.setText(" Z:");
txtZ.setTextSize(12);
var tpLayout = new android.widget.LinearLayout(ctx);
var tpLayout1 = new android.widget.LinearLayout(ctx);
var tpScroll = android.widget.ScrollView(ctx);
tpScroll.addView(tpLayout);
tpLayout1.setOrientation(android.widget.LinearLayout.VERTICAL);
tpLayout1.addView(tpScroll);
var tp = android.widget.Button(ctx);
var x = new android.widget.EditText(ctx);
var y = new android.widget.EditText(ctx);
var z = new android.widget.EditText(ctx);
var cancel = new android.widget.Button(ctx);
 tp.setText("Teleport"); 
var tpDialog = new android.app.Dialog(ctx);
tpDialog.setContentView(tpLayout1);
tpDialog.setTitle("Teleport");
tpLayout.setGravity(android.view.Gravity.CENTER);
cancel.setText("Cancel");
x.setHint("X");
x.setText("0");
y.setHint("Y");
y.setText("0")
z.setHint("Z");
z.setText("0");
x.setInputType(numbers);
y.setInputType(numbers);
z.setInputType(numbers);

tpDialog.show();
tpLayout.setOrientation(android.widget.LinearLayout.VERTICAL);
//tpLayout1.setPadding(25);
tpLayout.addView(txtX);
tpLayout.addView(x);
tpLayout.addView(txtY);
tpLayout.addView(y);
tpLayout.addView(txtZ);
tpLayout.addView(z);
tpLayout.addView(tp);
tpLayout.addView(cancel);

 tp.setOnClickListener(new android.view.View.OnClickListener(){

onClick: function(viewarg){

var itemId = parseInt(x.getText());
var iAmount = parseInt(y.getText());
var iData = parseInt(z.getText());

if(itemId == null){

itemId = "0";

}

if(iData == null){

iData = "0";

}

if(iAmount == null){
	
iAmount = "0";

}

var player = Player.getEntity();
           setPosition(player, itemId, iAmount, iData);

if(Level.getGameMode() == 1){



}

tpDialog.dismiss();





}

});
cancel.setOnClickListener (new android.view.View.OnClickListener(){
onClick : function(viewarg){

tpDialog.dismiss();
clientMessage(" ")

}});
}
catch(e) {
axtoast(e);

}}}));
}

//MODULE VARIABLES



function dip2px(dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);
}
//Button
function showMenuBtn() {
	
ctx.runOnUiThread(new Runnable({ run: function(){
	try{
		var layout = new LinearLayout(ctx);
		layout.setOrientation(1);
		var menuBtn = new Button(ctx);
		menuBtn.setText(cBtn);
		menuBtn.setTextColor(android.graphics.Color.CYAN);
		menuBtn.setBackground(bg);
		menuBtn.getBackground().setAlpha(100);
		menuBtn.setOnClickListener(new View.OnClickListener({
			onClick: function(viewarg){
				mainMenu();
				exit();
                if(GUI != null && GUI.isShowing()) { 
                GUI.dismiss();
                }
			}
		}));
		layout.addView(menuBtn);
		
		GUI = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
		GUI.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
		GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 345, 0);
		}catch(err){
			Toast.makeText(ctx, "An error occured: " + err, 1).show();
		}
	}}));
}
showMenuBtn();

//Menu
function mainMenu(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var menuLayout = new LinearLayout(ctx);
			var menuScroll = new ScrollView(ctx);
			var menuLayout1 = new LinearLayout(ctx);
			menuLayout.setOrientation(1);
			menuLayout.setBackground(bg);
			menuLayout.getBackground().setAlpha(100);
			menuLayout1.setOrientation(1);
			menuScroll.addView(menuLayout);
			menuLayout1.addView(menuScroll);
			
			var name = new TextView(ctx);
			name.setTextSize(20);
			name.setText(NAME+" "+VERSION);
			name.setTextColor(android.graphics.Color.CYAN);
			name.setGravity(Gravity.CENTER);
			menuLayout.addView(name);

//HACKS

var tps = new Button(ctx);
      tps.setText("Teleport");
      tps.setTextColor(android.graphics.Color.GREEN);
      tps.setPadding(10, 3, 3, 3);
      tps.setTextSize(13);
      tps.setGravity(android.view.Gravity.CENTER);
      tps.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      tpD();
      }
      }));
      menuLayout.addView(tps);
      
      var tmis = new Button(ctx);
      tmis.setText("Too Many Items");
      tmis.setTextColor(android.graphics.Color.GREEN);
      tmis.setPadding(10, 3, 3, 3);
      tmis.setTextSize(13);
      tmis.setGravity(android.view.Gravity.CENTER);
      tmis.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      tmiD();
      }
      }));
      menuLayout.addView(tmis);

    var aim = new Switch(ctx);
      aim.setText("AimAura");
      aim.setTextColor(android.graphics.Color.GREEN);
      aim.setPadding(10, 3, 3, 3);
      aim.setTextSize(13);
      aim.setChecked(aimed);
      aim.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!aimed){
      aimbotss = true;
      aimed = true;
      }else{
      aimbotss = false;
      aimed = false;
      }
      aim.setChecked(aimed);
      }
      }));
      menuLayout.addView(aim);
      
      var autoreachs = new Switch(ctx);
      autoreachs.setText("Autoreach");
      autoreachs.setTextColor(android.graphics.Color.GREEN);
      autoreachs.setPadding(10, 3, 3, 3);
      autoreachs.setTextSize(13);
      autoreachs.setChecked(autoreached);
      autoreachs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!autoreached){
      autoreachss = true;
      autoreached = true;
      }else{
      autoreachss = false;
      autoreached = false;
      }
      autoreachs.setChecked(autoreached);
      }
      }));
      menuLayout.addView(autoreachs);
      
      var autowalk1s = new Switch(ctx);
      autowalk1s.setText("hit-AutoWalk");
       autowalk1s.setTextColor(android.graphics.Color.GREEN);
      autowalk1s.setPadding(10, 3, 3, 3);
      autowalk1s.setTextSize(13);
      autowalk1s.setChecked(autowalk1ed);
      autowalk1s.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!autowalk1ed){
      autowalk1ss = true;
      autowalk1ed = true;
      }else{
      autowalk1ss = false;
      autowalk1ed = false;
      }
      autowalk1s.setChecked(autowalk1ed);
      }
      }));
      menuLayout.addView(autowalk1s);
      
      var towers = new Switch(ctx);
      towers.setText("Hitbox");
      towers.setTextColor(android.graphics.Color.GREEN);
      towers.setPadding(10, 3, 3, 3);
      towers.setTextSize(13);
      towers.setChecked(towered);
      towers.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!towerss){
      towered = true;
      towerss = true;
      }else{
      towered = false;
      towerss = false;
      }
      towers.setChecked(towered);
      }
      }));
      menuLayout.addView(towers);
      
      
      
      
      
       var rchs = new Switch(ctx);
      rchs.setText("Reach");
      rchs.setTextColor(android.graphics.Color.GREEN);
      rchs.setPadding(10, 3, 3, 3);
      rchs.setTextSize(13);
      rchs.setChecked(rched);
      rchs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!rchss){
      rched = true;
      rchss = true;
      Level.setGameMode(1);
      Player.setCanFly(0);
      }else{
      rched = false;
      rchss = false;
      Level.setGameMode(0);
      }
      rchs.setChecked(rched);
      }
      }));
      menuLayout.addView(rchs);
      
      var tpaurs = new Switch(ctx);
      tpaurs.setText("TP-Aura");
      tpaurs.setTextColor(android.graphics.Color.GREEN);
      tpaurs.setPadding(10, 3, 3, 3);
      tpaurs.setTextSize(13);
      tpaurs.setChecked(tpaured);
      tpaurs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!tpaured){
      tpaurss = true;
      tpaured = true;
      }else{
      tpaurss = false;
      tpaured = false;
      }
      tpaurs.setChecked(tpaured);
      }
      }));
      menuLayout.addView(tpaurs);
      
        var csteps = new Switch(ctx);
      csteps.setText("CrouchGlide");
      csteps.setTextColor(android.graphics.Color.GREEN);
      csteps.setPadding(10, 3, 3, 3);
      csteps.setTextSize(13);
      csteps.setChecked(csteped);
      csteps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!csteped){
      cstepss = true;
      csteped = true;
      }else{
      cstepss = false;
      csteped = false;
      }
      csteps.setChecked(csteped);
      }
      }));
      menuLayout.addView(csteps); 
      
      var safewlks = new Switch(ctx);
      safewlks.setText("SafeWalk");
      safewlks.setTextColor(android.graphics.Color.GREEN);
      safewlks.setPadding(10, 3, 3, 3);
      safewlks.setTextSize(13);
      safewlks.setChecked(safewlked);
      safewlks.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!safewlkss){
      safewlked = true;
      safewlkss = true;
      }else{
      safewlked = false;
      safewlkss = false;
      }
      safewlks.setChecked(safewlked);
      }
      }));
      menuLayout.addView(safewlks);
      
       var ghosts = new Switch(ctx);
      ghosts.setText("Ghost");
      ghosts.setTextColor(android.graphics.Color.GREEN);
      ghosts.setPadding(10, 3, 3, 3);
      ghosts.setTextSize(13);
      ghosts.setChecked(ghosted);
      ghosts.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!ghosted){
      ghostss = true;
      ghosted = true;
      }else{
      ghostss = false;
      ghosted = false;
      Entity.setCollisionSize(Player.getEntity(), 1, 1)
      }
      ghosts.setChecked(ghosted);
      }
      }));
      menuLayout.addView(ghosts);
      
      
      var tawrs = new Switch(ctx);
      tawrs.setText("Tower");
      tawrs.setTextColor(android.graphics.Color.GREEN);
      tawrs.setPadding(10, 3, 3, 3);
      tawrs.setTextSize(13);
      tawrs.setChecked(tawred);
      tawrs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!tawrss){
      tawred = true;
      tawrss = true;
      }else{
      tawred = false;
      tawrss = false;
      }
      tawrs.setChecked(tawred);
      }
      }));
      menuLayout.addView(tawrs);
      
      var noknocks = new Switch(ctx);
      noknocks.setText("AntiKnockBack");
      noknocks.setTextColor(android.graphics.Color.GREEN);
      noknocks.setPadding(10, 3, 3, 3);
      noknocks.setTextSize(13);
      noknocks.setChecked(noknocked);
      noknocks.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!noknockss){
      noknocked = true;
      noknockss = true;
      }else{
      noknocked = false;
      noknockss = false;
      }
      noknocks.setChecked(noknocked);
      }
      }));
      menuLayout.addView(noknocks);
      
      var grapples = new Switch(ctx);
      grapples.setText("AutoAirJump");
      grapples.setTextColor(android.graphics.Color.GREEN);
      grapples.setPadding(10, 3, 3, 3);
      grapples.setTextSize(13);
      grapples.setChecked(grappleed);
      grapples.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!grappleed){
      grappless = true;
      grappleed = true;
      }else{
      grappless = false;
      grappleed = false;
      }
      grapples.setChecked(grappleed);
      }
      }));
      menuLayout.addView(grapples);
      
      var dolphin = new Switch(ctx);
      dolphin.setText("Water-Hop");
      dolphin.setTextColor(android.graphics.Color.GREEN);
      dolphin.setPadding(10, 3, 3, 3);
      dolphin.setTextSize(13);
      dolphin.setChecked(dolphined);
      dolphin.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!dolphinss){
      dolphined = true;
      dolphinss = true;
      }else{
      dolphined = false;
      dolphinss = false;
      }
      dolphin.setChecked(dolphined);
      }
      }));
      menuLayout.addView(dolphin);
      
       var ndgs = new Switch(ctx);
      ndgs.setText("nodownglide");
      ndgs.setTextColor(android.graphics.Color.GREEN);
      ndgs.setPadding(10, 3, 3, 3);
      ndgs.setTextSize(13);
      ndgs.setChecked(ndged);
      ndgs.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!ndgss){
      ndged = true;
      ndgss = true;
      }else{
      ndged = false;
      ndgss = false;
      }
      ndgs.setChecked(ndged);
      }
      }));
      menuLayout.addView(ndgs);
      
         var taptps = new Switch(ctx);
      taptps.setText("MotionSpeed");
      taptps.setTextColor(android.graphics.Color.GREEN);
      
      taptps.setPadding(10, 3, 3, 3);
      taptps.setTextSize(13);
      taptps.setChecked(taptped);
      taptps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!taptped){
      taptpss = true;
      taptped = true;
      }else{
      taptpss = false;
      taptped = false;
      }
      taptps.setChecked(taptped);
      }
      }));
      menuLayout.addView(taptps);
       
          var tapjumps = new Switch(ctx);
      tapjumps.setText("CrouchTower");
      tapjumps.setTextColor(android.graphics.Color.GREEN);
      tapjumps.setPadding(10, 3, 3, 3);
      tapjumps.setTextSize(13);
      tapjumps.setChecked(tapjumped);
      tapjumps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!tapjumped){
      tapjumpss = true;
      tapjumped = true;
      }else{
      tapjumpss = false;
      tapjumped = false;
      }
      tapjumps.setChecked(tapjumped);
      }
      }));
      menuLayout.addView(tapjumps);
       
       var bstspeeds = new Switch(ctx);
      bstspeeds.setText("BoostSpeed");
      bstspeeds.setTextColor(android.graphics.Color.GREEN);
      bstspeeds.setPadding(10, 3, 3, 3);
      bstspeeds.setTextSize(13);
      bstspeeds.setChecked(bstspeeded);
      bstspeeds.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!bstspeedss){
      bstspeeded = true;
      bstspeedss = true;
      }else{
      bstspeeded = false;
      bstspeedss = false;
      }
      bstspeeds.setChecked(bstspeeded);
      }
      }));
      menuLayout.addView(bstspeeds);
      
      var grapple1s = new Switch(ctx);
      grapple1s.setText("DriftSpeed");
      grapple1s.setTextColor(android.graphics.Color.GREEN);
      grapple1s.setPadding(10, 3, 3, 3);
      grapple1s.setTextSize(13);
      grapple1s.setChecked(grapple1ed);
      grapple1s.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!grapple1ed){
      grapple1ss = true;
      grapple1ed = true;
      }else{
      grapple1ss = false;
      grapple1ed = false;
      }
      grapple1s.setChecked(grapple1ed);
      }
      }));
      menuLayout.addView(grapple1s);
      
     var flys = new Switch(ctx);
      flys.setText("Scaffold");
      flys.setTextColor(android.graphics.Color.GREEN);
      flys.setPadding(10, 3, 3, 3);
      flys.setTextSize(13);
      flys.setChecked(flyed);
      flys.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!flyss){
      flyed = true;
      flyss = true;
      }else{
      flyed = false;
      flyss = false;
      }
      flys.setChecked(flyed);
      }
      }));
      menuLayout.addView(flys);
      
        var sps = new Switch(ctx);
      sps.setText("Spider");
      sps.setTextColor(android.graphics.Color.GREEN);
      sps.setPadding(10, 3, 3, 3);
      sps.setTextSize(13);
      sps.setChecked(sped);
      sps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!spss){
      sped = true;
      spss = true;
      }else{
      sped = false;
      spss = false;
      }
      sps.setChecked(sped);
      }
      }));
      menuLayout.addView(sps);
      
      var bhps = new Switch(ctx);
      bhps.setText("Bhop");
      bhps.setTextColor(android.graphics.Color.GREEN);
      bhps.setPadding(10, 3, 3, 3);
      bhps.setTextSize(13);
      bhps.setChecked(bhped);
      bhps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!bhpss){
      bhped = true;
      bhpss = true;
      }else{
      bhped = false;
      bhpss = false;
      }
      bhps.setChecked(bhped);
      }
      }));
      menuLayout.addView(bhps);
      
      
   
      var crouchtps = new Switch(ctx);
      crouchtps.setText("CrouchTp");
      crouchtps.setTextColor(android.graphics.Color.GREEN);
      crouchtps.setPadding(10, 3, 3, 3);
      crouchtps.setTextSize(13);
      crouchtps.setChecked(crouchtped);
      crouchtps.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!crouchtpss){
      crouchtped = true;
      crouchtpss = true;
      print('cerdit to Dsfg')
      }else{
      crouchtped = false;
      crouchtpss = false;
      }
      crouchtps.setChecked(crouchtped);
      }
      }));
      menuLayout.addView(crouchtps);
      
      var cspeeds = new Switch(ctx);
      cspeeds.setText("Bypass-CrouchTeleport2 [FAST]");
      cspeeds.setTextColor(android.graphics.Color.GREEN);
      cspeeds.setPadding(10, 3, 3, 3);
      cspeeds.setTextSize(13);
      cspeeds.setChecked(cspeeded);
      cspeeds.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!cspeeded){
      cspeedss = true;
      cspeeded = true;
      }else{
      cspeedss = false;
      cspeeded = false;
      }
      cspeeds.setChecked(cspeeded);
      }
      }));
      menuLayout.addView(cspeeds);
      
      var jke = new Switch(ctx)
      jke.setText("AimAura (Water)");
      jke.setTextColor(android.graphics.Color.GREEN);
      jke.setPadding(10, 3, 3, 3);
      jke.setTextSize(13);
      jke.setChecked(jkeed);
      jke.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!jkeed){
      jkes = true;
      jkeed = true;      
      }else{
      jkes = false;
      jkeed = false;
      }
      jke.setChecked(jkeed);
      }
      }));
      menuLayout.addView(jke);
      
      var jetpacks = new Switch(ctx);
      jetpacks.setText("Jetpack");
      jetpacks.setTextColor(android.graphics.Color.GREEN);
      jetpacks.setPadding(10, 3, 3, 3);
      jetpacks.setTextSize(13);
      jetpacks.setChecked(jetpacked);
      jetpacks.setOnCheckedChangeListener(new android.widget.CompoundButton.OnCheckedChangeListener({
      onCheckedChanged: function(){
      if(!jetpacked){
      jetpackss = true;
      jetpacked = true;
      }else{
      jetpackss = false;
      jetpacked = false;
      }
      jetpacks.setChecked(jetpacked);
      }
      }));
      menuLayout.addView(jetpacks);

      menu = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/2, ctx.getWindowManager().getDefaultDisplay().getHeight());
      
      menu.setAnimationStyle(android.R.style.Animation_Toast);
			menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.TOP, 0, 0);
			}catch(error){
				Toast.makeText(ctx, "Error: " + error, 1).show();
			}
	}}));
}
//EXIT BUTTON
function exit(){
	ctx.runOnUiThread(new Runnable({ run: function(){
		try{
			var xLayout = new LinearLayout(ctx);
			var xButton = new Button(ctx);
			xButton.setText('X');
			xButton.setTextColor(Color.CYAN);
			xButton.setTextSize(15);
			xButton.setBackground(xbg);
			xButton.getBackground().setAlpha(150);
			xButton.setOnClickListener(new View.OnClickListener({
				onClick: function(viewarg){
					exitUI.dismiss();
					menu.dismiss();
					showMenuBtn();
      Level.playSound(getPlayerX(),getPlayerY(),getPlayerZ(),"random.chestclose",30,25);
				}
			}));
			xLayout.addView(xButton);
			
			exitUI = new PopupWindow(xLayout, dip2px(40), dip2px(40));
			exitUI.setBackgroundDrawable(new ColorDrawable(Color.DKGRAY));
			
			 menu.setAnimationStyle(android.R.style.Animation_Toast);
			exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.BOTTOM, 0, 0);
			}catch(exception){
				Toast.makeText(ctx, exception, 1).show();
			}
	}}));
}

//FUNCTIONS
function getNearestEntity(maxrange) {
			var mobs = Entity.getAll();
			var players = Server.getAllPlayers();
			var small = maxrange;
			var ent = null;
			for (var i = 0; i < mobs.length; i++) {
				var x = Entity.getX(mobs[i]) - getPlayerX();
				var y = Entity.getY(mobs[i]) - getPlayerY();
				var z = Entity.getZ(mobs[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
					small = dist;
					ent = mobs[i];
				}
			}
			for (var i = 0; i < players.length; i++) {
				var x = Entity.getX(players[i]) - getPlayerX();
				var y = Entity.getY(players[i]) - getPlayerY();
				var z = Entity.getZ(players[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
					small = dist;
					ent = players[i];
				}
			}
			return ent;
		}
function crosshairAimAt(ent, pos) {
							if(ent != null) {
				var x = Entity.getX(ent) - getPlayerX();
				var y = Entity.getY(ent) - getPlayerY();
				var z = Entity.getZ(ent) - getPlayerZ();
				if(pos != null && pos instanceof Array) {

					x = Entity.getX(ent) - pos[0];
					y = Entity.getY(ent) - pos[1];
					z = Entity.getZ(ent) - pos[2];
				}
				if(Entity.getEntityTypeId(ent) != 63)
					y += 0.5;
				var a = 0.5 + Entity.getX(ent);
				var b = Entity.getY(ent);
				var c = 0.5 + Entity.getZ(ent);
				var len = Math.sqrt(x * x + y * y + z * z);
				var y = y / len;
				var pitch = Math.asin(y);
				pitch = pitch * 180.0 / Math.PI;
				pitch = -pitch;
				var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
				if(pitch < 89 && pitch > -89) {
					Entity.setRot(Player.getEntity(), yaw, pitch);
				}
			}
  }

//codes
function toDirectionalVector(vector, yaw, pitch) { 
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}
	function attackHook(att, vic) {
		   if(att == Player.getEntity() && tpaurss && Entity.getHealth(vic) > 0) {
           setPosition(getPlayerEnt(), Entity.getX(vic),Entity.getY(vic)+1,Entity.getZ(vic));
		}
		if(att == Player.getEntity() && autowalk1ss && Entity.getHealth(vic) > 0) {
			var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
        setVelX(getPlayerEnt(), 0.9 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.9 * playerDir[2]);
	}
	}

      function getNearestEntity(maxrange) {
			var mobs = Entity.getAll();
			var players = Server.getAllPlayers();
			var small = maxrange;
			var ent = null;
			for (var i = 0; i < mobs.length; i++) {
				var x = Entity.getX(mobs[i]) - getPlayerX();
				var y = Entity.getY(mobs[i]) - getPlayerY();
				var z = Entity.getZ(mobs[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
					small = dist;
					ent = mobs[i];
				}
			}
			for (var i = 0; i < players.length; i++) {
				var x = Entity.getX(players[i]) - getPlayerX();
				var y = Entity.getY(players[i]) - getPlayerY();
				var z = Entity.getZ(players[i]) - getPlayerZ();
				var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
				if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
					small = dist;
					ent = players[i];
				}
			}
			return ent;
		}

function crosshairAimAt(ent, pos) {
							if(ent != null) {
				var x = Entity.getX(ent) - getPlayerX();
				var y = Entity.getY(ent) - getPlayerY();
				var z = Entity.getZ(ent) - getPlayerZ();
				if(pos != null && pos instanceof Array) {

					x = Entity.getX(ent) - pos[0];
					y = Entity.getY(ent) - pos[1];
					z = Entity.getZ(ent) - pos[2];
				}
				if(Entity.getEntityTypeId(ent) != 63)
					y += 0.5;
				var a = 0.5 + Entity.getX(ent);
				var b = Entity.getY(ent);
				var c = 0.5 + Entity.getZ(ent);
				var len = Math.sqrt(x * x + y * y + z * z);
				var y = y / len;
				var pitch = Math.asin(y);
				pitch = pitch * 180.0 / Math.PI;
				pitch = -pitch;
				var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
				if(pitch < 89 && pitch > -89) {
					Entity.setRot(Player.getEntity(), yaw, pitch);
				}
			}
  }
    function modTick() {
						if(aimbotss) {
							var ent = getNearestEntity(7)
							if(ent != null) crosshairAimAt(ent);

}



  if (tapjumpss == true && Entity.isSneaking(Player.getEntity()) == true){
            setVelY(getPlayerEnt(), 0.4);
            if (Utils.Player.isOnGround()) setVelY(getPlayerEnt(), -0.3);
        }

  if (cstepss == true && Entity.isSneaking(Player.getEntity()) == true){
		setVelY(getPlayerEnt(), 0.00000001);
    }

if(autoreachss) {
	if(getNearestEntity(8) != null){
if(Level.getGameMode() != 1) Level.setGameMode(1);
Player.setCanFly(false);
}else{
if(Level.getGameMode() != 0) Level.setGameMode(0);
}
}

if(grappless == true && !Utils.Player.isOnGround()) {
airjumpcounter++
if(airjumpcounter == 0) {
setVelX(getPlayerEnt(),
Entity.getVelX(getPlayerEnt())*1.67);
setVelZ(getPlayerEnt(),
Entity.getVelZ(getPlayerEnt())*1.67);
}
if(airjumpcounter >= 10) {
setVelY(getPlayerEnt(), 0.50);
setVelX(getPlayerEnt(),
Entity.getVelX(getPlayerEnt())*1.67);
setVelZ(getPlayerEnt(),
Entity.getVelZ(getPlayerEnt())*1.67);
airjumpcounter = 0;
}}


   if (ghostss) {
     Entity.setCollisionSize(Player.getEntity(), 0, 0)
     }

    if (dolphinss && Utils.Player.isInWater()) {
         setVelY(getPlayerEnt(), 0.3)
     }

if (jetpackss) {
		var hit = getYaw() + 90;
        var hitY = getPitch() - 180;
        x = Math.cos(hit * (Math.PI / 180));
        y = Math.sin(hitY * (Math.PI / 180));
        z = Math.sin(hit * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 1);
        setVelY(Player.getEntity(), y * 1);
        setVelZ(Player.getEntity(), z * 1);
	}

if(taptpss && Utils.Player.isOnGround()) {
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*2.1055);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*2.1055);
 }
 
 

if(grapple1ss && Utils.Player.isOnGround()) {
driftcounter++
if(driftcounter == 32){
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*2.3);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*2.3);
}
if(driftcounter == 4){
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*2.1055);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*2.1055);
driftcounter= 0;
 }}

if(bstspeedss == true){
speedtick++;
if(speedtick == 1){
if(Utils.Player.isOnGround())
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*3.2);
if(Utils.Player.isOnGround())
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*3.2);
 }
if(speedtick > 1){
if(Utils.Player.isOnGround())
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.02);
if(Utils.Player.isOnGround())
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.02);
 }
if(speedtick == 8){
if(Utils.Player.isOnGround())
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.2);
if(Utils.Player.isOnGround())
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.2);
speedtick = 0;
 }}

if (ndgss) {
		setVelY(getPlayerEnt(), 0.00000001);
    }

   if (noknockss || Entity.getHealth(getPlayerEnt()) <= 0) {
		   if(this.tick > 0) {
           tick--;
		} else {
			Entity.setImmobile(getPlayerEnt(), false);
		}
		if(this.health > Entity.getHealth(getPlayerEnt())){
			Entity.setImmobile(getPlayerEnt(), true);
			this.tick = 1;
		}
		this.tick = 0;
		this.health = Entity.getHealth(getPlayerEnt());
	}

	if (spss && Utils.Player.isCollidedHorizontally()) {
        setVelY(Player.getEntity(), 0.6)
	    }

   if (crouchtpss == true && Entity.isSneaking(Player.getEntity()) == true){
				setVelY(getPlayerEnt(), -0.003)
         var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (getYaw() + 80) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
        setVelX(getPlayerEnt(), 0.6 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.6 * playerDir[2]);
   }

if (tawrss == true) {
            setVelY(getPlayerEnt(), 0.4);
            if (Utils.Player.isOnGround()) setVelY(getPlayerEnt(), -0.2);
        }

if (bhpss == true) {
            if (Utils.Player.isOnGround()) setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt()) * 1.05);
            setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt()) * 1.05);
            if (Utils.Player.isOnGround()) setVelY(getPlayerEnt(), 0.4);
        }

if(flyss == true) {
if(!Player.getCarriedItem()==0) {
Level.setTile(getPlayerX(), getPlayerY()-2, getPlayerZ(), Player.getCarriedItem(), 0);
setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.0);
setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.0);
}}

if(safewlkss == true){
Entity.setSneaking(getPlayerEnt(), true);
}

if(jkes && Utils.Player.isInWater()) {
var ent = getNearestEntity(8)
if(ent != null) crosshairAimAt(ent);
}

if (cspeedss) {
setVelY(getPlayerEnt(),Entity.isSneaking(getPlayerEnt()) ? 0.2 : -0.065);
setVelY(Player.getEntity(), -0.1)
}

if (towered) {
var ent = getNearestEntity(8);
Entity.setCollisionSize(ent, 10, 10);
}else{
Entity.setCollisionSize(ent, 1, 2);
   }
  }