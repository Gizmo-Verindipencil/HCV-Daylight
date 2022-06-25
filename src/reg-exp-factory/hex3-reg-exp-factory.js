/**
 * 3桁の16進数表現に関する正規表現の作成処理を提供します。
 */
class Hex3RegExpFactory {
    /**
     * 正規表現を作成します。
     * @returns {RegExp} 正規表現を返します。
     */
    create() {
        return new RegExp("^\\s*#[0-9a-f]{3}\\s*$", "i");
    }
}

export { Hex3RegExpFactory };