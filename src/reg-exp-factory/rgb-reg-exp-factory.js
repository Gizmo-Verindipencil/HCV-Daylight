/**
 * RGB表現に関する正規表現の作成処理を提供します。
 */
class RgbRegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        const value = "\\s*-?[0-9]+(\\.[0-9]+)??\\s*";
        const values = [...Array(3)].map(x => value);
        return new RegExp(`^\\s*rgb\\(${values.join(",")}\\)\\s*$`, "i");
    }
}

export { RgbRegExpFactory };