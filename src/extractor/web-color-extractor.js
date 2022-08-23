import { Color } from "../color.js";
import { WebColor } from "../web-color.js";

/**
 * WEBカラー表現の抽出処理を提供します。
 */
class WebColorExtractor {
    /**
     * 色情報を抽出します。
     * @param {String} expression WEBカラーの色表現。
     * @return {Color} 抽出結果を返します。
     */
    extract(expression) {
        const color = WebColor[expression];
        if (!color) return null;
        return new Color(color.r, color.g, color.b, null);
    }
}

export { WebColorExtractor };