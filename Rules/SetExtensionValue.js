export default function SetExtensionValue(context) {
    console.log("In SetExtensionValue");
    let srcValue = context.getValue();
    let targetCtrl = context.evaluateTargetPath("#Page:SliderExtension/#Control:MySliderExtension");
    targetCtrl.setValue(srcValue);
}

