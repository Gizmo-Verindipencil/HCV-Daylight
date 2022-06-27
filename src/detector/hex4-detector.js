/**
 * 4桁の16進数表現の検出処理を提供します。
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

    /**
     * 文字列中の該当表現を検出します。
     * @param {String} expression 検査対象の表現。
     * @returns {Array<String>} 検出した表現を返します。
     */
    detect(expression) {
        const regExp = new RegExp("(\\b|\\s|^)#[0-9a-f]{4}(\\b|\\s|$)", "gi");
        const results = (expression || "").match(regExp) || [];
        return results.map(x => x.trim());
    }
}

export { Hex4Detector };