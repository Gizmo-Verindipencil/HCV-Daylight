import { Daylight } from "./daylight.js";

function getReflectionColor(expression, config) { return Daylight.getReflectionColor(expression, config); }
function reflectToElement (element, property, config) { Daylight.reflectToElement(element, property, config); }
function reflectToPage(property, config) { Daylight.reflectToPage(property, config); }

export { getReflectionColor };
export { reflectToElement };
export { reflectToPage };