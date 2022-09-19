import { ColorExpressionType } from "../color-expression-type";
import { ColorDetectorResult } from "./color-detector-result";
import { Hex3Detector } from "./hex3-detector";
import { Hex4Detector } from "./hex4-detector";
import { Hex6Detector } from "./hex6-detector";
import { Hex8Detector } from "./hex8-detector";
import { HslAlphaDetector } from "./hsl-alpha-detector";
import { HslDetector } from "./hsl-detector";
import { HslaDetector } from "./hsla-detector";
import { RgbAlphaDetector } from "./rgb-alpha-detector";
import { RgbDetector } from "./rgb-detector";
import { RgbPercentAlphaDetector } from "./rgb-percent-alpha-detector";
import { RgbPercentDetector } from "./rgb-percent-detector";
import { RgbaDetector } from "./rgba-detector";
import { RgbaPercentDetector } from "./rgba-percent-detector";
import { SpaceDelimitedHslDetector } from "./space-delimited-hsl-detector";
import { SpaceDelimitedHslAlphaDetector } from "./space-delimited-hsl-alpha-detector";
import { WebColorDetector } from "./web-color-detector";

/**
 * 色表現の検出処理を提供します。
 */
class ColorDetector {
    /**
     * 色表現の種類を取得します。
     * @returns {Object} 色表現の種類を返します。
     */
    getTypeSet() {
        return {
            hex3                   : ColorExpressionType.hex3                   ,
            hex4                   : ColorExpressionType.hex4                   ,
            hex6                   : ColorExpressionType.hex6                   ,
            hex8                   : ColorExpressionType.hex8                   ,
            hslAlpha               : ColorExpressionType.hslAlpha               ,
            hsl                    : ColorExpressionType.hsl                    ,
            hsla                   : ColorExpressionType.hsla                   ,
            rgbAlpha               : ColorExpressionType.rgbAlpha               ,
            rgb                    : ColorExpressionType.rgb                    ,
            rgbPercentAlpha        : ColorExpressionType.rgbPercentAlpha        ,
            rgbPercent             : ColorExpressionType.rgbPercent             ,
            rgba                   : ColorExpressionType.rgba                   ,
            rgbaPercent            : ColorExpressionType.rgbaPercent            ,
            spaceDelimitedHslAlpha : ColorExpressionType.spaceDelimitedHslAlpha ,
            spaceDelimitedHsl      : ColorExpressionType.spaceDelimitedHsl      ,
            webColor               : ColorExpressionType.webColor               ,
        };
    }

    /**
     * 検出処理と検出対象を表す文字列の組合せを取得します。
     * @returns {Array<Array<any>>} 組合せを返します。
     */
    _getDetectorTypeStringPairs() {
        const typeSet = this.getTypeSet();
        return [
            [ Hex3Detector                   , typeSet.hex3                   ],
            [ Hex4Detector                   , typeSet.hex4                   ],
            [ Hex6Detector                   , typeSet.hex6                   ],
            [ Hex8Detector                   , typeSet.hex8                   ],
            [ HslAlphaDetector               , typeSet.hslAlpha               ],
            [ HslDetector                    , typeSet.hsl                    ],
            [ HslaDetector                   , typeSet.hsla                   ],
            [ RgbAlphaDetector               , typeSet.rgbAlpha               ],
            [ RgbDetector                    , typeSet.rgb                    ],
            [ RgbPercentAlphaDetector        , typeSet.rgbPercentAlpha        ],
            [ RgbPercentDetector             , typeSet.rgbPercent             ],
            [ RgbaDetector                   , typeSet.rgba                   ],
            [ RgbaPercentDetector            , typeSet.rgbaPercent            ],
            [ SpaceDelimitedHslAlphaDetector , typeSet.spaceDelimitedHslAlpha ],
            [ SpaceDelimitedHslDetector      , typeSet.spaceDelimitedHsl      ],
            [ WebColorDetector               , typeSet.webColor               ]
        ];
    }

    /**
     * 表現を検査します。
     * @param {String} expression 検査対象の表現。
     * @returns {String} 検証結果を返します。
     */
    match(expression) {
        // 一致した色表現の種類を返す
        for (const type of this._getDetectorTypeStringPairs()) {
            const detector = new type[0]();
            const result = detector.match(expression);
            if (result) return type[1];
        }

        // 該当しない場合は空白を返す
        return "";
    }

    /**
     * 文字列中の色表現を検出します。
     * @param {String} expression 検査対象の表現。
     * @returns {Array<ColorNameDetectorResult>} 検出結果を返します。
     */
    detect(expression) {
        let results = [];

        // 一致した色表現の種類を返す
        for (const type of this._getDetectorTypeStringPairs()) {
            const detector = new type[0]();
            const colors = detector.detect(expression);
            results = results.concat(colors.map(x => new ColorDetectorResult(type[1], x)));
        }

        return results;
    }
}

export { ColorDetector };