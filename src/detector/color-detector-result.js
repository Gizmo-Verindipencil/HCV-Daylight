/**
 * 色表現の検出結果を提供します。
 */
class ColorDetectorResult {
    /**
     * インスタンスを初期化します。
     * @param {String} type 色表現種類。
     * @param {String} expression 表現。
     */
    constructor(type, expression) {
        this.type = type;
        this.expression = expression;
    }
}

export { ColorDetectorResult };