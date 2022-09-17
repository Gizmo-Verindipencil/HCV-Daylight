import { Color } from "../color";
import { Hex3Extractor } from "./hex3-extractor";
import { Hex4Extractor } from "./hex4-extractor";
import { Hex6Extractor } from "./hex6-extractor";
import { Hex8Extractor } from "./hex8-extractor";
import { HslAlphaExtractor } from "./hsl-alpha-extractor";
import { HslExtractor } from "./hsl-extractor";
import { HslaExtractor } from "./hsla-extractor";
import { RgbAlphaExtractor } from "./rgb-alpha-extractor";
import { RgbExtractor } from "./rgb-extractor";
import { RgbPercentAlphaExtractor } from "./rgb-percent-alpha-extractor";
import { RgbPercentExtractor } from "./rgb-percent-extractor";
import { RgbaExtractor } from "./rgba-extractor";
import { RgbaPercentExtractor } from "./rgba-percent-extractor";
import { SpaceDelimitedHslExtractor } from "./space-delimited-hsl-extractor";
import { WebColorExtractor } from "./web-color-extractor";

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
            SpaceDelimitedHslExtractor,
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
