import { Color } from "./color";
import { ExpressionType } from "./expression-type";

/**
 * RGBA表現に関連する処理を提供します。
 */
class Rgba extends ExpressionType {
}

// シングルトンとして提供
const instance = new Rgba();
export { instance as Rgba };
