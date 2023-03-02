(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"dog_haiku2_atlas_1", frames: [[0,0,1417,1014],[0,1016,1416,1001]]},
		{name:"dog_haiku2_atlas_2", frames: [[0,0,1328,1066],[0,1068,1428,970]]},
		{name:"dog_haiku2_atlas_3", frames: [[0,1002,1376,992],[0,0,1376,1000]]},
		{name:"dog_haiku2_atlas_4", frames: [[0,0,1332,1022],[0,1024,1456,929]]},
		{name:"dog_haiku2_atlas_5", frames: [[0,931,1476,913],[0,0,1452,929]]},
		{name:"dog_haiku2_atlas_6", frames: [[0,0,1416,915],[1418,0,584,675],[1418,677,584,675],[0,1354,584,675],[586,1354,584,675],[1172,1354,584,675]]},
		{name:"dog_haiku2_atlas_7", frames: [[0,0,584,675],[586,0,584,675],[1172,0,584,675],[0,677,584,675],[586,677,916,176]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_65 = function() {
	this.initialize(ss["dog_haiku2_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["dog_haiku2_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["dog_haiku2_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["dog_haiku2_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["dog_haiku2_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["dog_haiku2_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["dog_haiku2_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["dog_haiku2_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["dog_haiku2_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["dog_haiku2_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["dog_haiku2_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["dog_haiku2_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["dog_haiku2_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["dog_haiku2_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["dog_haiku2_atlas_6"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["dog_haiku2_atlas_6"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["dog_haiku2_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["dog_haiku2_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["dog_haiku2_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["dog_haiku2_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["dog_haiku2_atlas_7"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.walkingdog = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_55();
	this.instance.setTransform(-438.35,-165.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_56();
	this.instance_1.setTransform(-458.3,-137.25,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_57();
	this.instance_2.setTransform(-476.25,-136.3,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_58();
	this.instance_3.setTransform(-488.2,-136.3,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_59();
	this.instance_4.setTransform(-478.4,-136.3,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_60();
	this.instance_5.setTransform(-464.25,-158.35,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_61();
	this.instance_6.setTransform(-458.35,-174.25,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_62();
	this.instance_7.setTransform(-438.35,-167.4,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_63();
	this.instance_8.setTransform(-430.2,-174.35,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_64();
	this.instance_9.setTransform(-416.35,-180.4,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_65();
	this.instance_10.setTransform(-414.3,-202.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-488.2,-202.4,766.5,536.6);


(lib.question = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_46();
	this.instance.setTransform(-111.45,-199.3,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_47();
	this.instance_1.setTransform(-111.45,-199.3,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_48();
	this.instance_2.setTransform(-111.45,-199.3,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_49();
	this.instance_3.setTransform(-111.45,-199.3,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_50();
	this.instance_4.setTransform(-111.45,-199.3,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_51();
	this.instance_5.setTransform(-111.45,-199.3,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_52();
	this.instance_6.setTransform(-111.45,-199.3,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_53();
	this.instance_7.setTransform(-111.45,-199.3,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_54();
	this.instance_8.setTransform(-111.45,-199.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.4,-199.3,292,337.5);


(lib.collar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AARCAIgEgBIgDAAIgDgBIgEgBIgDgCIgIgGIgIgHQgFgFgEgGIgEgHIgEgIIgCgHIgMgMQgIgGgHgIIgNgNIgMgPIgOgTIgDgDIgDgCIgDgDIgDgDIgCgDIgDgDIgCgDIgCgDIgCgCIgDgCIgCgCIgDgDIgCgDIgBgEIgBgDIAAgEIAAgDIABgEIABgEIACgDIAAAAIgCgCIgBgDIAAgDIAAgDIABgDIAAgDIABgDIACgDIABgCIACgDIADgFIAFgFIAEgGIAEgEIAEgFIADgBIACgCIADgCQAOgFAOgBIAfgCIAbgCIAagCIAVgCIADAAIADABIADAAIAEAAIACABIADABIADACIADACIADACIACADIADACIACADIACADIACACIACACIACACIADABIADACIADACIACABIADACIADADIACACIACADIACADIABADIACACIABADIABADIACADIABADIACACIASAXQAIAMABAOIACAYQABAMgCALIAAABIAAABIgDAPIgBADIgCADIgBACIgBADIgBADIgCACIgBACIgCADIgCACIgCADIgDACIgCACIgBAAIgDACIgDACIgCADIgDADIgCADIgCACIgBACIgCADIgCACIgDADIgCACIgDACIgCACIgCABIgDACIgCABIgDACIgDABIgCACIgDACIgDABIgDACIgDAAIgDABIgDAAIgDAAIgDgBIgDAAIgCgBIgEADIgGACIgEAAIgDABIgEgBgAhYhUIgEACIgFAEIgFAEIgFAFIgBACIAAAAIADABIAEABIADABIADACQAPALAOAMQALAKAKALQALANAMAKIAYAUQAJAHAHAKIADADIABAEIACAEIACADIABAEIAAAAIACACIACACIADACIABgBIADgCIADgCIACgBIAEgFIAFgFIAFgGIAEgFIAGgFIAGgEIABgEIABgDIAAgIIAAgIIAAgHIAAgIIgBgEIgGgIIgHgIIgFgKIgFgKIgCgEIgFgEIgFgFIgFgFIgFgFIgEgGIgZgCIgcgDIgYgCIgYgBIgMABgABLAcIAAAAIAAAAIAAAAg");
	this.shape.setTransform(52.4313,43.375);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AATCuIgHAAIgGgBIgGgBIgGgBIgGgBIgMgEIgKgDIgGgCIgFgBIgEgBIgHgCIgGgDIgGgCIgGgDIgLgHIgKgIIgKgIIgJgIIgIgIIgFgEIgDgDIgDgCIgFgFIgEgFIgDgEIgDgFIgDgFIgCgGIgDgGIgHgNQgFgJgDgKQgEgKgBgLQgBgLACgJIADgXIACgHIADgGIADgGIADgHIACgEIAAAAIADgEIADgEIADgFIADgFIADgFIADgFIACgEIADgFIAEgFIAEgFIAEgFIAFgFIAFgEIADgEIADgDIAFgEIAEgEQAIgKAKgIQAKgIANgFQALgEANgBQAMgBANAAIAaADIAGABIAEABIAFACIAFACIAFADIABABIADACIAFADIAEAEIAEAFIAEAFIADAFQAjALAZAZQAZAZANAhQAPApgDArQAAANgEAMQABgLAAgMIgCgZQgBgOgIgLIgSgXIgCgCIgCgDIgBgDIgBgDIgCgDIgBgCIgCgDIgCgDIgCgDIgCgCIgCgDIgDgCIgDgBIgDgCIgDgCIgCgBIgCgCIgDgCIgCgCIgCgDIgCgDIgCgCIgDgDIgCgCIgDgCIgDgCIgDgBIgDgBIgDAAIgDAAIgEgBIgDAAIgVACIgaACIgaACIgfACQgPABgNAFIgDACIgDACIgCABIgEAFIgEAEIgFAGIgEAFIgEAFIgCADIgBACIgBADIgBADIgBADIAAADIgBADIABADIABADIACACIgBAAIgBADIgCAEIgBAEIAAADIABAEIABADIABADIACADIACADIADACIADACIACACIACADIACADIACADIADADIADADIADADIACADIADADIAPATIAMAPIAMANQAHAIAJAGIALAMIACAHIADAIIAFAHQADAGAFAFIAJAHIAJAGIADACIADABIADABIADAAIAEABIAFABIADgBIADAAIAGgCIAFgDIABABIADAAIADABIADAAIAEAAIADgBIADAAIADgCIADgBIACgCIADgCIACgBIADgCIADgBIACgCIACgBIADgCIACgCIACgCIADgDIACgCIACgDIACgCIACgCIACgDIACgDIADgDIADgCIADgCIAAAAQgRAXgYAQIgFADIgGACIgGACIgGACIgGACIgGABIgGADIgGACIgGACIgGABIgHABIgGABIgGAAIgEABIgGgBgABDBiIgDgCIgCgCIAAAAIgBgEIgBgDIgCgEIgCgEIgCgDQgHgKgKgHIgYgUQgNgLgKgNQgJgLgMgJQgOgMgPgLIgDgCIgDgBIgDgBIgDgBIAAAAIABgCIAFgFIAFgEIAFgEIAEgCIAMgBIAYABIAXACIAcADIAaACIAEAGIAFAFIAEAFIAGAFIAFAEIABAEIAFAKIAGAJIAGAIIAHAIIAAAEIAAAIIAAAIIAAAIIAAAIIgBADIgBAEIgFAEIgGAFIgFAFIgEAGIgFAFIgFAFIgCABIgDACIgDACIAAABIgDgCgABuA+IABAAIAAAAg");
	this.shape_1.setTransform(48.8543,39.9667);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgiHpIgMgCIgKgEIgKgFIgKgGIgJgHIgHgIIgHgJIgGgEIgGgDIgGgDIgGgEIgGgDIgFgEIgGgFIgGgBIgHgCIgGgCIgGgCIgGgEIgFgDIgFgEIgFgEIgGgEIgEgCIgEgDIgFgDIgFgEIgEgEIgFgEIgEgDIgEgFIgEgCIgEgCIgGgDIgFgDIgFgEIgFgEIgEgFIgFgFQgJgDgJgGIgKgIIgJgIIgIgLQgFgHgDgJIgCgGIgFgFIgEgEIgDgEIgDgFIgDgHIgDgHIgDgIIgBgGQgNgOgFgTQgEgRAAgSIAAglIAAgvIAAgqIAAgHQgHgQgCgSIgCgcIABgZIACgbIAGgXIABgTIAAgVQAAgLACgKIAEgSIAEgKIABgGIABgFIACgGIACgFIACgGIAAgFIABgFIABgHIABgIIABgHIABgGIACgGIADgFIACgGIADgGIADgGIACgFIACgHIABgHIADgGIACgGIADgGIAEgGIAEgFIACgEIADgEIADgFIAEgFIAEgEIACgFIADgFIAEgFIADgFIAEgEIAEgEIAEgFIAEgFIAFgDIAFgEIAEgDIAFgEIAFgDIAGgDIAJgKIAJgIIAJgGIAKgFIALgEIAEgBIAFAAIAGgBIAFgBIAJgFIAMgGIALgEIANgDIAMgDIAHgCIAGgCIAGgCIAGgCIAHgBIAHgBIAHgBIAHAAQAKgFALgDQgWAigMAXQgiA8gQA1IAAADIAAABIADAFIACAFIACAFIABAHIABAHIAAAHIgBAHIgCAFIgDAGIgCAFIgCADIAAADIgDAHIAAABIgBAFIgCAEIAAAFIAAAEIgBAHIgBAGIgBAHIAAAGIAAAHIAAAGIAAAIIAAAHIAAAFIAAAGIgBACIAAAGIgBAGIAAABIgCAGIgCAFIgEAFIgEAFIgFAEIAAABIgBAIIAAAIIABAHIAAAHIAAAHIAAAIIAAAHIADAGIACAHIADAHIACAOIABAOIAAAMIABAMIAAANIAAAOIAAAHIADAHIACAGIACAGIABAGIABACIACAFIACAFIACAFIACAGIABAGIABAHIABAHIADAHIADAGIAAAAIAEAFIAEAGIAEAFIADAGIADAFIADAFIADAFIACAEIACAFIACAGIABAEIABAEIABABIADAEIAGADIAGAEIAFAFIADAEIAEAFIADAEIADAFIAGAGIAFACIAFAEIAEACIADADIAHADIAEACIAEACIAGADIAFADIAGADIAFADIAEAEQAnABAmgCQA1gCA0AIIACABQAOgDANgEQAcgIAXgRIACAAIAGAAIAMACIANABQARAFAOALQAOALAKAQQAHANADAPQADAPgCAPQgCAPgHANQgEAJgGAIIgBgBIgFgDIgFgCIgFgCIgEgBIgGgBIgbgDQgNAAgMABQgNABgLAEQgNAFgKAIQgKAIgIAKIgEAEIgFAEIgDADIgDAEIgFAEIgFAFIgEAFIgEAFIgEAFIgDAFIgCAEIgDAFIgDAFIgDAFIgDAFIgDAEIgDAEIAAAAIgMAAIgQAAIgHACIgGABIgHABIgHAAIgHABIgGABIgcAEQgPACgPgBIgaAAIgUABIgFABIgNgCg");
	this.shape_2.setTransform(17.2694,-14.0437);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.collar, new cjs.Rectangle(-20.6,-63.1,87.19999999999999,120.6), null);


(lib.circlebutton = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AKAAAQAAEJi7C8Qi8C7kJAAQkIAAi8i7Qi7i8AAkJQAAkIC7i8QC8i7EIAAQEJAAC8C7QC7C8AAEIg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#660066").s().p("AnEHFQi7i8AAkJQAAkIC7i8QC8i7EIAAQEJAAC8C7QC7C8AAEIQAAEJi7C8Qi8C7kJAAQkIAAi8i7g");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF33CC").s().p("AnEHFQi7i8AAkJQAAkIC7i8QC8i7EIAAQEJAAC8C7QC7C8AAEIQAAEJi7C8Qi8C7kJAAQkIAAi8i7g");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(3,1,1).p("ANXAAQAAFij6D7Qj7D6liAAQlhAAj7j6Qj6j7AAliQAAlhD6j7QD7j6FhAAQFiAAD7D6QD6D7AAFhg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF33CC").s().p("ApcJdQj6j7AAliQAAlhD6j7QD7j6FhAAQFiAAD7D6QD6D7AAFhQAAFij6D7Qj7D6liAAQlhAAj7j6g");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#660066").s().p("AnEHEQi7i7AAkJQAAkIC7i7QC8i8EIAAQEJAAC8C8QC7C7AAEIQAAEJi7C7Qi8C8kJAAQkIAAi8i8g");
	this.shape_5.setTransform(0,-0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape,p:{y:0}}]}).to({state:[{t:this.shape_2},{t:this.shape,p:{y:0}}]},1).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape,p:{y:-0.5}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-87,174,174);


// stage content:
(lib.dog_haiku2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {text:0,artwork:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1];
	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		stage.enableMouseOver();
		
		this.line01_txt.addEventListener("click",changeLine01);
		
		function changeLine01(){
			console.log("will change line 1");
			root.line01_txt.text = line01;
		}
		
		var line01 = "There once was a dog"
		
		var root = this;
		stage.enableMouseOver();
		
		this.line02_txt.addEventListener("click",changeLine02);
		
		function changeLine02(){
			console.log("will change line 2");
			root.line02_txt.text = line02;
		}
		
		var line02 = "He often went on long walks"
		
		var root = this;
		stage.enableMouseOver();
		
		this.line03_txt.addEventListener("click",changeLine03);
		
		function changeLine03(){
			console.log("will change line 3");
			root.line03_txt.text = line03;
		}
		
		var line03 = "To contemplate life"
		
		this.stop();
		var root = this;
		stage.enableMouseOver
		
		this.toFrame02_btn.addEventListener("click",toFrame02);
		
		function toFrame02(){
			console.log("will go to frame 2")
			root.gotoAndStop("artwork");
		}
		
		this.stop();
		var root = this;
		stage.enableMouseOver
		
		this.toFrame01_btn.addEventListener("click",toFrame01);
		
		function toFrame01(){
			console.log("will go to frame 1")
			root.gotoAndStop("text");
		}
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// buttons
	this.toFrame02_btn = new lib.circlebutton();
	this.toFrame02_btn.name = "toFrame02_btn";
	this.toFrame02_btn.setTransform(473.85,531.85);
	new cjs.ButtonHelper(this.toFrame02_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.toFrame01_btn = new lib.circlebutton();
	this.toFrame01_btn.name = "toFrame01_btn";
	this.toFrame01_btn.setTransform(831.7,555.8);
	new cjs.ButtonHelper(this.toFrame01_btn, 0, 1, 2, false, new lib.circlebutton(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.toFrame02_btn}]}).to({state:[{t:this.toFrame01_btn}]},1).wait(1));

	// question
	this.instance = new lib.question();
	this.instance.setTransform(847.95,162.55,0.7675,0.6797,0,0,0,34.6,-30.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// dog
	this.instance_1 = new lib.collar();
	this.instance_1.setTransform(599.9,303.95,1.5963,1.1989,0,0,0,23,-2.7);

	this.instance_2 = new lib.walkingdog();
	this.instance_2.setTransform(391.8,389.9,1,1,0,0,0,-94.4,84.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	// text
	this.line03_txt = new cjs.Text("Line Three", "50px 'Pristina'");
	this.line03_txt.name = "line03_txt";
	this.line03_txt.textAlign = "center";
	this.line03_txt.lineHeight = 62;
	this.line03_txt.lineWidth = 486;
	this.line03_txt.parent = this;
	this.line03_txt.setTransform(466.85,254.85);

	this.line02_txt = new cjs.Text("Line Two", "50px 'Pristina'");
	this.line02_txt.name = "line02_txt";
	this.line02_txt.textAlign = "center";
	this.line02_txt.lineHeight = 62;
	this.line02_txt.lineWidth = 554;
	this.line02_txt.parent = this;
	this.line02_txt.setTransform(462.85,185.3);

	this.line01_txt = new cjs.Text("Line One", "50px 'Pristina'");
	this.line01_txt.name = "line01_txt";
	this.line01_txt.textAlign = "center";
	this.line01_txt.lineHeight = 62;
	this.line01_txt.lineWidth = 462;
	this.line01_txt.parent = this;
	this.line01_txt.setTransform(468.85,115.75);

	this.instance_3 = new lib.CachedBmp_45();
	this.instance_3.setTransform(243.9,18,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.line01_txt},{t:this.line02_txt},{t:this.line03_txt}]}).to({state:[]},1).wait(1));

	// background
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66FFFF").s().p("EhK9Ax/MAAAhj9MCV7AAAMAAABj9g");
	this.shape.setTransform(479.825,317.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(480,318,480,324.79999999999995);
// library properties:
lib.properties = {
	id: '511943A6476B2D4E902E94F6B99EAAD8',
	width: 960,
	height: 640,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/dog_haiku2_atlas_1.png", id:"dog_haiku2_atlas_1"},
		{src:"images/dog_haiku2_atlas_2.png", id:"dog_haiku2_atlas_2"},
		{src:"images/dog_haiku2_atlas_3.png", id:"dog_haiku2_atlas_3"},
		{src:"images/dog_haiku2_atlas_4.png", id:"dog_haiku2_atlas_4"},
		{src:"images/dog_haiku2_atlas_5.png", id:"dog_haiku2_atlas_5"},
		{src:"images/dog_haiku2_atlas_6.png", id:"dog_haiku2_atlas_6"},
		{src:"images/dog_haiku2_atlas_7.png", id:"dog_haiku2_atlas_7"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['511943A6476B2D4E902E94F6B99EAAD8'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;