import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var circleCardDB6009E9892741CE8158A25F9801BCEA_DEBUG: IVisualPlugin = {
    name: 'circleCardDB6009E9892741CE8158A25F9801BCEA_DEBUG',
    displayName: 'CircleCard',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["circleCardDB6009E9892741CE8158A25F9801BCEA_DEBUG"] = circleCardDB6009E9892741CE8158A25F9801BCEA_DEBUG;
}

export default circleCardDB6009E9892741CE8158A25F9801BCEA_DEBUG;