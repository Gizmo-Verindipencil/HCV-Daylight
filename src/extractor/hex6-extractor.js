import { Color } from "../color";
import { Hex6Detector } from "../detector/hex6-detector";

/**
 * 6桁の16進数表現の抽出処理を提供します。
 */
class Hex6Extractor {
    /**
     * 色情報を抽出します。
     * @param {String} expression WEBカラーの色表現。
     * @return {Color} 抽出結果を返します。
     */
    extract(expression) {
        const detector = new Hex6Detector();
        if (!detector.match(expression)) return null;

        const getValue = hex => parseInt(hex, 16);
        const r = getValue(expression.slice(1, 3));
        const g = getValue(expression.slice(3, 5));
        const b = getValue(expression.slice(5, 7));
        return new Color(r, g, b, null);
    }
}

export { Hex6Extractor };