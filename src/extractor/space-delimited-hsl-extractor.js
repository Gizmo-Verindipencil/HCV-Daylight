import { Color } from "../color";
import { SpaceDelimitedHslDetector } from "../detector/space-delimited-hsl-detector";

/**
 * 空白文字区切りのHSL表現の抽出処理を提供します。
 */
class SpaceDelimitedHslExtractor {
    /**
     * 色情報を抽出します。
     * @param {String} expression WEBカラーの色表現。
     * @return {Color} 抽出結果を返します。
     */
    extract(expression) {
        const detector = new SpaceDelimitedHslDetector();
        if (!detector.match(expression)) return null;

        const head = expression.indexOf("(");
        const tail = expression.indexOf(")");
        const body = expression.slice(head + 1, tail);

        const values = body.split(" ").filter(x => x.length > 0);
        const hue = Number(values[0].trim());
        const saturation = Number(values[1].replace(/[^0-9.]/g, ""));
        const lightness = Number(values[2].replace(/[^0-9.]/g, ""));

        /* ---------------------------------------------------------------------- */
        // 30-seconds-of-code (Licensed under CC BY 4.0)
        // https://www.30secondsofcode.org/js/s/hsl-to-rgb
        const hslToRgb = (h, s, l) => {
            s /= 100;
            l /= 100;
            const k = n => (n + h / 30) % 12;
            const a = s * Math.min(l, 1 - l);
            const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
            return [255 * f(0), 255 * f(8), 255 * f(4)];
        };
        /* ---------------------------------------------------------------------- */

        const rgb = hslToRgb(hue, saturation, lightness).map(x => Math.round(x));
        return new Color(rgb[0], rgb[1], rgb[2], null);
    }
}

export { SpaceDelimitedHslExtractor };