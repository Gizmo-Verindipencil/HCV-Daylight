/**
 * RGB表現に関する正規表現の作成処理を提供します。
 */
class RgbRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const value = "\\s{0,}([1-2]){0,1}([0-9]){1,2}(\\.[0-9]{1,}){0,1}\\s{0,}";
        const values = [...Array(3)].map(x => value);
        return new RegExp(`^rgb\\(${values.join(",")}\\)$`, "i");
    }
}

export { RgbRegExpFactory };