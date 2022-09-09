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
}

export { Color };