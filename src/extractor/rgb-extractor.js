import { Color } from "../color.js";
import { RgbDetector } from "../detector/rgb-detector.js";

/**
 * RGB表現の抽出処理を提供します。
 */
class RgbExtractor {
    /**
     * 色情報を抽出します。
     * @param {String} expression WEBカラーの色表現。
     * @return {Color} 抽出結果を返します。
     */
    extract(expression) {
        const detector = new RgbDetector();
        if (!detector.match(expression)) return null;

        const head = expression.indexOf("(");
        const tail = expression.indexOf(")");
        const body = expression.slice(head + 1, tail);

        const values = body.split(",");
        const red = Number(values[0].replace(/[^0-9.]/g, ""));
        const green = Number(values[1].replace(/[^0-9.]/g, ""));
        const blue = Number(values[2].replace(/[^0-9.]/g, ""));

        return new Color(red, green, blue, null);
    }
}

export { RgbExtractor }