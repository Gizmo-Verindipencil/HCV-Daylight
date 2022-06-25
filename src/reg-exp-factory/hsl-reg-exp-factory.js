/**
 * HSL表現に関する正規表現の作成処理を提供します。
 */
class HslRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const nonPercentValue = "\\s{0,}[0-9]{1,}(\\.[0-9]{1,}){0,1}\\s{0,}";
        const percentValue = "\\s{0,}[0-9]{1,}(\\.[0-9]{1,}){0,1}%\\s{0,}";
        const percentValues = [...Array(2)].map(x => percentValue);
        return new RegExp(`^\\s{0,}hsl\\(${nonPercentValue},${percentValues.join(",")}\\)\\s{0,}$`, "i");
    }
}

export { HslRegExpFactory };