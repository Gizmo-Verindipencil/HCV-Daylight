import { Color } from "../color";

/**
 * アルファ値を含むRGB表現の作成処理を提供します。
 */
class RgbAlphaCreator {
    /**
     * 色表現を作成します。
     * @param {Color} color 生成元の色情報。
     * @return {String} 色表現。
     */
    create(color) {
        return `rgb(${color.r},${color.g},${color.b},${color.a != null ? Math.round(color.a) : 100}%)`;
    }
}

export { RgbAlphaCreator };