import { Color } from "../color.js";
import { RgbaDetector } from "../detector/rgba-detector.js";

/**
 * RGBA表現の抽出処理を提供します。
 */
class RgbaExtractor {
    /**
     * 色情報を抽出します。
     * @param {String} expression WEBカラーの色表現。
     * @return {Color} 抽出結果を返します。
     */
    extract(expression) {
        const detector = new RgbaDetector();
        if (!detector.match(expression)) return null;

        const head = expression.indexOf("(");
        const tail = expression.indexOf(")");
        const body = expression.slice(head + 1, tail);

        const values = body.split(",");
        const red = Number(values[0].replace(/[^0-9.]/g, ""));
        const green = Number(values[1].replace(/[^0-9.]/g, ""));
        const blue = Number(values[2].replace(/[^0-9.]/g, ""));
        const alpha = Number(values[3].replace(/[^0-9.]/g, "")) * (values[3].indexOf("%") > 0 ? 1 : 100);

        return new Color(red, green, blue, alpha);
    }
}

export { RgbaExtractor }