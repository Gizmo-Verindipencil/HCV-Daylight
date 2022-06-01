import { Color } from "./color.js";
import { ExpressionType } from "./expression-type.js";

/**
 * ヘックス表現に関連する処理を提供します。
 */
class Hex extends ExpressionType {
    toColor (expression) {
        try{
            let ret = new Color();
            ret.origin = expression;

            expression = expression.trim();

            if(expression.length == 4){
                expression = expression[0] +
                             expression[1] + expression[1] +
                             expression[2] + expression[2] +
                             expression[3] + expression[3];
            }

            ret.red   = parseInt(expression.substring(1, 3), 16);
            ret.green = parseInt(expression.substring(3, 5), 16);
            ret.blue  = parseInt(expression.substring(5, 7), 16);
            ret.alpha = 1;
            if(expression.length == 9){
                // TODO 要仕様確認
            }

            return ret;
        }catch(ex){
            throw ex;
        }
    }

    createColorExpression (color) {
        try{
            let red   = color.red.toString(16).padStart(2, "0");
            let green = color.green.toString(16).padStart(2, "0");
            let blue  = color.blue.toString(16).padStart(2, "0");

            let alpha = color.alpha;
            if(0 < alpha && alpah < 1){
                alpha = alpha.toString(16).padStart(2, "0");
            }else{
                alpha = "";
            }

            return `#${red}${green}${blue}${alpha}`;
        }catch(ex){
            throw ex;
        }
    }
}

// シングルトンとして提供
const instance = new Hex();
export { instance as Hex };
