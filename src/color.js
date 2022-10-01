/**
 * 色情報を提供します。
 */
class Color {
    /**
     * インスタンスを初期化します。
     * @param {Number} r レッド値(0-255)。
     * @param {Number} g グリーン値(0-255)。
     * @param {Number} b ブルー値(0-255)。
     * @param {Number} a アルファ値(0-100)。
     */
    constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    /**
     * RGB情報を取得します。
     * @returns {Array<Number>} rgbを配列で返します。
     */
    get rgb() {
        return [ this.r, this.g, this.b ];
    }

    /**
     * RGBA情報を取得します。
     * @returns {Array<Number>} rgbaを配列で返します。
     */
    get rgba() {
        return this.rgb.concat([ this.a ]);
    }
}

export { Color };