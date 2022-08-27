import { Color } from "../color.js";

/**
 * アルファ値を含むHSL表現の作成処理を提供します。
 */
class HslAlphaCreator {
    /**
     * 色表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    create(color) {
        /* ---------------------------------------------------------------------- */
        // 30-seconds-of-code (Licensed under CC BY 4.0)
        // https://www.30secondsofcode.org/js/s/rgb-to-hsl
        const rgbToHsl = (r, g, b) => {
            r /= 255;
            g /= 255;
            b /= 255;
            const l = Math.max(r, g, b);
            const s = l - Math.min(r, g, b);
            const h = s
                ? l === r
                    ? (g - b) / s
                    : l === g
                    ? 2 + (b - r) / s
                    : 4 + (r - g) / s
                : 0;
            return [
                60 * h < 0 ? 60 * h + 360 : 60 * h,
                100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
                (100 * (2 * l - s)) / 2,
            ];
        };
        /* ---------------------------------------------------------------------- */

        const hsl = rgbToHsl(color.r, color.g, color.b).map(x => Math.round(x));
        return `hsl(${hsl[0]},${hsl[1]}%,${hsl[2]}%,${color.a || 100}%)`;
    }
}

export { HslAlphaCreator };