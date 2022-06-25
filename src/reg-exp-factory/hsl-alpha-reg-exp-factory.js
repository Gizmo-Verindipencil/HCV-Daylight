/**
 * アルファ値を含むHSL表現に関する正規表現の作成処理を提供します。
 */
class HslAlphaRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const nonPercentValue = "\\s*-?[0-9]+(\\.[0-9]+)??\\s*";
        const percentValue = "\\s*-?[0-9]+(\\.[0-9]+)??%\\s*";
        const alphaValue = "\\s*-?[0-9]+(\\.[0-9]+)??%??\\s*";
        const values = [
            nonPercentValue,
            percentValue,
            percentValue,
            alphaValue
        ];
        return new RegExp(`^\\s*hsl\\(${values.join(",")}\\)\\s*$`, "i");
    }
}

export { HslAlphaRegExpFactory };