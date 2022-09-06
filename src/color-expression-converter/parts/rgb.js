import { Color } from "./color";
import { ExpressionType } from "./expression-type";

/**
 * RGB表現に関連する処理を提供します。
 */
class Rgb extends ExpressionType {
    toColor (expression) {
        try{
            let ret = new Color();
            ret.origin = expression;

            expression = expression.trim();

            let target = expression.substring(expression.indexOf("(") + 1)
            target = target.substring(0, target.indexOf(")")).replace(" ", "");
            let targets = target.split(",");

            ret.red   = parseInt(targets[0]);
            ret.green = parseInt(targets[1]);
            ret.blue  = parseInt(targets[2]);
            ret.alpah = 1;

            return ret;
        }catch(ex){
            throw ex;
        }
    }

    createColorExpression (color) {
        try{
            let red   = color.red;
            let green = color.green;
            let blue  = color.blue;

            return `RGB(${red}, ${green}, ${blue})`;
        }catch(ex){
            throw ex;
        }
    }
}

// シングルトンとして提供
const instance = new Rgb();
export { instance as Rgb };
