import { Color } from "./color";

/**
 * 色表現に関連する処理を提供します。
 * 基底クラスとして使用することを想定しています。
 */
class ExpressionType {
    /**
     * 色表現を色表現の情報を保持するクラスに変換します。
     * @param {String} expression 色表現。
     * @returns {Color} 色表現の情報を保持するクラスを返します。
     */
    toColor (expression) {
        throw "need override.";
    }

    /**
     * 色表現の情報を保持するクラスから色表現を作成します。
     * @param {Color} color 色表現の情報を保持するクラスを想定しています。
     * @returns {String} color から作成した色表現を返します。
     */
    createColorExpression (color) {
        throw "need override.";
    }
}

export { ExpressionType };
