gdjs.Main_32menuCode = {};
gdjs.Main_32menuCode.localVariables = [];
gdjs.Main_32menuCode.GDPurpleButtonWithStoneFrameObjects1= [];
gdjs.Main_32menuCode.GDPurpleButtonWithStoneFrameObjects2= [];
gdjs.Main_32menuCode.GDPurpleButtonWithStoneFrameObjects3= [];
gdjs.Main_32menuCode.GDNewSpriteObjects1= [];
gdjs.Main_32menuCode.GDNewSpriteObjects2= [];
gdjs.Main_32menuCode.GDNewSpriteObjects3= [];
gdjs.Main_32menuCode.GDLogoObjects1= [];
gdjs.Main_32menuCode.GDLogoObjects2= [];
gdjs.Main_32menuCode.GDLogoObjects3= [];
gdjs.Main_32menuCode.GDVariable_9595TextObjects1= [];
gdjs.Main_32menuCode.GDVariable_9595TextObjects2= [];
gdjs.Main_32menuCode.GDVariable_9595TextObjects3= [];
gdjs.Main_32menuCode.GDNew_9595characterObjects1= [];
gdjs.Main_32menuCode.GDNew_9595characterObjects2= [];
gdjs.Main_32menuCode.GDNew_9595characterObjects3= [];
gdjs.Main_32menuCode.GDNewSprite2Objects1= [];
gdjs.Main_32menuCode.GDNewSprite2Objects2= [];
gdjs.Main_32menuCode.GDNewSprite2Objects3= [];
gdjs.Main_32menuCode.GDNewShapePainterObjects1= [];
gdjs.Main_32menuCode.GDNewShapePainterObjects2= [];
gdjs.Main_32menuCode.GDNewShapePainterObjects3= [];
gdjs.Main_32menuCode.GDMenu_9595PanelObjects1= [];
gdjs.Main_32menuCode.GDMenu_9595PanelObjects2= [];
gdjs.Main_32menuCode.GDMenu_9595PanelObjects3= [];
gdjs.Main_32menuCode.GDSynesthesia_9595Objects1= [];
gdjs.Main_32menuCode.GDSynesthesia_9595Objects2= [];
gdjs.Main_32menuCode.GDSynesthesia_9595Objects3= [];
gdjs.Main_32menuCode.GDFadeoutObjects1= [];
gdjs.Main_32menuCode.GDFadeoutObjects2= [];
gdjs.Main_32menuCode.GDFadeoutObjects3= [];


gdjs.Main_32menuCode.asyncCallback29847004 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32menuCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("New_character"), gdjs.Main_32menuCode.GDNew_9595characterObjects2);
{for(var i = 0, len = gdjs.Main_32menuCode.GDNew_9595characterObjects2.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDNew_9595characterObjects2[i].getBehavior("Tween").addObjectOpacityTween2("Fadein", 255, "linear", 2, false);
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "UI", 2);
}gdjs.Main_32menuCode.localVariables.length = 0;
}
gdjs.Main_32menuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32menuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Main_32menuCode.asyncCallback29847004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32menuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Machina Pensant - My Last Whispers Are The Worst Goodbyes - 01 Kindergarten.mp3", 1, true, 70, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 2);
}}

}


};gdjs.Main_32menuCode.asyncCallback29855644 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32menuCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("New_character"), gdjs.Main_32menuCode.GDNew_9595characterObjects2);

{for(var i = 0, len = gdjs.Main_32menuCode.GDNew_9595characterObjects2.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDNew_9595characterObjects2[i].getBehavior("Animation").setAnimationIndex(0);
}
}gdjs.Main_32menuCode.localVariables.length = 0;
}
gdjs.Main_32menuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32menuCode.localVariables);
for (const obj of gdjs.Main_32menuCode.GDNew_9595characterObjects1) asyncObjectsList.addObject("New_character", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.15), (runtimeScene) => (gdjs.Main_32menuCode.asyncCallback29855644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32menuCode.asyncCallback29861500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Main_32menuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Anin", true);
}{gdjs.evtTools.variable.toggleVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0));
}{gdjs.evtTools.sound.fadeMusicVolume(runtimeScene, 1, 0, 3);
}gdjs.Main_32menuCode.localVariables.length = 0;
}
gdjs.Main_32menuCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Main_32menuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Main_32menuCode.asyncCallback29861500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Main_32menuCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.09, "", 1);
}
{ //Subevents
gdjs.Main_32menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Main_32menuCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), 0.0003), "", 1);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0.0003), "", 1);
}{gdjs.evtTools.camera.clampCamera(runtimeScene, 0, 0, 1920, 1080, "", 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseInsideCanvas(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), 0.005), "Effects", 2);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.common.lerp(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0.005), "Effects", 2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.3, "Effects", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1, "Effects", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("New_character"), gdjs.Main_32menuCode.GDNew_9595characterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32menuCode.GDNew_9595characterObjects1.length;i<l;++i) {
    if ( gdjs.Main_32menuCode.GDNew_9595characterObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Main_32menuCode.GDNew_9595characterObjects1[k] = gdjs.Main_32menuCode.GDNew_9595characterObjects1[i];
        ++k;
    }
}
gdjs.Main_32menuCode.GDNew_9595characterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Main_32menuCode.GDNew_9595characterObjects1 */
{for(var i = 0, len = gdjs.Main_32menuCode.GDNew_9595characterObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDNew_9595characterObjects1[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{ //Subevents
gdjs.Main_32menuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("New_character"), gdjs.Main_32menuCode.GDNew_9595characterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Main_32menuCode.GDNew_9595characterObjects1.length;i<l;++i) {
    if ( gdjs.Main_32menuCode.GDNew_9595characterObjects1[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.Main_32menuCode.GDNew_9595characterObjects1[k] = gdjs.Main_32menuCode.GDNew_9595characterObjects1[i];
        ++k;
    }
}
gdjs.Main_32menuCode.GDNew_9595characterObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Main_32menuCode.GDNew_9595characterObjects1.length;i<l;++i) {
    if ( gdjs.Main_32menuCode.GDNew_9595characterObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Main_32menuCode.GDNew_9595characterObjects1[k] = gdjs.Main_32menuCode.GDNew_9595characterObjects1[i];
        ++k;
    }
}
gdjs.Main_32menuCode.GDNew_9595characterObjects1.length = k;
isConditionTrue_0 = isConditionTrue_1;
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewShapePainter"), gdjs.Main_32menuCode.GDNewShapePainterObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "657948__matrixxx__family-friendly-inspect-sound-ui-or-in-game-notification.wav", false, 10, 1.2);
}{gdjs.evtTools.sound.playSound(runtimeScene, "749773__rescopicsound__airy-whoosh-intense.mp3", false, 50, 2);
}{for(var i = 0, len = gdjs.Main_32menuCode.GDNewShapePainterObjects1.length ;i < len;++i) {
    gdjs.Main_32menuCode.GDNewShapePainterObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Flash", "Forward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Main_32menuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


};

gdjs.Main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32menuCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.Main_32menuCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.Main_32menuCode.GDPurpleButtonWithStoneFrameObjects3.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32menuCode.GDLogoObjects1.length = 0;
gdjs.Main_32menuCode.GDLogoObjects2.length = 0;
gdjs.Main_32menuCode.GDLogoObjects3.length = 0;
gdjs.Main_32menuCode.GDVariable_9595TextObjects1.length = 0;
gdjs.Main_32menuCode.GDVariable_9595TextObjects2.length = 0;
gdjs.Main_32menuCode.GDVariable_9595TextObjects3.length = 0;
gdjs.Main_32menuCode.GDNew_9595characterObjects1.length = 0;
gdjs.Main_32menuCode.GDNew_9595characterObjects2.length = 0;
gdjs.Main_32menuCode.GDNew_9595characterObjects3.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects3.length = 0;
gdjs.Main_32menuCode.GDNewShapePainterObjects1.length = 0;
gdjs.Main_32menuCode.GDNewShapePainterObjects2.length = 0;
gdjs.Main_32menuCode.GDNewShapePainterObjects3.length = 0;
gdjs.Main_32menuCode.GDMenu_9595PanelObjects1.length = 0;
gdjs.Main_32menuCode.GDMenu_9595PanelObjects2.length = 0;
gdjs.Main_32menuCode.GDMenu_9595PanelObjects3.length = 0;
gdjs.Main_32menuCode.GDSynesthesia_9595Objects1.length = 0;
gdjs.Main_32menuCode.GDSynesthesia_9595Objects2.length = 0;
gdjs.Main_32menuCode.GDSynesthesia_9595Objects3.length = 0;
gdjs.Main_32menuCode.GDFadeoutObjects1.length = 0;
gdjs.Main_32menuCode.GDFadeoutObjects2.length = 0;
gdjs.Main_32menuCode.GDFadeoutObjects3.length = 0;

gdjs.Main_32menuCode.eventsList4(runtimeScene);
gdjs.Main_32menuCode.GDPurpleButtonWithStoneFrameObjects1.length = 0;
gdjs.Main_32menuCode.GDPurpleButtonWithStoneFrameObjects2.length = 0;
gdjs.Main_32menuCode.GDPurpleButtonWithStoneFrameObjects3.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects1.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects2.length = 0;
gdjs.Main_32menuCode.GDNewSpriteObjects3.length = 0;
gdjs.Main_32menuCode.GDLogoObjects1.length = 0;
gdjs.Main_32menuCode.GDLogoObjects2.length = 0;
gdjs.Main_32menuCode.GDLogoObjects3.length = 0;
gdjs.Main_32menuCode.GDVariable_9595TextObjects1.length = 0;
gdjs.Main_32menuCode.GDVariable_9595TextObjects2.length = 0;
gdjs.Main_32menuCode.GDVariable_9595TextObjects3.length = 0;
gdjs.Main_32menuCode.GDNew_9595characterObjects1.length = 0;
gdjs.Main_32menuCode.GDNew_9595characterObjects2.length = 0;
gdjs.Main_32menuCode.GDNew_9595characterObjects3.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects1.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects2.length = 0;
gdjs.Main_32menuCode.GDNewSprite2Objects3.length = 0;
gdjs.Main_32menuCode.GDNewShapePainterObjects1.length = 0;
gdjs.Main_32menuCode.GDNewShapePainterObjects2.length = 0;
gdjs.Main_32menuCode.GDNewShapePainterObjects3.length = 0;
gdjs.Main_32menuCode.GDMenu_9595PanelObjects1.length = 0;
gdjs.Main_32menuCode.GDMenu_9595PanelObjects2.length = 0;
gdjs.Main_32menuCode.GDMenu_9595PanelObjects3.length = 0;
gdjs.Main_32menuCode.GDSynesthesia_9595Objects1.length = 0;
gdjs.Main_32menuCode.GDSynesthesia_9595Objects2.length = 0;
gdjs.Main_32menuCode.GDSynesthesia_9595Objects3.length = 0;
gdjs.Main_32menuCode.GDFadeoutObjects1.length = 0;
gdjs.Main_32menuCode.GDFadeoutObjects2.length = 0;
gdjs.Main_32menuCode.GDFadeoutObjects3.length = 0;


return;

}

gdjs['Main_32menuCode'] = gdjs.Main_32menuCode;
