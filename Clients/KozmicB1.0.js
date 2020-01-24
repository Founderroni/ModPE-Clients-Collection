
ModPE.log(0)
print('Kozmic Loading...')
print('Kozmic Loaded!')
print('Made by Vega PE')
print('Youtube - Vega PE')
ModPE.langEdit("menu.copyright","§3 Made by Vega PE!")
ModPE.langEdit("menu.play","§0[§3Kozmic§0]")
ModPE.langEdit("menu.settings","§3Kozmic ")
var ctx =
 com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
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

//BACKGROUND STUFF

var bg = new android.graphics.drawable.GradientDrawable();
bg.setColor(android.graphics.Color.WHITE); //ButtonBGColor
bg.setStroke(4, android.graphics.Color.WHITE); //ButtonStroke
bg.setCornerRadius(2); //ButtonCornerRadius

var xbg = new android.graphics.drawable.GradientDrawable();
xbg.setColor(android.graphics.Color.WHITE); //XButtonBGColor
xbg.setStroke(4, android.graphics.Color.WHITE); //XButtonStroke
xbg.setCornerRadius(2); //XButtonCornerRadius

var bg2 = new android.graphics.drawable.GradientDrawable();
bg2.setColor(android.graphics.Color.BLUE); //ButtonBGColor
bg2.setStroke(4, android.graphics.Color.BLUE); //ButtonStroke
bg2.setCornerRadius(2); //ButtonCornerRadius

var bg1 = new android.graphics.drawable.GradientDrawable();
bg1.setColor(android.graphics.Color.BLACK); //ButtonBGColor
bg1.setStroke(4, android.graphics.Color.WHITE); //ButtonStroke
bg1.setCornerRadius(2); //ButtonCornerRadius

var bg3 = new android.graphics.drawable.GradientDrawable();
bg3.setColor(android.graphics.Color.GREEN); //ButtonBGColor
bg3.setStroke(4, android.graphics.Color.GREEN); //ButtonStroke
bg3.setCornerRadius(2); //ButtonCornerRadius

//MORE GUI + VARIABLES

var GUI;
var menu;
var exitUI;
//if u share this client to someone please remove my codes
//Thank you!
//This code cant be shared!! 
let Ayhan =
   {Core: new Array(),Name: "Kozmic",
   Modules: "[client.length]",
   Color1: Color.WHITE,
   Devs: ["Vega"],
   Rgb: null,
   Bg: 
{MainColor: function() {
   	let bground = new android.graphics.drawable.GradientDrawable();
            bground.setOrientation(android.graphics.drawable.GradientDrawable.Orientation.LEFT_RIGHT);
            bground.setGradientType(android.graphics.drawable.GradientDrawable.LINEAR_GRADIENT);
            bground.setColors([android.graphics.Color.parseColor('#0021FF'), android.graphics.Color.parseColor('#15A1FF')]);
            return bground}
},
};
var parent = new android.graphics.drawable.GradientDrawable();parent.setColor(android.graphics.Color.TRANSPARENT);
//useless LLLL
var VERSION = " ";
var NAME = "Kozmic";
var DEVELOPERS = "Vega PE ";
var cBtn = "Kozmic"

//MODULE VARIABLES


var aim;
var aimbot = false;
var aimed = false;

var aim;
var aimbot = false;
var aimed = false;

var vtped = false;
var vtp;
var vport = false;

var cspeeds
var cspeedss = false;
var cspeeded = false; 

var taptowers
var taptowerss = false;
var taptowered = false;

var taptps
var taptpss = false;
var taptped = false;

var ndglides
var ndglidess = false;
var ndglideed = false;

var antikbs
var antikbss = false;
var antikbed = false;

var bhop = false;
var bhopl = false;
var bhoped = false;

var bhop2 = false;
var bhopll = false;
var bhoped2 = false;

var hitboxs
var hitboxss = false;
var hitboxed = false;

var defaultDestroyTime = [
null, 1.5, 0.6, 0.5, 2, 2, 0, -1, null, null, null, null, 0.5, 0.6, 3, 3, 3, 2, 
0.2, 0.6, 0.3, 3, 3, null, 0.8, null, 0.2, 0.7, null, null, 4, 0, 0, null, null, 
0.8, null, 0, 0, 0, 0, 3, 5, 2, 2, 2, 0, 1.5, 2, 50, 0, 0, null, 2, 2.5, null, 
3, 5, 2.5, 0, 0.6, 3.5, 3.5, 1, 3, 0.4, 0.7, 2, 1, null, null, 5, null, 3, 3, 
null, null, null, 0.1, 0.5, 0.2, 0.4, 0.6, 0, null, 2, 1, 0.4, 0.3, null, 1, 0.5, 
null, null, -1, 3, null, 1.5, null, null, 5, 0.3, 1, 0, 0, null, 2, 2, 1.5, null, 
null, 2, null, 2, null, null, null, null, null, null, null, null, null, null, null, 
null, null, 0.8, null, null, null, null, null, 2, 2, 2, null, null, 2, null, 0, 0, 
null, null, null, null, null, null, null, null, null, null, null, null, 0.8, 0.8, 
2, 2, null, null, null, null, null, null, null, null, null, null, null, 0.5, 0.1, 
5, null, null, null, null, null, null, null, null, null, null, null, null, null, 
null, null, null, null, null, null, null, null, null, null, null, null, null, null,
null, null, null, null, null, null, null, null, null, null, null, null, null, null,
null, null, null, null, null, null, null, null, null, null, null, null, null, null,
null, null, null, null, null, null, null, null, null, null, null, null, null, null,
null, 0, 3.5, 50, 5, 0.6, 0.6, 5, null, null, null, null, 0
];

var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 50;
var falling = 0;
var next = 0;
var px, py, pz, lx, ly, lz, vel, saver;
var cd = 0;
var s = 0;
var Xdiff;
var Zdiff;
var Xpos;
var Zpos;
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
var Entities = [];
var counter = 0;
var Utils = {
	        
            Block: {
                 isLiquid: function(id) {
			if(id >= 8 && id <= 11) return true;
			return false;
		         }
            },
            Player: {
            isFall: function() {
		var velo = -0.07840000092983246;
		if(!Utils.Player.onGround() && Entity.getVelY(Player.getEntity()) < velo) return true;
		return false;
},
                isInWater: function() {
			if(Utils.Block.isLiquid(getTile(Entity.getX(getPlayerEnt()), Entity.getY(getPlayerEnt()) - 1.65, Entity.getZ(getPlayerEnt())))) {
            return true;
            } else {
			return false;
			   }
		    },
            onGround: function() {
			var y = getPlayerY();
			while (y > 1) y -= 1;

			if (Math.round(y * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			if (Math.round(y * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			return false;
		},
		overGround: function() {
			var y = getPlayerY();
			while (y > 2) y -= 2;

			if (Math.round(y * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()))) return true;
			if (Math.round(y * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 2.15, getPlayerZ()))) return true;
			return false;
		},
		isCollidedHorizontally: function() {
			var x = getPlayerX();
			var z = getPlayerZ();
			var blockX = Math.round(x - 0.5);
			var blockZ = Math.round(z - 0.5);
			while (x < 1) x += 1;
			while (z < 1) z += 1;
			while (x > 1) x -= 1;
			while (z > 1) z -= 1;

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

			if (Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
			if (Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
			return false;
		}
	},
	Vel: {
		lastX: 0,
		lastY: 0,
		lastZ: 0,
		calculateSpeed: function() {
			return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2));
		}
	}
}

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
		menuBtn.setTextColor(android.graphics.Color.BLACK);
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
		GUI.setBackgroundDrawable(new ColorDrawable(Color.WHITE));
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
			menuLayout.setOrientation(0);
			menuLayout.setBackground(bg);
			menuLayout.getBackground().setAlpha(100);
			menuLayout1.setOrientation(0);
			menuScroll.addView(menuLayout);
			menuLayout1.addView(menuScroll);
			menuLayout.setBackground(Ayhan.Bg.MainColor());
			
			
			var combatLayout = new android.widget.LinearLayout(ctx);
								combatLayout.setOrientation(1);
	     menuLayout.addView(combatLayout);
	
	var name = new TextView(ctx);
			name.setTextSize(25);
			name.setText(NAME+" "+VERSION);
			name.setTextColor(android.graphics.Color.BLACK);
			name.setGravity(Gravity.CENTER);
			combatLayout.addView(name);
			
			
      var button = new android.widget.Button(ctx);
      button.setText('Info');      button.setTextColor(android.graphics.Color.WHITE);     
button.setTextSize(15.5); 
button.setBackground(parent);      
      button.setOnClickListener(new android.view.View.OnClickListener({
     
      onClick: function(viewarg){
      clientMessage('§7[§b§l§oKozmic§7] §a§lby Vega PE!')
      }
      }));
      combatLayout.addView(button);
      
   var button = new android.widget.Button(ctx);
      button.setText('Aimbot');
      button.setTextColor(android.graphics.Color.BLACK);
button.setBackground(parent);
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
       if(!aimed){
      aimbot = true;
      aimed = true;
       clientMessage('§7[§b§l§oKozmic§7] AimAura §2On!')
       
      }else{
      clientMessage('§7[§b§l§oKozmic§7] AimAura §cOff!')     
      aimbot = false;
      aimed = false;
      }
      
      }
      }));
      combatLayout.addView(button);

      
      

      var button = new android.widget.Button(ctx);
      button.setText('GodMode');
      button.setTextColor(android.graphics.Color.BLACK);
button.setBackground(parent); 
button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      Player.setHealth(9999)
      
      clientMessage('§7[§b§l§oKozmic§7] GodMode §2On!')
      }
      }));
      combatLayout.addView(button);

      var button = new android.widget.Button(ctx);
      button.setText('Speed-On');
      button.setBackground(parent);      
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      ModPE.setGameSpeed(30.70);
      setVelY( getPlayerEnt(), 0.8)
      clientMessage('§7[§b§l§oKozmic§7] Speed §2On!')
      }
      }));
      combatLayout.addView(button);

      var button = new android.widget.Button(ctx);
      button.setText('Speed-Off');
      button.setBackground(parent);      
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      ModPE.setGameSpeed(20);
       clientMessage('§7[§b§l§oKozmic§7] Speed §cOff!')
      }
      }));
      combatLayout.addView(button);


var button = new android.widget.Button(ctx);
      button.setText('NoDownGlide');
      button.setTextColor(android.graphics.Color.BLACK);
button.setBackground(parent);
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
       if(!ndglideed){
      ndglidess = true;
      ndglideed = true;      
       clientMessage('§7[§b§l§oKozmic§7] NoDownGlide §2On!')
      }else{
       clientMessage('§7[§b§l§oKozmic§7] NoDownGlide §cOff!')
      ndglidess = false;
      ndglideed = false;     
      }
      
      }
      }));
      combatLayout.addView(button);
      
   var button = new android.widget.Button(ctx);
      button.setText('Tpaura');
      button.setBackground(parent);      
      button.setTextColor(android.graphics.Color.BLACK);
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
       if(!vtped){
      vtped = true;
      vport = true;
      clientMessage('§7[§b§l§oKozmic§7] TPaura §2On!')
      }else{
        clientMessage('§7[§b§l§oKozmic§7] TPaura §cOff!')
      vtped = false;
      vport = false;
      }
      
      }
      }));
      combatLayout.addView(button);
      
   var button = new android.widget.Button(ctx);
      button.setText('AntiKnockBack');
      button.setTextColor(android.graphics.Color.BLACK);
button.setBackground(parent);
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
       if(!antikbed){
      antikbss = true;
      antikbed = true;
      clientMessage('§7[§b§l§oKozmic§7] AntiKnockBack §2On!')
      }else{
      clientMessage('§7[§b§l§oKozmic§7] AntiNockBack §cOff!')
      antikbss = false;
      antikbed = false;
      }
      
      }
      }));
      combatLayout.addView(button);

   var button = new android.widget.Button(ctx);
      button.setText('KillAura');
      button.setBackground(parent);      
      button.setTextColor(android.graphics.Color.BLACK);
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
       if(!hitboxed){
      hitboxss = true;
      hitboxed = true;
      clientMessage('§7[§b§l§oKozmic§7] Killaura §2On!')
      }else{
      clientMessage('§7[§b§l§oKozmic§7] Killaura §cOff!')
      hitboxss = false;
      hitboxed = false;
      }
      
      }
      }));
      combatLayout.addView(button);

      var button = new android.widget.Button(ctx);
      button.setText('TapTP');
      button.setTextColor(android.graphics.Color.BLACK);
button.setBackground(parent);
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
       if(!taptped){
      taptpss = true;
      taptped = true;
       clientMessage('§7[§b§l§oKozmic§7] TapTP §2On!')
      }else{
      clientMessage('§7[§b§l§oKozmic§7] TapTP §cOff!')
      taptpss = false;
      taptped = false;
      }
      
      }
      }));
      combatLayout.addView(button);
      
      var button = new android.widget.Button(ctx);
      button.setText('Tower');
      button.setBackground(parent);      
      button.setTextColor(android.graphics.Color.BLACK);
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
       if(!taptowered){
      taptowerss = true;
      taptowered = true;
      clientMessage('§7[§b§l§oKozmic§7] Tower §2On!')
      }else{
      clientMessage('§7[§b§l§oKozmic§7] Tower §cOff!')
      taptowerss = false;
      taptowered = false;
      }
      
      }
      }));
      combatLayout.addView(button);

      var button = new android.widget.Button(ctx);
      button.setText('Fly');
      button.setTextColor(android.graphics.Color.BLACK);
button.setBackground(parent);
button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      Player.setCanFly(1);
      clientMessage('§7[§b§l§oKozmic§7] Fly §2On!')
      }
      }));
      combatLayout.addView(button);
      
   var button = new android.widget.Button(ctx);
      button.setText('B hop');
      button.setBackground(parent);      
      button.setTextColor(android.graphics.Color.BLACK);
      button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
       if(!bhoped){
      bhopl = true;
      bhoped = true;
      clientMessage('§7[§b§l§oKozmic§7] Bhop §2On!')
      }else{
      bhopl = false;
      bhoped = false;
      clientMessage('§7[§b§l§oKozmic§7] Bhop §cOff!')
      }
      
      }
      }));
      combatLayout.addView(button);

      
      var google=new android.widget.Button(ctx);google.setText("Vk");google.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));google.setTextColor(android.graphics.Color.WHITE);google.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl(''); /*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

;

}}));combatLayout.addView(google);

var google=new android.widget.Button(ctx);google.setText("Google");google.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));google.setTextColor(android.graphics.Color.WHITE);google.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://www.google.de/?gfe_rd=cr&ei=R0txWIyeGMzi8Af76LZw'); /*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

;


}}));combatLayout.addView(google);

var google=new android.widget.Button(ctx);google.setText("Youtube");google.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.TRANSPARENT));google.setTextColor(android.graphics.Color.WHITE);google.setOnClickListener(new android.view.View.OnClickListener({onClick:function(viewarg){

var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      {
      ctx.runOnUiThread(new java.lang.Runnable({run: function(){
      var webs = new android.webkit.WebView(ctx);
      var webset = webs.getSettings();
      webset.setJavaScriptEnabled(true);
      webs.setWebChromeClient(new android.webkit.WebChromeClient());
      webs.setWebViewClient(new android.webkit.WebViewClient());
      webs.loadUrl('https://m.youtube.com/channel/UCjqfpdFiaJTj_DzpwwGUmlg'); /*Site URL*/
      new android.app.AlertDialog.Builder(ctx).setView(webs).show();
      }}));
      }

;

}}));combatLayout.addView(google);

      var sbpProgress = 0;
      var sbp = new android.widget.SeekBar(ctx);
      sbp.setMax(3);
      sbp.setProgress(sbpProgress);
      sbp.setOnSeekBarChangeListener(new android.widget.SeekBar.OnSeekBarChangeListener()
      {
      onStopTrackingTouch: function(view)
      {
      sbpProgress=sbp.getProgress();
      if(sbpProgress==0)
      {
      ModPE.setFov(40)
      }
      if(sbpProgress==1)
      {
      ModPE.setFov(60)
      }
      if(sbpProgress==2)
      {
      ModPE.setFov(100)
      }
      if(sbpProgress==3)
      {
      ModPE.setFov(130)
      }
      }
      });
      combatLayout.addView(sbp);

      var button = new android.widget.Button(ctx);
      button.setText('Jesus');
      button.setTextColor(android.graphics.Color.BLACK);
button.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.WHITE));  
button.setOnClickListener(new android.view.View.OnClickListener({
      onClick: function(viewarg){
      Block.setShape(8, 0, 0, 0, 1, 0.4, 1);
      Block.setShape(9, 0, 0, 0, 1, 0.4, 1);
      Block.setShape(10, 0, 0, 0, 1, 0.4, 1);
      Block.setShape(11, 0, 0, 0, 1, 0.4, 1);
      Block.setShape(8, null, null, null, null, null, null);
      Block.setShape(9, null, null, null, null, null, null);
      Block.setShape(10, null, null, null, null, null, null);
      Block.setShape(11, null, null, null, null, null, null);
      Block.defineBlock(8, "Water", [["still_water", 0]], 8, true, 4);
      Block.defineBlock(9, "Stationary Water", [["still_water", 0]], 9, true, 4);
      Block.defineBlock(10, "Lava", [["still_lava", 0]], 10, true, 4);
      Block.defineBlock(11, "Stationary Lava", [["still_lava", 0]], 11, true, 4);
      clientMessage('§7[§b§l§oKozmic§7] Jesus §2On!')
      }
      }));
      combatLayout.addView(button);

var combatLayout1 = new android.widget.LinearLayout(ctx);
								combatLayout1.setOrientation(1);
	     menuLayout.addView(combatLayout1);
	
var line15 = new android.widget.TextView(ctx);
                line15.setText('');
                line15.setTextSize(17);
                
                line15.setTextColor(android.graphics.Color.TRANSPARENT);
line15.setBackgroundDrawable(new android.graphics.drawable.ColorDrawable(android.graphics.Color.BLUE));  
                line15.setOnClickListener(new android.view.View.OnClickListener({
                onClick: function (viewarg) {      
                
                }
                }));
                combatLayout1.addView(line15, 17, 2600);
                

   menu = new PopupWindow(menuLayout1, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
            menu.setAnimationStyle(android.R.style.Animation_Dialog);
             menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.TOP, 0, 0);
        } catch(error) {
            print("An error occured: " + error);
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
			xButton.setTextColor(Color.BLACK);
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
			exitUI.setBackgroundDrawable(new ColorDrawable(Color.WHITE));
			exitUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.RIGHT | Gravity.BOTTOM, 0, 0);
			}catch(exception){
				Toast.makeText(ctx, exception, 1).show();
			}
	}}));
}

function toDirectionalVector(vector, yaw, pitch) { //some parts of this function are made by @zhuowei
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}
function attackHook(attacker, victim)
{
if(vport){
setPosition(getPlayerEnt(), Entity.getX(victim), Entity.getY(victim) + 2, Entity.getZ(victim))
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
						if(aimbot) {
							var ent = getNearestEntity(7)
							if(ent != null) crosshairAimAt(ent);

}

var px = Player.getX();
var py = Player.getY();
var pz = Player.getZ();
var x = Player.getX();
var y = Player.getY();
var z = Player.getZ();

if(hitboxed) {
var ent = getNearestEntity(8);
Entity.setCollisionSize(ent, 10, 10);
}else{
Entity.setCollisionSize(ent, 1, 2);
}

	if(bhopll){
if(Utils.Player.onGround()){
ModPE.setGameSpeed(40)
setVelY( getPlayerEnt(), 0.4)
 } 
 }
	if(bhopl){
if(Utils.Player.onGround()){
setVelY( getPlayerEnt(), 0.4)
 }
		     }
   if (antikbss || Entity.getHealth(getPlayerEnt()) <= 0) {
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
   if (ndglidess) {
		setVelY(getPlayerEnt(), 0.00000001);
    }
	if (cspeedss) {
     //CrouchSpeed code from NNeBBuRR (VC Team)
    if(Entity.isSneaking(Player.getEntity()) == true){
				setVelY(getPlayerEnt(), -100.0);
                setVelX(getPlayerEnt(), Entity.getVelX(getPlayerEnt())*1.7);
                setVelZ(getPlayerEnt(), Entity.getVelZ(getPlayerEnt())*1.7);
          }
}}

    function useItem(x, y, z, itemid, blockid, side, itemDamage, blockDamage) {
	if (taptowerss) {
		setVelY(getPlayerEnt(), 0.4);
	   }
		if(taptpss && getTile(x, y + 1, z) == 0 && getTile(x, y + 2, z) == 0) {
			Entity.setPosition(Player.getEntity(), x + 0.5, y + 2.63 , z + 0.5);
		}
	}