import { NumberExpression } from "./number-expression.js";

/**
 * HSLA表現に関する正規表現の作成処理を提供します。
 */
class HslaDetector {
    /**
     * 表現を検査します。
     * @param {String} expression 検査対象の表現。
     * @returns {Boolean} 検証結果(true : 一致、false : 不一致)を返します。
     */
    match(expression) {
        const values = [
            NumberExpression.numericWithMargins,
            [...Array(2)].map(x => NumberExpression.percentWithMargins),
            NumberExpression.questionablePercentWithMargins
        ].flat();
        const regExp = new RegExp(`^\\s*hsla\\(${values.join(",")}\\)\\s*$`, "i");
        return regExp.test(expression);
    }
}

export { HslaDetector };