import { ExpressionType, Color } from "./expression-type.js";

/**
 * 色名表現に関連する処理を提供します。
 */
class ColorName extends ExpressionType {
}

// シングルトンとして提供
const instance = new ColorName();
export { instance as ColorName };
