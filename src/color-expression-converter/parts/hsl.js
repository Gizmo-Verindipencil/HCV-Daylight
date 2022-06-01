import { Color } from "./color.js";
import { ExpressionType } from "./expression-type.js";

/**
 * HSL表現に関連する処理を提供します。
 */
class Hsl extends ExpressionType {
}

// シングルトンとして提供
const instance = new Hsl();
export { instance as Hsl };
