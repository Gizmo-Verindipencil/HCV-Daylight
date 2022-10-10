import { Daylight } from "./daylight.js";

exports.getReflectionColor = (expression, config) => Daylight.getReflectionColor(expression, config);
exports.reflectToElement = (element, properties, config) => Daylight.reflectToElement(element, properties, config);
exports.reflectToPage = (properties, config, ignore) => Daylight.reflectToPage(properties, config, ignore);