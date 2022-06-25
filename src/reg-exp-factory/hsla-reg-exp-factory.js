import { NumberExpression } from "./number-expression.js";

/**
 * HSLA表現に関する正規表現の作成処理を提供します。
 */
class HslaRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const values = [
            NumberExpression.numericWithMargins,
            [...Array(2)].map(x => NumberExpression.percentWithMargins),
            NumberExpression.questionablePercentWithMargins
        ].flat();
        return new RegExp(`^\\s*hsla\\(${values.join(",")}\\)\\s*$`, "i");
    }
}

export { HslaRegExpFactory };