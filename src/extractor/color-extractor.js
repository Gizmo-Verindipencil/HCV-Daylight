import { Color } from "../color.js";
import { Hex3Extractor } from "./hex3-extractor.js";
import { Hex4Extractor } from "./hex4-extractor.js";
import { Hex6Extractor } from "./hex6-extractor.js";
import { Hex8Extractor } from "./hex8-extractor.js";
import { HslAlphaExtractor } from "./hsl-alpha-extractor.js";
import { HslExtractor } from "./hsl-extractor.js";
import { HslaExtractor } from "./hsla-extractor.js";
import { RgbAlphaExtractor } from "./rgb-alpha-extractor.js";
import { RgbExtractor } from "./rgb-extractor.js";
import { RgbPercentAlphaExtractor } from "./rgb-percent-alpha-extractor.js";
import { RgbPercentExtractor } from "./rgb-percent-extractor.js";
import { RgbaExtractor } from "./rgba-extractor.js";
import { RgbaPercentExtractor } from "./rgba-percent-extractor.js";
import { WebColorExtractor } from "./web-color-extractor.js";

/**
 * 色表現の抽出処理を提供します。
 */
class ColorExtractor {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        this._extractors = [
            Hex3Extractor,
            Hex4Extractor,
            Hex6Extractor,
            Hex8Extractor,
            HslAlphaExtractor,
            HslExtractor,
            HslaExtractor,
            RgbAlphaExtractor,
            RgbExtractor,
            RgbPercentAlphaExtractor,
            RgbPercentExtractor,
            RgbaExtractor,
            RgbaPercentExtractor,
            WebColorExtractor
        ]
        .map(x => new x());
    }

    /**
     * 色情報を抽出します。
     * @param {String} expression WEBカラーの色表現。
     * @return {Color} 抽出結果を返します。
     */
    extract(expression) {
        for (const extractor of this._extractors) {
            const color = extractor.extract(expression);
            if (color) return color;
        }
        return null;
    }
}

export { ColorExtractor };
