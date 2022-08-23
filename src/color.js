/**
 * 色情報を提供します。
 */
class Color {
    /**
     * インスタンスを初期化します。
     * @param {Number} r レッド値。
     * @param {Number} g グリーン値。
     * @param {Number} b ブルー値
     * @param {Number} a アルファ値。
     */
     constructor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
}

export { Color };