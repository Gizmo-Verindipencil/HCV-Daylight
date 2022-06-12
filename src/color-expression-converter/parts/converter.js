/**
 * 色表現に関連する処理を提供します。
 * 基底クラスとして使用することを想定しています。
 */
class Converter {
    /**
     * 変換を実行します。
     * @param {String} expression 色表現。
     * @param {ExpressionType} from ExpressionType を継承した色表現に関するクラスを想定しています。
     * @param {ExpressionType} to ExpressionType を継承した色表現に関するクラスを想定しています。
     * @returns {String} from の色表現から to に変換した色表現を返します。
     */
    execute(expression, from, to){
        return to.createColorExpression(from.toColor(expression));
    }
}

// シングルトンとして提供
const instance = new Converter();
export { instance as Converter };
