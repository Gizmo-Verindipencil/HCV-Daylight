/**
 * アルファ値を含まない%指定RGB表現に関する正規表現の作成処理を提供します。
 */
class RgbPercentRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const rgbValue = "\\s*-?[0-9]+(\\.[0-9]+)?%\\s*";
        const rgbValues = [...Array(3)].map(x => rgbValue);
        return new RegExp(`^\\s*rgb\\(${rgbValues.join(",")}\\)\\s*$`, "i");
    }
}

export { RgbPercentRegExpFactory };