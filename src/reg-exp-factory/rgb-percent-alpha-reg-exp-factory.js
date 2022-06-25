import { NumberExpression } from "./number-expression.js";

/**
 * アルファ値を含む%指定RGB表現に関する正規表現の作成処理を提供します。
 */
class RgbPercentAlphaRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const values = [
            [...Array(3)].map(x => NumberExpression.percentWithMargins),
            NumberExpression.questionablePercentWithMargins
        ].flat();
        return new RegExp(`^\\s*rgb\\(${values.join(",")}\\)\\s*$`, "i");
    }
}

export { RgbPercentAlphaRegExpFactory };