
/*
By Null500zeep
Thx GodSoft026
Thx ArceusMatt
Thx Paladin
Thx Apoc
Thx Verox Team
Thx RealVirus325
Thx NoFairPlay
Thx YouAreNowOp
Thx Semen Zaborodin
©Combus Technology
*/

const OpenGL = android.opengl;
const ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();//ctx
const ScriptManager = com.groundhog.mcpemaster.ScriptManager;
const badversions = ["1.1.0","1.1.1","1.1.2","1.1.3","1.1.4","1.1.5","1.1.6","1.1.7","1.1.8"];
const version = ModPE.getMinecraftVersion();
const Context = android.content.context;

var mGLSurfaceView;
var textures=[0];

var Combus = {
	mods: new Array(),
	owner: "Null500zeep",
	isDev: false,
	lightMode: true,
	ghostMode: false,
	enableOpenGL: true,
	enableTimings: true,
	inGame: false,
	registerModule: function(m){
		Utils.modsCount += 1;
		this.mods.push(m);
		},
	toast: function(text, active) {
	    try {
		ctx.runOnUiThread(new Runnable({
			run: function () {
				var Toast = android.widget.Toast;
				var thetoast = Toast.makeText(com.mojang.minecraftpe.MainActivity.currentMainActivity.get(), "" + text, Toast.LENGTH_LONG);
				var layout = new LinearLayout(ctx);
				var msg = new TextView(ctx);
				var active1;
				if(active == true){
					active1 = "ON";
					}
				if(active == false){
					active1 = "OFF";
					}
                if(active == null){
				msg.setText(text);
				}else if(active == true){
				msg.setText(Html.fromHtml('<b><font color="red">'+text+": "+'</font></b><b><font color="#242C39">'+'ON'+'</font></b>'));
				}else if(active == false){
				msg.setText(Html.fromHtml('<b><font color="#242C39">'+text+": "+'</font></b><b><font color="red">'+'OFF'+'</font></b>'));
				}
				msg.setGravity(Gravity.CENTER);
				msg.setTextSize(size+5);
				msg.setPadding(20, 20, 20, 20);
				msg.setTextColor(Color.RED);
				
				var btnpic = new GradientDrawable();
				btnpic.setColor(Color.BLACK);
				btnpic.setStroke(10, Color.BLACK);
				layout.addView(msg);
{}				layout.setBackground(bgtext);
				layout.getBackground().setAlpha(alpha);
				thetoast.setView(layout);
				if(prints)if(prints.active == true)thetoast.show();
				if(!prints)thetoast.show();
			}
		}));
	} catch(e) {
		//print(e);
	}
}
};
print("Принцип работы киллауры сделали Autyn и RealVirus325");
print("Зажмите любую функцию и вы увидите её настройки | Hold any function and you will see its settings");

var Launcher = {//You launcher
	isBL: function () {
		return(ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher" || ctx.getPackageName() == "net.zhuoweizhang.mcpelauncher.pro");
	},
	isToolbox: function () {
		return ctx.getPackageName() == "io.mrarm.mctoolbox";
	},
	ismcpe: function () {
		return ctx.getPackageName() == "com.groundhog.mcpemaster";
	}
}

var Html = android.text.Html;

var Typeface = android.graphics.Typeface;
var Base64 = android.util.Base64;
var Environment = android.os.Environment;
var sdcard = Environment.getExternalStorageDirectory();
var File = java.io.File;
var FileReader = java.io.FileReader;
var BufferedReader = java.io.BufferedReader;


var FOS = java.io.FileOutputStream;
var FileOutputStream = java.io.FileOutputStream;
var StringBuilder = java.lang.StringBuilder;
var MediaPlayer = android.media.MediaPlayer();
var file = {
select:function(dir, fileName)
{
return (new File(dir, fileName));
},
exists:function(selectedFile)
{
return selectedFile.exists();
},
isFile:function(file)
{
return file.isFile();
},
isDirectory:function(path)
{
return path.isDirectory();
},
create:function(selectedFile)
{
selectedFile.createNewFile();
return selectedFile;
},
del:function(selectedFile)
{
selectedFile.delete();
},
read:function(selectedFile)
{
var readed = (new BufferedReader(new FileReader(selectedFile)));
var data = new StringBuilder();
var string;
while((string = readed.readLine()) != null){
data.append(string);
data.append('\n');
}
return data.toString();
},
readLine:function(selectedFile, line)
{
var readT = new file.read(selectedFile);
var lineArray = readT.split('\n');
return lineArray[line - 1];
},
readKey:function(selectedFile, key, keySeparator)
{
var isText = 0;
var textR = new file.read(selectedFile);
var splitTextR = textR.split('\n');
for(var i = 0; i < splitTextR.length; i++)
{
var textRF = splitTextR[i].split(keySeparator);
if(textRF[0] == key)
{
return textRF[1];
isText = 1;
break;
}
if(!isText)
{
return '[Unknown]';
}
}
},
write:function(selectedFile, text)
{
file.rewrite(selectedFile, (new file.read(selectedFile)) + text);
},
rewrite:function(selectedFile, text)
{
var writeFOS = new FOS(selectedFile);
writeFOS.write(new java.lang.String(text).getBytes());
},
writeKey:function(selectedFile, key, keyText, keySeparator)
{
var isText = 0;
var textR = new file.read(selectedFile);
var splitTextR = textR.split('');
for(var i = 0; i < splitTextR.length; i++)
{
var textRF = splitTextR[i].split(keySeparator);
if(textRF[0] == key)
{
var splitWithKey = textR.split(key + keySeparator + new file.readKey(selectedFile, key));
file.rewrite(selectedFile, splitWithKey[0] + key + keySeparator + keyText + splitWithKey[1]);
isText = 1;break;
}
}
if(!isText)
{
file.write(selectedFile, key + keySeparator + keyText);
}
},
mPlay:function(musicPath)
{
MediaPlayer.setDataSource(musicPath);
MediaPlayer.prepare();
MediaPlayer.start();
},
mStop:function()
{
MediaPlayer.reset();
}
};
var path_F= Environment.getExternalStorageDirectory().getPath()+"/games/com.mojang/Combus/";
File(path_F).mkdirs();
File(path_F+"themes/").mkdirs();
var lock_ch;
var langb;
var sdcard = Environment.getExternalStorageDirectory();

var R = android.R;
var MediaPlayer = android.media.MediaPlayer();
var MainActivity = ctx;
var IntentFilter = android.content.IntentFilter;
var Intent = android.content.Intent;
var BatteryManager = android.os.BatteryManager;
var KeyEvent = android.view.KeyEvent;

var Runnable = java.lang.Runnable;
var Button = android.widget.Button;
var PopupWindow = android.widget.PopupWindow;
var RelativeLayout = android.widget.RelativeLayout;
var Gravity = android.view.Gravity;
var ScrollView = android.widget.ScrollView;
var MotionEvent = android.view.MotionEvent;
var Style = R.style;
var BufferedReader = java.io.BufferedReader;
var URL = java.net.URL;
var ByteBuffer = java.nio.ByteBuffer;
var ByteOrder = java.nio.ByteOrder;
var InputStreamReader = java.io.InputStreamReader;
var PixelFormat = android.graphics.PixelFormat;
var Instrumentation = android.app.Instrumentation;
var Handler = android.os.Handler;
var View = android.view.View;
var Dialog = android.app.Dialog;
var Window = android.view.Window;
var SeekBar = android.widget.SeekBar;
var ColorStateList = android.content.res.ColorStateList;
var EditText = android.widget.EditText;
var Toast = android.widget.Toast;
var TextWatcher = android.text.TextWatcher;
var EditorInfo = android.view.inputmethod.EditorInfo;
var opengles = javax.microedition.khronos.opengles;
var Thread = java.lang.Thread;

var Process = android.os.Process;
var Canvas = android.graphics.Canvas;
var Semaphore = java.util.concurrent.Semaphore;
var Matrix = android.graphics.Matrix;
var Bitmap = android.graphics.Bitmap;
var PorterDuff = android.graphics.PorterDuff;
var Region = android.graphics.Region;
var TextureView = android.view.TextureView;
var Paint = android.graphics.Paint;
var AndroidHttpClient = android.net.http.AndroidHttpClient;
var ByteArrayOutputStream = java.io.ByteArrayOutputStream;
var Character = java.lang.Character;
var FileInputStream = java.io.FileInputStream;
var OutputStreamWriter = java.io.OutputStreamWriter;
var LinkMovementMethod = android.text.method.LinkMovementMethod;
var ListView = android.widget.ListView;
var ArrayAdapter = android.widget.ArrayAdapter;
var EmbossMaskFilter = android.graphics.EmbossMaskFilter;
var BitmapDrawable = android.graphics.drawable.BitmapDrawable;
var LinearGradient = android.graphics.LinearGradient;
var LightingColorFilter = android.graphics.LightingColorFilter;
var TimeUnit = java.util.concurrent.TimeUnit;
var Shader = android.graphics.Shader;
var Path = android.graphics.Path;
var AlertDialog = android.app.AlertDialog;
var CheckBox = android.widget.CheckBox;
var Array1 = java.lang.reflect.Array;
var Byte = java.lang.Byte;
var Executors = java.util.concurrent.Executors;
var HttpGet = org.apache.http.client.methods.HttpGet;
var ImageView = android.widget.ImageView;
var BitmapFactory = android.graphics.BitmapFactory;
var LinearLayout = android.widget.LinearLayout;
var Html = android.text.Html;
var Toast = android.widget.Toast;
var TextView = android.widget.TextView;
var ColorDrawable = android.graphics.drawable.ColorDrawable;
var Color = android.graphics.Color;
var PorterDuffXfermode = android.graphics.PorterDuffXfermode;
var GradientDrawable = android.graphics.drawable.GradientDrawable;
var CharSequence = java.lang.CharSequence;
var InputMethodManager = android.view.inputmethod.InputMethodManager;
var FrameLayout = android.widget.FrameLayout;
var DataOutputStream = java.io.DataOutputStream;
var System = java.lang.System;
var Build = android.os.Build;
var AccessibilityService = android.accessibilityservice.AccessibilityService;
var GestureDescription = android.accessibilityservice.GestureDescription;
var Tap = android.support.test.espresso.action.Tap;
var WifiManager = android.net.wifi.WifiManager;
var BroadcastReceiver = android.content.BroadcastReceiver;
var JavaAdapter = org.mozilla.javascript.JavaAdapter;
var Inet4Address = java.net.Inet4Address;
var InetAddress = java.net.InetAddress;
var NetworkInterface = java.net.NetworkInterface;
var Manifest = android.Manifest;
var SystemClock = android.os.SystemClock;
var PendingIntent = android.app.PendingIntent;
var DatagramSocket = java.net.DatagramSocket;
var DatagramPacket = java.net.DatagramPacket;
var GridLayout = android.widget.GridLayout;
var TranslateAnimation = android.view.animation.TranslateAnimation;
var AccelerateInterpolator = android.view.animation.AccelerateInterpolator;
var Animations = android.view.animation.Animation;
var RotateAnimation = android.view.animation.RotateAnimation;
var Uri = android.net.Uri;
var DownloadManager = android.app.DownloadManager;
var _0x550c=['AnimationUtils','loadAnimation','getApplicationContext','slide_in_left','anim','fade_in','view','animation'];(function(_0x1a9c05,_0xcfcded){var _0x54d6bc=function(_0x5f0c09){while(--_0x5f0c09){_0x1a9c05['push'](_0x1a9c05['shift']());}};_0x54d6bc(++_0xcfcded);}(_0x550c,0x1e6));var _0x56ae=function(_0x5e0bad,_0x21dc97){_0x5e0bad=_0x5e0bad-0x0;var _0x3d8385=_0x550c[_0x5e0bad];return _0x3d8385;};var AnimationUtils=android[_0x56ae('0x0')][_0x56ae('0x1')][_0x56ae('0x2')];var Animation={'slide_in_left':AnimationUtils[_0x56ae('0x3')](ctx[_0x56ae('0x4')](),R['anim'][_0x56ae('0x5')]),'slide_out_right':AnimationUtils[_0x56ae('0x3')](ctx[_0x56ae('0x4')](),R[_0x56ae('0x6')]['slide_out_right']),'fade_in':AnimationUtils[_0x56ae('0x3')](ctx[_0x56ae('0x4')](),R[_0x56ae('0x6')][_0x56ae('0x7')]),'fade_out':AnimationUtils['loadAnimation'](ctx['getApplicationContext'](),R[_0x56ae('0x6')]['fade_out'])};

var _0x4c87=['VISIBILITY_VISIBLE_NOTIFY_COMPLETED','setVisibleInDownloadsUi','setDestinationInExternalPublicDir','enqueue','getSystemService','parse','Request','setTitle','Downloading...'];(function(_0x45893b,_0x492560){var _0x17f08a=function(_0x454982){while(--_0x454982){_0x45893b['push'](_0x45893b['shift']());}};_0x17f08a(++_0x492560);}(_0x4c87,0x11b));var _0x4123=function(_0x3946e0,_0x62d063){_0x3946e0=_0x3946e0-0x0;var _0x28d686=_0x4c87[_0x3946e0];return _0x28d686;};function download(_0x75d736,_0x2b150f,_0x505ecd,_0x48ffb1){var _0x475178=ctx[_0x4123('0x0')](ctx['DOWNLOAD_SERVICE']);var _0x2afbf8=Uri[_0x4123('0x1')](_0x2b150f);var _0x388950=new DownloadManager[(_0x4123('0x2'))](_0x2afbf8);_0x388950[_0x4123('0x3')](_0x75d736);_0x388950['setDescription'](_0x4123('0x4'));_0x388950['setNotificationVisibility'](DownloadManager[_0x4123('0x2')][_0x4123('0x5')]);_0x388950[_0x4123('0x6')](![]);_0x388950[_0x4123('0x7')](_0x505ecd,_0x48ffb1);_0x475178[_0x4123('0x8')](_0x388950);}
//Cat-s
var curcat = "Combus";
var catnum = 0;
var catlist = ["All","Combat","Movement","Other","Effects", "Binds", "Trolling", "PlayersList"];
var catlist2 =["All","Combat","Movement","Other","Effects"];
var doscat = ["Combat","Movement","Other","Effects"];

//Menu scroll
var msx = 0;
var msy = 0;

//Module setting variables
var menu;
var wceil = 3;
var menuw =Number(6+"."+wceil);
var hceil = 7;
var menuh =Number(3+"."+hceil);
var size = 6;
var par = 6;
var parq = 3;
var par1 = 32;
var alpha = 200;
var actr = 5;
var smode = "Default";
var snumber = 0;
var stext = "Combus is top mcpe hacked client";
var stick = 28;
var aws = 0.3;
var arange = 10;
var abrange = 55;
var gm = 1;
var gt = 9;
var ug = 14;
var jl = 4;
var fmm = "Default";
var playert;
var buttonN1;

//Module variables
var playerDir = [0, 0, 0];
var DEG_TO_RAD = Math.PI / 180;
var playerFlySpeed = 1;
var aimrange = '7';
var shadow1X = '17';
var shadow1Y = '10';
var curname;
var sh;
var cat;
var search;
var hexc;

//Utils
var entry;
var falling = 0;
var next = 0;
var px, py, pz, lx, ly, lz, vel, saver;
var cd = 0;
var s = 0;
var Xdiff;var Zdiff;
var Xpos;
var Zpos;
var can = 1;
var canGetHP = 1;
var HP;
var gravity = -0.07840000092983246;
var Entities = [];
var counter = 0;

//Other
var klava;

//Rainbow
var espRed=0.129;
var espGreen=0.078;
var espBlue=1;

//Colors
var DarkBlue = "§1";
var DarkGreen = "§2";
var DarkAqua = "§3";
var DarkRed = "§4";
var DarkPurple = "§5";
var Gold =  "§6";
var Gray = "§7";
var DarkGray= "§8";
var Blue = "§9";
var Black = "§0";
var Aqua = "§b";
var Green = "§a";
var Red = "§c";
var LightPurple = "§d";
var Yellow = "§e";
var White = "§f";

//Move buttons variables
var moving = false;
var dx = 0
var dy = 0;
var menucx = 0;
var menucy = 50;
var gucx;
var gucy;

function dip2px(dips){
	return Math.ceil(dips * ctx.getResources().getDisplayMetrics().density);}

//Backgrounds
var bgedit = new GradientDrawable();
bgedit.setColor(Color.TRANSPARENT);
bgedit.setStroke(2, Color.WHITE);
bgedit.setCornerRadius(40);
var bgmenu = new GradientDrawable();
bgmenu.setColor(Color.BLACK);
bgmenu.setCornerRadius(20);
bgmenu.setAlpha(200);
var bgon = new GradientDrawable();
bgon.setColor(Color.BLACK);
bgon.setStroke(2, Color.parseColor("#00FF00"));
bgon.setAlpha(alpha);
bgon.setCornerRadius(40);
var bgoff = new GradientDrawable();
bgoff.setColor(Color.BLACK);
bgoff.setStroke(2, Color.parseColor("#FF4500"));
bgoff.setAlpha(alpha);
bgoff.setCornerRadius(40);
var bgstat = new GradientDrawable();
bgstat.setColor(Color.BLACK);
bgstat.setStroke(2, Color.parseColor("#FFFFFF"));
bgstat.setAlpha(alpha);
bgstat.setCornerRadius(40);
var bgtext = new GradientDrawable();
bgtext.setColor(Color.BLACK);
bgtext.setStroke(10, Color.BLACK);
bgtext.setCornerRadius(20);
var bg = new GradientDrawable();
bg.setColor(Color.BLACK); 
bg.setStroke(3, Color.GREEN); 
bg.setCornerRadius(10);
var lines = new GradientDrawable();
lines.setColor(Color.TRANSPARENT); 
lines.setStroke(3, Color.GREEN); 
var bg2 = new GradientDrawable();
                bg2.setColor(Color.BLACK);
                bg2.setStroke(5, Color.BLACK);
                bg2.setCornerRadius(dip2px(45));
var bg_1 = new GradientDrawable();
bg_1.setStroke(2, Color.parseColor("#3d3c3b"));
bg_1.setColor(Color.parseColor("#3d3c3b")); 
bg_1.setCornerRadius(1);

var bg_12 = new GradientDrawable();
bg_12.setColor(Color.parseColor("#2e99fe"));
bg_12.setStroke(2, Color.parseColor("#2e99fe"));
bg_12.setCornerRadius(1);

var bg_2 = new GradientDrawable();
bg_2.setStroke(2, Color.parseColor('#000000'));
bg_2.setColor(Color.parseColor('#5F9AED')); 
bg_2.setCornerRadius(1);

var bg_3 = new GradientDrawable();
bg_3.setStroke(2, Color.parseColor('#000000'));
bg_3.setColor(Color.parseColor('#697280')); 
bg_3.setCornerRadius(1);

var bg_11 = new GradientDrawable();
bg_11.setColor(Color.TRANSPARENT); 
bg_11.setCornerRadius(15);

var bg_122 = new GradientDrawable();
bg_122.setStroke(2, Color.parseColor('#8C0707'));
bg_122.setColor(Color.parseColor('#B30707'));
bg_122.setCornerRadius(15);

var bg_14 = new GradientDrawable();
bg_14.setStroke(2, Color.parseColor('#000000'));
bg_14.setAlpha(150);
bg_14.setColor(Color.parseColor('#000000'));
bg_14.setCornerRadius(15);
var bg_13 = new GradientDrawable();
bg_13.setStroke(2, Color.parseColor('#128208'));
bg_13.setColor(Color.parseColor('#18CC08'));
bg_13.setCornerRadius(15);

function entityHurtHook(att, vic, hearts) {
	Combus.mods.forEach(function (entry, index, array) {
		try {
			entry.onHurt(att, vic, hearts);
		} catch(e) {}

	});
}

function useItem(x, y, z, itemId, blockId, side) {
Combus.mods.forEach(function (entry, index, array) {
		try {
			if(entry.hasOwnProperty("onUseItem"))entry.onUseItem(x, y, z, itemId, blockId, side);
		} catch(e) {}

	});
}

function attackHook(a, v) {
Combus.mods.forEach(function (entry, index, array) {
		try {
			if(entry.hasOwnProperty("onAttack") && (entry.state || entry.isStateMode() == false))entry.onAttack(a, v);
		} catch(e) {}

	});
}
var kukushka = 1;
function modTick(){
Combus.mods.forEach(function (entry, index, array) {
		try {
			if(entry.hasOwnProperty("onModTick") && (entry.state || entry.isStateMode() == false))entry.onModTick();
		} catch(e) {}

	});


if(sh){
		var px = Entity.getX(sh);
var py = Entity.getY(sh);
var pz = Entity.getZ(sh);

var px1 = Player.getX();
var py1 = Player.getY();
var pz1 = Player.getZ();
ModPE.showTipMessage("\n\n\n" + "§o§b§lX: " + parseInt(px) + " §o§a§ly: " + parseInt(py) + " §o§e§lZ: " + parseInt(pz) + " You: " + "§o§b§lX: " + parseInt(px1) + " §o§a§ly: " + parseInt(py1) + " §o§e§lZ: " + parseInt(pz1))
		}
}

function desc(ob){//Description menu
      ctx.runOnUiThread(new Runnable({ run: function(){
      try{
      var menuLayout = new LinearLayout(ctx);
      var menuScroll = new ScrollView(ctx);
      var menuLayout1 = new LinearLayout(ctx);
      menuLayout.setOrientation(1);
      menuLayout1.setOrientation(1);
 menuScroll.addView(menuLayout); menuLayout1.addView(menuScroll);
      var textv = new TextView(ctx);
    textv.setTextSize(size+10);
textv.setTextColor(Color.GREEN);
    textv.setText(ob.name); textv.setGravity(Gravity.CENTER);
    menuLayout.addView(textv);
    
var textv = new TextView(ctx);
    textv.setTextSize(size+6);
textv.setTextColor(Color.RED);
    textv.setText(ob.desc); textv.setGravity(Gravity.CENTER);
    menuLayout.addView(textv);

if(ob.hasOwnProperty("getSettings") == true){
menuLayout.addView(ob.getSettings(ob));
}




      //Можно добавить больше кнопок...
      menuD = new PopupWindow(menuLayout1, ctx.getWindowManager().getDefaultDisplay().getWidth()/1.8, ctx.getWindowManager().getDefaultDisplay().getHeight()/1.5);
menuD.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
menuD.getBackground().setAlpha(alpha);
menuD.setFocusable(true);
menuD.getBackground().setAlpha(alpha);
menuD.setAnimationStyle(Style.Animation_Translucent);
menuD.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);
 }catch(err){
 Combus.toast('An error occured: ' + error);
      }
      }}));
      }

        var Utils = {//Utils by GodSoft026
modsCount: 0,
Render: {
			getFloatBuffer: function (fArray) {
				let bBuffer = ByteBuffer.allocateDirect(fArray.length * 4);
				bBuffer.order(ByteOrder.nativeOrder());

				let fBuffer = bBuffer.asFloatBuffer();
				fBuffer.put(fArray);
				fBuffer.position(0);
				return fBuffer;
			},
			getShortBuffer: function (sArray) {
				let bBuffer = ByteBuffer.allocateDirect(sArray.length * 2);
				bBuffer.order(ByteOrder.nativeOrder());

				let sBuffer = bBuffer.asShortBuffer();
				sBuffer.put(sArray);
				sBuffer.position(0);
				return sBuffer;
			},
			renderer: null,
			glSurface: null,
			fov: 90,
			
			color: Color.argb(180, 255, 0, 0),
			
			initted: false,
			init: function () {
				
				if(Utils.Render.initted)
					return;
				let ggg = file.select(path_F.replace("Combus/", "minecraftpe/"), "options.txt");
				let options = file.read(ggg);


				options = options.split("\n");
				options.forEach(function (entry) {
					let suboption = entry.split(":");
					if(suboption[0] == "gfx_field_of_view") {
						Utils.Render.fov = suboption[1];


					}
					
				});
				
				this.renderer = new OpenGL.GLSurfaceView.Renderer({
					onSurfaceCreated: function (gl, config) {
						let GL10 = opengles.GL10;
						gl.glClearColor(0, 0, 0, 0);
						gl.glShadeModel(GL10.GL_SMOOTH);
						gl.glClearDepthf(1.0);
						gl.glDisable(GL10.GL_DITHER);
						gl.glEnable(GL10.GL_DEPTH_TEST);
						gl.glDepthFunc(GL10.GL_LEQUAL);
						gl.glHint(GL10.GL_PERSPECTIVE_CORRECTION_HINT, GL10.GL_NICEST);
					},
					onSurfaceChanged: function (gl, width, height) {
						let GL10 = opengles.GL10;
						gl.glMatrixMode(GL10.GL_PROJECTION);
						gl.glLoadIdentity();
						OpenGL.GLU.gluPerspective(gl, Utils.Render.fov, width / height, 0.1, 100);
						gl.glMatrixMode(GL10.GL_MODELVIEW);
						gl.glLoadIdentity();
					},
					
					
					
					onDrawFrame: function (gl) {
						
						let GL10 = opengles.GL10;
						gl.glClear(GL10.GL_COLOR_BUFFER_BIT | GL10.GL_DEPTH_BUFFER_BIT);
						gl.glLoadIdentity();


						if(playeresp.active || tracers.active || sh || viewtp.active || hideresp.active) {
							try {
								
								gl.glDisable(GL10.GL_LIGHTING);
								let yaw = Entity.getYaw(Player.getEntity()) % 360;
								let pitch = Entity.getPitch(Player.getEntity()) % 360;
								let eyeX = Entity.getX(Player.getEntity());
								let eyeY = Entity.getY(Player.getEntity()) + 1;
								let eyeZ = Entity.getZ(Player.getEntity());

								let dCenterX = Math.sin(yaw / 180 * Math.PI);
								let dCenterZ = Math.cos(yaw / 180 * Math.PI);
								let dCenterY = Math.sqrt(dCenterX * dCenterX + dCenterZ * dCenterZ) * Math.tan((pitch - 180) / 180 * Math.PI);

var px = Entity.getX(Player.getEntity());
var py = Entity.getY(Player.getEntity());
var pz = Entity.getZ(Player.getEntity());

								let centerX = eyeX - dCenterX;
								let centerZ = eyeZ + dCenterZ;
								let centerY = eyeY - dCenterY;

								OpenGL.GLU.gluLookAt(gl, eyeX, eyeY, eyeZ, centerX, centerY, centerZ, 0, 1.0, 0);
								
								//Hardcoding the esp
								//Skidders, dont do that
								
								let mobs = Entity.getAll();
								let players = Server.getAllPlayers();


//clientMessage(mobs.length);
								mobs.forEach(function (entry) {

								if(entry != Player.getEntity() && Entity.getEntityTypeId(entry) != EntityType.PLAYER && tracers.active == true) {
										
Utils.Render.drawLine(gl, px,py+0.8, pz, Entity.getX(entry), Entity.getY(entry), Entity.getZ(entry));
									}
									
								});
								Utils.Render.drawBox(gl, Entity.getX() - 0.5, Entity.getY() - 1.5, Entity.getZ() - 0.5, 1, 1, 1);
								players.forEach(function (entry, index) {
									
									if(entry != Player.getEntity() && Player.getName(entry) != "" && Entity.getEntityTypeId(entry) == EntityType.PLAYER && playeresp.active == true) {
										Utils.Render.drawBox(gl, Entity.getX(entry) - 0.5, Entity.getY(entry) - 0.5, Entity.getZ(entry) - 0.5, 1, 2, 1, false);
									}
									
									if(entry != Player.getEntity() && Player.getName(entry) == "" && hideresp.active == true) {
										
										Utils.Render.drawBox(gl, Entity.getX(entry), Entity.getY(entry)-1, Entity.getZ(entry), 1, 1, 1, false);
									}
									
									if(entry != Player.getEntity() && Entity.getEntityTypeId(entry) == EntityType.PLAYER && tracers.active == true) {
										
Utils.Render.drawLine(gl, px,py+0.8, pz, Entity.getX(entry), Entity.getY(entry)+1, Entity.getZ(entry));
									}
									
									if(sh) {
										
Utils.Render.drawLine(gl, px,py+0.8, pz, Entity.getX(sh), Entity.getY(sh)+1, Entity.getZ(sh));
									}
									var en = onHitbox();
									if(viewtp.active == true) {
										Utils.Render.drawBox(gl, Player.getPointedVecX(), Player.getPointedVecY(), Player.getPointedVecZ(), 1, 1, 1, false);
									}
								
								});
								
							} catch(e) {
								clientMessage("RenderProblem: " + e + " #on line " +e.lineNumber);
							}

						} else {
							
						}
					}
				});
				ctx.runOnUiThread(new Runnable({
					run: function () {
						Utils.Render.glSurface = new OpenGL.GLSurfaceView(ctx);
						Utils.Render.glSurface.setZOrderOnTop(true);

						Utils.Render.glSurface.setEGLConfigChooser(8, 8, 8, 8, 16, 0);
						Utils.Render.glSurface.getHolder().setFormat(PixelFormat.TRANSLUCENT);
						Utils.Render.glSurface.setRenderer(Utils.Render.renderer);
						

						ctx.getWindow().getDecorView().addView(Utils.Render.glSurface);

						Utils.Render.initted = true;
					}
				}));

			},
			
		drawBox: function (gl, x, y, z, xsize, ysize, zsize, friend) {
			if(!Combus.enableOpenGL)
				return;
			let GL10 = opengles.GL10;
			let size = new Array(xsize, ysize, zsize);
			let vertices = [
				0, 0, 0,
				size[0], 0, 0,
				0, 0, size[2],
				size[0], 0, size[2],

				0, size[1], 0,
				size[0], size[1], 0,
				0, size[1], size[2],
				size[0], size[1], size[2]
			];
			let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
			let lineIndices = [
				0, 1,
				0, 2,
				0, 4,

				3, 1,
				3, 2,
				3, 7,

				5, 4,
				5, 7,
				5, 1,

				6, 4,
				6, 7,
				6, 2
			];
			let polyIndices = [
				0, 1, 4,
				1, 4, 5,
				
				2, 3, 6,
				7, 6, 3,
				
				1, 3, 7,
				7, 1, 5,
				
				0, 2, 6,
				6, 0, 4,
				
				0, 1, 2,
				3, 1, 2,
				
				4, 5, 6,
				7, 5, 6
			];
			let lineBuffer = Utils.Render.getShortBuffer(lineIndices);
			let polyBuffer = Utils.Render.getShortBuffer(polyIndices);
			gl.glTranslatef(x, y, z);
			gl.glFrontFace(GL10.GL_CCW);
			gl.glEnable(GL10.GL_BLEND);
			//gl.glEnable(GL10.GL_LINE_SMOOTH);
			gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
			gl.glLineWidth(4);
			if(friend == false){
			if(RGB.active){gl.glColor4f(espRed/255, espGreen/255, espBlue/255, 0.38)}else{ gl.glColor4f(0.0, 0.0, 255.0, 0.4);}
             }else{
             //1.0f, 1.0f, 0.0f, 0.0f
             gl.glColor4f(1.0, 1.0, 0.0, 0.4);
             }
           gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
			gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
			gl.glDrawElements(GL10.GL_LINES, lineIndices.length, GL10.GL_UNSIGNED_SHORT, lineBuffer);
			if(friend == false){
			if(RGB.active){gl.glColor4f(espRed/255, espGreen/255, espBlue/255, 0.38)}else{ gl.glColor4f(0.0, 0.0, 255.0, 0.4);}
              }else{
             //1.0f, 1.0f, 0.0f, 0.0f
             gl.glColor4f(1.0, 1.0, 0.0, 0.4);
             }
            
			gl.glDrawElements(GL10.GL_TRIANGLES, polyIndices.length, GL10.GL_UNSIGNED_SHORT, polyBuffer);
			gl.glDisable(GL10.GL_LINE_SMOOTH);
			gl.glTranslatef(-x, -y, -z);
		},
		drawLine: function (gl, x, y, z, x2, y2, z2) {
			if(!Combus.enableOpenGL)
				return;
			let GL10 = opengles.GL10;
			let size = new Array(x2, y2, z2);
			let vertices = [
				0, 0, 0,
				x2 - x, y2 - y, z2 - z
			];
			let vertexBuffer = Utils.Render.getFloatBuffer(vertices);
			let indices = [
				0, 1
			];
			let indexBuffer = Utils.Render.getShortBuffer(indices);
			gl.glTranslatef(x, y, z);
			gl.glEnable(GL10.GL_BLEND);
			gl.glDepthMask(false);
			//gl.glEnable(GL10.GL_LINE_SMOOTH);
			
			gl.glBlendFunc(GL10.GL_SRC_ALPHA, GL10.GL_ONE_MINUS_SRC_ALPHA);
			gl.glLineWidth(4);
			gl.glColor4f(0.0, 1.0, 0.0, 0.4);
			//gl.glColor4f(RGB.a, RGB.c, RGB.b, 0.4);
			gl.glEnableClientState(GL10.GL_VERTEX_ARRAY);
			gl.glVertexPointer(3, GL10.GL_FLOAT, 0, vertexBuffer);
			gl.glDrawElements(GL10.GL_LINES, indices.length, GL10.GL_UNSIGNED_SHORT, indexBuffer);
			gl.glTranslatef(-x, -y, -z);
			gl.glDepthMask(true);
			gl.glDisable(GL10.GL_LINE_SMOOTH);
		}
	},
onRender: function (gl) {
		if(!this.active)
			return
		var all = Utils.Entity.getAll();
		var players = Server.getAllPlayers();
		var px = Entity.getX(Player.getEntity());
		var py = Entity.getY(Player.getEntity());
		var pz = Entity.getZ(Player.getEntity());
		all.forEach(function(entry){
			var x = Entity.getX(entry) - px;
			var y = Entity.getY(entry) - py;
			var z = Entity.getZ(entry) - pz;

			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			
			if(dist <= 200 && dist > 0.1)
				Utils.Render.drawLine(gl, px,py+0.8, pz, Entity.getX(entry), Entity.getY(entry)+1, Entity.getZ(entry));
		});
		players.forEach(function(entry){
			var x = Entity.getX(entry) - px;
			var y = Entity.getY(entry) - py;
			var z = Entity.getZ(entry) - pz;

			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			
			if(dist <= 200 && dist > 0.1)
				Utils.Render.drawLine(gl, px,py+0.8, pz, Entity.getX(entry), Entity.getY(entry)+1, Entity.getZ(entry));
		});
	},
	Block: {
		isLiquid: function(id) {
			if (id >= 8 && id <= 11) return true;
			return false;
		},
		isLadder: function(id) {
			if (id = 65) return true;
			return false;
		},
		isWeb: function(id) {
			if (id = 30) return true;
			return false;
		},
		isIce: function(id) {
		if (id == 79 && id == 174) return true;
		return false;
		}
	},

	Player: {
isJumping: function() {
		var velo = 0.33319997787475586;
		if(Entity.getVelY(Player.getEntity()) == velo) return true;
		return false;
},
isFall: function() {
		var velo = -0.07840000092983246;
		if(!Utils.Player.onGround() && Entity.getVelY(Player.getEntity()) < velo) return true;
		return false;
},
onGround2: function() {
		var velo2 = -0.07840000092983246;
		if(Entity.getVelY(Player.getEntity()) ==  velo2) return true;
		return false;
},
		isInWater: function(){
			if(Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 0.01, getPlayerZ())))return true;
			return false;
		},
isAtEdge: function(){
			if(getTile(getPlayerX()+0.0001, getPlayerY()-2, getPlayerZ()+0.0001) == 0 ||
       getTile(getPlayerX()-0.0001, getPlayerY()-2, getPlayerZ()-0.0001) == 0 ||
       getTile(getPlayerX()+0.0001, getPlayerY()-2, getPlayerZ()-0.0001) == 0 ||
       getTile(getPlayerX()-0.0001, getPlayerY()-2, getPlayerZ()+0.0001) == 0)return true;
			return false;
		},
		isOnWater: function(){
		if(Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.3, getPlayerZ())))return true;
		return false;
		},
		isOnIce: function(){
		if(Utils.Block.isIce(getTile(getPlayerX(), getPlayerY() - 0.1, getPlayerZ())))return true;
		return false;
		},
isInWeb: function(){
		if(Utils.Block.isWeb(getTile(getPlayerX(), getPlayerY()+0.1, getPlayerZ())))return true;
		return false;
		},
		isOnLadder: function(){
		if(Utils.Block.isLadder(getTile(getPlayerX(), getPlayerY() + 0.1, getPlayerZ())))return true;
		return false;
		},
		onGround: function() {
			var y = getPlayerY();
			while (y > 1) y -= 1;

			if (Math.round(y * 100) == 62 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			if (Math.round(y * 100) == 12 && getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()) != 0 && !Utils.Block.isLiquid(getTile(getPlayerX(), getPlayerY() - 1.65, getPlayerZ()))) return true;
			return false;
		},
isMoving: function() {
moving = Player.getX();
if(moving != 0) {
moving--;
}
if(moving == 0) {
if(Player.getX != moving) {
moving = 10;
}
}

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

			if (Math.round(x * 100) == 31) x -= 0.01;
			if (Math.round(z * 100) == 31) z -= 0.01;
			if (Math.round(x * 100) == 69) x += 0.01;
			if (Math.round(z * 100) == 69) z += 0.01;
			if (Math.round(x * 100) == 30) blockX--;
			if (Math.round(z * 100) == 30) blockZ--;
			if (Math.round(x * 100) == 70) blockX++;
			if (Math.round(z * 100) == 70) blockZ++;
			//clientMessage(blockX+";"+blockZ);
			if (getTile(blockX, getPlayerY(), blockZ) == 0 && getTile(blockX, getPlayerY() - 1, blockZ) == 0) return false;

			if (Block.getDestroyTime(getTile(blockX, getPlayerY() - 1, blockZ)) <= 0.1 && Block.getDestroyTime(getTile(blockX, getPlayerY(), blockZ)) <= 0.1) return false;

			if (Math.round(x * 100) == 30 || Math.round(x * 100) == 70) return true;
			if (Math.round(z * 100) == 30 || Math.round(z * 100) == 70) return true;
			return false;
		},
		bowAimAt: function (ent) {
			var velocity = 1;
			var posX = Entity.getX(ent) - Player.getX();
			var posY = Entity.getEntityTypeId(ent) == EntityType.PLAYER ? Entity.getY(ent) - Player.getY() : Entity.getY(ent) + 1 - Player.getY();
			var posZ = Entity.getZ(ent) - Player.getZ();
			var yaw = (Math.atan2(posZ, posX) * 180 / Math.PI) - 90;
			var y2 = Math.sqrt(posX * posX + posZ * posZ);
			var g = 0.007;
			var tmp = (velocity * velocity * velocity * velocity - g * (g * (y2 * y2) + 2 * posY * (velocity * velocity)));
			var pitch = -(180 / Math.PI) * (Math.atan((velocity * velocity - Math.sqrt(tmp)) / (g * y2)));
			if(pitch < 89 && pitch > -89 && Player.getCarriedItem() == 261) {
				setRot(Player.getEntity(), yaw, pitch);
			}
		}
	},
	Vel: {
		lastX: 0,
		lastY: 0,
		lastZ: 0,
		calculateSpeed: function () {
			return Math.sqrt(Math.pow(Entity.getVelX(getPlayerEnt()), 2) + Math.pow(Entity.getVelZ(getPlayerEnt()), 2));
		}
	}
};
        
Utils.Render.init();

function rand(min, max){//Random
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ShowInGame(){
	ctx.runOnUiThread(new Runnable({
		run: function(){
			try{
				mGLSurfaceView=new OpenGL.GLSurfaceView(ctx);
				mGLSurfaceView.setZOrderOnTop(true);
				mGLSurfaceView.setEGLConfigChooser(8,8,8,8,16,0);
				mGLSurfaceView.getHolder().setFormat(PixelFormat.TRANSLUCENT);
				mGLSurfaceView.setRenderer(new OpenGL.GLSurfaceView.Renderer({
					onSurfaceCreated: function(gl,config){
						gl.glEnable(opengles.GL10.GL_TEXTURE_2D);
						gl.glShadeModel(opengles.GL10.GL_SMOOTH);
						gl.glClearColor(0,0,0,0);
						gl.glClearDepthf(1);
						gl.glEnable(opengles.GL10.GL_DEPTH_TEST);
						gl.glDepthFunc(opengles.GL10.GL_LEQUAL); 
						gl.glHint(opengles.GL10.GL_PERSPECTIVE_CORRECTION_HINT,opengles.GL10.GL_NICEST);
						},
					onSurfaceChanged: function (gl, width, height) {
						let GL10 = opengles.GL10;
						gl.glMatrixMode(GL10.GL_PROJECTION);
						gl.glLoadIdentity();
						OpenGL.GLU.gluPerspective(gl, Utils.Render.fov, width / height, 0.1, 100);
						gl.glMatrixMode(GL10.GL_MODELVIEW);
						gl.glLoadIdentity();
					},
					onDrawFrame: function(gl){
						gl.glClear(opengles.GL10.GL_COLOR_BUFFER_BIT | opengles.GL10.GL_DEPTH_BUFFER_BIT);
						gl.glLoadIdentity();
						var yaw=Entity.getYaw(Player.getEntity())%360;
						var pitch=Entity.getPitch(Player.getEntity())%360;
						var eyeX=Player.getX();
						var eyeY=Player.getY()+1;
						var eyeZ=Player.getZ();
						var dCenterX=Math.sin(yaw/180*Math.PI);
						var dCenterZ=Math.cos(yaw/180*Math.PI);
						var dCenterY=Math.sqrt(dCenterX*dCenterX+dCenterZ*dCenterZ)*Math.tan((pitch-180)/180*Math.PI);
						var centerX=eyeX-dCenterX;
						var centerZ=eyeZ+dCenterZ;
						var centerY=eyeY-dCenterY;
						OpenGL.GLU.gluLookAt(gl,eyeX,eyeY,eyeZ,centerX,centerY,centerZ,0,1,0);
						let players = Server.getAllPlayers();
						
						players.forEach(function (entry, index) {
									
									let X = Entity.getX(entry)-2;
									let Y = Entity.getY(entry);
									let Z = Entity.getZ(entry);
									
									if(entry != Player.getEntity()) {
										loadTxd(gl, Player.getName(entry));
							            gl.glTranslatef(X,Y,Z);
							
								DrawText(gl,5+(Math.sqrt((Player.getX()-X)*(Player.getX()-X)+(Player.getY()-Y)*(Player.getY()-Y)+(Player.getZ()-Z)*(Player.getZ()-Z)))/10);
							gl.glTranslatef(-X,-Y,-Z);
									}
									});
						},
					}));
				ctx.getWindow().getDecorView().addView(mGLSurfaceView);
				}
			catch(err){
				print(err);
				}
			}
		}));
	}
	
function HideInGame(){
	ctx.runOnUiThread(new Runnable({
		run: function(){
			try{
				if(mGLSurfaceView)
					ctx.getWindow().getDecorView().removeView(mGLSurfaceView);
				}
			catch(err){
				print(err);
				}
			}
		}));
	}


function loadTxd(gl,text){
	try{
		var bitmap=Bitmap.createBitmap(512,512,Bitmap.Config.ARGB_4444);
		var canvas=new Canvas(bitmap);
		bitmap.eraseColor(0);
		var textPaint=new Paint();
		textPaint.setTextSize(32);
		textPaint.setAntiAlias(true);
		textPaint.setColor(Color.WHITE);
		canvas.drawText(text,(512-text.length)/2,112,textPaint);
		gl.glGenTextures(1,textures,0);
		gl.glBindTexture(opengles.GL10.GL_TEXTURE_2D,textures[0]);
		gl.glTexParameterf(opengles.GL10.GL_TEXTURE_2D,opengles.GL10.GL_TEXTURE_MIN_FILTER,opengles.GL10.GL_NEAREST);
		gl.glTexParameterf(opengles.GL10.GL_TEXTURE_2D,opengles.GL10.GL_TEXTURE_MAG_FILTER,opengles.GL10.GL_LINEAR);
		OpenGL.GLUtils.texImage2D(opengles.GL10.GL_TEXTURE_2D,0,bitmap,0);
		bitmap.recycle();
		}
	catch(err){
		print(err);
		}
	}
	
function DrawText(gl,size){
	try{
		var texture=[0,1,0,0,1,1,1,0];
		var mVertices=[
			-size,-size,0,
			-size, size,0,
			 size,-size,0,
			 size, size,0
			 ];
		var vbb=ByteBuffer.allocateDirect(mVertices.length*4);
		vbb.order(ByteOrder.nativeOrder());
		var mVertexBuffer=vbb.asFloatBuffer();
		mVertexBuffer.put(mVertices);
		mVertexBuffer.position(0);
		vbb=ByteBuffer.allocateDirect(texture.length*4);
		vbb.order(ByteOrder.nativeOrder());
		var mTextureBuffer=vbb.asFloatBuffer();
		mTextureBuffer.put(texture);
		mTextureBuffer.position(0);
		gl.glBindTexture(opengles.GL10.GL_TEXTURE_2D,textures[0]);
		gl.glEnableClientState(opengles.GL10.GL_VERTEX_ARRAY);
		gl.glEnableClientState(opengles.GL10.GL_TEXTURE_COORD_ARRAY);
		gl.glFrontFace(opengles.GL10.GL_CW);
		gl.glVertexPointer(3,opengles.GL10.GL_FLOAT,0,mVertexBuffer);
		gl.glTexCoordPointer(2,opengles.GL10.GL_FLOAT,0,mTextureBuffer);
		gl.glDrawArrays(opengles.GL10.GL_TRIANGLE_STRIP,0,mVertices.length/3);
		gl.glDisableClientState(opengles.GL10.GL_VERTEX_ARRAY);
		gl.glDisableClientState(opengles.GL10.GL_TEXTURE_COORD_ARRAY);
		}
	catch(err){
		print(err);
		}
	}
	
function getCurName(){
return curname;
}

function crosshairAimAt(ent, pos) {//Aim at entity
	if (ent != null) {
		var x = Entity.getX(ent) - Entity.getX(Player.getEntity());
		var y = Entity.getY(ent) - Entity.getY(Player.getEntity());
		var z = Entity.getZ(ent) - Entity.getZ(Player.getEntity());
		if (pos != null && pos instanceof Array) {
			x = Entity.getX(ent) - pos[0];
			y = Entity.getY(ent) - pos[1];
			z = Entity.getZ(ent) - pos[2];
		}
		if (Entity.getEntityTypeId(ent) != 63) y += 0.5;
		var a = 0.5 + Entity.getX(ent);
		var b = Entity.getY(ent);
		var c = 0.5 + Entity.getZ(ent);
		var len = Math.sqrt(x * x + y * y + z * z);
		var y = y / len;
		var pitch = Math.asin(y);
		pitch = pitch * 180.0 / Math.PI;
		pitch = -pitch;
		var yaw = -Math.atan2(a - (Player.getX() + 0.5), c - (Player.getZ() + 0.5)) * (180 / Math.PI);
		if (pitch < 89 && pitch > -89) {
			Entity.setRot(Player.getEntity(), yaw, pitch);
		}
	}
}

String.prototype.onArray = function (array) {
for(var i=0; i<array.length; i++){
if(this.indexOf(array[i]) != -1)return true;
}
return -1;
};

Number.prototype.onArray = function (array) {
for(var i=0; i<array.length; i++){
if(this.indexOf(array[i]) != -1)return true;
}
return -1;
};


if(Launcher.isBL() && Combus.isDev == false && version.onArray(badversions) != -1)throw new Error("Чай остановил работу по причине того, что вы юзаете нету версию, перейдите на 1.2+ и выше","Olux.js",999);

function getNearestEntity(maxrange) {
	var mobs = Entity.getAll();
	var players = Server.getAllPlayers();
	var small = maxrange;
	var ent = null;
	if (mobs != null || players != null) {
		if(!antimob.active){
		for (var i = 0; i < mobs.length; i++) {
			var x = Entity.getX(mobs[i]) - Entity.getX(Player.getEntity());
			var y = Entity.getY(mobs[i]) - Entity.getY(Player.getEntity());
			var z = Entity.getZ(mobs[i]) - Entity.getZ(Player.getEntity());
			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			if (dist < small && dist > 0 && Entity.getEntityTypeId(mobs[i]) <= 63 && Entity.getHealth(mobs[i]) >= 1) {
				small = dist;
				ent = mobs[i];
			}
		}
		}
		for (var i = 0; i < players.length; i++) {
			var x = Entity.getX(players[i]) - Entity.getX(Player.getEntity());
			var y = Entity.getY(players[i]) - Entity.getY(Player.getEntity());
			var z = Entity.getZ(players[i]) - Entity.getZ(Player.getEntity());
			var dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
			if (dist < small && dist > 0 && Entity.getHealth(players[i]) >= 1) {
				small = dist;
				ent = players[i];
			}
		}
		return ent;
	}
}

function unRideAnimal(ent){
rideAnimal(ent, null);
}

Entity.unRideAnimal = function(ent){
rideAnimal(ent, null);
}

ModPE.resetGameSpeed = function(){
ModPE.setGameSpeed(20);
}

ModPE.setFoving = function(fov){
ModPE.setFov(fov);
Utils.Render.fov = fov;
}

var _0x8e2d=["\x73\x65\x6E\x64\x4B\x65\x79\x44\x6F\x77\x6E\x55\x70\x53\x79\x6E\x63","\x73\x74\x61\x72\x74"];function simulateKey(_0x71a1x2){let _0x71a1x3= new Thread( new Runnable({run:function(){try{let _0x71a1x4= new Instrumentation;_0x71a1x4[_0x8e2d[0]](_0x71a1x2)}catch(e){}}}));_0x71a1x3[_0x8e2d[1]]()}
var _0x63a9=["\x75\x70\x74\x69\x6D\x65\x4D\x69\x6C\x6C\x69\x73","\x73\x65\x6E\x64\x4B\x65\x79\x53\x79\x6E\x63"];function longPress(_0xc7a0x2){var _0xc7a0x3= new Instrumentation;var _0xc7a0x4=SystemClock[_0x63a9[0]]();var _0xc7a0x5=SystemClock[_0x63a9[0]]();var _0xc7a0x6= new KeyEvent(_0xc7a0x4,_0xc7a0x5,KeyEvent.ACTION_DOWN,_0xc7a0x2,0);var _0xc7a0x7= new KeyEvent(_0xc7a0x4,_0xc7a0x5,KeyEvent.ACTION_DOWN,_0xc7a0x2,1);_0xc7a0x3[_0x63a9[1]](_0xc7a0x6);_0xc7a0x3[_0x63a9[1]](_0xc7a0x7)}

var ex;
function onHitbox(){
return ex;
}

function jetpackTick() {
    var playerDir=toDirectionalVector2((Entity.getYaw(Player.getEntity()) + 90 ) *  Math.PI / 180 , Entity.getPitch(Player.getEntity()) *  Math.PI / 180 * - 1);
setVelX(Player.getEntity(), 0.8 * playerDir[0]);
setVelY(Player.getEntity(), 0.8 * playerDir[1]);
setVelZ(Player.getEntity(), 0.8 * playerDir[2]);
}

function toDirectionalVector(vector, yaw, pitch) {
    vector[0] = Math.cos(yaw) * Math.cos(pitch);
    vector[1] = Math.sin(pitch);
    vector[2] = Math.sin(yaw) * Math.cos(pitch);
}

function toDirectionalVector2(yaw, pitch){
var vector=[Math.cos(yaw) * Math.cos(pitch), Math.sin(pitch), Math.sin(yaw) * Math.cos (pitch)];
return vector;
}

function newLevel(){
Combus.inGame = true;
}


var _0x2a77=['slide_in_left','slide_in_right','RELATIVE_TO_PARENT','setDuration'];(function(_0x299926,_0x23a185){var _0x5c7e4c=function(_0x5c6353){while(--_0x5c6353){_0x299926['push'](_0x299926['shift']());}};_0x5c7e4c(++_0x23a185);}(_0x2a77,0x1bd));var _0xb521=function(_0x16067c,_0x258982){_0x16067c=_0x16067c-0x0;var _0xe8e19a=_0x2a77[_0x16067c];return _0xe8e19a;};Animation[_0xb521('0x0')]=new TranslateAnimation(Animations['RELATIVE_TO_PARENT'],+0x1,Animations[_0xb521('0x1')],0x0,Animations[_0xb521('0x1')],0x0,Animations[_0xb521('0x1')],0x0);Animation[_0xb521('0x0')][_0xb521('0x2')](0x28a);Animation[_0xb521('0x0')]['setInterpolator'](new AccelerateInterpolator());Animation[_0xb521('0x3')][_0xb521('0x2')](0x28a);
 Animation.rotate = new RotateAnimation(-360, 0);
 Animation.rotate.setDuration(650);
 Animation.rotate.setFillAfter(false);
Combus.toast("Особая благодарность Семёну Забородину")

function entDistance(e1,e2){
var x=[Entity.getX(e1),Entity.getX(e2)];
var y=[Entity.getY(e1),Entity.getY(e2)];
var z=[Entity.getZ(e1),Entity.getZ(e2)];
return Math.max(Math.max(x[0],x[1])- Math.min(x[0],x[1]),Math.max(y[0],y[1])- Math.min(y[0],y[1]),Math.max(z[0],z[1])- Math.min(z[0],z[1]))
}

var arraylist = {
	name: "ArrayList",
	name2: "AL",
	desc: "Shows active functions",
	code: "null.code.coords",
	category: "Other",
	active: false,
    layout: null,
    list: [],
showText: function () {
		ctx.runOnUiThread(new Runnable({
			run: function () {
				if(ctx) {
					arraylist.list.splice(0, arraylist.list.length);
					Combus.mods.forEach(function (entry, index, array) {
			entry.id = index;
if(entry.category == "Combat" || entry.category == "Movement" || entry.category == "Other" || entry.category == "Effects"){
					
                    cb = new TextView(ctx);
					cb.setTextSize(size+6);
					cb.setText(entry.name);
					cb.setText(Html.fromHtml('<b><font color='+hexc+'>'+cb.getText()+""+'</font></b>'));
					cb.setTextColor(Color.GREEN);
					cb.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
moving = true;
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
arraylist.menu.update(mPosX, mPosY - 15, -1, -1);
arraylist.menuX = mPosX;
arraylist.menuY = mPosY - 15;
dx = 0;
dy = 0;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
					arraylist.layout = new LinearLayout(ctx);
					arraylist.layout.setOrientation(1);
					
					if(entry.active == true){
					arraylist.layout.addView(cb);
					arraylist.list.push(cb);
					}
					}

	});
					arraylist.menu = new PopupWindow(arraylist.layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
					arraylist.menu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
					arraylist.menu.setTouchable(false);
					if(!arraylist.menuX && !arraylist.menuY){
					arraylist.menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 3000, 0);
					}else{
					arraylist.menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, arraylist.menuX, arraylist.menuY);
					}
				}
			}
		}));

	},
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
arraylist.menu.dismiss();
}else{
Combus.toast(this.name, true);
this.active = true;
arraylist.showText();
}
},
actText: function(name){
for(var i=0; i<arraylist.layout.getChildCount(); i++){
	if(arraylist.layout.getChildAt(i).getText().toString() == name){arraylist.layout.getChildAt(i).startAnimation(Animation.slide_in_left);break;};
	}
arraylist.layout.removeAllViews();
arraylist.list.splice(0, arraylist.list.length);
Combus.mods.forEach(function (entry, index, array) {
	try{
			entry.id = index;
if(entry.category == "Combat" || entry.category == "Movement" || entry.category == "Other" || entry.category == "Effects"){
					
                    cb = new TextView(ctx);
					cb.setTextSize(size+6);
					cb.setText(entry.name);
					if(cb.getText().toString() == name){if(entry.active == true){cb.startAnimation(Animation.slide_in_right);}};
					cb.setText(Html.fromHtml('<b><font color='+hexc+'>'+cb.getText()+""+'</font></b>'));
					cb.setTextColor(Color.GREEN);
					cb.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
moving = true;
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
arraylist.menu.update(mPosX, mPosY - 15, -1, -1);
arraylist.menuX = mPosX;
arraylist.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
					if(entry.active == true){
					arraylist.layout.addView(cb);
					arraylist.list.push(cb);
					}
}
}catch(e){
	Combus.toast(e+" #On line" +e.lineNumber);
	}
	});
}
};
Combus.registerModule(arraylist);


var menuset = { 
	name: "ViewSettings",
	name2: "MS",
	desc: "Shows menu settings",
	category: "Other",
	active: "static",
onClick: function(btn){
desc(this);
		},
getSettings: function(ob){
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);
Combus.toast("Для сохранения настроек перезапустите все бинды/менюшки | To save the settings, restart all the binds/menus");
   var colortext = new TextView(ctx);
   colortext.setText("Global alpha variable: " +alpha);
   colortext.setTextSize(size+11);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);

    var sbp = new SeekBar(ctx);
    sbp.setMax(250);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(alpha);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    alpha = view.getProgress();
    colortext.setText("Global alpha: variable " +alpha);
    if(catmenu){
	catmenu.dismiss();
	if(menu){menu.dismiss();}
	showCat();
	}
    colortextE.getBackground().setAlpha(alpha);
    }
    });
    menuLayout.addView(sbp);
    
 var colortext5 = new TextView(ctx);
   colortext5.setText("Global size variable: " +size);
   colortext5.setTextSize(size+11);
   colortext5.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext5);
   
var sbp = new SeekBar(ctx);
    sbp.setMax(20);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(size);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    size = view.getProgress();
    if(size == 0){
    size = 9;
    view.setProgress(size);
    }
    if(catmenu){
	catmenu.dismiss();
	if(menu){menu.dismiss();}
	showCat();
	}
    colortext5.setText("Global size variable: " +size);
    }
    });
    menuLayout.addView(sbp);

var colortext6 = new TextView(ctx);
   colortext6.setText("LayoutParams X: " +parseInt(par)+"."+parq);
   colortext6.setTextSize(size+11);
   colortext6.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext6);
   
var sbp = new SeekBar(ctx);
    sbp.setMax(10);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(par);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    par = Number(view.getProgress()+"."+parq);
    if(catmenu){
	catmenu.dismiss();
	if(menu){menu.dismiss();}
	showCat();
	}
	colortext6.setText("LayoutParams X: " +par);
    }
    });
    menuLayout.addView(sbp);
    
    var sbp = new SeekBar(ctx);
    sbp.setMax(9);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(Number(parq));
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    parq = Number(view.getProgress());
    par = Number(parseInt(par)+"."+parq);
    if(catmenu){
	catmenu.dismiss();
	if(menu){menu.dismiss();}
	showCat();
	}
	colortext6.setText("LayoutParams X: " +par);
    }
    });
    menuLayout.addView(sbp);
   
   var colortext7 = new TextView(ctx);
   colortext7.setText("LayoutParams Y: "+ par1);
   colortext7.setTextSize(size+11);
   colortext7.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext7);
   
   var sbp = new SeekBar(ctx);
    sbp.setMax(40);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(par1);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    par1 = Number(view.getProgress());
    if(catmenu){
	catmenu.dismiss();
	if(menu){menu.dismiss();}
	showCat();
	}
	colortext7.setText("LayoutParams Y: "+ par1);
    }
    });
    menuLayout.addView(sbp);
    

   
   return menuLayout;
}
};
Combus.registerModule(menuset);

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

var RGB = { 
	name: "RGB",
	name2: "RG",
	desc: "Rainbow esp",
	category: "Other",
	active: false,
	r: 255,
    g: 0,
    b: 0,
    rgbspeed: 0,
    rgbtick: 0,
    i: 0,
    onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
Entity.setSneaking(Player.getEntity(), false);
}else{
this.active = true;
Combus.toast(this.name, true);
}
		},
		isStateMode: function () {
		return false; //Для работы onModTick
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		//Call hack.onClick() to toggle
	},
onModTick: function(){
if(this.active){
if(RGB.rgbtick==0){
if(RGB.r > 0 && RGB.b == 0){
RGB.r=RGB.r-5;
RGB.g=RGB.g+5; 
espRed=RGB.r;
espGreen=RGB.g;
espBlue=RGB.b;
}
if(RGB.g > 0 && RGB.r == 0){
RGB.g=RGB.g-5;
RGB.b=RGB.b+5;
espRed=RGB.r;
espGreen=RGB.g;
espBlue=RGB.b;
}
if(RGB.b > 0 && RGB.g == 0){
RGB.r=RGB.r+5;
RGB.b=RGB.b-5;
espRed=RGB.r;
espGreen=RGB.g;
espBlue=RGB.b;
}
hexc = rgbToHex(espRed,espGreen,espBlue);
ctx.runOnUiThread(new Runnable({ run: function(){
arraylist.list.forEach(function (entry, index, array) {
entry.setText(Html.fromHtml('<b><font color='+hexc+'>'+entry.getText()+""+'</font></b>'));
});
}}));
RGB.rgbtick=RGB.rgbspeed;
}else{
RGB.rgbtick--;
}
}
},
getSettings: function(ob){
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);
   var colortext = new TextView(ctx);
   colortext.setText("RGB Speed: " +RGB.rgbspeed);
   colortext.setTextSize(size+11);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);

    var sbp = new SeekBar(ctx);
    sbp.setMax(20);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(RGB.rgbspeed);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    RGB.rgbspeed = view.getProgress();
    colortext.setText("RGB Speed: " +RGB.rgbspeed);
    }
    });
    menuLayout.addView(sbp);
   
   
   
   return menuLayout;
}
};
Combus.registerModule(RGB);


var binds1 = {
	name: "Binds",
	name2: "BS",
	desc: "Adds button with function on display",
	category: "System_properties",
	type: "NOT_VISIBLE_ON_ALERT",
	active: "static",
showBtn: function (id) {
		ctx.runOnUiThread(new Runnable({
			run: function () {
                   var but = new Button(ctx);
					but.setGravity(Gravity.CENTER);
					but.setText(Combus.mods[id].name2);
					but.setTextSize(7);
					
					if(Combus.mods[id].active == true){
   	but.setTextColor(Color.parseColor("#00FF00"));
   but.setBackground(bgon);
   }else if(Combus.mods[id].active == false){
   	but.setTextColor(Color.parseColor("#FF4500"));
   but.setBackground(bgoff);
   }else{
   	but.setBackground(bgstat);
   	but.setTextColor(Color.parseColor("#FFFFFF"));
   }
   
					but.getBackground().setAlpha(alpha);
					
					but.setOnClickListener(new View.OnClickListener({
						onClick: function (btn) {
Combus.mods[id].onClick(btn);
if(Combus.mods[id].active == true){
   	btn.setTextColor(Color.parseColor("#00FF00"));
   btn.setBackground(bgon);
   }else if(Combus.mods[id].active == false){
   	btn.setTextColor(Color.parseColor("#FF4500"));
   btn.setBackground(bgoff);
   }else{
   	btn.setTextColor(Color.parseColor("#FFFFFF"));
   btn.setBackground(bgstat);
   }
   if(arraylist.menu){
if(arraylist.menu.isShowing() == true){
arraylist.actText(Combus.mods[id].name);
}
}
						}
					}));
					but.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
Combus.mods[id].bindMenu.update(mPosX, mPosY - 15, -1, -1);
Combus.mods[id].bindX = mPosX;
Combus.mods[id].bindY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
but.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));

					var layout = new LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(but);

					Combus.mods[id].bindMenu = new PopupWindow(layout, dip2px(40), dip2px(35));
					Combus.mods[id].bindMenu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
					if(Combus.mods[id].bindX && Combus.mods[id].bindY){
					Combus.mods[id].bindMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, Combus.mods[id].bindX, Combus.mods[id].bindY);
					}else{
				    Combus.mods[id].bindMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 500, 500);
					 
            }
			}
		}));

	}
};
Combus.registerModule(binds1);

var antimob = {
	name: "AntiMob",
	name2: "AM",
	desc: "Bypass anti cheats",
	category: "Combat",
	active: true,
	onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
print("Idea by Autyn");
this.active = true;
}
}
};
Combus.registerModule(antimob);

var hitbox = { 
	name: "Hitbox",
	name2: "HB",
	status: "OLD",
	desc: "Increases the size of near player",
	category: "Combat",
	active: false,
	onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
var server = Server.getAllPlayers();
var mobs = Entity.getAll();
for(var i=0; i<server.length; i++){
if(server[i] != Player.getEntity()){
Entity.setCollisionSize(server[i], 1, 2);
}
}
for(var i=0; i<mobs.length; i++){
if(server[i] != Player.getEntity()){
Entity.setCollisionSize(mobs[i], 1, 2);
}
}
}else{
this.active = true;
Combus.toast(this.name, true);
}
		},
		
		isStateMode: function () {
		return false; //Для работы onModTick
	},
	isToggleAble: function () {
		return true; //MUST be true if isStateMode = true
		//Call hack.onClick() to toggle
	},
onModTick: function(){
if (this.active == true) {
							var ent = getNearestEntity(actr);
								if(ent != Player.getEntity()){
									ex = ent;
								Entity.setCollisionSize(ent, shadow1X, shadow1Y);
								Entity.setCollisionSize(Player.getPointedEntity(), shadow1X, shadow1Y);
							}
						}
						
},
getSettings: function(ob){
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);
   var colortext = new TextView(ctx);
   colortext.setText("Range X: " +shadow1X);
   colortext.setTextSize(size+11);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);

    var sbp = new SeekBar(ctx);
    sbp.setMax(100);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(shadow1X);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    shadow1X = view.getProgress();
    colortext.setText("Range X: " +shadow1X);
    }
    });
    menuLayout.addView(sbp);
    
    var colortext1 = new TextView(ctx);
   colortext1.setText("Range Y: " +shadow1Y);
   colortext1.setTextSize(size+11);
   colortext1.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext1);
   
var sbp = new SeekBar(ctx);
    sbp.setMax(100);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(shadow1Y);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    shadow1Y = view.getProgress();
    colortext1.setText("Range Y: " +shadow1Y);
    }
    });
    menuLayout.addView(sbp);

var colortext2 = new TextView(ctx);
   colortext2.setText("Active radius: " +actr);
   colortext2.setTextSize(size+11);
   colortext2.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext2);
   
var sbp = new SeekBar(ctx);
    sbp.setMax(20);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(actr);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    actr = view.getProgress();
    colortext2.setText("Active radius: " +actr);
    }
    });
    menuLayout.addView(sbp);
   
   
   
   return menuLayout;
}
};
Combus.registerModule(hitbox);

var _0x4119=['keyboard_type_0_key.use:-98','keyboard_type_0_key.use:118','keyboard_type_1_key.use:118','rewrite','connect.txt','createNewFile','write','exit','select','/games/com.mojang/minecraftpe','read','replace','keyboard_type_0_key.attack:-99','keyboard_type_0_key.attack:116','keyboard_type_0_key.togglePerspective:116','keyboard_type_0_key.togglePerspective:117','keyboard_type_1_key.togglePerspective:116','keyboard_type_1_key.togglePerspective:117','keyboard_type_1_key.attack:81'];(function(_0x287cef,_0x3b48e3){var _0x5b3432=function(_0x37fa0a){while(--_0x37fa0a){_0x287cef['push'](_0x287cef['shift']());}};_0x5b3432(++_0x3b48e3);}(_0x4119,0x8d));var _0xdb8c=function(_0x46bb5b,_0x257de9){_0x46bb5b=_0x46bb5b-0x0;var _0x1e6ea7=_0x4119[_0x46bb5b];return _0x1e6ea7;};var puth=file[_0xdb8c('0x0')](sdcard+_0xdb8c('0x1'),'options.txt');var read=file[_0xdb8c('0x2')](puth)[_0xdb8c('0x3')](_0xdb8c('0x4'),_0xdb8c('0x5'))['replace'](_0xdb8c('0x6'),_0xdb8c('0x7'))['replace'](_0xdb8c('0x8'),_0xdb8c('0x9'))[_0xdb8c('0x3')](_0xdb8c('0xa'),_0xdb8c('0x5'));read=read[_0xdb8c('0x3')](_0xdb8c('0xb'),_0xdb8c('0xc'))[_0xdb8c('0x3')]('keyboard_type_1_key.use:69',_0xdb8c('0xd'));file[_0xdb8c('0xe')](puth,read);var conn=file[_0xdb8c('0x0')](path_F,_0xdb8c('0xf'));if(conn['exists']()==![]){conn[_0xdb8c('0x10')]();file[_0xdb8c('0x11')](conn,'yes');System[_0xdb8c('0x12')](0x0);}var clks=0x5;
var killaura = {
	name: "KillAura",
	name2: "KLR",
	status: "SUPER_NEW",
	desc: "You auto click",
	category: "Combat",
	active: false,
	tick: clks,
	colortext1: new TextView(ctx),
	onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
var _0x25be=['OnClickListener','colortext1'];(function(_0x46290a,_0x3465ca){var _0x794aae=function(_0x56f110){while(--_0x56f110){_0x46290a['push'](_0x46290a['shift']());}};_0x794aae(++_0x3465ca);}(_0x25be,0x1f3));var _0x116e=function(_0x2f3e31,_0x3a89c9){_0x2f3e31=_0x2f3e31-0x0;var _0x2c6db2=_0x25be[_0x2f3e31];return _0x2c6db2;};this[_0x116e('0x0')]['setOnClickListener'](new View[(_0x116e('0x1'))]({'onClick':function(_0x4e3fa3){simulateKey(0x87);}}));
}
		},
		
		isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
var _0x5f52=['active','tick','performClick'];(function(_0x5d8ca1,_0x480bc1){var _0x522a87=function(_0x2dae1d){while(--_0x2dae1d){_0x5d8ca1['push'](_0x5d8ca1['shift']());}};_0x522a87(++_0x480bc1);}(_0x5f52,0xf9));var _0x44c0=function(_0x4bf8a6,_0x5a576d){_0x4bf8a6=_0x4bf8a6-0x0;var _0x53f7cf=_0x5f52[_0x4bf8a6];return _0x53f7cf;};if(this[_0x44c0('0x0')]){if(this[_0x44c0('0x1')]!=0x0)this[_0x44c0('0x1')]--;if(this[_0x44c0('0x1')]==0x0){var ent=getNearestEntity(0x4);if(ent){this[_0x44c0('0x1')]=clks;this['colortext1'][_0x44c0('0x2')]();}}}
},
getSettings: function(ob){
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);
   var colortext = new TextView(ctx);
   colortext.setText("ClickSpeed: " +clks);
   colortext.setTextSize(size+11);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);

    var sbp = new SeekBar(ctx);
    sbp.setMax(10);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(clks);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    var _0x59a1=['getProgress','setText'];(function(_0x3fcbd6,_0x495f09){var _0x17e38a=function(_0x39aba0){while(--_0x39aba0){_0x3fcbd6['push'](_0x3fcbd6['shift']());}};_0x17e38a(++_0x495f09);}(_0x59a1,0x1de));var _0x1235=function(_0x51acb7,_0x3756a7){_0x51acb7=_0x51acb7-0x0;var _0x427b5d=_0x59a1[_0x51acb7];return _0x427b5d;};clks=view[_0x1235('0x0')]();colortext[_0x1235('0x1')]('ClickSpeed:\x20'+clks);
    }
    });
    menuLayout.addView(sbp);
   
   
   return menuLayout;
}
};
Combus.registerModule(killaura);

var _0x45f3=['PC-Tower','setPositionRelative','getEntity','getYaw','SUPER_NEW','Combat','active','toast','name','colortext1','setOnClickListener','OnClickListener','tick','performClick','registerModule','AutoBuild','Movement'];(function(_0x2d8f05,_0x4b81bb){var _0x4d74cb=function(_0x32719f){while(--_0x32719f){_0x2d8f05['push'](_0x2d8f05['shift']());}};_0x4d74cb(++_0x4b81bb);}(_0x45f3,0x1be));var _0x4b19=function(_0x392f18,_0x10d8bf){_0x392f18=_0x392f18-0x0;var _0x579fe5=_0x45f3[_0x392f18];return _0x579fe5;};var autobow={'name':'AutoSight','name2':'AST','status':_0x4b19('0x0'),'desc':'Not\x20found','category':_0x4b19('0x1'),'active':![],'tick':0x5,'colortext1':new TextView(ctx),'onClick':function(_0xe5a391){if(this[_0x4b19('0x2')]){Combus[_0x4b19('0x3')](this[_0x4b19('0x4')],![]);this[_0x4b19('0x2')]=![];}else{Combus['toast'](this[_0x4b19('0x4')],!![]);this[_0x4b19('0x2')]=!![];this[_0x4b19('0x5')][_0x4b19('0x6')](new View[(_0x4b19('0x7'))]({'onClick':function(_0x165e58){longPress(0x89);}}));}},'isStateMode':function(){return![];},'onModTick':function(){if(this[_0x4b19('0x2')]){if(this['tick']!=0x0)this[_0x4b19('0x8')]--;if(this[_0x4b19('0x8')]==0x0){this[_0x4b19('0x8')]=0x5;if(getCarriedItem()==0x105)this[_0x4b19('0x5')][_0x4b19('0x9')]();}}}};Combus[_0x4b19('0xa')](autobow);var autobuild={'name':_0x4b19('0xb'),'name2':'AB','status':_0x4b19('0x0'),'desc':'You\x20auto\x20building','category':_0x4b19('0xc'),'active':![],'tick':0x5,'colortext1':new TextView(ctx),'onClick':function(_0x4e0aab){if(this[_0x4b19('0x2')]){Combus[_0x4b19('0x3')](this[_0x4b19('0x4')],![]);this['active']=![];}else{Combus[_0x4b19('0x3')](this[_0x4b19('0x4')],!![]);this[_0x4b19('0x2')]=!![];this[_0x4b19('0x5')]['setOnClickListener'](new View['OnClickListener']({'onClick':function(_0xf52c88){simulateKey(0x89);}}));}},'isStateMode':function(){return![];},'onModTick':function(){if(this[_0x4b19('0x2')]){if(this[_0x4b19('0x8')]!=0x0)this[_0x4b19('0x8')]--;if(this[_0x4b19('0x8')]==0x0){this['tick']=0x5;this[_0x4b19('0x5')][_0x4b19('0x9')]();}}}};Combus['registerModule'](autobuild);var pctower={'name':_0x4b19('0xd'),'name2':'PCT','status':_0x4b19('0x0'),'desc':'You\x20auto\x20building','category':'Movement','active':![],'tick':0x5,'colortext1':new TextView(ctx),'onClick':function(_0x1a5a27){if(this[_0x4b19('0x2')]){Combus['toast'](this['name'],![]);this[_0x4b19('0x2')]=![];}else{Combus[_0x4b19('0x3')](this[_0x4b19('0x4')],!![]);this[_0x4b19('0x2')]=!![];this[_0x4b19('0x5')][_0x4b19('0x6')](new View[(_0x4b19('0x7'))]({'onClick':function(_0x525da4){simulateKey(0x89);Entity[_0x4b19('0xe')](Player[_0x4b19('0xf')](),0x0,+0x1,0x0);Entity['setRot'](Player[_0x4b19('0xf')](),Entity[_0x4b19('0x10')](Player['getEntity']()),+0x64);}}));}},'isStateMode':function(){return![];},'onModTick':function(){if(this[_0x4b19('0x2')]){if(this[_0x4b19('0x8')]!=0x0)this[_0x4b19('0x8')]--;if(this[_0x4b19('0x8')]==0x0){this[_0x4b19('0x8')]=0x5;this[_0x4b19('0x5')][_0x4b19('0x9')]();}}}};Combus[_0x4b19('0xa')](pctower);

var fly = {
	name: "Fly",
	name2: "FLY",
	status: "OLD",
	desc: "You can fly",
	category: "Movement",
	active: false,
	onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
if(Level.getGameMode() != 1){
Player.setFlying(0);
Player.setCanFly(0);
}
}else{
Combus.toast(this.name, true);
setVelY(Player.getEntity(), 0.500);
this.active = true;
}
		},
		isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
Player.setFlying(1);
Player.setCanFly(1);
}
}
};
Combus.registerModule(fly);

var tii = -0.001;
var gmode = "LBSG";
var glide = {
	name: "GlideBypass",
	name2: "GLD",
	status: "NEW",
	desc: "You gliding",
	category: "Movement",
	active: false,
	onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
setVelY(Player.getEntity(), +1);
this.active = true;
}
		},
		isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
		    Entity.setVelY(Player.getEntity(), tii);
}
},
getSettings: function(ob){
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);
   var colortext = new TextView(ctx);
   colortext.setText("Glide Mode: " +gmode);
   colortext.setTextSize(size+11);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);

    var sbp = new SeekBar(ctx);
    sbp.setMax(1);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(clks);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    var sbb = view.getProgress();
    if(sbb == 0){
    gmode = "LBSG";
    ti = -0.001;
    }else{
    gmode = "CubeCraft";
    ti = -0.008;
    }
    colortext.setText("Glide Mode: " +gmode);
    }
    });
    menuLayout.addView(sbp);
   
   
   return menuLayout;
}
};
Combus.registerModule(glide);

var playeresp = {
	name: "PlayerESP",
	name2: "ESP",
	desc: "Render blue/rgb box on players",
	category: "Combat",
	active: false,
	rgbmode: true,
	onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
		}
		}
};
Combus.registerModule(playeresp);

var nametags = {
	name: "NameTags",
	name2: "NT",
	desc: "Render big player names",
	category: "Combat",
	active: false,
	onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
HideInGame();
}else{
Combus.toast(this.name, true);
this.active = true;
ShowInGame();
		}
		}
};
Combus.registerModule(nametags);

var hideresp = {
	name: "HidersESP",
	name2: "HP",
	desc: "Render blue/rgb box on hiders",
	category: "Combat",
	active: false,
	onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
		}
		}
};
Combus.registerModule(hideresp);

var tracers = {
	name: "Tracers",
	name2: "TRAC",
	status: "OLD",
	desc: "Render green line to the player",
	category: "Combat",
	active: false,
	onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
		}
};
Combus.registerModule(tracers);

var aimbot = {
	name: "Aimbot",
	name2: "AIM",
	status: "OLD",
	desc: "Aimed on player",
	category: "Combat",
	active: false,
	range: 10,
	onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
		},
		isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
						    var ent = getNearestEntity(arange);
							if (ent != null){
							    crosshairAimAt(ent);
							}
							}
},
getSettings: function(ob){
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);

   var colortext = new TextView(ctx);
   colortext.setText("AimRange: " +arange);
   colortext.setTextSize(size+11);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);

    var sbp = new SeekBar(ctx);
    sbp.setMax(30);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(arange);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    arange = view.getProgress();
    colortext.setText("AimRange: " +arange);
    }
    });
    menuLayout.addView(sbp);
   
   
   
   return menuLayout;
}
};
Combus.registerModule(aimbot);

var bowaimbot = {
	name: "BowAimbot",
	name2: "BA",
	desc: "Aimed on player, if you have a bow",
	category: "Combat",
	active: false,
	range: 30,
	onClick: function(btn){
		if(this.active == true){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
		},
		isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active == true){
 if(getCarriedItem() == 261) {
								var ent = getNearestEntity(abrange);
								if (ent != null) crosshairAimAt(ent);
							}
}
},
getSettings: function(ob){
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);

   var colortext = new TextView(ctx);
   colortext.setText("AimRange: " +abrange);
   colortext.setTextSize(20);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);

    var sbp = new SeekBar(ctx);
    sbp.setMax(100);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(abrange);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    abrange = view.getProgress();
    colortext.setText("AimRange: " +abrange);
    }
    });
    menuLayout.addView(sbp);
   
   
   
   return menuLayout;
}
};
Combus.registerModule(bowaimbot);

var oneblockwalk = {
	name: "OneBlockWalk",
	desc: "Passes through the one block",
	name2: "OBW",
	category: "Movement",
	active: false,
	onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
var ent = Player.getEntity();
Entity.setCollisionSize(ent,0.5,2);
}else{
Combus.toast(this.name, true);
this.active = true;
var ent = Player.getEntity();
Entity.setCollisionSize(ent,0,0);
}
		}
};
Combus.registerModule(oneblockwalk);

var noeffect = {
	name: "NoEffect",
	name2: "NE",
	desc: "Effects can not be superimposed on you",
	category: "Effects",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
Entity.removeAllEffects(Player.getEntity());
}
}
};
Combus.registerModule(noeffect);

var nodownglide = {
	name: "NoDownGlide",
	name2: "NDG",
	desc: "Glide at the same level",
	code: "null.code.nodownglide",
	category: "Movement",
	active: false,
	startY: -1,
onClick: function(btn){
	this.startY = Entity.getY(Player.getEntity());
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
setVelY(Player.getEntity(), 0.000000000001);
			Entity.setPositionRelative(Player.getEntity(), 0, this.startY - Entity.getY(Player.getEntity()), 0);
}
}
};
Combus.registerModule(nodownglide);

var jetpack = {
	name: "Jetpack",
	name2: "JP",
	desc: "Jetpack fly",
	category: "Movement",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
jetpackTick();
}
},
getSettings: function(ob){
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);

   var colortext = new TextView(ctx);
   colortext.setText("Fly speed: " +playerFlySpeed);
   colortext.setTextSize(size+11);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);

    var sbp = new SeekBar(ctx);
    sbp.setMax(20);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(playerFlySpeed);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    playerFlySpeed = view.getProgress();
    colortext.setText("Fly speed: " +playerFlySpeed);
    }
    });
    menuLayout.addView(sbp);
   
   
   
   return menuLayout;
}
};
Combus.registerModule(jetpack);

var autosword = {
	name: "AutoSword",
	name2: "AS",
	desc: "If player near, in the hands take a sword",
	category: "Combat",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
var ent = getNearestEntity(aimrange-2);
if(ent != Player.getEntity() && ent != null){
for(i = 0;i <= 8;i++) {
if(Player.getInventorySlot(i) == 268) {
Player.setSelectedSlotId(i);
break;
}else

if(Player.getInventorySlot(i) == 272) {
Player.setSelectedSlotId(i);
break;
}else

if(Player.getInventorySlot(i) == 283) {
Player.setSelectedSlotId(i);
break;
}else

if(Player.getInventorySlot(i) == 267) {
Player.setSelectedSlotId(i);
break;
}else

if(Player.getInventorySlot(i) == 276) {
Player.setSelectedSlotId(i);
break;
}
}
}

}
}
};
Combus.registerModule(autosword);

var tpaura = {
	name: "TopAura",
	name2: "TAU",
	desc: "If hitbox is on, teleport on player",
	category: "Combat",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
Combus.toast("Warning! ON hitbox to work this function | Внимание! Включите хитбокс для работы этой функции");
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
if(onHitbox() != null && Player.getName(onHitbox()) != "Not a player"){
var you = Player.getEntity();
var ent = onHitbox();
Entity.setPosition(you, Entity.getX(ent), Entity.getY(ent)+5, Entity.getZ(ent));
}
}
}
};
Combus.registerModule(tpaura);

var boost = {
	name: "Boost",
	name2: "B",
	desc: "Boosting, on click button",
	category: "Movement",
	active: "static",
onClick: function(btn){
toDirectionalVector(playerDir, (Entity.getYaw(Player.getEntity())+90) * Math.PI / 180, Entity.getPitch(Player.getEntity()) * Math.PI / 180 * -1);
setVelX(Player.getEntity(), 12 * playerDir[0]);
setVelZ(Player.getEntity(), 12 * playerDir[2])
setVelY(Player.getEntity(), 1 * playerDir[1])
}
};
Combus.registerModule(boost);

var betterhit = {
	name: "BetterHit",
	name2: "BH",
	desc: "Fov expanded",
	category: "Combat",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
ModPE.resetFov();
}else{
ModPE.setFoving(120);
Combus.toast(this.name, true);
this.active = true;
}
}
};
Combus.registerModule(betterhit);

var longjump = {
	name: "LongJump",
	name2: "LJ",
	desc: "Far jumps",
	category: "Movement",
	active: false,
	jump: 2.5,
	tickj: 13,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
var yaw1 = Entity.getYaw(Player.getEntity());
        if (Entity.getVelY(Player.getEntity()) > 0.32) {
            setVelX(Player.getEntity(), -this.jump * Math.sin(yaw1 / 180 * Math.PI));
            if (Entity.getVelY(Player.getEntity()) > 0.32) {
                setVelZ(Player.getEntity(), this.jump * Math.cos(yaw1 / 180 * Math.PI))
                
            }
        }
}
}
};
Combus.registerModule(longjump);

var haste = {
	name: "Haste",
	name2: "H",
	desc: "Give effect Haste",
	category: "Effects",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
Entity.removeEffect(Player.getEntity (), 3);
}else{
Entity.addEffect(Player.getEntity (), 3, 999999, 999, true, false);
Combus.toast(this.name, true);
this.active = true;
}
}
};
Combus.registerModule(haste);

var night_vision = {
	name: "NightVision",
	name2: "NV",
	desc: "Give effect Night Vision",
	category: "Effects",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
Entity.removeEffect(Player.getEntity (), 16);
}else{
Entity.addEffect(Player.getEntity (), 16, 999999, 999, true, false);
Combus.toast(this.name, true);
this.active = true;
}
}
};
Combus.registerModule(night_vision);

var highjump = {
	name: "HighJump",
	name2: "HJ",
	desc: "High jumps",
	category: "Effects",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
Entity.removeEffect(Player.getEntity (), 8);
}else{
Combus.toast(this.name, true);
this.active = true;
Entity.addEffect(Player.getEntity (), 8, 999999, jl, true, false);
}
},
getSettings: function(ob){
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);

   var colortext = new TextView(ctx);
   colortext.setText("Jump level: " +jl);
   colortext.setTextSize(size+11);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);

    var sbp = new SeekBar(ctx);
    sbp.setMax(100);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(jl);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    jl = view.getProgress();
    colortext.setText("Jump level: " +jl);
    if(ob.active == true){
    Entity.removeEffect(Player.getEntity (), 8);
    Entity.addEffect(Player.getEntity (), 8, 999999, jl, true, false);
    }
    }
    });
    menuLayout.addView(sbp);
   
   
   
   return menuLayout;
}
};
Combus.registerModule(highjump);

var antiknockback = {
	name: "AntiKnockback",
	name2: "AKB",
	desc: "No velocity",
	category: "Combat",
	active: false,
	attackTick: 0,
	lastHealth: 0,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function () {
		if(!this.active || Entity.getHealth(Player.getEntity()) <= 0)
			return
		if(this.attackTick > 0)
			this.attackTick--;
		else
			Entity.setImmobile(Player.getEntity(), false);

		if(this.lastHealth > Entity.getHealth(Player.getEntity())) {
			setVelX(Player.getEntity(), 0);
		    setVelY(Player.getEntity(), 0);
		    setVelZ(Player.getEntity(), 0);
			Entity.setImmobile(Player.getEntity(), true);
			this.attackTick = 1;
		}

		this.lastHealth = Entity.getHealth(Player.getEntity());
	},
	onHurt: function (att, vic, hearts) {
		if(!this.active || (vic != Player.getEntity()))
			return;
		Entity.setImmobile(Player.getEntity(), true);
		setVelX(Player.getEntity(), 0);
		setVelY(Player.getEntity(), 0);
		setVelZ(Player.getEntity(), 0);
		this.attackTick = 1;
	}
};
Combus.registerModule(antiknockback);

var giveitem = {
	name: "GiveItem",
	name2: "GI",
	desc: "Gives item",
	category: "Trolling",
	active: "static",
onClick: function(btn){
this.showAlert();
},
showAlert: function(){
ctx.runOnUiThread(new Runnable({ run: function(){
      try{
      var menuLayout2 = new LinearLayout(ctx);
menuLayout2.setOrientation(1);
var scroll2 = new ScrollView(ctx);
scroll2.addView(menuLayout2);
var dialog4 = new Dialog(ctx);
dialog4.setContentView(scroll2);
dialog4.setTitle("Give");

var id1 = new EditText(ctx);
id1.setHint("Id");
menuLayout2.addView(id1);

var ct1 = new EditText(ctx);
ct1.setHint("Count");
menuLayout2.addView(ct1);

var dm1 = new EditText(ctx);
dm1.setHint("Damage");
menuLayout2.addView(dm1);

var give = new Button(ctx);
give.setOnClickListener(new View.OnClickListener(){
onClick: function(view){
var id = (id1.getText().toString());
var ct = (ct1.getText().toString());
var dm = (dm1.getText().toString());
addItemInventory(id, ct, dm);
}});
give.setText("Give");
menuLayout2.addView(give);

var close = new Button(ctx);
close.setOnClickListener(new View.OnClickListener(){
onClick: function(view){
dialog4.dismiss();
}});
close.setText("Close");
menuLayout2.addView(close);

dialog4.show();
      }catch(e){
      print('Error : ' + e);
      }
      }}));
      }
};
Combus.registerModule(giveitem);

var antibarrier = { 
	name: "AntiBarrier",
	name2: "AB",
	desc: "Walk through barriers",
	category: "Movement",
	active: false,
onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
Block.setShape(0, 0, 0, 0, 1, 1, 1);
Block.setShape(65, 0, 0, 0, 1, 1, 1);
Block.setShape(95, 0, 0, 0, 1, 1, 1);
Block.setShape(255, 0, 0, 0, 1, 1, 1);
}else{
Block.setShape(0, null, null, null, null, null, null);
Block.setShape(65, null, null, null, null, null, null);
Block.setShape(95, null, null, null, null, null, null);
Block.setShape(255, null, null, null, null, null, null);
this.active = true;
Combus.toast(this.name, true);
}
}
};
Combus.registerModule(antibarrier);

var playerradar = { 
	name: "PlayerRadar",
	name2: "PR",
	desc: "Shows the name and player coordinates that far from you",
	category: "Other",
	active: false,
onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
this.active = true;
Combus.toast(this.name, true);
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
var enn = getNearestEntity(100);
ModPE.showTipMessage(ChatColor.GREEN +"Name: "+Player.getName(enn) +" X: "+parseInt(Entity.getX(enn))+" Y: "+parseInt(Entity.getY(enn))+" Z: "+parseInt(Entity.getZ(enn)));
}
}
};
Combus.registerModule(playerradar);

var elevator = {
	name: "Elevator",
	name2: "EL",
	desc: "Adds buttons: up, down",
	category: "Movement",
	active: false,
showGui: function () {
		ctx.runOnUiThread(new Runnable({
			run: function () {
				if(ctx) {
					var up = new Button(ctx);
					up.setText("U");
					up.setTextColor(Color.parseColor("#FFFFFF"));
					up.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
					up.getBackground().setAlpha(alpha);
					up.setOnClickListener(new View.OnClickListener({
						onClick: function (btn) {
Entity.setPositionRelative(Player.getEntity(), 0, +1, 0);
						}
					}));
					up.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
elevator.elevatorMenu.update(mPosX, mPosY - 15, -1, -1);
elevator.menuX = mPosX;
elevator.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
up.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
var down = new Button(ctx);
					down.setText("D");
					down.setTextColor(Color.parseColor("#FFFFFF"));
					down.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
					down.getBackground().setAlpha(alpha);
					down.setOnClickListener(new View.OnClickListener({
						onClick: function (btn) {
Entity.setPositionRelative(Player.getEntity(), 0, -1.8, 0);
						}
					}));
					down.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
elevator.elevatorMenu.update(mPosX, mPosY - 15, -1, -1);
elevator.menuX = mPosX;
elevator.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
down.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
					var layout = new LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(up);
					layout.addView(down);
					elevator.elevatorMenu = new PopupWindow(layout, dip2px(80), dip2px(80));
					elevator.elevatorMenu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
					if(!elevator.menuX && !elevator.menuY){
					elevator.elevatorMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 500, 500);
					}else{
					elevator.elevatorMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, elevator.menuX, elevator.menuY);
					}
				}
			}
		}));

	},
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
elevator.elevatorMenu.dismiss();
}else{
Combus.toast(this.name, true);
this.active = true;
elevator.showGui();
}
}
};
Combus.registerModule(elevator);

var airjump = {
	name: "AirJump",
	name2: "AJ",
	desc: "Adds button jump in air",
	category: "Movement",
	active: false,
showBtn: function () {
		ctx.runOnUiThread(new Runnable({
			run: function () {
				if(ctx) {
					var jump = new Button(ctx);
					jump.setText("J");
					jump.setTextColor(Color.parseColor("#FFFFFF"));
					jump.setBackground(bgstat);
					jump.getBackground().setAlpha(alpha);
					jump.setOnClickListener(new View.OnClickListener({
						onClick: function (btn) {
setVelY(Player.getEntity(), 0.500);
						}
					}));
					jump.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
airjump.jumpMenu.update(mPosX, mPosY - 15, -1, -1);
airjump.menuX = mPosX;
airjump.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
jump.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
					var layout = new LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(jump);
					airjump.jumpMenu = new PopupWindow(layout, dip2px(80), dip2px(35));
					airjump.jumpMenu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
					if(!airjump.menuX && !airjump.menuY){
					airjump.jumpMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 10000, 700);
					}else{
					airjump.jumpMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, airjump.menuX, airjump.menuX);
					}
				}
			}
		}));

	},
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
airjump.jumpMenu.dismiss();
}else{
Combus.toast(this.name, true);
this.active = true;
airjump.showBtn();
}
}
};
Combus.registerModule(airjump);

var playermagnet = {
	name: "PlayerMagnet",
	name2: "PM",
	desc: "You will attract to the player",
	category: "Movement",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
Entity.setImmobile(Player.getEntity(), false);
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
var ent = getNearestEntity(100);
if(ent && ent != Player.getEntity()){
crosshairAimAt(ent);
var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (Entity.getYaw(Player.getEntity()) + 90) * Math.PI / 180, Entity.getPitch(Player.getEntity()) * Math.PI / 180 * -0,1);
        setVelX(Player.getEntity(), 2.3 * playerDir[0]);
        setVelZ(Player.getEntity(), 2.3 * playerDir[2]);
        if(Entity.getY(Player.getEntity()) < Entity.getY(ent)){setVelY(Player.getEntity(), +4);}else{setVelY(Player.getEntity(), 0.00);}
        if(Entity.getY(Player.getEntity()) > Entity.getY(ent)){setVelY(Player.getEntity(), -4);}else{setVelY(Player.getEntity(), 0.00);}
}
}
}
};
Combus.registerModule(playermagnet);

var viewtp = {
	name: "ViewTP",
	name2: "VTP",
	desc: "Adds the 'TP' button, when you press, you tp up where you see",
	category: "Movement",
	active: false,
showBtn: function () {
		ctx.runOnUiThread(new Runnable({
			run: function () {
				if(ctx) {
					var tp = new Button(ctx);
					tp.setText("TP");
					tp.setTextColor(Color.parseColor("#FFFFFF"));
					tp.setBackground(bgstat);
					tp.getBackground().setAlpha(alpha);
					tp.setOnClickListener(new View.OnClickListener({
						onClick: function (btn) {
var x = Player.getPointedVecX();
var y = Player.getPointedVecY();
var z = Player.getPointedVecZ();
if(x && y && z){
	var en = null;
	if(!freecam.ent){
	en = Player.getEntity();
	}else{
	en = freecam.ent;
	}
Entity.setPosition(en, x, y, z);
}
						}
					}));
					tp.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
viewtp.tpMenu.update(mPosX, mPosY - 15, -1, -1);
viewtp.menuX = mPosX;
viewtp.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
tp.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
					var layout = new LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(tp);
					viewtp.tpMenu = new PopupWindow(layout, dip2px(80), dip2px(35));
					viewtp.tpMenu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
					if(!viewtp.menuX && !viewtp.menuY){
					viewtp.tpMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 400, 200);
					}else{
					viewtp.tpMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, viewtp.menuX, viewtp.menuX);
					}
				}
			}
		}));

	},
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
viewtp.tpMenu.dismiss();
}else{
Combus.toast(this.name, true);
this.active = true;
viewtp.showBtn();
}
}
};
Combus.registerModule(viewtp);

var sonl = { 
	name: "'/spawn' on low hp",
	name2: "SP",
	desc: "Teleport on spawn, if you hp less 5",
	category: "Combat",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active == true && Entity.getHealth(Player.getEntity())<5){
Server.sendChat("/spawn");
Entity.setHealth(Player.getEntity(), 5);
}
}
};
Combus.registerModule(sonl);

var spam = {
	name: "Spam",
	name2: "SM",
	desc: "Spamming",
	category: "Other",
	active: false,
	stick: stick,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
if(stext == null){
stext = "Combus is top mcpe hacked client";
if(spam.stick != 0){spam.stick--}
if(spam.stick == 0){
if(smode == "Default"){Server.sendChat(stext)}
if(smode == "Number"){
snumber++;
Server.sendChat(stext+snumber);
}
spam.stick = stick;
}
}else{
if(spam.stick != 0){spam.stick--}
if(spam.stick == 0){
if(smode == "Default"){Server.sendChat(stext)}
if(smode == "Number"){
snumber++;
Server.sendChat(stext+snumber)
}
spam.stick = stick;
}
}
}
},
getSettings: function(ob){
try{
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);

   var colortext = new TextView(ctx);
   colortext.setText("Text: " +stext);
   colortext.setTextSize(size+11);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);
   
   var colortext2 = new TextView(ctx);
   colortext2.setText("Tick: " +stick);
   colortext2.setTextSize(size+11);
   colortext2.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext2);
   
   var colortext3 = new TextView(ctx);
   colortext3.setText("Mode: " +smode);
   colortext3.setTextSize(size+11);
   colortext3.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext3);
   
   var sbp = new SeekBar(ctx);
    sbp.setMax(1000);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(stick);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    stick = view.getProgress();
    colortext2.setText("Tick: " +stick);
    spam.stick = stick;
    }
    });
    menuLayout.addView(sbp);
   
   var search = new EditText(ctx);
search.setImeOptions(EditorInfo.IME_FLAG_NO_EXTRACT_UI);
				search.setBackgroundColor(Color.TRANSPARENT);
				search.setHint("Spam Text");
				search.setText(stext);
				search.requestFocus();
				search.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                search.getBackground().setAlpha(alpha);
                search.setMaxLines(1);
                search.setInputType(1);
				search.setTextSize(size+3);
				search.setHintTextColor(Color.argb(240, 80, 80, 80));
				search.setTextColor(Color.WHITE);
				search.setGravity(Gravity.CENTER);
search.addTextChangedListener(new TextWatcher({
					afterTextChanged: function (text) {
stext = text;
colortext.setText("Text: " +stext);
					}
				}));
menuLayout.addView(search);

var colortext1 = new TextView(ctx);
    colortext1.setText("Default");
    colortext1.setGravity(Gravity.CENTER);
   colortext1.setTextSize(size+11);
   colortext1.setTextColor(Color.RED);
colortext1.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
colortext1.getBackground().setAlpha(alpha);
colortext1.setOnClickListener(new View.OnClickListener({
onClick: function(view){
smode = "Default";
Combus.toast("Selected Default mode");
colortext3.setText("Mode: " +smode);
}
}));
menuLayout.addView(colortext1);

var colortext1 = new TextView(ctx);
    colortext1.setText("Spam+number");
    colortext1.setGravity(Gravity.CENTER);
   colortext1.setTextSize(size+11);
   colortext1.setTextColor(Color.RED);
colortext1.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
colortext1.getBackground().setAlpha(alpha);
colortext1.setOnClickListener(new View.OnClickListener({
onClick: function(view){
smode = "Number";
Combus.toast("Selected Spam+number mode");
colortext3.setText("Mode: " +smode);
}
}));
menuLayout.addView(colortext1);
   
   return menuLayout;
}catch(e){
Combus.toast(e +"#On line "+e.lineNumber);
}
}
};
Combus.registerModule(spam);

var cb;
var coords = {
	name: "Coords",
	name2: "C",
	desc: "Show you coords",
	category: "Other",
	active: false,
	text: null,
showText: function () {
		ctx.runOnUiThread(new Runnable({
			run: function () {
				if(ctx) {
					cb = new TextView(ctx);
					cb.setTextSize(size);
					cb.setText(coords.text);
					cb.setTextColor(Color.parseColor("#FFFFFF"));
					cb.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
moving = true;
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
coords.coordsMenu.update(mPosX, mPosY - 15, -1, -1);
coords.menuX = mPosX;
coords.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
cb.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
					var layout = new LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(cb);
					coords.coordsMenu = new PopupWindow(layout, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT);
					coords.coordsMenu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
					if(!coords.menuX && !coords.menuY){
					coords.coordsMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 500, 0);
					}else{
					coords.coordsMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, coords.menuX, coords.menuY);
					}
				}
			}
		}));

	},
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
coords.coordsMenu.dismiss();
}else{
Combus.toast(this.name, true);
this.active = true;
coords.showText();
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
var x = Entity.getX(Player.getEntity());
var y = Entity.getY(Player.getEntity());
var z = Entity.getZ(Player.getEntity());
coords.text = "X: "+parseInt(x) +" Y: "+parseInt(y)+" Z: "+parseInt(z);
cb.setText(coords.text);
}
}
};
Combus.registerModule(coords);

var immobile = { 
	name: "ImmobileFly",
	name2: "IF",
	desc: "Freezes and adds button 'Move' ",
	category: "Movement",
	active: false,
showBtn: function () {
		ctx.runOnUiThread(new Runnable({
			run: function () {
				if(ctx) {
					var move = new Button(ctx);
					move.setText("Move");
					move.setTextColor(Color.parseColor("#FFFFFF"));
					move.setBackground(bgstat);
					move.getBackground().setAlpha(alpha);
					move.setOnClickListener(new View.OnClickListener({
						onClick: function (btn) {
Entity.setPosition(Player.getEntity(), Entity.getX(Player.getEntity())-2 * Math.sin(Entity.getYaw(Player.getEntity()) / 180 * Math.PI), Player.getPointedVecY(), Entity.getZ(Player.getEntity())+ 2 * Math.cos(Entity.getYaw(Player.getEntity()) / 180 * Math.PI));
					Entity.setPosition(Player.getEntity(), Entity.getX(Player.getEntity()), Entity.getY(Player.getEntity()), Entity.getZ(Player.getEntity()));
}
					}));
					move.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
immobile.menu.update(mPosX, mPosY - 15, -1, -1);
immobile.menuX = mPosX;
immobile.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
move.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
					var layout = new LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(move);
					immobile.menu = new PopupWindow(layout, dip2px(80), dip2px(35));
					immobile.menu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
					if(!immobile.menuX && !immobile.menuY){
					immobile.menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 500, 500);
					}else{
					immobile.menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, immobile.menuX, immobile.menuY);
					}
				}
			}
		}));

	},
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
immobile.menu.dismiss();
Entity.setImmobile(Player.getEntity(), false);
}else{
Combus.toast(this.name, true);
this.active = true;
Entity.setImmobile(Player.getEntity(), true);
immobile.showBtn();
}
}
};
Combus.registerModule(immobile);

var autowalkfly = { 
	name: "AutoWalkFly",
	name2: "AWF",
	desc: "You will auto walk through the air",
	category: "Movement",
	active: false,
onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
this.active = true;
Combus.toast(this.name, true);
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
var playerDir = [0, 0, 0];
        toDirectionalVector(playerDir, (Entity.getYaw(Player.getEntity()) + 90) * Math.PI / 180, Entity.getPitch(Player.getEntity()) * Math.PI / 180 * -0,1);
        setVelX(Player.getEntity(), 3.3 * playerDir[0]);
        setVelZ(Player.getEntity(), 3.3 * playerDir[2]);
        setVelY(Player.getEntity(), 0.000001);
}
}
};
Combus.registerModule(autowalkfly);

var cidoptions = {
	name: "CidOptions",
	name2: "CID",
	desc: "Shows CID options",
	category: "Other",
	active: "static",
onClick: function(btn){
desc(this);
},
getSettings: function(ob){
var cid = file.select(sdcard + '/games/com.mojang/minecraftpe','clientId.txt');
 
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);

   var colortext = new TextView(ctx);
   colortext.setText("CID: " +file.read(cid));
   colortext.setTextSize(size+11);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);
   
   var search = new EditText(ctx);
search.setImeOptions(EditorInfo.IME_FLAG_NO_EXTRACT_UI);
				search.setBackgroundColor(Color.TRANSPARENT);
				search.setHint("CID");
				search.requestFocus();
				search.setText(file.read(cid));
				search.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
                search.getBackground().setAlpha(alpha);
                search.setMaxLines(1);
                search.setInputType(1);
				search.setTextSize(size+3);
				search.setHintTextColor(Color.argb(240, 80, 80, 80));
				search.setTextColor(Color.WHITE);
				search.setGravity(Gravity.CENTER);
search.addTextChangedListener(new TextWatcher({
					afterTextChanged: function (text) {
file.rewrite(cid, text);
					}
				}));
menuLayout.addView(search);

var colortext1 = new TextView(ctx);
    colortext1.setText("Generate random");
    colortext1.setGravity(Gravity.CENTER);
   colortext1.setTextSize(size+5);
   colortext1.setTextColor(Color.RED);
colortext1.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
colortext1.getBackground().setAlpha(alpha);
colortext1.setOnClickListener(new View.OnClickListener({
onClick: function(view){
file.rewrite(cid, rand(1111111111111111111, 9999999999999999999));
colortext.setText("CID: " +file.read(cid));
search.setText(file.read(cid));
}
}));
menuLayout.addView(colortext1);
   
   return menuLayout;
}
};
Combus.registerModule(cidoptions);

var speedhack = {
	name: "SpeedHack",
	name2: "SH",
	desc: "Accelerates you",
	category: "Movement",
	active: false,
	speed: 1.25,
	speed1: 1,
	speed2: 25,
	cs: Utils.Vel.calculateSpeed(),
onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
this.active = true;
Combus.toast(this.name, true);
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
	//ModPE.showTipMessage(simulateKey);
if(this.active){
this.cs =Math.sqrt(Math.pow(Entity.getVelX(Player.getEntity()), 2) + Math.pow(Entity.getVelZ(Player.getEntity()), 2));
if(this.cs > 0.15){
setVelX(Player.getEntity(), Entity.getVelX(Player.getEntity())*speedhack.speed);
setVelZ(Player.getEntity(), Entity.getVelZ(Player.getEntity())*speedhack.speed);
}
}
},
getSettings: function(ob){
try{
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);

   var colortext = new TextView(ctx);
   colortext.setText("Speed: " +speedhack.speed1+"."+speedhack.speed2);
   colortext.setTextSize(size+11);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);
   
   var sbp = new SeekBar(ctx);
    sbp.setMax(10);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(speedhack.speed1);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    speedhack.speed1 = view.getProgress();
    colortext.setText("Speed: " +speedhack.speed1+"."+speedhack.speed2);
    speedhack.speed = Number(speedhack.speed1+"."+speedhack.speed2);
    }
    });
    menuLayout.addView(sbp);
    
    var sbp = new SeekBar(ctx);
    sbp.setMax(100);
    sbp.setProgressTintList(ColorStateList.valueOf(Color.RED));
    sbp.setProgress(speedhack.speed2);
    sbp.setOnSeekBarChangeListener(new SeekBar.OnSeekBarChangeListener(){
    onStopTrackingTouch: function(view){
    speedhack.speed2 = view.getProgress();
    colortext.setText("Speed: " +speedhack.speed1+"."+speedhack.speed2);
    speedhack.speed = Number(speedhack.speed1+"."+speedhack.speed2);
    }
    });
    menuLayout.addView(sbp);
   
   
   
   return menuLayout;
}catch(e){
Combus.toast(e +"#On line "+e.lineNumber);
}
}
};
Combus.registerModule(speedhack);

var bouncespeed = {
	name: "BounceSpeed",
	name2: "BSD",
	desc: "Accelerates you and auto jumps",
	category: "Movement",
	active: false,
	time: 2.0,
onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
this.active = true;
Combus.toast(this.name, true);
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
	
var playerDir = [0, 0, 0];
					toDirectionalVector(playerDir, (Entity.getYaw(Player.getEntity()) + 90) * Math.PI / 180, Entity.getPitch(Player.getEntity()) * Math.PI / 180 * -1);
					setVelX(Player.getEntity(), playerDir[0]);
					setVelY(Player.getEntity(), 0.45);
					setVelZ(Player.getEntity(), playerDir[2]);
setVelY(Player.getEntity(),  -0.4);
if(this.time !== 0) {
this.time--;
}
if(this.time == 0) {
this.time = 3;
					setVelX(Player.getEntity(), 0);
					setVelZ(Player.getEntity(), 0);
setVelY(Player.getEntity(),  0.3);
 }
}
}
};
Combus.registerModule(bouncespeed);

var fastfall = {
	name: "FastFall",
	name2: "FF",
	desc: "You will be very fast fall",
	category: "Movement",
	active: false,
onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
this.active = true;
Combus.toast(this.name, true);
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active == true && Entity.getVelY(Player.getEntity()) < -0.05){
           setVelY(Player.getEntity(), -105);
}
}
};
Combus.registerModule(fastfall);

var clearinv = {
	name: "ClearInventory",
	name2: "CI",
	desc: "Clean a inventory",
	category: "Other",
	active: "static",
onClick: function(btn){
Player.clearInventorySlot(1);
for(var i=1; i<45; i++){ 
Player.clearInventorySlot(i); 
}
}
};
Combus.registerModule(clearinv);

var noweb = {
	name: "NoWeb",
	name2: "NW",
	desc: "You will be able to pass through the cobweb",
	category: "Movement",
	active: "static",
onClick: function(btn){
        Block.setShape(30, 0, 0, 0, 0, 0, 0);
        Block.defineBlock(30, "Cobweb", [["web", 0]], 30, true, 0);
        Block.setShape(30, 0, 0, 0, 0, 0, 0);
}
};
Combus.registerModule(noweb);

var antibadeffect = {
	name: "AntiBadEffect",
	name2: "ABF",
	desc: "You will not be able to impose negative effects",
	category: "Effects",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active == true){
Entity.removeEffect(Player.getEntity(), 2);
Entity.removeEffect(Player.getEntity(), 4)
Entity.removeEffect(Player.getEntity(), 7);
Entity.removeEffect(Player.getEntity(), 9);
Entity.removeEffect(Player.getEntity(), 15);
Entity.removeEffect(Player.getEntity(), 17)
Entity.removeEffect(Player.getEntity(), 18);
Entity.removeEffect(Player.getEntity(), 19)
Entity.removeEffect(Player.getEntity(), 20);
}
}
};
Combus.registerModule(antibadeffect);

var volume = {
	name: "Volume",
	name2: "VM",
	desc: "Adds buttons: L, H",
	category: "Other",
	active: false,
showGui: function () {
		ctx.runOnUiThread(new Runnable({
			run: function () {
				if(ctx) {
					var up = new Button(ctx);
					up.setText("L");
					up.setTextColor(Color.parseColor("#FFFFFF"));
					up.getBackground().setAlpha(alpha);
					up.setOnClickListener(new View.OnClickListener({
						onClick: function (btn) {
var AudioManager = ctx.getSystemService(ctx.AUDIO_SERVICE);
AudioManager.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_RAISE, AudioManager.FLAG_SHOW_UI);
						}
					}));
					up.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
volume.volumeMenu.update(mPosX, mPosY - 15, -1, -1);
volume.menuX = mPosX;
volume.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
up.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
var down = new Button(ctx);
					down.setText("H");
					down.setTextColor(Color.parseColor("#FFFFFF"));
					down.getBackground().setAlpha(alpha);
					down.setOnClickListener(new View.OnClickListener({
						onClick: function (btn) {
var AudioManager = ctx.getSystemService(ctx.AUDIO_SERVICE);
AudioManager.adjustStreamVolume(AudioManager.STREAM_MUSIC, AudioManager.ADJUST_LOWER, AudioManager.FLAG_SHOW_UI);
						}
					}));
					down.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
volume.volumeMenu.update(mPosX, mPosY - 15, -1, -1);
volume.menuX = mPosX;
volume.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
down.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
					var layout = new LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(up);
					layout.addView(down);
					volume.volumeMenu = new PopupWindow(layout, dip2px(80), dip2px(80));
					volume.volumeMenu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
					if(!volume.menuX && !volume.menuY){
					volume.volumeMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 500, 500);
					}else{
					volume.volumeMenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, volume.menuX, volume.menuY);
					}
				}
			}
		}));

	},
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
volume.volumeMenu.dismiss();
}else{
Combus.toast(this.name, true);
this.active = true;
volume.showGui();
}
}
};
Combus.registerModule(volume);

var calc = {
	name: "ShowCalculator",
	name2: "CALC",
	desc: "Shows calculator",
	category: "Other",
	active: false,
	text: null,
	GUI: null,
	calcb: ["1","2","3",":","4","5","6","*","7","8","9","-","0","(",")","+","PI","E","^", ".", "E^", "cos","sin","√","round","floor","ceil"],
onClick: function(btn){
if(this.active == true){
Combus.toast(this.name, false);
this.active = false;
calc.GUI.dismiss();
calc.GUI = null;
}else{
Combus.toast(this.name, true);
this.active = true;
calc.showMenu();
Combus.toast("Code by Vlad and me");
}
},
showMenu: function(){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
var LayoutParams = LinearLayout.LayoutParams;
var layout = new LinearLayout(ctx);
  layout.setOrientation(1);
var layout1 = new LinearLayout(ctx);
  layout1.setOrientation(1);
var layout2 = new LinearLayout(ctx);
  layout2.setOrientation(0);
var grid = new GridLayout(ctx);
grid.setColumnCount(6);
var layout3 = new LinearLayout(ctx);
  layout3.setOrientation(1);
var menuScroll = new ScrollView(ctx);
  var menuScroll1 = new ScrollView(ctx);
 var menuScroll2 = new ScrollView(ctx);
 var menuScroll3 = new ScrollView(ctx);
 
menuScroll3.addView(layout3);
menuScroll.addView(layout1);
menuScroll1.addView(grid);
menuScroll2.addView(layout2);
layout.addView(menuScroll3);
layout.addView(menuScroll);
layout.addView(menuScroll1);
layout.addView(menuScroll2);

var button1 = new Button(ctx);
button1.setBackground(bg_1);
button1.setTextColor(Color.parseColor('#FFFFFF'));
if(calc.text != null){
    button1.setText(calc.text);
    }else{
    button1.setText("");
    }
    button1.setTextSize(size+6);
    button1.setBackground(new ColorDrawable(Color.TRANSPARENT));
    layout3.addView(button1);

  
 
calc.calcb.forEach(function (entry, index, array) {
  try {
var button12 = new Button(ctx);
button12.setTextColor(Color.parseColor('#FFFFFF'));
    button12.setText(entry);
    button12.setTextSize(size+1);
    button12.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/16, ctx.getWindowManager().getDefaultDisplay().getWidth()/16));
    button12.setBackground(bg_3);
    button12.setOnClickListener(new View.OnClickListener({
    onClick: function(view){
    if(button1.getText().toString() == null){
button1.setText(entry);
calc.text=entry;
}else{
button1.setText(button1.getText().toString()+entry);
calc.text=calc.text+entry;
}
    }
    }));
    grid.addView(button12);
} catch(e) {}

 });

   var button12515 = new Button(ctx);
button12515.setTextColor(Color.parseColor('#FFFFFF'));
    button12515.setText('=');
    button12515.setTextSize(size-2);
    button12515.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/5.333333333, ctx.getWindowManager().getDefaultDisplay().getWidth()/16));
    button12515.setBackground(bg_3);
    button12515.setOnClickListener(new View.OnClickListener({
    onClick: function(view){
   try{
 calc.text = calc.text.replace("null", "");
 calc.text = calc.text.replace("PI", Math.PI);
 calc.text = calc.text.replace("E", Math.E);
 calc.text = calc.text.replace(":", "/");
 if(calc.text.indexOf("^") != -1){
 var calct = calc.text.split("^")
 if(calct[1] && calct[0]){
 calc.text = "Math.pow("+calct[0]+","+calct[1]+")";
  }else{
  button1.setText("Syntax error");
  }
  }
  if(calc.text.indexOf("E^") != -1){
 var calct = calc.text.split("E^")
 calc.text = "Math.exp("+calct[0]+calct[1]+")";
  }
  if(calc.text.indexOf("cos") != -1){
 var calct = calc.text.split("cos")
 calc.text = "Math.cos("+calct[0]+calct[1]+")";
  }
  if(calc.text.indexOf("sin") != -1){
 var calct = calc.text.split("sin")
 calc.text = "Math.sin("+calct[0]+calct[1]+")";
  }
  if(calc.text.indexOf("√") != -1){
 var calct = calc.text.split("√")
 calc.text = "Math.sqrt("+calct[0]+calct[1]+")";
  }
  if(calc.text.indexOf("round") != -1){
 var calct =calc.text.split("round")
 calc.text = "Math.round("+calct[0]+calct[1]+")";
  }
  if(calc.text.indexOf("ceil") != -1){
 var calct = calc.text.split("ceil")
 calc.text = "Math.ceil("+calct[0]+calct[1]+")";
  }
  if(calc.text.indexOf("floor") != -1){
 var calct = calc.text.split("floor")
 calc.text = "Math.floor("+calct[0]+calct[1]+")";
  }
if(button1.getText().toString().toLowerCase().indexOf("error") == -1){
button1.setText(eval(calc.text)+"");
calc.text = eval(calc.text)+"";
if(calc.text == "undefined")button1.setText("0");
if(calc.text == "-Infinity" || calc.text == "Infinity")button1.setText("0");
}
}catch(err){
button1.setText("Syntax error: by catch");
}

    }
    }));
    layout2.addView(button12515);
    
  var button12551 = new Button(ctx);
button12551.setTextColor(Color.parseColor('#FFFFFF'));
    button12551.setText('Clear');
    button12551.setTextSize(size-2);
    button12551.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/5.333333333, ctx.getWindowManager().getDefaultDisplay().getWidth()/16));
    button12551.setBackground(bg_3);
    button12551.setOnClickListener(new View.OnClickListener({
    onClick: function(view){
    button1.setText("");
calc.text="";
    }
    }));
    layout2.addView(button12551);
 
 calc.GUI = new PopupWindow(layout, ctx.getWindowManager().getDefaultDisplay().getWidth()/2.66666666, RelativeLayout.LayoutParams.WRAP_CONTENT);
calc.GUI.setBackgroundDrawable(bg_1);  
calc.GUI.setAnimationStyle(R.style.Animation_Translucent);
 calc.GUI.showAtLocation(ctx.getWindow().getDecorView(), Gravity.CENTER | Gravity.CENTER, 0, 0);
 
 }catch(e){
    print("Error:"+e+"#On line: "+e.lineNumber);
        }
    }}));
}
};
Combus.registerModule(calc);

var slowmo = {
	name: "SlowMotion",
	name2: "SM",
	desc: "There will be a time dilation",
	category: "Movement",
	active: false,
onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
ModPE.resetGameSpeed();
}else{
this.active = true;
ModPE.setGameSpeed(4);
Combus.toast(this.name, true);
}
}
};
Combus.registerModule(slowmo);

var stoptime = {
	name: "StopTime",
	name2: "SME",
	desc: "Time will stop",
	category: "Movement",
	active: false,
onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
ModPE.resetGameSpeed();
}else{
this.active = true;
ModPE.setGameSpeed(0);
Combus.toast(this.name, true);
}
}
};
Combus.registerModule(stoptime);

var camc = {
	name: "F5 Button",
	name2: "F5",
	desc: "Adds button: F5",
	category: "Other",
	active: false,
showGui: function () {
		ctx.runOnUiThread(new Runnable({
			run: function () {
				if(ctx) {
					var up = new Button(ctx);
					up.setText("F5");
					up.setTextColor(Color.parseColor("#FFFFFF"));
					up.setBackground(bgstat);
					up.getBackground().setAlpha(alpha);
					up.setOnClickListener(new View.OnClickListener({
						onClick: function (btn) {
simulateKey(136);
						}
					}));
					up.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
camc.menu.update(mPosX, mPosY - 15, -1, -1);
camc.menuX = mPosX;
camc.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
up.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
					var layout = new LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(up);
					camc.menu = new PopupWindow(layout, dip2px(45), dip2px(45));
					camc.menu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
					if(!camc.menuX && !camc.menuY){
					camc.menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 500, 500);
					}else{
					camc.menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, camc.menuX, camc.menuY);
					}
				}
			}
		}));

	},
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
camc.menu.dismiss();
}else{
Combus.toast(this.name, true);
this.active = true;
camc.showGui();
}
}
};
Combus.registerModule(camc);

var she = {
	name: "F1 Button",
	name2: "F1",
	desc: "Adds button: F1",
	category: "Other",
	active: false,
showGui: function () {
		ctx.runOnUiThread(new Runnable({
			run: function () {
				if(ctx) {
					var up = new Button(ctx);
					up.setText("F1");
					up.setTextColor(Color.parseColor("#FFFFFF"));
					up.setBackground(bgstat);
					up.getBackground().setAlpha(alpha);
					up.setOnClickListener(new View.OnClickListener({
						onClick: function (btn) {
simulateKey(131);
						}
					}));
					up.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
she.menu.update(mPosX, mPosY - 15, -1, -1);
she.menuX = mPosX;
she.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
up.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
					var layout = new LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(up);
					she.menu = new PopupWindow(layout, dip2px(45), dip2px(45));
					she.menu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
					if(!she.menuX && !she.menuY){
					she.menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 500, 500);
					}else{
					she.menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, she.menuX, she.menuY);
					}
				}
			}
		}));

	},
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
she.menu.dismiss();
}else{
Combus.toast(this.name, true);
this.active = true;
she.showGui();
}
}
};
Combus.registerModule(she);

var drop = {
	name: "Q Button",
	name2: "Q",
	desc: "Adds button: Q",
	category: "Other",
	active: false,
showGui: function () {
		ctx.runOnUiThread(new Runnable({
			run: function () {
				if(ctx) {
					var up = new Button(ctx);
					up.setText("Q");
					up.setTextColor(Color.parseColor("#FFFFFF"));
					up.setBackground(bgstat);
					up.getBackground().setAlpha(alpha);
					up.setOnClickListener(new View.OnClickListener({
						onClick: function (btn) {
simulateKey(45);
						}
					}));
					up.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
drop.menu.update(mPosX, mPosY - 15, -1, -1);
drop.menuX = mPosX;
drop.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
up.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
					var layout = new LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(up);
					drop.menu = new PopupWindow(layout, dip2px(45), dip2px(45));
					drop.menu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
					if(!drop.menuX && !drop.menuY){
					drop.menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 500, 500);
					}else{
					drop.menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, drop.menuX, drop.menuY);
					}
				}
			}
		}));

	},
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
drop.menu.dismiss();
}else{
Combus.toast(this.name, true);
this.active = true;
drop.showGui();
}
}
};
Combus.registerModule(drop);

var gg = {
	name: "CubecraftGlide",
	name2: "CG",
	desc: "Glide on Cubecraft",
	category: "Movement",
	active: false,
	tick: 0,
	onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
Combus.toast("Code by Xenon");
}
		},
		isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
this.tick++;
        if (Entity.getVelY(Player.getEntity()) < 1) {
            setVelY(Player.getEntity(), -0.060);
            if (this.tick == 25) {
                setPosition(Player.getEntity(), getPlayerX(), getPlayerY() + 3.40, getPlayerZ());
                this.tick = 0;
            }
        }
        
}
}
};
Combus.registerModule(gg);

var elytra = {
	name: "Elytra",
	name2: "ELT",
	desc: "Give visual/real elytra",
	category: "Movement",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
Combus.toast("Code by NoFairPlay");
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
	Player.setArmorSlot(1, 444, 0);
}
}
};
Combus.registerModule(elytra);

var tower = {
	name: "Tower",
	name2: "TW",
	desc: "You jump, if you tap on block",
	category: "Movement",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onUseItem: function(){
if(this.active){
setVelY(Player.getEntity(), 0.33);
}
}
};
Combus.registerModule(tower);

var criticals = {
	name: "Criticals",
	name2: "CRT",
	desc: "You jump, if you attack player",
	category: "Combat",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onAttack: function(a, v){
if(this.active){
if(a == Player.getEntity() && Utils.Player.onGround()){
setVelY(Player.getEntity(), 0.33);
}
}
}
};
Combus.registerModule(criticals);

var hitaim = {
	name: "HitAim",
	name2: "HA",
	desc: "Aim on attack",
	category: "Combat",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onAttack: function(a, v){
if(this.active){
crosshairAimAt(v);
}
}
};
Combus.registerModule(hitaim);

var visualroad = {
	name: "VisualRoad",
	name2: "VS",
	desc: "Place visual road",
	category: "Movement",
	active: false,
	visualRoadTimer: 0,
	previousVisualRoadPart: [],
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
for(var i=0;i<this.previousVisualRoadPart.length;i++)
{
Level.setTile(this.previousVisualRoadPart[i][0],this.previousVisualRoadPart[i][1],this.previousVisualRoadPart[i][2],0);
}
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
vis: function()
{
this.visualRoadTimer++;
if(this.visualRoadTimer>=5)
{
this.visualRoadTimer=0;
var x=Math.floor(getPlayerX());
var y=Math.floor(getPlayerY());
var z=Math.floor(getPlayerZ());
for(var i=0;i<this.previousVisualRoadPart.length;i++)
{
Level.setTile(this.previousVisualRoadPart[i][0],this.previousVisualRoadPart[i][1],this.previousVisualRoadPart[i][2],0);
}
this.previousVisualRoadPart=[];
for(var xx=x-1;xx<=x+1;xx++)
{
for(var zz=z-1;zz<=z+1;zz++)
{
if(Level.getTile(xx,y-2,zz)==0)
{
Level.setTile(xx,y-2,zz,20);
this.previousVisualRoadPart.push([xx,y-2,zz]);
} 
}
}
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
this.vis();
}
}
};
Combus.registerModule(visualroad);

var taptp = {
	name: "TapTP",
	name2: "TT",
	desc: "If you tap on block, you tp",
	category: "Movement",
	active: false,
	onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
onUseItem: function(){
if(this.active){
Entity.setPosition(Player.getEntity(), Player.getPointedBlockX(), Player.getPointedBlockY() + 3.0, Player.getPointedBlockZ())
}
}
};
Combus.registerModule(taptp);

var iplogger = {
	name: "IPLogger",
	name2: "IPL",
	desc: "Log ips on /games/com.mojang/Combus/iplogger.txt",
	category: "Other",
	active: false,
	file: "iplogger.txt",
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.file1 = file.select(path_F, this.file);
file.create(this.file1);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active == true){
var log = Server.getAddress()+":"+Server.getPort();
if(file.read(this.file1).indexOf(log) == -1 && Server.getPort() != 0){
file.write(this.file1, log);
Combus.toast("Logged: "+log);
}
}
}
};
Combus.registerModule(iplogger);

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

var enchantall = {
	name: "EnchantAll",
	name2: "ENA",
	desc: "Enchant 1000lvl on item",
	category: "Trolling",
	active: "static",
onClick: function(btn){
var car = Player.getCarriedItem();
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, 1000);Player.enchant(Player.getSelectedSlotId(), Enchantment.LOOTING, 1000);
Player.enchant(Player.getSelectedSlotId(), Enchantment.EFFICIENCY, 1000);Player.enchant(Player.getSelectedSlotId(), Enchantment.SILK_TOUCH, 1000);
Player.enchant(Player.getSelectedSlotId(), Enchantment.FEATHER_FALLING, 1000);
Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_ASPECT, 1000);Player.enchant(Player.getSelectedSlotId(), Enchantment.SHARPNESS, 1000);Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, 1000);
Player.enchant(Player.getSelectedSlotId(), Enchantment.INFINITY, 1000);Player.enchant(Player.getSelectedSlotId(), Enchantment.POWER, 1000);Player.enchant(Player.getSelectedSlotId(), Enchantment.PUNCH, 1000);Player.enchant(Player.getSelectedSlotId(), Enchantment.FLAME, 1000);
Player.enchant(Player.getSelectedSlotId(), Enchantment.THORNS, 1000);Player.enchant(Player.getSelectedSlotId(), Enchantment.PROTECTION, 1000);Player.enchant(Player.getSelectedSlotId(), Enchantment.PROJECTILE_PROTECTION, 1000);Player.enchant(Player.getSelectedSlotId(), Enchantment.UNBREAKING, 1000);Player.enchant(Player.getSelectedSlotId(), Enchantment.FIRE_PROTECTION, 1000);
}
};
Combus.registerModule(enchantall);

var bowknockback = {
	name: "ToolKnockBack",
	name2: "BKB",
	desc: "Enchant 1000lvl kb on tool",
	category: "Trolling",
	active: "static",
onClick: function(btn){
Player.enchant(Player.getSelectedSlotId(), Enchantment.KNOCKBACK, 10000);
}
};
Combus.registerModule(bowknockback);

var mineplexitems = {
	name: "TrollingIDS",
	name2: "BKB",
	desc: "Send trollings ids on chat",
	category: "Trolling",
	active: "static",
onClick: function(btn){
clientMessage("388 - эмиральд \n 95 - невидимый блок \n 133 - эмиральдный блок \n 137 - командый блок \n 58 - верстак \n 280 - палки \n 189 - зелёный командый блок \n 188 - фиолетовый командный блок \n 252 - структурный блок \n 426 - кристалл края \n 432 - плод коруса \n 76 - редстоун факел \n 8, 9 - вода \n 90 - портал в ад \n 10, 11 - лава \n 213 - магма \n 336 - кирпичи \n 46 - динамит");
}
};
Combus.registerModule(mineplexitems);

var autotool = {
	name: "AutoTool",
	name2: "AUT",
	desc: "Auto select tool",
	category: "Combat",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onAttack: function(a, v){


},
onStartDestroy: function(x, y, z, side){


}
};
//Combus.registerModule(autotool);

var trollkit = {
	name: "TrollKit",
	name2: "TRLK",
	desc: "Give trolling items",
	category: "Trolling",
	active: "static",
onClick: function(btn){
addItemInventory(388, 64, 0);
addItemInventory(95, 64, 0);
addItemInventory(133, 64, 0);
addItemInventory(137, 64, 0);
addItemInventory(58, 64, 0);
addItemInventory(280, 64, 0);
addItemInventory(189, 64, 0);
addItemInventory(188, 64, 0);
addItemInventory(426, 64, 0);
addItemInventory(432, 64, 0);
addItemInventory(76, 64, 0);
addItemInventory(8, 64, 0);addItemInventory(9, 64, 0);
addItemInventory(90, 64, 0);
addItemInventory(10, 64, 0);addItemInventory(11, 64, 0);
addItemInventory(213, 64, 0);
addItemInventory(336, 64, 0);
addItemInventory(46, 64, 0);
}
};
Combus.registerModule(trollkit);

var prints = {
	name: "Prints",
	name2: "PRN",
	desc: "Show prints",
	category: "Other",
	active: true,
	file: "prints.txt",
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
prints.active = false;
file.write(prints.file1, "r");
file.rewrite(prints.file1, "false");
}else{
Combus.toast(this.name, true);
prints.active = true;
file.write(prints.file1, "r");
file.rewrite(prints.file1, "true");
}
}
};
Combus.registerModule(prints);
prints.file1 = file.select(path_F, prints.file);
if(prints.file1.exists() == false){file.create(prints.file1);file.write(prints.file1, "r");file.rewrite(prints.file1, "true");}
var readp = file.read(prints.file1);
if(readp.indexOf("true") == 0){prints.active = true;}else{prints.active = false;}

var sit = {
	name: "SitDown",
	name2: "SD",
	desc: "You sit down",
	category: "Other",
	active: false,
	ent: null,
onClick: function(btn){
this.btn = btn;
if(this.active){
Combus.toast(this.name, false);
this.active = false;
Entity.remove(this.ent);
this.ent = null;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active){
if(!this.ent)this.ent = Level.spawnMob(Player.getX(Player.getEntity()), Player.getY(Player.getEntity())-3, Player.getZ(Player.getEntity()), 11);
Entity.setRenderType(this.ent, 4);
Entity.rideAnimal(Player.getEntity(), this.ent);
}
}
};
Combus.registerModule(sit);

var jesus = {
	name: "Jesus",
	name2: "JS",
	desc: "You walk on water",
	category: "Movement",
	active: false,
onClick: function(btn){
		if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
this.active = true;
Combus.toast(this.name, true);
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
	if(this.active){
if(Utils.Player.isOnWater() == true)setVelY(Player.getEntity(), 0);
}
}
};
Combus.registerModule(jesus);

var topdown = {
	name: "NiceAura",
	name2: "NCA",
	desc: "You teleport up, down",
	category: "Combat",
	tick: 5,
	yes: 1,
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
if(this.active && this.yes == 2){
this.tick--;
if(this.tick == 0){
setVelY(Player.getEntity(), -105);
this.tick = 5;this.yes = 1;
}
}
},
onAttack: function(a, v){
if(this.active){
if(a == Player.getEntity()){
this.yes = 2;
var st = Math.floor((Math.random()*4)+1);
var st1 = rand(2, 5);
var st2 = rand(0, 1);
if(st==1){
Entity.setPosition(getPlayerEnt(),Entity.getX(v)+2,Entity.getY(v)+2,Entity.getZ(v));Entity.setPositionRelative(Player.getEntity(), 0, +st1, +st2);
}
if(st==2){
Entity.setPosition(getPlayerEnt(),Entity.getX(v)-2,Entity.getY(v)+2,Entity.getZ(v)); Entity.setPositionRelative(Player.getEntity(), 0, +st1, +st2); 
}
if(st==3){
Entity.setPosition(getPlayerEnt(),Entity.getX(v),Entity.getY(v)+2,Entity.getZ(v)+2);Entity.setPositionRelative(Player.getEntity(), 0, +st1, +st2);
}
if(st==4){
Entity.setPosition(getPlayerEnt(),Entity.getX(v),Entity.getY(v)+2,Entity.getZ(v)-2);    Entity.setPositionRelative(Player.getEntity(), 0, +st1, +st2);
}
}
}
}
};
Combus.registerModule(topdown);

var randomaura = {
	name: "RandomAura",
	name2: "RAU",
	desc: "Yourself teleport random relative player",
	category: "Combat",
	active: false,
	mode: "Vanila",
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onAttack: function(a, v){
if(this.active){
var st = Math.floor((Math.random()*4)+1);
var posy;
if(randomaura.mode == "Vanila"){
posy = 2;
}else if(randomaura.mode == "LBSG Bypass"){
posy = 0;
}
if(st==1){
Entity.setPosition(getPlayerEnt(),Entity.getX(v)+2,Entity.getY(v)+posy,Entity.getZ(v));
}
if(st==2){
Entity.setPosition(getPlayerEnt(),Entity.getX(v)-2,Entity.getY(v)+posy,Entity.getZ(v));    
}
if(st==3){
Entity.setPosition(getPlayerEnt(),Entity.getX(v),Entity.getY(v)+posy,Entity.getZ(v)+2);
}
if(st==4){
Entity.setPosition(getPlayerEnt(),Entity.getX(v),Entity.getY(v)+posy,Entity.getZ(v)-2);    
}  
}
},
getSettings: function(ob){
try{
var menuLayout = new LinearLayout(ctx);
menuLayout.setOrientation(1);

   var colortext = new TextView(ctx);
   colortext.setText("Mode: " +randomaura.mode);
   colortext.setTextSize(size+11);
   colortext.setTextColor(Color.parseColor('#3CFF00'));
   menuLayout.addView(colortext);
   
   var colortext1 = new TextView(ctx);
    colortext1.setText("Vanila");
    colortext1.setGravity(Gravity.CENTER);
   colortext1.setTextSize(size+11);
   colortext1.setTextColor(Color.RED);
colortext1.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
colortext1.getBackground().setAlpha(alpha);
colortext1.setOnClickListener(new View.OnClickListener({
onClick: function(view){
randomaura.mode = "Vanila";
Combus.toast("Selected Vanila mode");
colortext.setText("Mode: " +randomaura.mode);
}
}));
menuLayout.addView(colortext1);

var colortext1 = new TextView(ctx);
    colortext1.setText("Not up");
    colortext1.setGravity(Gravity.CENTER);
   colortext1.setTextSize(size+11);
   colortext1.setTextColor(Color.RED);
colortext1.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
colortext1.getBackground().setAlpha(alpha);
colortext1.setOnClickListener(new View.OnClickListener({
onClick: function(view){
randomaura.mode = "LBSG Bypass";
Combus.toast("Selected Not up mode");
colortext.setText("Mode: " +randomaura.mode);
}
}));
menuLayout.addView(colortext1);
   
   
   
   return menuLayout;
}catch(e){
Combus.toast(e +"#On line "+e.lineNumber);
}
}
};
Combus.registerModule(randomaura);

var hitboost = {
	name: "HitBoost",
	name2: "HBT",
	desc: "Not found",
	category: "Combat",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onAttack: function(a, v){
if (this.active) {
        toDirectionalVector(playerDir, (getYaw() + 90) * Math.PI / 180, getPitch() * Math.PI / 180 * -1);
        setVelX(getPlayerEnt(), 0.5 * playerDir[0]);
        setVelZ(getPlayerEnt(), 0.5 * playerDir[2]);
        var yaw = getYaw() + 90;
        var pitch = getPitch() - 180;
        x = Math.cos(yaw * (Math.PI / 180));
        y = Math.sin(pitch * (Math.PI / 180));
        z = Math.sin(yaw * (Math.PI / 180));
        setVelX(Player.getEntity(), x * 1);
        setVelY(Player.getEntity(), y * 1);
        setVelZ(Player.getEntity(), z * 1);
        Entity.setPositionRelative(getPlayerEnt(), 1, 0, 0);
        Entity.setPositionRelative(getPlayerEnt(), 0, 0, 1);
        }
}
};
Combus.registerModule(hitboost);

var freecam = { 
	name: "Freecam",
	name2: "FRC",
	desc: "Not found",
	category: "Movement",
	active: false,
showBtn: function () {
		ctx.runOnUiThread(new Runnable({
			run: function () {
				if(ctx) {
					var move = new Button(ctx);
					move.setText("Move");
					move.setTextColor(Color.parseColor("#FFFFFF"));
					move.setBackground(bgstat);
					move.getBackground().setAlpha(alpha);
					move.setOnClickListener(new View.OnClickListener({
						onClick: function (btn) {
                    Entity.setPosition(freecam.ent, Entity.getX(Player.getEntity())-2 * Math.sin(Entity.getYaw(Player.getEntity()) / 180 * Math.PI), Player.getPointedVecY(), Entity.getZ(Player.getEntity())+ 2 * Math.cos(Entity.getYaw(Player.getEntity()) / 180 * Math.PI));
                    }
					}));
					move.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
freecam.menu.update(mPosX, mPosY - 15, -1, -1);
freecam.menuX = mPosX;
freecam.menuY = mPosY - 15;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
move.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
					var layout = new LinearLayout(ctx);
					layout.setOrientation(1);
					layout.addView(move);
					freecam.menu = new PopupWindow(layout, dip2px(80), dip2px(35));
				    freecam.menu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
					if(!freecam.menuX && !freecam.menuY){
					freecam.menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 500, 500);
					}else{
				    freecam.menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, freecam.menuX, freecam.menuY);
					}
				}
			}
		}));

	},
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
freecam.menu.dismiss();
ModPE.setCamera(Player.getEntity());
Entity.remove(freecam.ent);
freecam.ent = null;
Entity.setImmobile(Player.getEntity(), false);
}else{
freecam.ent = spawnChicken(Player.getX(), Player.getY(), Player.getZ(), "Block");
Entity.setImmobile(freecam.ent, true);
Entity.setCollisionSize(freecam.ent, 0, 0);
Entity.setRenderType(freecam.ent, EntityRenderType.human);
ModPE.setCamera(freecam.ent);

Entity.setImmobile(Player.getEntity(), true);

Combus.toast(this.name, true);
this.active = true;
freecam.showBtn();
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onModTick: function(){
	if(this.active){
if(freecam.ent)Entity.setRot(freecam.ent, Entity.getYaw(Player.getEntity()), Entity.getPitch(Player.getEntity()));
}
}
};
Combus.registerModule(freecam);

var scaffold = {
	name: "Scaffold(NO-PC)",
	name2: "SCF",
	desc: "Not found",
	category: "Movement",
	active: false,
onClick: function(btn){
if(this.active){
Combus.toast(this.name, false);
this.active = false;
}else{
Combus.toast(this.name, true);
this.active = true;
}
},
isStateMode: function () {
		return false; //Для работы onModTick
	},
onUseItem: function(x, y, z, itemId, blockId, side){
if(this.active){
  if(side == BlockFace.NORTH) {
   Entity.setPositionRelative(getPlayerEnt(), 0, 0, -1);
   } else if(side == BlockFace.SOUTH) {
      Entity.setPositionRelative(getPlayerEnt(), 0, 0, 1);
   } else if(side == BlockFace.WEST) {
      Entity.setPositionRelative(getPlayerEnt(), -1, 0, 0);
   } else if(side == BlockFace.EAST) {
   Entity.setPositionRelative(getPlayerEnt(), 1, 0, 0);
   } else if(side == BlockFace.UP) {
   Entity.setPositionRelative(getPlayerEnt(), 0, 1, 0);
}
}
}
};
Combus.registerModule(scaffold);

function chatHook(str){
var str1 = str.split(" ");
if(str1[0] == ".name" && str1[1]){
	preventDefault();
Entity.setNameTag(Player.getEntity(), str1[1]);
ModPE.langEdit(Player.getName(Player.getEntity()), str1[1]);
}
if(str == ".vs"){menuset.onClick();preventDefault();}
if(str1[0] == ".eval" && str1[1]){
preventDefault();
try{
eval(str1[1]);
Combus.toast("Executed");
}catch(e){
Combus.toast(e +"#On line "+e.lineNumber);
}
}
}




function control(ent){
      ctx.runOnUiThread(new Runnable({ run: function(){
      try{
      var menuLayout2 = new LinearLayout(ctx);
menuLayout2.setOrientation(1);
var scroll2 = new ScrollView(ctx);
scroll2.addView(menuLayout2);
var dialog2 = new Dialog(ctx);
dialog2.setContentView(scroll2);
dialog2.setTitle(Player.getName(ent));
if(ent != Player.getEntity()){
var button = new Button(ctx);
button.setTextColor(Color.parseColor("#FFFFFF"));
button.setOnClickListener(new View.OnClickListener(){
onClick: function(view){
rideAnimal(Player.getEntity(), ent)
}});
button.setText("Ride");
menuLayout2.addView(button);
}

var button = new Button(ctx);
button.setTextColor(Color.parseColor("#FFFFFF"));
button.setOnClickListener(new View.OnClickListener(){
onClick: function(view){
ModPE.setCamera(ent)
}});
button.setText("Spectate");
menuLayout2.addView(button);

var button = new Button(ctx);
button.setTextColor(Color.parseColor("#FFFFFF"));
button.setOnClickListener(new View.OnClickListener(){
onClick: function(view){
ModPE.setCamera(Player.getEntity())
}});
button.setText("UnSpectate");
menuLayout2.addView(button);

var button = new Button(ctx);
button.setTextColor(Color.parseColor("#FFFFFF"));
button.setOnClickListener(new View.OnClickListener(){
onClick: function(view){
if(sh){
sh = null;
Combus.toast("Tracking to " +Player.getName(ent))
}else{
sh = ent;
Combus.toast("Tracking to " +Player.getName(ent))
}
}});
button.setText("Tracking");
menuLayout2.addView(button);

var button = new Button(ctx);
button.setTextColor(Color.parseColor("#FFFFFF"));
button.setOnClickListener(new View.OnClickListener(){
onClick: function(view){
var you = Player.getEntity();
Entity.setPosition(you, Entity.getX(ent), Entity.getY(ent), Entity.getZ(ent));
Combus.toast("Teleported to " +Entity.getNameTag(ent))
}});
button.setText("TP");
menuLayout2.addView(button);

var button = new Button(ctx);
button.setTextColor(Color.parseColor("#FFFFFF"));
button.setOnClickListener(new View.OnClickListener(){
onClick: function(view){
var you = Player.getEntity();
Entity.setPosition(ent, Entity.getX(you), Entity.getY(you)+2, Entity.getZ(you));
}});
button.setText("TP up you(visual)");
menuLayout2.addView(button);


var close = new Button(ctx);
close.setTextColor(Color.parseColor("#FFFFFF"));
close.setOnClickListener(new View.OnClickListener(){
onClick: function(view){
dialog2.dismiss();
}});
close.setText("Close");
menuLayout2.addView(close);

dialog2.show();
      }catch(e){
      print('Error : ' + e);
      }
      }}));
      }

function leaveGame(){
Combus.inGame = false;
}

var catmenu;

var all = {
 popup: null,
 x: 350,
 y: 50,
 def_x: 350,
 def_y: 50
};

var combat = {
 popup: null,
 x: 700,
 y: 50,
 def_x: 700,
 def_y: 50
};

var movement = {
 popup: null,
 x: 1050,
 y: 50,
 def_x: 1050,
 def_y: 50
};

var other = {
 popup: null,
 x: 1400,
 y: 50,
 def_x: 1400,
 def_y: 50
};

var effects = {
 popup: null,
 x: 1750,
 y: 50,
 def_x: 1750,
 def_y: 50
};

var binds = {
 popup: null,
 x: 350,
 y: 1000,
 def_x: 350,
 def_y: 1000
};

var trolling = {
 popup: null,
 x: 700,
 y: 1000,
 def_x: 700,
 def_y: 1000
};

var playerslist = {
 popup: null,
 x: 1050,
 y: 1000,
 def_x: 1050,
 def_y: 1000
};

function showCat(){

	var ani = 0;
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
var LayoutParams = LinearLayout.LayoutParams;
   
  var lay = new LinearLayout(ctx);
  lay.setOrientation(1);
  var lay1 = new LinearLayout(ctx);
  lay1.setOrientation(1);
buttonN = new TextView(ctx);
buttonN.setTextSize(15);
buttonN.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/6.3, ctx.getWindowManager().getDefaultDisplay().getWidth()/32));
buttonN.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#D95B5F")));
buttonN.startAnimation(Animation.rotate);
eval(String.fromCharCode(9, 98, 117, 116, 116, 111, 110, 78, 46, 115, 101, 116, 84, 101, 120, 116)+"('\x43\x6F\x6D\x62\x75\x73\x56\x31'+'.'+'\x31'+'\x34'+' ↓')");
buttonN.setText(Html.fromHtml('<b><font color="#CECFD3">'+buttonN.getText()+'</font></b>'));
buttonN.setGravity(Gravity.CENTER);
buttonN.setTextColor(Color.WHITE);
buttonN.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
moving = true;
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
catmenu.update(mPosX, mPosY, -1, -1);
menucx = mPosX;
menucy = mPosY;
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
buttonN.setOnLongClickListener(new View.OnLongClickListener(){
   onLongClick: function(view){
   catmenu.update(eval(entry.toLowerCase()+".def_x"), eval(entry.toLowerCase()+".def_y"), -1, -1);
   return true;
   }
   });
lay.addView(buttonN);
lay.addView(lay1);

catlist.forEach(function (entry, index, array) {
		try {
			var buttonLayout = new LinearLayout(ctx);
			buttonLayout.setOrientation(0);
			buttonLayout.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#242C39")));
var button5 = new Button(ctx);
    button5.setGravity(Gravity.CENTER);
    button5.setTextColor(Color.parseColor('#CECFD3'));
    button5.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
    button5.setText(entry);
    if(eval(entry.toLowerCase())){
    if(eval(entry.toLowerCase()+".popup")){
    button5.setText(Html.fromHtml('<b><font color="#D95B5F">'+button5.getText()+'</font></b>'));
    }else{
    button5.setText(Html.fromHtml('<b><font color="WHITE">'+button5.getText()+'</font></b>'));
    }
    }
    button5.setTextSize(size);
    button5.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/par, ctx.getWindowManager().getDefaultDisplay().getWidth()/par1));
    button5.setOnClickListener(new View.OnClickListener({
    onClick: function(view) {
    if(eval(entry.toLowerCase()+".popup == null")){
     showGui(entry, entry.toLowerCase());
    }else{
     eval(entry.toLowerCase()+".popup.dismiss()")
     eval(entry.toLowerCase()+".popup = null")
    }
    if(eval(entry.toLowerCase()+".popup")){
    button5.setText(Html.fromHtml('<b><font color="#D95B5F">'+button5.getText()+'</font></b>'));
    }else{
    button5.setText(Html.fromHtml('<b><font color="WHITE">'+button5.getText()+'</font></b>'));
    }
    }
    }));
    buttonLayout.addView(button5);

    lay1.addView(buttonLayout);
} catch(e) {
clientMessage(e);
}
});

catmenu = new PopupWindow(lay, RelativeLayout.LayoutParams.WRAP_CONTENT, RelativeLayout.LayoutParams.WRAP_CONTENT); 
catmenu.setOnDismissListener(new PopupWindow.OnDismissListener( {
					onDismiss: function () {
						catmenu = null;
					}
				}));
catmenu.setAnimationStyle(R.style.Animation_Translucent);
catmenu.setBackgroundDrawable(bgmenu);
catmenu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, menucx, menucy);
   }catch(err){
clientMessage("An error occured: " + err + err.lineNumber);
        }
    }}));
}

function showGui(cat, catname){
ctx.runOnUiThread(new Runnable({ run: function(){
        try{
var LayoutParams = LinearLayout.LayoutParams;

  var lay = new LinearLayout(ctx);
  lay.setOrientation(1);
  var lay1 = new LinearLayout(ctx);
  lay1.setOrientation(1);
  var ms = new ScrollView(ctx);
  ms.setBackground(lines);
  //ms.setVerticalScrollBarEnabled(false);

buttonN1 = new TextView(ctx);
buttonN1.setTextSize(20);
buttonN1.setText(cat+" ↓");
buttonN1.setText(Html.fromHtml('<b><font color="#CECFD3">'+buttonN1.getText()+'</font></b>'));
buttonN1.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/6.3, ctx.getWindowManager().getDefaultDisplay().getWidth()/32));
buttonN1.setBackgroundDrawable(new ColorDrawable(Color.parseColor("#D95B5F")));
buttonN1.startAnimation(Animation.rotate);
buttonN1.setGravity(Gravity.CENTER);
buttonN1.setTextColor(Color.WHITE);
buttonN1.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
moving = true;
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
eval(catname.toLowerCase()+".popup.update(mPosX, mPosY, -1, -1)")
eval(catname.toLowerCase()+".x = mPosX");
eval(catname.toLowerCase()+".y = mPosY");
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
buttonN1.setOnLongClickListener(new View.OnLongClickListener(){
   onLongClick: function(view){
   eval(catname.toLowerCase()+".popup").update(eval(catname.toLowerCase()+".def_x"), eval(catname.toLowerCase()+".def_y"), -1, -1);
   return true;
   }
   });
lay.addView(buttonN1);
ms.addView(lay1);
lay.addView(ms);

function generateBinds(){
	Combus.mods.forEach(function (entry, index, array) {
		try {
			let buttonLayout = new LinearLayout(ctx);
            buttonLayout.setOrientation(0);
       
var button5 = new Button(ctx);
    button5.setGravity(Gravity.CENTER);
    button5.setTextColor(Color.parseColor('#CECFD3'));
    button5.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
    button5.setText(entry.name+" Bind");
    if(!entry.bindMenu){
      button5.setText(Html.fromHtml('<b><font color="WHITE">'+button5.getText()+'</font></b>'));
   }else{
       button5.setText(Html.fromHtml('<b><font color="#D95B5F">'+button5.getText()+'</font></b>'));
   }
    button5.setTextSize(size);
    button5.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/par, ctx.getWindowManager().getDefaultDisplay().getWidth()/par1));
    button5.setOnClickListener(new View.OnClickListener({
    onClick: function(view) {
    if(entry.bindMenu == null){
binds1.showBtn(index);
}else{
entry.bindMenu.dismiss();
entry.bindMenu = null;
}

   if(entry.bindMenu == null){
      view.setText(Html.fromHtml('<b><font color="WHITE">'+ view.getText()+'</font></b>'));
   }else{
       view.setText(Html.fromHtml('<b><font color="#D95B5F">'+view.getText()+'</font></b>'));
   }
   
   }
   })); 
   button5.setOnLongClickListener(new View.OnLongClickListener(){
   onLongClick: function(view){
   desc(entry);
   return true;
   }
   });
    buttonLayout.addView(button5);

 lay1.addView(buttonLayout);
} catch(e) {}
});
}

function generateButton(){
	Combus.mods.forEach(function (entry, index, array) {
		try {
			
			var cat1 = [];
			if(cat == "All"){
cat1.push("Combat");
cat1.push("Movement");
cat1.push("Other");
cat1.push("Effects");
			}else{
cat1.push(cat);
			}
			
			let buttonLayout = new LinearLayout(ctx);
            buttonLayout.setOrientation(0);
       
       if(cat1.indexOf(entry.category) != -1){
var button5 = new Button(ctx);
    button5.setGravity(Gravity.CENTER);
    button5.setTextColor(Color.WHITE);
    button5.setText(entry.name);
    if(entry.active == true){
      button5.setText(Html.fromHtml('<b><font color="#D95B5F">'+button5.getText()+'</font></b>'));
   }else if(entry.active == false || entry.active == "static"){
   	button5.setText(Html.fromHtml('<b><font color="WHITE">'+button5.getText()+'</font></b>'));
   }
    button5.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
    button5.setTextSize(size);
    button5.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/par, ctx.getWindowManager().getDefaultDisplay().getWidth()/par1));
    button5.setOnClickListener(new View.OnClickListener({
    onClick: function(view) {
  entry.onClick();
    if(arraylist.menu){
if(arraylist.menu.isShowing() == true){
arraylist.actText(entry.name);
}
}
if(entry.active == true){
      view.setText(Html.fromHtml('<b><font color="#D95B5F">'+button5.getText()+'</font></b>'));
   }else if(entry.active == false || entry.active == "static"){
   	view.setText(Html.fromHtml('<b><font color="WHITE">'+button5.getText()+'</font></b>'));
   }
   }
   })); 
   button5.setOnLongClickListener(new View.OnLongClickListener(){
   onLongClick: function(view){
   desc(entry);
   return true;
   }
   });
    buttonLayout.addView(button5);
 lay1.addView(buttonLayout);

 }
} catch(e) {
clientMessage(e);
}
});
}

function generatePlayers(){
	var players = Server.getAllPlayers();
	players.forEach(function (entry, index, array) {
		try {
			
			let buttonLayout = new LinearLayout(ctx);
            buttonLayout.setOrientation(0);
       
var button5 = new Button(ctx);
    button5.setGravity(Gravity.CENTER);
    button5.setBackgroundDrawable(new ColorDrawable(Color.BLACK));
    button5.setText(Player.getName(entry));
    button5.setTextColor(Color.parseColor('#CECFD3'));
    button5.setText(Html.fromHtml('<b><font color="#D95B5F">'+button5.getText()+'</font></b>'));
    button5.setTextSize(size);
    button5.setLayoutParams(new LinearLayout.LayoutParams(ctx.getWindowManager().getDefaultDisplay().getWidth()/par, ctx.getWindowManager().getDefaultDisplay().getWidth()/par1));
    button5.setOnClickListener(new View.OnClickListener({
    onClick: function(view) {
    control(entry);
   }
   })); 
    buttonLayout.addView(button5);
 lay1.addView(buttonLayout);
} catch(e) {}
});
}

function genSel(){
ctx.runOnUiThread(new Runnable({ run: function(){
if(cat == "Binds"){generateBinds()}else if(cat != "PlayersList"){generateButton()}else{generatePlayers()}
}}));
}
genSel();


menu = new PopupWindow(lay, ctx.getWindowManager().getDefaultDisplay().getWidth()/menuw, ctx.getWindowManager().getDefaultDisplay().getWidth()/menuh); 
menu.setOnDismissListener(new PopupWindow.OnDismissListener( {
					onDismiss: function () {
						menu = null;
					}
				}));
menu.setAnimationStyle(R.style.Animation_Translucent);
menu.setBackgroundDrawable(bgmenu);
menu.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, eval(catname.toLowerCase()+".x"), eval(catname.toLowerCase()+".y"));
eval(catname.toLowerCase()+".popup = menu")
   }catch(err){
clientMessage("An error occured: " + err + err.lineNumber);
        }
    }}));
}


var yes = 1;

function showMenu(){
	ctx.runOnUiThread(new Runnable({ run: function(){
      try{
if(catmenu){
	catmenu.dismiss();
    catlist.forEach(function (entry, index, array) {
    if(eval(entry.toLowerCase()+".popup")){
    eval(entry.toLowerCase()+".popup.dismiss()")
    }
    });
	}else{
	if(arraylist.list[0] == null){
	arraylist.active = true;
    arraylist.showText();
    }
	showCat();
	catlist.forEach(function (entry, index, array) {
    if(eval(entry.toLowerCase()+".popup")){
    showGui(entry, entry.toLowerCase());
    }
    });
	}
		}catch(error){
			clientMessage('Error: ' + error +" #On line " + error.lineNumber);
			}
			}}));
}

function GU1(){
      ctx.runOnUiThread(new Runnable({ run: function(){
      try{
      var layout = new LinearLayout(ctx);
      layout.setOrientation(1);
                   var but = new Button(ctx);
					but.setBackground(bgon);
					but.setGravity(Gravity.CENTER);
					but.setText("C");
					but.setTextSize(10);
					but.setTextColor(Color.RED);
					but.setOnClickListener(new View.OnClickListener({
					onClick: function (btn) {
                    showMenu();
					}
					}));
					but.setOnTouchListener(new View.OnTouchListener({
onTouch: function(view, motionEvent) {
try {
if (!moving) {
return false
};
switch (motionEvent.getAction()) {
case MotionEvent.ACTION_DOWN:
dx = mPosX - motionEvent.getRawX();
dy = mPosY - motionEvent.getRawY();
break;
case MotionEvent.ACTION_MOVE:
mPosX = (motionEvent.getRawX() + dx);
mPosY = (motionEvent.getRawY() + dy);
menuB.update(mPosX, mPosY - 15, -1, -1);
break;
case MotionEvent.ACTION_UP:
;
case MotionEvent.ACTION_CANCEL:
moving = false;
break
}
} catch (e) {};
return true
}
}));
but.setOnLongClickListener(new View.OnLongClickListener({
onLongClick: function(v, t) {
moving = true;
return true
}
}));
                    layout.addView(but);
 
      menuB = new PopupWindow(layout, dip2px(45), dip2px(45));
      menuB.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
      menuB.showAtLocation(ctx.getWindow().getDecorView(), Gravity.LEFT | Gravity.TOP, 900, 20);
      }catch(err){
      print('An error occured: ' + err);
      }
      }}));
      }
GU1();
      
      var msc = Utils.modsCount;
      Combus.toast("Combus have "+msc+" module");
      