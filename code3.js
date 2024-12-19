gdjs.Global_32ElementsCode = {};
gdjs.Global_32ElementsCode.localVariables = [];
gdjs.Global_32ElementsCode.GDFadeoutObjects1= [];
gdjs.Global_32ElementsCode.GDFadeoutObjects2= [];


gdjs.Global_32ElementsCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Fadeout"), gdjs.Global_32ElementsCode.GDFadeoutObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Global_32ElementsCode.GDFadeoutObjects1.length;i<l;++i) {
    if ( gdjs.Global_32ElementsCode.GDFadeoutObjects1[i].getVariableNumber(gdjs.Global_32ElementsCode.GDFadeoutObjects1[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Global_32ElementsCode.GDFadeoutObjects1[k] = gdjs.Global_32ElementsCode.GDFadeoutObjects1[i];
        ++k;
    }
}
gdjs.Global_32ElementsCode.GDFadeoutObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Global_32ElementsCode.GDFadeoutObjects1 */
{for(var i = 0, len = gdjs.Global_32ElementsCode.GDFadeoutObjects1.length ;i < len;++i) {
    gdjs.Global_32ElementsCode.GDFadeoutObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 255, "linear", 3, false);
}
}}

}


};

gdjs.Global_32ElementsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Global_32ElementsCode.GDFadeoutObjects1.length = 0;
gdjs.Global_32ElementsCode.GDFadeoutObjects2.length = 0;

gdjs.Global_32ElementsCode.eventsList0(runtimeScene);
gdjs.Global_32ElementsCode.GDFadeoutObjects1.length = 0;
gdjs.Global_32ElementsCode.GDFadeoutObjects2.length = 0;


return;

}

gdjs['Global_32ElementsCode'] = gdjs.Global_32ElementsCode;
