import { Converter } from "./parts/converter.js";
import { Hex } from "./parts/hex.js";
import { Rgb } from "./parts/rgb.js";
import { Rgba } from "./parts/rgba.js";
import { Hsl } from "./parts/hsl.js";
import { Hsla } from "./parts/hsla.js";
import { ColorName } from "./parts/color-name.js";

/**
 * 色表現を変換する処理を提供します。
 */
 class ColorExpressionConverter {

    /**
     * 色表現をヘックス表現に変換します。
     * @param {String} expression 色表現。RGB表現(例 : rgb(0, 0, 0))、RGBA表現(例 : rgba(0, 0, 0, 1.0))、
     *                            HSL表現(例 : hsl(0, 0, 0)、hsl(100%, 100%, 100%))、HSLA表現(例 : hsla(0, 0, 0, 1.0)、hsla(100%, 100%, 100%, 1.0))、
     *                            色名表現(例 : red、blue)を想定しています。
     * @returns {String} expression をHSL表現に変換したものを返します。
     */
    toHex (expression) {
        throw "not implemented.";
    }

    /**
     * RGB表現をヘックス表現に変換します。
     * @param {String} expression RGB表現(例 : rgb(0, 0, 0))を想定しています。
     * @returns {String} expression をヘックス表現に変換したものを返します。
     */
    rgbToHex (expression) {
        return Converter.execute(expression, Rgb, Hex);
    }

    /**
     * RGBA表現をヘックス表現に変換します。
     * @param {String} expression RGBA表現(例 : rgba(0, 0, 0, 1.0))を想定しています。
     * @returns {String} expression をヘックス表現に変換したものを返します。
     */
    rgbaToHex (expression) {
        return Converter.execute(expression, Rgba, Hex);
    }

    /**
     * HSL表現をヘックス表現に変換します。
     * @param {String} expression hsl表現(例 : hsl(0, 0, 0)、hsl(100%, 100%, 100%))を想定しています。
     * @returns {String} expression をヘックス表現に変換したものを返します。
     */
    hslToHex (expression) {
        return Converter.execute(expression, Hsl, Hex);
    }

    /**
     * HSLA表現をヘックス表現に変換します。
     * @param {String} expression HSLA表現(例 : hsla(0, 0, 0, 1.0)、hsla(100%, 100%, 100%, 1.0))を想定しています。
     * @returns {String} expression をヘックス表現に変換したものを返します。
     */
    hslaToHex (expression) {
        return Converter.execute(expression, Hsla, Hex);
    }

    /**
     * 色名表現をヘックス表現に変換します。
     * @param {String} expression 色名表現(例 : red、blue)を想定しています。
     * @returns {String} expression をヘックス表現に変換したものを返します。
     */
    colorNameToHex (expression) {
        return Converter.execute(expression, ColorName, Hex);
    }

    /**
     * 色表現をRGB表現に変換します。
     * @param {String} expression 色表現。ヘックス表現(例 : #000000、#000)、RGBA表現(例 : rgba(0, 0, 0, 1.0))、
     *                            HSL表現(例 : hsl(0, 0, 0)、hsl(100%, 100%, 100%))、HSLA表現(例 : hsla(0, 0, 0, 1.0)、hsla(100%, 100%, 100%, 1.0))、
     *                            色名表現(例 : red、blue)を想定しています。
     * @returns {String} expression をRGB表現に変換したものを返します。
     */
    toRgb (expression) {
        throw "not implemented.";
    }

    /**
     * ヘックス表現をRGB表現に変換します。
     * @param {String} expression ヘックス表現(例 : #000000、#000)を想定しています。
     * @returns {String} expression をRGB表現に変換したものを返します。
     */
    hexToRgb (expression) {
        return Converter.execute(expression, Hex, Rgb);
    }

    /**
     * RGBA表現をRGB表現に変換します。
     * @param {String} expression RGBA表現(例 : rgba(0, 0, 0, 1.0))を想定しています。
     * @returns {String} expression をRGB表現に変換したものを返します。
     */
    rgbaToRgb (expression) {
        return Converter.execute(expression, Rgba, Rgb);
    }

    /**
     * HSL表現をRGB表現に変換します。
     * @param {String} expression HSL表現(例 : hsl(0, 0, 0)、hsl(100%, 100%, 100%))を想定しています。
     * @returns {String} expression をRGB表現に変換したものを返します。
     */
    hslToRgb (expression) {
        return Converter.execute(expression, Hsl, Rgb);
    }

    /**
     * HSLA表現をRGB表現に変換します。
     * @param {String} expression HSLA表現(例 : hsla(0, 0, 0, 1.0)、hsla(100%, 100%, 100%, 1.0))を想定しています。
     * @returns {String} expression をRGB表現に変換したものを返します。
     */
    hslaToRgb (expression) {
        return Converter.execute(expression, Hsla, Rgb);
    }

    /**
     * 色名表現をRGB表現に変換します。
     * @param {String} expression 色名表現(例 : red、blue)を想定しています。
     * @returns {String} expression をRGB表現に変換したものを返します。
     */
    colorNameToRgb (expression) {
        return Converter.execute(expression, ColorName, Rgb);
    }

    /**
     * 色表現をRGBA表現に変換します。
     * @param {String} expression 色表現。ヘックス表現(例 : #000000、#000)、RGB表現(例 : rgb(0, 0, 0))、
     *                            HSL表現(例 : hsl(0, 0, 0)、hsl(100%, 100%, 100%))、HSLA表現(例 : hsla(0, 0, 0, 1.0)、hsla(100%, 100%, 100%, 1.0))、
     *                            色名表現(例 : red、blue)を想定しています。
     * @returns {String} expression をRGB表現に変換したものを返します。
     */
    toRgba (expression) {
        throw "not implemented.";
    }

    /**
     * ヘックス表現をRGBA表現に変換します。
     * @param {String} expression ヘックス表現(例 : #000000、#000)を想定しています。
     * @returns {String} expression をRGBA表現に変換したものを返します。
     */
    hexToRgba (expression) {
        return Converter.execute(expression, Hex, Rgba);
    }

    /**
     * RGB表現をRGBA表現に変換します。
     * @param {String} expression RGB表現(例 : rgb(0, 0, 0))を想定しています。
     * @returns {String} expression をRGBA表現に変換したものを返します。
     */
    rgbToRgba (expression) {
        return Converter.execute(expression, Rgb, Rgba);
    }

    /**
     * HSL表現をRGBA表現に変換します。
     * @param {String} expression HSL表現(例 : hsl(0, 0, 0)、hsl(100%, 100%, 100%))を想定しています。
     * @returns {String} expression をRGBA表現に変換したものを返します。
     */
    hslToRgba (expression) {
        return Converter.execute(expression, Hsl, Rgba);
    }

    /**
     * HSLA表現をRGBA表現に変換します。
     * @param {String} expression HSLA表現(例 : hsla(0, 0, 0, 1.0)、hsla(100%, 100%, 100%, 1.0))を想定しています。
     * @returns {String} expression をRGBA表現に変換したものを返します。
     */
    hslaToRgba (expression) {
        return Converter.execute(expression, Hsla, Rgba);
    }

    /**
     * 色名表現をRGBA表現に変換します。
     * @param {String} expression 色名表現(例 : red、blue)を想定しています。
     * @returns {String} expression をRGBA表現に変換したものを返します。
     */
    colorNameToRgba (expression) {
        return Converter.execute(expression, ColorName, Rgba);
    }

    /**
     * 色表現をHSL表現に変換します。
     * @param {String} expression 色表現。ヘックス表現(例 : #000000、#000)、RGB表現(例 : rgb(0, 0, 0))、RGBA表現(例 : rgba(0, 0, 0, 1.0))、
     *                            HSLA表現(例 : hsla(0, 0, 0, 1.0)、hsla(100%, 100%, 100%, 1.0))、
     *                            色名表現(例 : red、blue)を想定しています。
     * @returns {String} expression をHSL表現に変換したものを返します。
     */
    toHsl (expression) {
        throw "not implemented.";
    }

    /**
     * ヘックス表現をHSL表現に変換します。
     * @param {String} expression ヘックス表現(例 : #000000、#000)を想定しています。
     * @returns {String} expression をHSL表現に変換したものを返します。
     */
    hexToHsl (expression) {
        return Converter.execute(expression, Hex, Hsl);
    }

    /**
     * RGB表現をHSL表現に変換します。
     * @param {String} expression RGB表現(例 : rgb(0, 0, 0))を想定しています。
     * @returns {String} expression をHSL表現に変換したものを返します。
     */
    rgbToHsl (expression) {
        return Converter.execute(expression, Rgb, Hsl);
    }

    /**
     * RGBA表現をHSL表現に変換します。
     * @param {String} expression RGBA表現(例 : rgba(0, 0, 0, 1.0))を想定しています。
     * @returns {String} expression をHSL表現に変換したものを返します。
     */
    rgbaToHsl (expression) {
        return Converter.execute(expression, Rgba, Hsl);
    }

    /**
     * HSLA表現をHSL表現に変換します。
     * @param {String} expression HSLA表現(例 : hsla(0, 0, 0, 1.0)、hsla(100%, 100%, 100%, 1.0))を想定しています。
     * @returns {String} expression をHSL表現に変換したものを返します。
     */
    hslaToHsl (expression) {
        return Converter.execute(expression, Hsla, Hsl);
    }

    /**
     * 色名表現をHSL表現に変換します。
     * @param {String} expression 色名表現(例 : red、blue)を想定しています。
     * @returns {String} expression をHSL表現に変換したものを返します。
     */
    colorNameToHsl (expression) {
        return Converter.execute(expression, ColorName, Hsl);
    }

    /**
     * 色表現をHSLA表現に変換します。
     * @param {String} expression 色表現。ヘックス表現(例 : #000000、#000)、RGB表現(例 : rgb(0, 0, 0))、RGBA表現(例 : rgba(0, 0, 0, 1.0))、
     *                            HSL表現(例 : hsl(0, 0, 0)、hsl(100%, 100%, 100%))、
     *                            色名表現(例 : red、blue)を想定しています。
     * @returns {String} expression をHSL表現に変換したものを返します。
     */
    toHsla (expression) {
        throw "not implemented.";
    }

    /**
     * ヘックス表現をHSLA表現に変換します。
     * @param {String} expression ヘックス表現(例 : #000000、#000)を想定しています。
     * @returns {String} expression をHSLA表現に変換したものを返します。
     */
    hexToHsla (expression) {
        return Converter.execute(expression, Hex, Hsla);
    }

    /**
     * RGB表現をHSLA表現に変換します。
     * @param {String} expression RGB表現(例 : rgb(0, 0, 0))を想定しています。
     * @returns {String} expression をHSLA表現に変換したものを返します。
     */
    rgbToHsla (expression) {
        return Converter.execute(expression, Rgb, Hsla);
    }

    /**
     * RGBA表現をHSLA表現に変換します。
     * @param {String} expression RGBA表現(例 : rgba(0, 0, 0, 1.0))を想定しています。
     * @returns {String} expression をHSLA表現に変換したものを返します。
     */
    rgbaToHsla (expression) {
        return Converter.execute(expression, Rgba, Hsla);
    }

    /**
     * HSL表現をHSLA表現に変換します。
     * @param {String} expression hsl表現(例 : hsl(0, 0, 0)、hsl(100%, 100%, 100%))を想定しています。
     * @returns {String} expression をHSLA表現に変換したものを返します。
     */
    hslToHsla (expression) {
        return Converter.execute(expression, Hsl, Hsla);
    }

    /**
     * 色名表現をHSLA表現に変換します。
     * @param {String} expression 色名表現(例 : red、blue)を想定しています。
     * @returns {String} expression をHSLA表現に変換したものを返します。
     */
    colorNameToHsla (expression) {
        return Converter.execute(expression, ColorName, Hsla);
    }
}

// シングルトンとして提供
const instance = new ColorExpressionConverter();
export { instance as ColorExpressionConverter };
