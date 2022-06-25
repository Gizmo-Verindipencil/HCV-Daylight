/**
 * アルファ値を含むRGB表現に関する正規表現の作成処理を提供します。
 */
class RgbAlphaRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const rgbValue = "\\s*-?[0-9]+(\\.[0-9]+)??\\s*";
        const rgbValues = [...Array(3)].map(x => rgbValue);
        const alphaValue = "\\s*-?[0-9]+(\\.[0-9]+)??%??\\s*"
        return new RegExp(`^\\s*rgb\\(${rgbValues.join(",")},${alphaValue}\\)\\s*$`, "i");
    }
}

export { RgbAlphaRegExpFactory };