"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTrafficAction(light) {
    if (light === "red")
        return "Stop";
    else if (light === "yellow")
        return "Slow Down";
    return "Go";
}
const traficAction = "red";
console.log(getTrafficAction(traficAction));
//# sourceMappingURL=4.getTrafficAction.js.map