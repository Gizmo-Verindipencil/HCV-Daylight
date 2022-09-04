import { Color } from "./color";
import { Config } from "./config";
import { ColorCreator } from "./creator/color-creator";
import { ColorDetector } from "./detector/color-detector";
import { ColorDetectorResult } from "./detector/color-detector-result";
import { ColorExtractor } from "./extractor/color-extractor";

/**
 * 日の満ち欠けをページに反映する処理を提供します。
 */
class Daylight {
    /**
     * インスタンスを初期化します。
     */
    constructor() {
        this._creator = new ColorCreator();
        this._detector = new ColorDetector();
        this._extractor = new ColorExtractor();
    }

    /**
     * 日の満ち欠けを反映した色を取得します。
     * @param {ColorDetectorResult} color 色情報。
     * @param {Config} config 設定情報。
     * @returns {String} 日の満ち欠けを反映した色を返します。色表現は expression と同種類になります。例えば、expression がヘックス表現の場
     *                   合は、返却される色表現もヘックス表現です。expression が色を含む表現の場合は、その色表現のみが変更された
     */
    getReflectionColor (color, config) {
        // デフォルト設定を補完
        config = this._createConfig(config);

        // 色表現を抽出
        const detected = this._detector.detect(color);

        // 単一の色表現の調整
        const getSingle = () => {
            // 色表現を抽出
            const source = this._extractor.extract(color.expression);
            if (!source) return null;
            
            // 日付の傾きを反映
            const themeColor = config.getThemeColor();
            const reflect = (value1, value2) => {
                const gap = value2 - value1;
                let value = value1 + Math.round(gap * config.impact);
                value = value < 0 ? 0 : value > 255 ? 255 : value;
                return value;
            }

            // 反映結果を作成
            const reflected = new Color(
                reflect(source.r, themeColor[0]),
                reflect(source.g, themeColor[1]),
                reflect(source.b, themeColor[2]),
                source.a
            );

            // 変換結果を返す
            return this._creator.create(reflected, color.type);
        };

        // 調整した色を取得
        const replacement = {};
        for(const result of detected) {
            const modified = getSingle(result, config);
            if (modified == null) continue;
            replacement[result.expression] = modified;
        }

        // 色情報を置換
        for(const key of Object.keys(replacement)) {
            const value = replacement[key];
            color = color.replaceAll(key, value);
        }
        return color;
    }

    /**
     * 完全な設定を作成します。
     * @param {Config} source 元となる設定。 
     * @returns {Config} 設定を返します。未設定の項目は補完されます。
     */
    _createConfig(source) {
        if (!source) source = {};

        const config = new Config();
        config.now = source.now || config.now;
        config.impact = source.impact || config.impact;
        config.numberOfLimitReflection = source.numberOfLimitReflection || config.numberOfLimitReflection;
        config.brightness = source.brightness || config.brightness;

        return config;
    }

    /**
     * 日付間の日数差を取得します。
     * @param {Date} date1 日付1。
     * @param {Date} date2 日付2。
     * @returns {Number} 日数差を返します。
     */
    _getSecondDifference(date1, date2) {
        const secondMilliseconds = 1000;
        return Math.abs(Math.ceil((date1 - date2) / secondMilliseconds));
    }

    /**
     * 要素に色を反映します。
     * @param {HTMLElement} element 要素。
     * @param {String} property 色を反映するプロパティ。
     * @param {Config} config 設定情報。
     */
    reflectToElement(element, property, config) {
        // 色表現を抽出
        let target = element[property];
        const detected = this._detector.detect(target);

        // 調整した色を取得
        const replacement = {};
        for(const result of detected) {
            const modified = this.getReflectionColor(result, config);
            if (modified == null) continue;
            replacement[result.expression] = modified;
        }

        // 色情報を置換
        for(const key of Object.keys(replacement)) {
            const value = replacement[key];
            target = target.replaceAll(key, value);
        }
    }

    /**
     * 全ての要素に色を反映します。
     * @param {String} property 色を反映するプロパティ。
     * @param {Config} config 設定情報。
     */
    reflectToPage(property, config) {
        const all = document.getElementsByTagName("*");
        for (const e of all) {
            this.reflectToElement(e, property, config);
        }
    }
}

// シングルトンとして提供
const instance = new Daylight();
export { instance as Daylight };

