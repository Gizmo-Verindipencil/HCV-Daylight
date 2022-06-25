/**
 * 4桁の16進数表現に関する正規表現の作成処理を提供します。
 */
class Hex4Detector {
    /**
     * 表現を検査します。
     * @param {String} expression 検査対象の表現。
     * @returns {Boolean} 検証結果(true : 一致、false : 不一致)を返します。
     */
    match(expression) {
        const regExp = new RegExp("^\\s*#[0-9a-f]{4}\\s*$", "i");
        return regExp.test(expression);
    }
}

export { Hex4Detector };