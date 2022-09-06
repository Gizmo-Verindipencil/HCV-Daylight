import { Color } from "../color";
import { Hex4Detector } from "../detector/hex4-detector";

/**
 * 4桁の16進数表現の抽出処理を提供します。
 */
class Hex4Extractor {
    /**
     * 色情報を抽出します。
     * @param {String} expression WEBカラーの色表現。
     * @return {Color} 抽出結果を返します。
     */
    extract(expression) {
        const detector = new Hex4Detector();
        if (!detector.match(expression)) return null;

        const getValue = hex => parseInt(hex.repeat(2), 16);
        const r = getValue(expression.slice(1, 2));
        const g = getValue(expression.slice(2, 3));
        const b = getValue(expression.slice(3, 4));
        const a = getValue(expression.slice(4, 5));
        return new Color(r, g, b, Math.round(a / 255 * 100));
    }
}

export { Hex4Extractor };