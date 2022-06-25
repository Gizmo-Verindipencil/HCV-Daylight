import { NumberExpression } from "./number-expression.js";

/**
 * HSL表現に関する正規表現の作成処理を提供します。
 */
class HslRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const values = [
            NumberExpression.numericWithMargins,
            [...Array(2)].map(x => NumberExpression.percentWithMargins)
        ].flat();
        return new RegExp(`^\\s*hsl\\(${values.join(",")}\\)\\s*$`, "i");
    }
}

export { HslRegExpFactory };