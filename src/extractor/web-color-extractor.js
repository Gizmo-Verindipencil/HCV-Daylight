import { Color } from "../color";
import { WebColorDetector } from "../detector/web-color-detector";
import { WebColor } from "../web-color";

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
        const detector = new WebColorDetector();
        if (!detector.match(expression)) return null;

        const color = WebColor[expression];
        return new Color(color.r, color.g, color.b, null);
    }
}

export { WebColorExtractor };
