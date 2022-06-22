/**
 * アルファ値を含むRGB表現に関する正規表現の作成処理を提供します。
 */
class RgbAlphaRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const rgbValue = "\\s{0,}([1-2]){0,1}([0-9]){1,2}(\\.[0-9]{1,}){0,1}\\s{0,}";
        const rgbValues = [1,2,3].map(x => rgbValue);
        const alphaValue = "\\s{0,}([1-2]){0,1}([0-9]){1,2}(\\.[0-9]{1,}){0,1}%{0,1}\\s{0,}"
        return new RegExp(`^rgb\\(${rgbValues.join(",")},${alphaValue}\\)$`, "i");
    }
}

export { RgbAlphaRegExpFactory };