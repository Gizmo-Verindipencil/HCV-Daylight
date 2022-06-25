/**
 * HSL表現に関する正規表現の作成処理を提供します。
 */
class HslRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const nonPercentValue = "\\s*[0-9]+(\\.[0-9]+)??\\s*";
        const percentValue = "\\s*[0-9]+(\\.[0-9]+)??%\\s*";
        const percentValues = [...Array(2)].map(x => percentValue);
        return new RegExp(`^\\s*hsl\\(${nonPercentValue},${percentValues.join(",")}\\)\\s*$`, "i");
    }
}

export { HslRegExpFactory };