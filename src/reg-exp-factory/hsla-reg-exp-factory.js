/**
 * HSLA表現に関する正規表現の作成処理を提供します。
 */
class HslaRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const nonPercentValue = "\\s{0,}([1-2]){0,1}([0-9]){1,2}(\\.[0-9]{1,}){0,1}\\s{0,}";
        const percentValue = "\\s{0,}[0-9]{1,}(\\.[0-9]{1,}){0,1}%\\s{0,}";
        const alphaValue = "\\s{0,}[0-9]{1,}(\\.[0-9]{1,}){0,1}%{0,1}\\s{0,}";
        const values = [
            nonPercentValue,
            percentValue,
            percentValue,
            alphaValue
        ];
        return new RegExp(`^\\s{0,}hsla\\(${values.join(",")}\\)\\s{0,}$`, "i");
    }
}

export { HslaRegExpFactory };