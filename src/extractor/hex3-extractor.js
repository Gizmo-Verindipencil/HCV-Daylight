import { Color } from "../color.js";
import { Hex3Detector } from "../detector/hex3-detector.js";

/**
 * 3桁の16進数表現の抽出処理を提供します。
 */
class Hex3Extractor {
    /**
     * 色情報を抽出します。
     * @param {String} expression WEBカラーの色表現。
     * @return {Color} 抽出結果を返します。
     */
    extract(expression) {
        const detector = new Hex3Detector();
        if (!detector.match(expression)) return null;

        const getValue = hex => parseInt(hex.repeat(2), 16);
        const r = getValue(expression.slice(1, 2));
        const g = getValue(expression.slice(2, 3));
        const b = getValue(expression.slice(3, 4));
        return new Color(r, g, b, null);
    }
}

export { Hex3Extractor };