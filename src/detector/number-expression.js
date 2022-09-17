/**
 * 数値表現を提供します。
 */
class NumberExpression {
    /**
     * 整数表現を取得します。
     */
    static get integer() {
        return "-?[0-9]+";
    }

    /**
     * 小数表現を取得します。
     */
    static get decimal() {
        return "(-?[0-9]+(\\.[0-9]+)|\\.[0-9]+)";
    }

    /**
     * 数値表現を取得します。
     */
    static get numeric() {
        return `(${NumberExpression.integer}|${NumberExpression.decimal})`;
    }

    /**
     * マージン付き数値表現を取得します。
     */
    static get numericWithMargins() {
        return `\\s*${NumberExpression.numeric}\\s*`;
    }

    /**
     * 角度表現を取得します。
     */
    static get angle() {
        return `(${NumberExpression.integer}|${NumberExpression.decimal})(deg)?`;
    }

    /**
     * マージン付き角度表現を取得します。
     */
    static get angleWithMargins() {
        return `\\s*${NumberExpression.angle}\\s*`;
    }

    /**
     * パーセント数値表現を取得します。
     */
    static get percent() {
        return `${NumberExpression.numeric}%`;
    }

    /**
     * マージン付きパーセント数値表現を取得します。
     */
    static get percentWithMargins() {
        return `\\s*${NumberExpression.percent}\\s*`;
    }

    /**
     * パーセント許容数値表現を取得します。
     */
    static get questionablePercent() {
        return `${NumberExpression.numeric}%?`;
    }

    /**
     * マージン付きパーセント許容数値表現を取得します。
     */
    static get questionablePercentWithMargins() {
        return `\\s*${NumberExpression.questionablePercent}\\s*`;
    }
}

export { NumberExpression };