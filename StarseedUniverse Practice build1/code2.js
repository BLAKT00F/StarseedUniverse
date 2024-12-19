gdjs.AninCode = {};
gdjs.AninCode.localVariables = [];
gdjs.AninCode.GDBG1Objects1= [];
gdjs.AninCode.GDBG1Objects2= [];
gdjs.AninCode.GDdustObjects1= [];
gdjs.AninCode.GDdustObjects2= [];
gdjs.AninCode.GDstarsObjects1= [];
gdjs.AninCode.GDstarsObjects2= [];
gdjs.AninCode.GD_9595_9595NewSpriteObjects1= [];
gdjs.AninCode.GD_9595_9595NewSpriteObjects2= [];
gdjs.AninCode.GDNewSprite2Objects1= [];
gdjs.AninCode.GDNewSprite2Objects2= [];
gdjs.AninCode.GDNewSprite3Objects1= [];
gdjs.AninCode.GDNewSprite3Objects2= [];
gdjs.AninCode.GD_9595_9595_9595_9595_9595_9595NewSprite4Objects1= [];
gdjs.AninCode.GD_9595_9595_9595_9595_9595_9595NewSprite4Objects2= [];
gdjs.AninCode.GD_9595_9595_9595_9595NewSprite5Objects1= [];
gdjs.AninCode.GD_9595_9595_9595_9595NewSprite5Objects2= [];
gdjs.AninCode.GDTransparentButtonWithWhiteYellowBorderObjects1= [];
gdjs.AninCode.GDTransparentButtonWithWhiteYellowBorderObjects2= [];
gdjs.AninCode.GDbackdroptopObjects1= [];
gdjs.AninCode.GDbackdroptopObjects2= [];
gdjs.AninCode.GDbackdrop_9595middleObjects1= [];
gdjs.AninCode.GDbackdrop_9595middleObjects2= [];
gdjs.AninCode.GDbackdrop_9595bottomObjects1= [];
gdjs.AninCode.GDbackdrop_9595bottomObjects2= [];
gdjs.AninCode.GDCloud1Objects1= [];
gdjs.AninCode.GDCloud1Objects2= [];
gdjs.AninCode.GDFadeoutObjects1= [];
gdjs.AninCode.GDFadeoutObjects2= [];


gdjs.AninCode.asyncCallback29924484 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.AninCode.localVariables);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}gdjs.AninCode.localVariables.length = 0;
}
gdjs.AninCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.AninCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.AninCode.asyncCallback29924484(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.AninCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.AninCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BG1"), gdjs.AninCode.GDBG1Objects1);
gdjs.copyArray(runtimeScene.getObjects("dust"), gdjs.AninCode.GDdustObjects1);
gdjs.copyArray(runtimeScene.getObjects("stars"), gdjs.AninCode.GDstarsObjects1);
{for(var i = 0, len = gdjs.AninCode.GDBG1Objects1.length ;i < len;++i) {
    gdjs.AninCode.GDBG1Objects1[i].setXOffset(gdjs.AninCode.GDBG1Objects1[i].getXOffset() + (1));
}
}{for(var i = 0, len = gdjs.AninCode.GDdustObjects1.length ;i < len;++i) {
    gdjs.AninCode.GDdustObjects1[i].setXOffset(gdjs.AninCode.GDdustObjects1[i].getXOffset() + (2.5));
}
}{for(var i = 0, len = gdjs.AninCode.GDstarsObjects1.length ;i < len;++i) {
    gdjs.AninCode.GDstarsObjects1[i].setXOffset(gdjs.AninCode.GDstarsObjects1[i].getXOffset() + (2));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteYellowBorder"), gdjs.AninCode.GDTransparentButtonWithWhiteYellowBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.AninCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length;i<l;++i) {
    if ( gdjs.AninCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.AninCode.GDTransparentButtonWithWhiteYellowBorderObjects1[k] = gdjs.AninCode.GDTransparentButtonWithWhiteYellowBorderObjects1[i];
        ++k;
    }
}
gdjs.AninCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fadeout"), gdjs.AninCode.GDFadeoutObjects1);
{for(var i = 0, len = gdjs.AninCode.GDFadeoutObjects1.length ;i < len;++i) {
    gdjs.AninCode.GDFadeoutObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 3, "Flash", "Forward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.AninCode.GDFadeoutObjects1.length ;i < len;++i) {
    gdjs.AninCode.GDFadeoutObjects1[i].returnVariable(gdjs.AninCode.GDFadeoutObjects1[i].getVariables().getFromIndex(0)).setNumber(1);
}
}{for(var i = 0, len = gdjs.AninCode.GDFadeoutObjects1.length ;i < len;++i) {
    gdjs.AninCode.GDFadeoutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 255, "linear", 5, false);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Character Creator", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("backdrop_bottom"), gdjs.AninCode.GDbackdrop_9595bottomObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "scroll down", 1010, (( gdjs.AninCode.GDbackdrop_9595bottomObjects1.length === 0 ) ? 0 :gdjs.AninCode.GDbackdrop_9595bottomObjects1[0].getCenterYInScene()) + 150, "", "linear", 15);
}}

}


};

gdjs.AninCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.AninCode.GDBG1Objects1.length = 0;
gdjs.AninCode.GDBG1Objects2.length = 0;
gdjs.AninCode.GDdustObjects1.length = 0;
gdjs.AninCode.GDdustObjects2.length = 0;
gdjs.AninCode.GDstarsObjects1.length = 0;
gdjs.AninCode.GDstarsObjects2.length = 0;
gdjs.AninCode.GD_9595_9595NewSpriteObjects1.length = 0;
gdjs.AninCode.GD_9595_9595NewSpriteObjects2.length = 0;
gdjs.AninCode.GDNewSprite2Objects1.length = 0;
gdjs.AninCode.GDNewSprite2Objects2.length = 0;
gdjs.AninCode.GDNewSprite3Objects1.length = 0;
gdjs.AninCode.GDNewSprite3Objects2.length = 0;
gdjs.AninCode.GD_9595_9595_9595_9595_9595_9595NewSprite4Objects1.length = 0;
gdjs.AninCode.GD_9595_9595_9595_9595_9595_9595NewSprite4Objects2.length = 0;
gdjs.AninCode.GD_9595_9595_9595_9595NewSprite5Objects1.length = 0;
gdjs.AninCode.GD_9595_9595_9595_9595NewSprite5Objects2.length = 0;
gdjs.AninCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.AninCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.AninCode.GDbackdroptopObjects1.length = 0;
gdjs.AninCode.GDbackdroptopObjects2.length = 0;
gdjs.AninCode.GDbackdrop_9595middleObjects1.length = 0;
gdjs.AninCode.GDbackdrop_9595middleObjects2.length = 0;
gdjs.AninCode.GDbackdrop_9595bottomObjects1.length = 0;
gdjs.AninCode.GDbackdrop_9595bottomObjects2.length = 0;
gdjs.AninCode.GDCloud1Objects1.length = 0;
gdjs.AninCode.GDCloud1Objects2.length = 0;
gdjs.AninCode.GDFadeoutObjects1.length = 0;
gdjs.AninCode.GDFadeoutObjects2.length = 0;

gdjs.AninCode.eventsList1(runtimeScene);
gdjs.AninCode.GDBG1Objects1.length = 0;
gdjs.AninCode.GDBG1Objects2.length = 0;
gdjs.AninCode.GDdustObjects1.length = 0;
gdjs.AninCode.GDdustObjects2.length = 0;
gdjs.AninCode.GDstarsObjects1.length = 0;
gdjs.AninCode.GDstarsObjects2.length = 0;
gdjs.AninCode.GD_9595_9595NewSpriteObjects1.length = 0;
gdjs.AninCode.GD_9595_9595NewSpriteObjects2.length = 0;
gdjs.AninCode.GDNewSprite2Objects1.length = 0;
gdjs.AninCode.GDNewSprite2Objects2.length = 0;
gdjs.AninCode.GDNewSprite3Objects1.length = 0;
gdjs.AninCode.GDNewSprite3Objects2.length = 0;
gdjs.AninCode.GD_9595_9595_9595_9595_9595_9595NewSprite4Objects1.length = 0;
gdjs.AninCode.GD_9595_9595_9595_9595_9595_9595NewSprite4Objects2.length = 0;
gdjs.AninCode.GD_9595_9595_9595_9595NewSprite5Objects1.length = 0;
gdjs.AninCode.GD_9595_9595_9595_9595NewSprite5Objects2.length = 0;
gdjs.AninCode.GDTransparentButtonWithWhiteYellowBorderObjects1.length = 0;
gdjs.AninCode.GDTransparentButtonWithWhiteYellowBorderObjects2.length = 0;
gdjs.AninCode.GDbackdroptopObjects1.length = 0;
gdjs.AninCode.GDbackdroptopObjects2.length = 0;
gdjs.AninCode.GDbackdrop_9595middleObjects1.length = 0;
gdjs.AninCode.GDbackdrop_9595middleObjects2.length = 0;
gdjs.AninCode.GDbackdrop_9595bottomObjects1.length = 0;
gdjs.AninCode.GDbackdrop_9595bottomObjects2.length = 0;
gdjs.AninCode.GDCloud1Objects1.length = 0;
gdjs.AninCode.GDCloud1Objects2.length = 0;
gdjs.AninCode.GDFadeoutObjects1.length = 0;
gdjs.AninCode.GDFadeoutObjects2.length = 0;


return;

}

gdjs['AninCode'] = gdjs.AninCode;
