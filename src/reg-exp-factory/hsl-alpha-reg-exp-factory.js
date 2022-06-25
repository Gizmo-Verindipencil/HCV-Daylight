import { NumberExpression } from "./number-expression.js";

/**
 * アルファ値を含むHSL表現に関する正規表現の作成処理を提供します。
 */
class HslAlphaRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const values = [
            NumberExpression.numericWithMargins,
            NumberExpression.percentWithMargins,
            NumberExpression.percentWithMargins,
            NumberExpression.questionablePercentWithMargins
        ];
        return new RegExp(`^\\s*hsl\\(${values.join(",")}\\)\\s*$`, "i");
    }
}

export { HslAlphaRegExpFactory };