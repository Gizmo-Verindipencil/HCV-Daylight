/**
 * %で指定したRGBA表現に関する正規表現の作成処理を提供します。
 */
class RgbaPercentRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const rgbValue = "\\s{0,}[0-9]{1,}(\\.[0-9]{1,}){0,1}%\\s{0,}";
        const rgbValues = [...Array(3)].map(x => rgbValue);
        const alphaValue = "\\s{0,}[0-9]{1,}(\\.[0-9]{1,}){0,1}%{0,1}\\s{0,}";
        return new RegExp(`^\\s{0,}rgba\\(${rgbValues.join(",")},${alphaValue}\\)\\s{0,}$`, "i");
    }
}

export { RgbaPercentRegExpFactory };