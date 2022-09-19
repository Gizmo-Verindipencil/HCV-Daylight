/**
 * 色表現の種類を提供します。
 */
class ColorExpressionType {
    /**
     * 3桁の16進数表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get hex3() {
        return "hex3";
    }

    /**
     * 4桁の16進数表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get hex4() {
        return "hex4";
    }

    /**
     * 6桁の16進数表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get hex6() {
        return "hex6";
    }

    /**
     * 8桁の16進数表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get hex8() {
        return "hex8";
    }

    /**
     * アルファ値を含むHSL表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get hslAlpha() {
        return "hsl-alpha";
    }

    /**
     * HSL表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get hsl() {
        return "hsl";
    }

    /**
     * HSLA表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get hsla() {
        return "hsla";
    }

    /**
     * アルファ値を含むRGB表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get rgbAlpha() {
        return "rgb-alpha";
    }

    /**
     * RGB表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get rgb() {
        return "rgb";
    }

    /**
     * アルファ値を含む%指定RGB表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get rgbPercentAlpha() {
        return "rgb-percent-alpha";
    }

    /**
     * アルファ値を含まない%指定RGB表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get rgbPercent() {
        return "rgb-percent";
    }

    /**
     * RGBA表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get rgba() {
        return "rgba";
    }

    /**
     * %指定RGBA表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get rgbaPercent() {
        return "rgba-percent";
    }

    /**
     * 空白文字区切りHSL表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get spaceDelimitedHsl() {
        return "space-delimited-hsl";
    }

    /**
     * 空白文字区切りのアルファ値を含むHSL表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get spaceDelimitedHslAlpha() {
        return "space-delimited-hsl-alpha";
    }

    /**
     * WEBカラー表現の種類を取得します。
     * @return {String} 色表現の種類を返します。
     */
    static get webColor() {
        return "web-color";
    }
}

export { ColorExpressionType };